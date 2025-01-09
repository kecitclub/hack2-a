"use client";
// _components/MapWithGeocoder.js
import { MapContainer, TileLayer, Marker, useMap, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-control-geocoder";

// Function to get user's current latitude and longitude
const getCurrentLatLong = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
          resolve([lat, long]);
        },
        (error) => {
          console.error("Geolocation error:", error);
          resolve([40.7128, -74.006]); // Default to NYC
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      resolve([40.7128, -74.006]); // Default to NYC
    }
  });
};

// Geocoder Component
const Geocoder = ({ currentPosition }) => {
  const map = useMap();

  useEffect(() => {
    const geocoder = L.Control.Geocoder.nominatim();
    const control = L.Control.geocoder({
      geocoder,
      collapsed: false,
    }).addTo(map);

    control.markGeocode = function (result) {
      const latlng = result.center;
      map.setView(latlng, map.getZoom());
      L.marker(latlng)
        .addTo(map)
        .bindPopup(result.name || "Location")
        .openPopup();
    };

    return () => {
      map.removeControl(control);
    };
  }, [map, currentPosition]);

  return null;
};

// Fix for Leaflet's icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

// Main Map Component
const GeocodedMap = () => {
  const [position, setPosition] = useState([27.7103, 85.3222]); // Default to London initially

  useEffect(() => {
    const fetchPosition = async () => {
      const userPosition = await getCurrentLatLong();
      console.log(userPosition);
      setPosition(userPosition);
    };

    fetchPosition();
  }, []);

  // Pan map to user location when position is updated
  const PanToLocation = () => {
    const map = useMap();

    useEffect(() => {
      if (position) {
        map.panTo(position);
      }
    }, [map, position]);

    return null;
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Leaflet Map */}
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Current Location</Popup>
        </Marker>
        <Geocoder currentPosition={position} />
        <PanToLocation />
      </MapContainer>
    </div>
  );
};

export default GeocodedMap;
