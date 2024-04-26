import { generationList, typeList } from "@/utils/json-data/generationList";
import FilterGeneration from "./FilterGeneration";
import FilterType from "./FilterType";

export default function FiltersMenu() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <h1>Filters</h1>

      <FilterGeneration options={generationList} />

      <FilterType options={typeList} />
    </div>
  );
}
