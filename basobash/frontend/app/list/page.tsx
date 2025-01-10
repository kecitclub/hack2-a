import GeocodedListMap from "@/components/geocodedListMap";
export default function page() {
  return (
    <div className="min-w-[80%]">
      <h1 className={`text-3xl font-semibold`}>List</h1>
      <div className="p-5">
        <GeocodedListMap />
      </div>
    </div>
  );
}
