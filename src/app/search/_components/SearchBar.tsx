export default function SearchBar() {
  return (
    <div className="w-3/4 flex justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search"
        className="h-12 bg-white text-black placeholder:text-slate-500 w-3/5 focus:outline-none px-4 text-2xl shadow-lg my-4"
      />
    </div>
  );
}
