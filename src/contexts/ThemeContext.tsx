import useLocalStorage from "@/hooks/useLocalStorage";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext(
  {} as {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  },
);

export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("The theme context is being use outside of its context");
  }
  return context;
}
