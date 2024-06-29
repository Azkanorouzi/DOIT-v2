import { Button } from "@/components/ui/button";
import { BsFillGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { FaSquare } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

export default function LayoutChangeButton() {
  const [searchParams, setSearchParams] = useSearchParams();
  const col = searchParams.get("col") ?? "1";
  return (
    <Button
      className="w-10 h-10 rounded-tl-full rounded-b-full flex items-center justify-center bg-primary border-secondary border-2 hover:bg-secondary hover:text-primary"
      onClick={() => {
        setSearchParams((searchParams) => {
          searchParams.set("col", String(+col < 3 ? Number(col) + 1 : 1));
          return searchParams;
        });
      }}
    >
      {+col === 1 && <FaSquare className="scale-[4]" />}

      {+col === 2 && <BsFillGridFill className="scale-[4]" />}

      {+col === 3 && <BsFillGrid3X3GapFill className="scale-[4]" />}
    </Button>
  );
}
