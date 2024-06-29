import SearchInput from "./dashboardNav/SearchInput";
import ToolBar from "./dashboardNav/ToolBar";

export default function DashboardSearchbar() {
  return (
    <section
      className="bg-primary border-b-2 border-card py-2 flex justify-end pr-2 absolute w-[430px] items-center right-0 gap-1"
      style={{ clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 20% 100%, 0 0)" }}
    >
      <SearchInput />
      <ToolBar />
    </section>
  );
}
