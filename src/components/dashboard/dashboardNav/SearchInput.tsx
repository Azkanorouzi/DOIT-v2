import { Input } from "@/components/ui/input";
import { useSearchParams } from "react-router-dom";

export default function SearchInput() {
  const [searchParam, setSearchParam] = useSearchParams();
  const searchValue = searchParam.get("search") ?? "";
  return (
    <Input
      value={searchValue}
      onChange={(e) => {
        setSearchParam((searchParam) => {
          searchParam.set("search", e.target.value);
          if (!e?.target?.value?.length) searchParam.delete("search");
          return searchParam;
        });
      }}
      type="search"
      placeholder="search for item"
      className="p-1 rounded-sm w-[150px]"
    />
  );
}
