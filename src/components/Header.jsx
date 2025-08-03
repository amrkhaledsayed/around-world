import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import Logo from "./logo";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const [open, setOpen] = useState(false);

  const [burgerColor, setBurgerColor] = useState("#000");

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setBurgerColor(isDark ? "#fff" : "#000");
  }, []);
  return (
    <header className="sticky top-0 z-10">
      <div className="sticky top-0 z-10 m-auto flex max-w-[95rem] items-center justify-between px-4 py-6 shadow-lg backdrop-blur-sm sm:px-10 lg:px-[84px]">
        <Logo />

        {/* Desktop Menu */}
        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <Hamburger
            toggled={open}
            toggle={() => setOpen((prev) => !prev)}
            color={burgerColor}
          />
        </div>
      </div>
      {open && (
        <div className="var(--background-color-off-white) backdrop-blur-sm md:hidden">
          <div className="flex items-center justify-between gap-4 p-4 px-11">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
