"use client";
import { SearchIcon } from "@/components/icons";
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete";

export const locations = [
  {
    place: "Pulchowk",
    coordinates: "akjdhsakjdhakdh",
  },
  {
    place: "Maitighar",
    coordinates: "adasdasddhakdh",
  },
];

export default function AutoCompleteSearch() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Autocomplete
        className="max-w-xs"
        selectorIcon={null}
        placeholder="Search Nearest Landmark"
        startContent={<SearchIcon />}
      >
        {locations.map((value, index) => (
          <AutocompleteItem key={index} textValue={value.place}>
            {value.place}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
}
