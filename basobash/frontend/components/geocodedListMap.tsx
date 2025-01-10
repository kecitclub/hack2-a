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
import dynamic from "next/dynamic";

const GEOAPIFY_API_KEY = "1f3eec48fa604cf7b262e4d4ba1d004c";

// Fix for Leaflet's default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Update customIcon definition to use absolute paths
const customIcon = new L.Icon({
  iconUrl: "/leaflet/dist/images/marker-icon.png",
  iconRetinaUrl: "/leaflet/dist/images/marker-icon-2x.png",
  shadowUrl: "/leaflet/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const GeocodedListMap = () => {
  const [markers, setMarkers] = useState([]);
  const [desiredLocation, setDesiredLocation] = useState(null);

  const AddMarker = () => {
    const map = useMap();
    useMapEvents({
      dblclick: (e) => {
        const { lat, lng } = e.latlng;
        setMarkers([...markers, { lat, lng }]);
      },
    });

    useEffect(() => {
      if (desiredLocation) {
        const { lat, lng } = desiredLocation;
        map.flyTo([lat, lng], 13, { animate: true });
      }
    }, [desiredLocation, map]);

    return null;
  };

  const fetchGeocodedLocation = async (query) => {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(query)}&apiKey=${GEOAPIFY_API_KEY}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.features && data.features.length > 0) {
        const { lat, lon } = data.features[0].geometry.coordinates;
        setDesiredLocation({ lat, lng: lon });
      }
    } catch (error) {
      console.error("Error fetching geocoded location:", error);
    }
  };

  const handleSaveToDB = () => {
    console.log("Saving markers to database:", markers);
    alert(`Markers saved to database.`);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-start">
      {/* Search input with styling */}
      <div className="absolute top-5 left-5 w-3/4 md:w-1/2 z-50">
        <input
          type="text"
          placeholder="Enter a location to pan"
          onKeyDown={(e) => {
            if (e.key === "Enter") fetchGeocodedLocation(e.target.value);
          }}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Map container */}
      <div className="w-full z-10 h-full">
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
          {markers.map((marker, index) => (
            <Marker
              key={index}
              icon={customIcon}
              position={[marker.lat, marker.lng]}
            >
              <Popup>
                Marker at {marker.lat}, {marker.lng}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Save button */}
      <div className="absolute bottom-5 left-5 z-50">
        <button 
          onClick={handleSaveToDB}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
        >
          Save Markers to Database
        </button>
      </div>
    </div>
  );
};

export default GeocodedListMap;
