"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default icon paths
L.Icon.Default.imagePath = "/";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "marker-icon-2x.png",
  iconUrl: "marker-icon.png",
  shadowUrl: "marker-shadow.png",
});

const GEOAPIFY_API_KEY = "1f3eec48fa604cf7b262e4d4ba1d004c";

interface Location {
  lat: number;
  lon: number;
  name: string;
}

interface Feature {
  geometry: { coordinates: [number, number] };
  properties: { formatted: string };
}

// Search Bar with Geoapify Autocomplete
const SearchBarWithAutocomplete = ({
  onLocationSelected,
}: {
  onLocationSelected: (location: Location) => void;
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Feature[]>([]);

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
    onLocationSelected({ lat, lon, name: feature.properties.formatted });
    setSuggestions([]);
    setQuery(feature.properties.formatted);
  };

  return (
    <div className="relative w-full max-w-md mx-auto z-50">
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
              className="p-2 text-left hover:bg-gray-100 cursor-pointer z-20"
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
  );
};

// Map Component to Pan and Update Marker
const PanAndMarker = ({ location }: { location: Location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      map.flyTo([lat, lon], 17, { animate: true });
    }
  }, [map, location]);

  return location ? (
    <Marker position={[location.lat, location.lon]}>
      <Popup>
        {location.name}
        <span className="block mt-2">
          {location.lat}
          {location.lon}{" "}
        </span>
      </Popup>
    </Marker>
  ) : null;
};

const GeocodedMap = () => {
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleLocationSelected = (location: Location) => {
    setSelectedLocation(location);
    setMapVisible(true);
  };

  return (
    <>
      <div className="flex justify-center w-full py-5">
        <SearchBarWithAutocomplete
          onLocationSelected={handleLocationSelected}
        />
      </div>
      <div className="h-[500px] flex flex-col items-center justify-start">
        {/* Search Bar */}

        {/* Map */}
        {mapVisible && selectedLocation && (
          <div className="w-full z-10 h-full">
            <MapContainer
              center={[selectedLocation.lat, selectedLocation.lon]}
              zoom={16}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <PanAndMarker location={selectedLocation} />
            </MapContainer>
          </div>
        )}
      </div>
    </>
  );
};

export default GeocodedMap;
