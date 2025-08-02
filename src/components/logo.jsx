import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src="/Group 25.svg" alt="around the world" />
      <p className="text-[15.5px] font-[600] text-[var(--text-color-dark)] select-none sm:text-[24px]">
        Around The World
      </p>
    </Link>
  );
};

export default Logo;
