"use client";
import { useFormContext } from "react-hook-form";

export default function FilterType({ options }: { options: string[] }) {
  const methods = useFormContext();
  const variable = methods.watch("type");
  console.log(variable);
  return (
    <div className="flex flex-col gap-2">
      <h3>Type</h3>
      <fieldset className="flex flex-wrap gap-2">
        {options.map((option, key) => {
          return (
            <div key={key} className="flex gap-1 w-18">
              <input
                type="radio"
                id={option}
                value={option}
                {...methods.register("type")}
              />
              <label htmlFor={option}>{option}</label>
            </div>
          );
        })}
      </fieldset>
    </div>
  );
}
