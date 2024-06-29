import AscButtons from "@/components/ui/AscButtons";
import { FilterDd } from "./FilterDd";
import SortDd from "./SortDd";
import LayoutChangeButton from "./LayoutChangeButton";

type filterType =
  | "todo"
  | "charts"
  | "calendar"
  | "goals"
  | "timer"
  | "finance";
export default function ToolBar({ type = "todo" }: { type?: filterType }) {
  return (
    <div className="flex gap-2">
      <AscButtons />
      <FilterDd />
      <SortDd />
      <LayoutChangeButton />
    </div>
  );
}
