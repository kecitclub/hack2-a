import { title, subtitle } from "@/components/primitives";
import AutoCompleteSearch from "@/utils/AutoCompleteSearch";

export default function page() {
  return (
    <div>
      <h1 className={`text-3xl font-semibold`}>List</h1>
      <div className="p-10">
        <AutoCompleteSearch />
      </div>
    </div>
  );
}
