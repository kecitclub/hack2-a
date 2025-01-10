import GeocodedListMap from "@/components/geocodedListMap";
export default function page() {
  return (
    <div>
      <h1 className={`text-3xl font-semibold`}>List</h1>
      <div className="p-5">
        <GeocodedListMap />
      </div>
    </div>
  );
}
