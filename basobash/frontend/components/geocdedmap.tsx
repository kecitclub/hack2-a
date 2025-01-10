"use client";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";


// Dynamically import the MapContainer and related components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Add custom icon definition at the top level
const customIcon = L.icon({
  iconUrl: "/leaflet/dist/images/marker-icon.png",
  iconRetinaUrl: "/leaflet/dist/images/marker-icon-2x.png",
  shadowUrl: "/leaflet/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const GEOAPIFY_API_KEY = "1f3eec48fa604cf7b262e4d4ba1d004c";

// Search Bar with Geoapify Autocomplete
const SearchBarWithAutocomplete = ({ onLocationSelected }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (searchText) => {
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

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    fetchSuggestions(e.target.value);
  };

  const handleSuggestionClick = (feature) => {
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
        className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-50 text-black bg-white w-full shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((feature, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSuggestionClick(feature)}
            >
              {feature.properties.formatted}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Map Component to Pan and Update Marker
const PanAndMarker = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      const { lat, lon } = location;
      map.flyTo([lat, lon], 17, { animate: true });
    }
  }, [map, location]);

  return location ? (
    <Marker 
      position={[location.lat, location.lon]}
      icon={customIcon}
    >
      <Popup>{location.name}</Popup>
    </Marker>
  ) : null;
};

// Main Geocoded Map Component
const GeocodedFindMap = () => {
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelected = (location) => {
    setSelectedLocation(location);
    setMapVisible(true);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start">
      {/* Search Bar */}
      <div className="absolute top-5 left-5 w-3/4 md:w-1/2">
        <SearchBarWithAutocomplete
          onLocationSelected={handleLocationSelected}
        />
      </div>

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
  );
};

export default GeocodedFindMap;
