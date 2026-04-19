const Footer = () => {
  return (
    <footer className="bg-black px-4 pb-14 pt-8 text-center sm:px-6 sm:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 h-px bg-zinc-800 sm:mb-12" />
        <div className="font-edu-cursive mx-auto max-w-3xl px-2 text-[0.95rem] font-medium tracking-wide text-zinc-400 sm:text-sm">
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
