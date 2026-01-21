"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { title: "Home", url: "#herosection" },
    { title: "About Us", url: "#about" },
    { title: "Services", url: "#services" },
    { title: "Testimonials", url: "#testimonials" },
    { title: "Contact", url: "#contact" },
  ];

  // Function for smooth scroll with offset
  const handleScroll = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    const section = document.querySelector(target);
    if (section) {
      const navbarHeight = 5; // slightly thinner navbar height
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-1 px-3">
        {/* Logo */}
        <Link
          href="#hero"
          onClick={(e) => handleScroll(e, "#hero")}
          className="flex items-center -my-2"
        >
          <img
            src="https://res.cloudinary.com/dqksqtluq/image/upload/v1759537067/ChatGPT_Image_Oct_3_2025_07_17_33_PM_uf1fo1.png"
            alt="Dra. G Clínica Odontológica"
            className="h-24 w-auto transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-black font-medium">
          {menuItems.map((item) => (
            <a
              key={item.title}
              href={item.url}
              onClick={(e) => handleScroll(e, item.url)}
              className="relative group cursor-pointer"
            >
              {item.title}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6">
              <nav className="flex flex-col gap-6 text-lg font-medium">
                {menuItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.url}
                    onClick={(e) => handleScroll(e, item.url)}
                    className="hover:text-pink-500 cursor-pointer"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
