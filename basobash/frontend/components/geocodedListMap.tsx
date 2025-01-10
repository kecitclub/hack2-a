"use client";
import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import ListForm from "./listForm";

const GEOAPIFY_API_KEY = "1f3eec48fa604cf7b262e4d4ba1d004c";

// Fix for Leaflet's default icon
L.Icon.Default.imagePath = "/";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "marker-icon-2x.png",
  iconUrl: "marker-icon.png",
  shadowUrl: "marker-shadow.png",
});

interface Location {
  lat: number;
  lon: number;
  name: string;
}

interface Feature {
  geometry: { coordinates: [number, number] };
  properties: { formatted: string };
}

const GeocodedListMap = () => {
  const [marker, setMarker] = useState(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Feature[]>([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [showListForm, setShowListForm] = useState(false);

  const AddMarker = () => {
    const map = useMap();
    useMapEvents({
      dblclick: (e) => {
        const { lat, lng } = e.latlng;
        setMarker({ lat, lng });
      },
    });

    useEffect(() => {
      if (selectedLocation) {
        map.flyTo([selectedLocation.lat, selectedLocation.lng], 13, {
          animate: true,
        });
      }
    }, [map, selectedLocation]);

    return null;
  };

  const fetchSuggestions = async (searchText: string) => {
    if (!searchText) {
      setSuggestions([]);
      return;
    }
    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
      searchText
    )}&apiKey=${GEOAPIFY_API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setSuggestions(data.features || []);
    } catch (error) {
      console.error("Error fetching Geoapify suggestions:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const handleSuggestionClick = (feature: Feature) => {
    const [lon, lat] = feature.geometry.coordinates;
    const newLocation = { lat, lng: lon };
    setMarker(newLocation);
    setSelectedLocation(newLocation);
    setSuggestions([]);
    setQuery(feature.properties.formatted);
  };

  const handleSaveToDB = () => {
    if (marker) {
      setShowListForm((prev) => !prev);
    } else {
      alert("Please add a marker before saving.");
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {/* Search input with autocomplete */}
      <div className="flex justify-center py-4 z-50">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a location..."
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-[60] text-black text-left bg-white w-full shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
              {suggestions.map((feature, index) => (
                <button
                  key={index}
                  className="w-full p-2 text-left hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSuggestionClick(feature)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && handleSuggestionClick(feature)
                  }
                  tabIndex={0}
                >
                  {feature.properties.formatted}
                </button>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-row h-full w-full">
        {/* Map container */}
        <div
          className={`flex-grow transition-all duration-300 ${
            showListForm ? "w-2/3" : "w-full"
          }`}
        >
          <MapContainer
            center={[27.7172, 85.324]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <AddMarker />
            {marker && (
              <Marker position={[marker.lat, marker.lng]}>
                <Popup>
                  Marker at {marker.lat}, {marker.lng}
                </Popup>
              </Marker>
            )}
          </MapContainer>
        </div>

        {/* ListForm */}
        {showListForm && (
          <div className="w-1/3 h-full p-4 bg-gray-100 border-l border-gray-300 overflow-y-auto">
            <ListForm marker={marker} />
          </div>
        )}
      </div>
      {/* Save button */}
      <div className="absolute bottom-5 left-5 z-50">
        <button
          onClick={handleSaveToDB}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          {showListForm ? "Hide Form" : "Add Location"}
        </button>
      </div>
    </div>
  );
};

export default GeocodedListMap;
