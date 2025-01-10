import AutoCompleteSearch from "@/utils/AutoCompleteSearch";

export default function page() {
  return (
    <div>
      <h1 className={`text-3xl font-semibold`}>List</h1>
      <div className="p-5">
        <AutoCompleteSearch />
      </div>
    </div>
  );
}
