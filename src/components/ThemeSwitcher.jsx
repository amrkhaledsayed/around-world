import { useEffect, useState } from "react";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import theme from "../utils";

const ThemeSwitcher = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    theme(savedTheme);
    setActive(savedTheme);
  }, []);

  const handleThemeChange = (mode) => {
    setActive(mode);
    theme(mode);
    localStorage.setItem("theme", mode);
  };

  return (
    <div className="flex h-8 w-[57px] items-center gap-0.5 rounded-[60px] bg-[var(--background-color-primary)] px-1 transition-colors duration-300">
      <button onClick={() => handleThemeChange("light")}>
        <IoIosSunny
          className={`cursor-pointer rounded-2xl p-1 text-2xl transition-all duration-300 ${
            active === "light"
              ? "bg-[var(--background-color-white)] text-[var(--background-color-primary)]"
              : "text-[var(--text-color-dark)]"
          }`}
        />
      </button>
      <button onClick={() => handleThemeChange("dark")}>
        <IoMdMoon
          className={`cursor-pointer rounded-2xl p-1 text-2xl transition-all duration-300 ${
            active === "dark"
              ? "bg-white text-[var(--background-color-primary)]"
              : "text-[var(--text-color-white)]"
          }`}
        />
      </button>
    </div>
  );
};

export default ThemeSwitcher;
