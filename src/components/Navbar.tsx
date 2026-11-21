"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { title: "About Me", url: "#about-me" },
  { title: "Model", url: "#model" },
  { title: "Social Media Manager", url: "#social-media-manager" },
  { title: "Contact", url: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 md:top-6">
      <nav className="flex w-full max-w-3xl items-center justify-between gap-1 rounded-full bg-white/95 px-2 py-2 shadow-lg backdrop-blur md:justify-center md:gap-2 md:px-3">
        {/* Desktop */}
        <div className="hidden w-full items-center justify-between md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.url}
              onClick={(e) => handleScroll(e, item.url)}
              className="rounded-full px-5 py-2 text-sm font-semibold text-black/80 transition hover:bg-black/5 hover:text-black"
            >
              {item.title}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="ml-auto flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-black md:hidden"
          aria-expanded={open}
        >
          Menu
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-full mt-2 w-[calc(100%-2rem)] max-w-3xl rounded-2xl bg-white/95 p-2 shadow-lg backdrop-blur md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.title}
              href={item.url}
              onClick={(e) => handleScroll(e, item.url)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-black/80 hover:bg-black/5 hover:text-black"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export { Navbar };
