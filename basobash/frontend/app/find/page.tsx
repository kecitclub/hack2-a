<<<<<<< HEAD
import GeocodedMap from "@/components/geocodedmap";
=======
import GeocodedFindMap from "@/components/geocodedmap";
import { title } from "@/components/primitives";
import AutoCompleteSearch from "@/utils/AutoCompleteSearch";
>>>>>>> 6bba7fe6115c58a2bf3508f46d968c0dd4bf077e
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

export default function page() {
  return (
    <div className="w-[80vw] h-[50vh]">
      <h1 className={`text-3xl font-semibold`}>Find</h1>
      <div className="p-5">
        <GeocodedFindMap />
      </div>
    </div>
  );
}
