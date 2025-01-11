"use client";
import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Circle,
} from "react-leaflet";
import { useEffect, useState } from "react";
import Image from "next/image";
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
  description: string;
  price: number;
  images: string[];
  latitude: number;
  longitude: number;
  location: string;
  roommate: boolean;
  bedrooms: number;
  bathrooms: number;
  kitchen: number;
}

// Add this near the top of the file, after the default icon configuration
const searchResultIcon = new L.Icon({
  iconUrl: "/marker-icon-red.png",
  iconRetinaUrl: "/marker-icon-2x-red.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
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
        className="relative w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out hover:shadow-lg"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-[60] text-black text-left bg-white w-full shadow-lg rounded-lg mt-1 max-h-60 overflow-y-auto">
          {suggestions.map((feature, index) => (
            <button
              key={index}
              className="p-2 text-left hover:bg-gray-200 cursor-pointer z-20 transition duration-200 ease-in-out"
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
      <Popup className="bg-white shadow-lg rounded-lg p-3">
        {location.name}
        <span className="block mt-2 text-sm text-gray-500">
          {location.lat}, {location.lon}
        </span>
      </Popup>
    </Marker>
  ) : null;
};

// Update InitialLocationSetter to pass location to parent
const InitialLocationSetter = ({
  onLocationFound,
  trigger,
}: {
  onLocationFound: (location: Location) => void;
  trigger: number;
}) => {
  const map = useMap();

  useEffect(() => {
    if (trigger > 0) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.flyTo([latitude, longitude], 16);
          onLocationFound({
            lat: latitude,
            lon: longitude,
            name: "Current Location",
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, [map, onLocationFound, trigger]);

  return null;
};

function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const GeocodedMap = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const [properties, setProperties] = useState<Property[]>([]);
  const [radius, setRadius] = useState<number>(1);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [locationTrigger, setLocationTrigger] = useState(0);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/properties");
        const data = await response.json();
        console.log(data);
        if (Array.isArray(data)) {
          setProperties(data);
        } else {
          console.error("Received invalid data format:", data);
          setProperties([]);
        }
      } catch (error) {
        console.error("Error fetching properties:", error);
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

  const filteredProperties = properties.filter((property) => {
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
        <div className="w-full flex gap-2 justify-center">
          <SearchBarWithAutocomplete onLocationSelected={handleLocationSelected} />
          <button
            onClick={() => setLocationTrigger((prev) => prev + 1)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Check My Location
          </button>
        </div>

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

      <div className="h-[500px] flex flex-row gap-4">
        <div className="z-10 h-full w-2/3">
          <MapContainer
            center={[27.71, 85.32]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
          >
            <SearchBarWithAutocomplete onLocationSelected={handleLocationSelected} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <InitialLocationSetter
              onLocationFound={handleLocationFound}
              trigger={locationTrigger}
            />
            {selectedLocation && (
              <>
                <PanAndMarker location={selectedLocation} />
                <Circle
                  center={[selectedLocation.lat, selectedLocation.lon]}
                  radius={radius * 1000}
                  pathOptions={{
                    color: "blue",
                    fillColor: "blue",
                    fillOpacity: 0.1,
                  }}
                />
              </>
            )}

            {filteredProperties.map((property) => (
              <Marker
                key={property._id}
                position={[property.latitude, property.longitude]}
                eventHandlers={{
                  click: () => setSelectedProperty(property),
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

        <div className="w-1/3 h-full">
          {selectedProperty ? (
            // When a property is selected:
            <div className="h-full flex flex-col gap-4">
              {/* Dropdown for property list when property is selected */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full p-3 bg-white border border-gray-300 rounded-lg shadow-sm flex justify-between items-center"
                >
                  <span>
                    {selectedLocation
                      ? `Properties within ${radius}km radius`
                      : "All Properties"}{" "}
                    ({filteredProperties.length})
                  </span>
                  <span
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-50 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-[400px] overflow-y-auto">
                    {filteredProperties.map((property) => (
                      <div
                        key={property._id}
                        className={`p-4 border-b last:border-b-0 cursor-pointer hover:bg-gray-50 ${
                          selectedProperty._id === property._id
                            ? "bg-blue-50"
                            : ""
                        }`}
                        onClick={() => {
                          setSelectedProperty(property);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <h3 className="font-bold text-lg">{property.title}</h3>
                        <p className="text-gray-600">{property.location}</p>
                        <p className="font-semibold mt-2">
                          Rs. {property.price}
                        </p>
                        {selectedLocation && (
                          <p className="text-sm text-gray-500 mt-1">
                            Distance:{" "}
                            {calculateDistance(
                              selectedLocation.lat,
                              selectedLocation.lon,
                              property.latitude,
                              property.longitude
                            ).toFixed(2)}{" "}
                            km
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Selected Property Details */}
              <div className="flex-1 bg-white border-2 border-gray-200 rounded-md p-4 overflow-y-auto transition duration-200 ease-in-out hover:shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {selectedProperty.title}
                  </h2>
                  <button
                    onClick={() => setSelectedProperty(null)}
                    className="text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out px-2 py-1 rounded"
                  >
                    ×
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="text-lg">
                    Location: {selectedProperty.location}
                  </p>
                  <p className="text-xl font-semibold">
                    Price: Rs{selectedProperty.price}
                  </p>
                  <Image
                  src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/d9/2b/0d/homestay-nepal.jpg?w=700&h=-1&s=1"
                  alt="property"
                  height={300}
                  width={200}
                />
                <p className="text-lg">
                  Location: {selectedProperty.location}
                </p>
                <p className="text-xl font-semibold">
                  Price: Rs{selectedProperty.price}
                </p>
                <p className="text-xl font-semibold">Roommate: True</p>
                <p className="text-xl font-semibold">
                  No. of kitchen: {selectedProperty.kitchen}
                </p>
                <p className="text-xl font-semibold">
                  No. of bedroom: {selectedProperty.bedrooms}
                </p>
                <p className="text-xl font-semibold">
                  No. of bathroom: {selectedProperty.bathrooms}
                </p>
                  {selectedLocation && (
                    <p className="text-sm text-gray-500">
                      Distance:{" "}
                      {calculateDistance(
                        selectedLocation.lat,
                        selectedLocation.lon,
                        selectedProperty.latitude,
                        selectedProperty.longitude
                      ).toFixed(2)}{" "}
                      km
                    </p>
                  )}
                </div>
              </div>

             
            </div>
          ) : (
            // When no property is selected:
            <div className="h-full overflow-y-auto bg-white border-2 border-gray-200 rounded-md p-4">
              <h2 className="text-xl font-bold mb-4">
                {selectedLocation
                  ? `Properties within ${radius}km radius`
                  : "All Properties"}{" "}
                ({filteredProperties.length})
              </h2>
              <div className="space-y-4">
                {filteredProperties.map((property) => (
                  <div
                    key={property._id}
                    className="p-4 border rounded-lg cursor-pointer transition-all border-gray-200 hover:border-blue-300"
                    onClick={() => setSelectedProperty(property)}
                  >
                    <h3 className="font-bold text-lg">{property.title}</h3>
                    <div className="space-y-4">
               
              </div>
                    {selectedLocation && (
                      <p className="text-sm text-gray-500 mt-1">
                        Distance:{" "}
                        {calculateDistance(
                          selectedLocation.lat,
                          selectedLocation.lon,
                          property.latitude,
                          property.longitude
                        ).toFixed(2)}{" "}
                        km
                      </p>
                    )}
                  </div>
                ))}
                {filteredProperties.length === 0 && (
                  <p className="text-gray-500 text-center py-4">
                    No properties found in this area
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GeocodedMap;
