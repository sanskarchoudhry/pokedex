import { typeList } from "@/utils/json-data/generationList";
import React from "react";

export default function FilterGeneration({
  options,
}: {
  options:
    | {
        name: string;
        id: string;
      }[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3>Generation</h3>
      <fieldset className="flex flex-wrap gap-2">
        {options.map((option, key) => {
          return (
            <div key={key} className="flex gap-1 w-32">
              <input
                type="checkbox"
                id={option.id}
                name="generation"
                value={option.id}
              />
              <label htmlFor={option.id}>{option.name}</label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
}
