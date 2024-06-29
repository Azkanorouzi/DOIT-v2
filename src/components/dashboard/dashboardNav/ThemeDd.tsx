import DropDownComplete from "@/components/ui/DropDownComplete";
import {
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/contexts/ThemeContext";
import { useEffect } from "react";
import { FaPaintBrush } from "react-icons/fa";

export default function ThemeDd() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.querySelector("html").className = theme;
  }, [theme]);

  return (
    <DropDownComplete
      title="Theme"
      trigger={
        <button className="flex gap-3 items-center justify-center hover:text-primary">
          <FaPaintBrush /> <p>Theme</p>
        </button>
      }
    >
      <DropdownMenuRadioGroup
        value={theme}
        onValueChange={(value) => setTheme(value)}
      >
        <DropdownMenuRadioItem value="dark">dragon</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="purple">purple</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="fireFul">Fireful</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="bee">Bee</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="lizard">Lizard</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="phoenix">Phoenix</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="focus">Focus</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="earth">Earth</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropDownComplete>
  );
}
