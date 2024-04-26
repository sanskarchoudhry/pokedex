"use client";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useFormContext } from "react-hook-form";
export default function SearchBar() {
  const methods = useFormContext();
  return (
    <div className="w-3/4 flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <input
        type="text"
        {...methods.register("search")}
        placeholder="Search"
        className="h-12 bg-white text-black w-80 placeholder:text-slate-500 focus:outline-none px-4 text-2xl shadow-lg my-4"
      />
      <button className="h-12 bg-slate-950 text-white text-2xl my-4 shadow-lg px-2 border-4 border-white">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}
