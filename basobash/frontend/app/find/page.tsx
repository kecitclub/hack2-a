import { title } from "@/components/primitives";
import AutoCompleteSearch from "@/utils/AutoCompleteSearch";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import GeocodedMap from "@/components/geocodedmap";

export default function page() {
  return (
    <div className="w-[80vw] h-[50vh]">
      <h1 className={`text-3xl font-semibold`}>Find</h1>
      <div className="p-5">
        <GeocodedMap />
      </div>
    </div>
  );
}
