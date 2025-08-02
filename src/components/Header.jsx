import Logo from "./logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header>
      <div className="sticky top-0 z-10 m-auto flex max-w-[95rem] justify-between px-2.5 py-[24px] shadow-lg backdrop-blur-sm sm:px-10 md:px-10 lg:px-[84px]">
        <Logo />
        <ThemeSwitcher />
      </div>
    </header>
  );
};
export default Header;
