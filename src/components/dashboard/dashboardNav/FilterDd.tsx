import DropDownComplete from "@/components/ui/DropDownComplete";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { setRadioQueryParam } from "@/utils/setRadioQueryParam";
import { FaFilter } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";
export function FilterDd() {
  const [searchParams, setSearchParams] = useSearchParams();
  const statusValue = searchParams.get("status") ?? "";
  const priorityValue = searchParams.get("priority") ?? "";
  const createdByValue = searchParams.get("createdBy") ?? "";
  return (
    <DropDownComplete
      title="Filter by"
      trigger={
        <button
          className={`flex gap-3 items-center justify-center hover:text-primary bg-secondary rounded-full p-2 ${priorityValue.length || statusValue.length || createdByValue ? "text-primary" : ""}`}
        >
          <FaFilter />
        </button>
      }
    >
      {/* ======= Sets the status*/}
      <DropdownMenuRadioGroup
        value={statusValue}
        onValueChange={setRadioQueryParam({
          type: "status",
          setSearchParams,
          oldValue: statusValue,
        })}
      >
        <DropdownMenuRadioItem
          value="done"
          className={`${statusValue === "done" && "text-primary"}`}
        >
          {" "}
          Done
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="undone"
          className={`${statusValue === "undone" && "text-primary"}`}
        >
          Undone
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="pending"
          className={`${statusValue === "pending" && "text-primary"}`}
        >
          Pending
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>

      {/* ======= Sets the importance  */}
      <hr />

      <DropdownMenuRadioGroup
        value={priorityValue}
        onValueChange={setRadioQueryParam({
          type: "priority",
          setSearchParams,
          oldValue: priorityValue,
        })}
      >
        <DropdownMenuRadioItem
          value="1"
          className={`${priorityValue === "1" && "text-primary"}`}
        >
          Optional
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="2"
          className={`${priorityValue === "2" && "text-primary"}`}
        >
          Minor
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="3"
          className={`${priorityValue === "3" && "text-primary"}`}
        >
          Moderate
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="4"
          className={`${priorityValue === "4" && "text-primary"}`}
        >
          Important
        </DropdownMenuRadioItem>
        <DropdownMenuRadioItem
          value="5"
          className={`${priorityValue === "5" && "text-primary"}`}
        >
          Critical
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
      <hr />
      <DropdownMenuRadioGroup
        value={createdByValue}
        onValueChange={setRadioQueryParam({
          type: "createdBy",
          setSearchParams,
          oldValue: createdByValue,
        })}
      >
        <DropdownMenuRadioItem
          value="you"
          className={`${createdByValue === "you" && "text-primary"}`}
        >
          Created by you
        </DropdownMenuRadioItem>

        <DropdownMenuRadioItem
          value="others"
          className={`${createdByValue === "others" && "text-primary"}`}
        >
          Created by others
        </DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>

      {/* TODO: Filtering by Goals  */}

      {/* TODO: Filtering by Tags  */}
    </DropDownComplete>
  );
}
