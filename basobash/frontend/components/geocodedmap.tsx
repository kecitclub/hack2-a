"use client";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from "react-leaflet";
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

interface Property {
  _id: string;
  title: string;
  price: number;
  coordinates: {
    lat: number;
    lon: number;
  };
  location: string;
}

// Add this near the top of the file, after the default icon configuration
const searchResultIcon = new L.Icon({
  iconUrl: '/marker-icon-red.png',
  iconRetinaUrl: '/marker-icon-2x-red.png',
  shadowUrl: '/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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
    <div className="relative w-full justify-center mx-auto z-50">
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
    <Marker position={[location.lat, location.lon]} icon={searchResultIcon}>
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

// Update InitialLocationSetter to pass location to parent
const InitialLocationSetter = ({ onLocationFound }: { onLocationFound: (location: Location) => void }) => {
  const map = useMap();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        map.flyTo([latitude, longitude], 16);
        // Create location object and pass it up
        onLocationFound({
          lat: latitude,
          lon: longitude,
          name: "Current Location"
        });
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, [map, onLocationFound]);

  return null;
};

function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

const GeocodedMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [radius, setRadius] = useState<number>(1);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/properties');
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setProperties(data);
        } else {
          console.error('Received invalid data format:', data);
          setProperties([]);
        }
      } catch (error) {
        console.error('Error fetching properties:', error);
        setProperties([]);
      }
    };

    fetchProperties();
  }, []);

  const handleLocationSelected = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleLocationFound = (location: Location) => {
    setSelectedLocation(location);
  };

  const filteredProperties = properties.filter(property => {
    if (!selectedLocation) return true;
    
    const distance = calculateDistance(
      selectedLocation.lat,
      selectedLocation.lon,
      property.latitude,
      property.longitude
    );
    return distance <= radius;
  });

  return (
    <>
      <div className="flex flex-col items-center w-full py-5 gap-4">
        <SearchBarWithAutocomplete onLocationSelected={handleLocationSelected} />
        
        <div className="w-full max-w-md flex flex-col items-center gap-2">
          <label htmlFor="radius" className="text-sm font-medium">
            Search Radius: {radius.toFixed(1)} km
          </label>
          <input
            type="range"
            id="radius"
            min="0.2"
            max="5"
            step="0.2"
            value={radius}
            onChange={(e) => setRadius(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="h-[500px] flex flex-row gap-10">
        <div className={`z-10 h-full transition-all duration-300 ${selectedProperty ? 'w-1/2' : 'w-full'}`}>
          <MapContainer
            center={[27.71, 85.32]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <InitialLocationSetter onLocationFound={handleLocationFound} />
            {selectedLocation && (
              <>
                <PanAndMarker location={selectedLocation} />
                <Circle
                  center={[selectedLocation.lat, selectedLocation.lon]}
                  radius={radius * 1000}
                  pathOptions={{ color: 'blue', fillColor: 'blue', fillOpacity: 0.1 }}
                />
              </>
            )}
            
            {filteredProperties.map((property) => (
              <Marker
                key={property._id}
                position={[property.latitude, property.longitude]}
                eventHandlers={{
                  click: () => setSelectedProperty(property)
                }}
              >
                <Popup>
                  <h3 className="font-bold">{property.title}</h3>
                  <p>{property.location}</p>
                  <p className="font-semibold">Price: Rs{property.price}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {selectedProperty && (
          <div className="w-1/2 h-full p-4 bg-white border-2 shadow-md border-gray-200 rounded-md overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold">{selectedProperty.title}</h2>
              <button 
                onClick={() => setSelectedProperty(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-lg">Location: {selectedProperty.location}</p>
              <p className="text-xl font-semibold">Price: Rs{selectedProperty.price}</p>
              {/* Add more property details here as needed */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GeocodedMap;
