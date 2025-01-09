import { title } from "@/components/primitives";
import AutoCompleteSearch from "@/utils/AutoCompleteSearch";

export default function page() {
  return (
    <div>
      <h1 className={title()}>Find</h1>
      <div className="p-10">
        <AutoCompleteSearch />
      </div>
    </div>
  );
}
