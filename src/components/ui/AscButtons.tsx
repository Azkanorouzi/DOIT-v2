import { Button } from "./button";
import { useSearchParams } from "react-router-dom";

export default function AscButtons() {
  const [searchParams, setSearchParams] = useSearchParams();

  let curDir = searchParams.get("dir");
  curDir = curDir === "dsc" || curDir === "asc" ? curDir : "asc";

  return (
    <Button
      className="uppercase"
      variant="secondary"
      onClick={() => {
        setSearchParams((searchParams) => {
          searchParams.set("dir", curDir === "asc" ? "dsc" : "asc");
          return searchParams;
        });
      }}
    >
      {curDir}
    </Button>
  );
}
