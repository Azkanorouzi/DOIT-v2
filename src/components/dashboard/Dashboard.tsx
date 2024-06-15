import { useGoToDefaultMode } from "@/hooks/useGoToDefaultMode";

export default function Dashboard({ children }) {
  useGoToDefaultMode({ defaultMode: "todo" });
  return (
    <section
      className="row-start-1 bg-gradient-to-t dashboard"
      style={{ gridColumnStart: 6, gridColumnEnd: -1, gridRowEnd: -1 }}
    >
      {children}
    </section>
  );
}
