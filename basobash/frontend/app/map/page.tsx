"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

const GeocodedMap = dynamic(() => import("../../components/geocodedmap"), {
  ssr: false,
});

export default function Map() {
  return (
    <div className="h-screen">
      <GeocodedMap />
    </div>
  );
}
