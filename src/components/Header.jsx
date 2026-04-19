import LogoContainer from "./LogoContainer";
import Links from "./Links";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-zinc-900/95 px-4 backdrop-blur-sm sm:px-6 lg:px-10">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-4 py-3">
        <LogoContainer />
        <Links />
      </div>
    </header>
  );
};

export default Header;
