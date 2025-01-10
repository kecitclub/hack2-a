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

const GEOAPIFY_API_KEY = "1f3eec48fa604cf7b262e4d4ba1d004c";

delete L.Icon.Default.prototype._getIconUrl;

// Define custom icon
const customIcon = new L.Icon({
  iconUrl: "/marker-green-bolt.png", // Replace with your custom marker image path
  iconSize: [32, 32], // Adjust size as needed
  iconAnchor: [16, 32], // Anchor point of the icon
  popupAnchor: [0, -32], // Position of popup relative to the icon
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

  const handleSaveToDB = (desiredLocation) => {
    console.log("Saving markers to database:", markers);
    console.log(desiredLocation);
    alert(`Markers saved to database at ${desiredLocation}.`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a location to pan"
        onKeyDown={(e) => {
          if (e.key === "Enter") fetchGeocodedLocation(e.target.value);
        }}
        style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
      />
      <MapContainer
        center={[27.7172, 85.324]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
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
      <button onClick={handleSaveToDB} style={{ marginTop: "10px" }}>
        Save Markers to Database
      </button>
    </div>
  );
};

export default GeocodedListMap;
