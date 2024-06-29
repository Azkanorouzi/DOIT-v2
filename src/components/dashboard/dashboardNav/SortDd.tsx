import DropDownComplete from "@/components/ui/DropDownComplete";
import { setRadioQueryParam } from "@/utils/setRadioQueryParam";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { FaSortAmountDown, FaSortAmountUp } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

export default function SortDd() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortValue = searchParams.get("sort") ?? "";
  const dir = searchParams.get("dir") ?? "dsc";

  return (
    <DropDownComplete
      title="Filter by"
      trigger={
        <button
          className={`flex gap-3 items-center justify-center hover:text-primary bg-secondary rounded-full p-2 ${sortValue.length ? "text-primary" : ""}`}
        >
          {dir === "dsc" ? <FaSortAmountDown /> : <FaSortAmountUp />}
        </button>
      }
    >
      <DropdownMenuRadioGroup
        value={sortValue}
        onValueChange={setRadioQueryParam({
          type: "sort",
          setSearchParams,
          oldValue: sortValue,
        })}
      >
        <DropdownMenuRadioItem
          value="priority"
          className={`${sortValue === "priority" && "text-primary"}`}
        >
          {" "}
          Priority
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="deadline"
          className={`${sortValue === "deadline" && "text-primary"}`}
        >
          Deadline
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="status"
          className={`${sortValue === "status" && "text-primary"}`}
        >
          Status
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropDownComplete>
  );
}
