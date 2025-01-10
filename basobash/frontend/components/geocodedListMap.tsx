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

interface MarkerType {
  lat: number;
  lng: number;
}

const GeocodedListMap = () => {
  const [marker, setMarker] = useState<MarkerType | null>(null);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Feature[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<MarkerType | null>(
    null
  );
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
    <div className="h-[500px] w-full flex flex-col justify-center items-center relative">
      {/* Search input with autocomplete - improved spacing and z-index */}

      <div className="flex flex-row gap-10 h-full w-full">
        <div className="flex flex-row h-full w-full">
          {/* Map container - added border and shadow */}
          <div
            className={`flex-grow transition-all duration-300 rounded-lg overflow-hidden shadow-lg ${
              showListForm ? "w-1/2" : "w-full"
            }`}
          >
            <MapContainer
              center={[27.7172, 85.324]}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
              className="z-10"
            >
              <div className="absolute top-4 left-0 right-0 px-4 z-[1000]">
                <div className="relative w-full max-w-sm mx-auto">
                  <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for a location..."
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  />
                  {suggestions.length > 0 && (
                    <ul className="absolute z-[1001] w-full bg-white shadow-xl rounded-lg mt-1 max-h-60 overflow-y-auto border border-gray-200">
                      {suggestions.map((feature, index) => (
                        <button
                          key={index}
                          className="w-full p-3 text-left hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0"
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

          {/* ListForm - improved border styling */}
        </div>
        {showListForm && (
          <div className="w-1/2 h-full p-4 bg-white border-l border-gray-200 overflow-y-auto shadow-inner">
            <ListForm marker={marker} />
          </div>
        )}
      </div>
      {/* Save button - improved positioning and styling */}
      <div className="absolute bottom-5 left-5 z-[1000]">
        <button
          onClick={handleSaveToDB}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-200"
        >
          {showListForm ? "Hide Form" : "Add Location"}
        </button>
      </div>
    </div>
  );
};

export default GeocodedListMap;
