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

    // Override markGeocode to sort results by distance
    control.markGeocode = function (result) {
      const latlng = result.center;
      map.setView(latlng, map.getZoom());
      L.marker(latlng).addTo(map).bindPopup(result.name).openPopup();
    };

    const originalQuery = geocoder.geocode;
    geocoder.geocode = function (query, cb, context) {
      originalQuery.call(
        this,
        query,
        (results) => {
          if (currentPosition) {
            // Sort results by distance from currentPosition
            results.sort((a, b) => {
              const distA = map.distance(
                L.latLng(currentPosition),
                L.latLng(a.center)
              );
              const distB = map.distance(
                L.latLng(currentPosition),
                L.latLng(b.center)
              );
              return distA - distB;
            });
          }
          cb.call(context, results);
        },
        context
      );
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
  const [position, setPosition] = useState([51.505, -0.09]); // Default to London initially

  useEffect(() => {
    const fetchPosition = async () => {
      const userPosition = await getCurrentLatLong();
      setPosition(userPosition);
    };

    fetchPosition();
  }, []);

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
      </MapContainer>
    </div>
  );
};

export default GeocodedMap;
