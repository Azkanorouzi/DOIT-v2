import { useTheme } from "@/contexts/ThemeContext";

export default function UserBackground({ imgUrl }: { imgUrl: string }) {
  const { theme } = useTheme();
  return (
    <div
      className="w-[100vw] max-w-[1800px] h-[350px] absolute top-0 border-b-primary border-b-4 bg-cover bg-center"
      style={{
        background: `url(${imgUrl || `${theme}-bg.jpg`})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: ".8",
      }}
    ></div>
  );
}
