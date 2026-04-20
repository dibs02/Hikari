const Footer = ({ isDark }) => {
  return (
    <footer
      className={`border-t px-4 pb-14 pt-8 text-center transition-colors duration-500 ease-in-out sm:px-6 sm:pb-16 ${
        isDark ? "border-zinc-800 bg-black" : "border-zinc-200 bg-zinc-50"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div
          className={`mx-auto max-w-3xl px-2 text-[0.95rem] font-medium tracking-wide sm:text-sm sm:font-edu-cursive ${
            isDark ? "text-zinc-400" : "text-zinc-600"
          }`}
        >
          <p className="leading-7 sm:leading-8">
            Unofficial anime discovery app. Not affiliated with MyAnimeList.
          </p>
          <p className="leading-7 sm:leading-8">
            Contains metadata only. No streaming content distributed.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
