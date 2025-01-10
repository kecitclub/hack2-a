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
  const [marker, setMarker] = useState<{ lat: number; lng: number } | null>(null); // Correct type for marker state
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Feature[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<{ lat: number; lng: number } | null>(null); // Correct type for selectedLocation state
  const [showListForm, setShowListForm] = useState(false);

  const AddMarker = () => {
    const map = useMap();
    useMapEvents({
      dblclick: (e) => {
        const { lat, lng } = e.latlng;
        setMarker({ lat, lng });
      },
    });

    // Add effect to handle flying to selected location
    useEffect(() => {
      if (selectedLocation) {
        map.flyTo([selectedLocation.lat, selectedLocation.lng], 13, {
          animate: true
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
      setShowListForm(true);
    } else {
      alert("Please add a marker before saving.");
    }
  };

  return (
    <div className="h-[70vh] flex flex-col items-center justify-start">
      {/* Search input with autocomplete */}
      <div className="flex justify-center w-full py-5 z-50">
        <div className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a location..."
            className="relative w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {suggestions.length > 0 && (
            <ul className="absolute z-[60] text-black text-left bg-white w-full shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
              {suggestions.map((feature, index) => (
                <button
                  key={index}
                  className="w-full p-2 text-left hover:bg-gray-100 cursor-pointer z-20"
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
      <div className="flex h-full flex-row">
        {/* Map container */}
        <div className={`w-${showListForm ? '[45vw]' : '[90vw]'} z-10 h-full`}>
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

        {/* ListForm - Only show when showListForm is true */}
        {showListForm && (
          <div className="w-[45vw] z-10 h-full">
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
          {showListForm ? 'Hide Form' : 'Add Location'}
        </button>
      </div>
    </div>
  );
};

export default GeocodedListMap;
