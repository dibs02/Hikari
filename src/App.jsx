import { useState } from "react";
import Header from "./components/Header";
import Anicontainer from "./components/Anicontainer";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") {
      return true;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ease-in-out ${
        isDark ? "bg-black text-white" : "bg-zinc-50 text-zinc-950"
      }`}
    >
      <Header isDark={isDark} setIsDark={setIsDark} />
      <HeroSection isDark={isDark} />
      <Anicontainer isDark={isDark} />
      <Footer isDark={isDark} />
      <Analytics />
    </div>
  );
};

export default App;
