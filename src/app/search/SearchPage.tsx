import FiltersMenu from "./_components/FiltersMenu";
import FormWrapper from "./_components/FormWrapper";
import SearchBar from "./_components/SearchBar";

export default function SearchPage() {
  return (
    <main className="w-full h-full bg-orange-600 flex items-center justify-center">
      <FormWrapper>
        <form className="h-[80%] w-[80%] bg-white flex flex-row rounded-xl shadow-xl">
          <div className="w-1/4 border-r-2 border-slate-200">
            <FiltersMenu />
          </div>
          <SearchBar />
        </form>
      </FormWrapper>
    </main>
  );
}
