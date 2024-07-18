"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  isProjetosPage: boolean;
}

type Language = "en" | "pt";

interface NavItems {
  about: string;
  inside: string;
  outside: string;
  availableWorks: string;
  contact: string;
}

const navItems: Record<Language, NavItems> = {
  en: {
    about: "About Bio CV",
    inside: "Inside",
    outside: "Outside",
    availableWorks: "Available Works",
    contact: "Contact",
  },
  pt: {
    about: "Sobre Bio CV",
    inside: "Interior",
    outside: "Exterior",
    availableWorks: "Trabalhos Disponíveis",
    contact: "Contato",
  },
};

const Navbar: React.FC<NavbarProps> = ({ isProjetosPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState<Language>("en");
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !(navRef.current as Node).contains(event.target as Node)
    ) {
      setIsOpen(false);
      document.removeEventListener("mousedown", handleClickOutside);
    }
  };

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (
        navRef.current &&
        !(navRef.current as Node).contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "en" ? "pt" : "en"));
  };

  return (
    <>
      <div
        className={`flex w-full font-realCourier place-content-end text-sm p-4 sm:p-8 pb-8 z-50 ${
          isProjetosPage
            ? "bg-slate-50 text-black hover:text-slate-700"
            : "text-white hover:text-red-50"
        }`}
      >
        <div className="flex items-center">
          {/* Hamburger icon for mobile */}
          <div onClick={toggleNav} className="cursor-pointer h-4 sm:hidden">
            <svg fill="none" viewBox="0 0 15 15" width="2.7em">
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {/* Horizontal menu for desktop */}
          <div className="hidden sm:flex space-x-8 pt-3 h-fit w-fit">
            <Link href="/about">
              <p>{navItems[language].about}</p>
            </Link>
            <Link href="/inside">
              <p>{navItems[language].inside}</p>
            </Link>
            <Link href="/outside">
              <p>{navItems[language].outside}</p>
            </Link>
            <Link href="/available-works">
              <p>{navItems[language].availableWorks}</p>
            </Link>
            <Link href="/contact">
              <p>{navItems[language].contact}</p>
            </Link>
            <button onClick={toggleLanguage} className="pl-8">
              {language === "en" ? "En/Pt" : "Pt/En"}
            </button>
          </div>
        </div>
        {/* Overlay for mobile */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 z-50 transition-opacity duration-700 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            ref={navRef}
            className={`fixed flex flex-col space-y-8 sm:justify-start justify-center right-0 top-0 h-full text-center sm:text-left w-full sm:w-96 p-10 bg-transparent shadow transition-transform transform duration-700 text-white ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={toggleNav}
              className="absolute top-6 sm:hidden text-3xl"
            >
              X
            </button>
            <div className="pb-16">
              <Link href="/">
                <p className="sm:hidden text-base">Home</p>
              </Link>
            </div>
            <Link href="/about">
              <p className="hover:text-red-50 pb-8">
                {navItems[language].about}
              </p>
            </Link>
            <Link href="/inside">
              <p className="hover:text-red-50">{navItems[language].inside}</p>
            </Link>
            <Link href="/outside">
              <p className="hover:text-red-50 pb-8">
                {navItems[language].outside}
              </p>
            </Link>
            <Link href="/available-works">
              <p className="hover:text-red-50">
                {navItems[language].availableWorks}
              </p>
            </Link>
            <Link href="/contact">
              <p className="hover:text-red-50">{navItems[language].contact}</p>
            </Link>
            <div className="pt-8">
              <button onClick={toggleLanguage}>
                {language === "en" ? "En/Pt" : "Pt/En"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
