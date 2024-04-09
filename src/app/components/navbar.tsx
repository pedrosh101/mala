// components/NavToggle.tsx
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
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

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
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

  return (
    <div className="flex w-full font-courier place-content-between text-sm p-4 sm:p-8">
      <Link href="/" className="h-4">
        <h1 className="text-5xl">MALA</h1>
      </Link>
      <div onClick={toggleNav} className="cursor-pointer">
        <svg fill="none" viewBox="0 0 15 15" width="2.7em">
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.5 3a.5.5 0 000 1h12a.5.5 0 000-1h-12zM1 7.5a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5zm0 4a.5.5 0 01.5-.5h12a.5.5 0 010 1h-12a.5.5 0 01-.5-.5z"
            clipRule="evenodd"
          />
        </svg>
      </div>
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
          <button onClick={toggleNav} className="absolute top-6 sm:hidden text-3xl">X</button>
          <Link href="/">
            <p className="pb-8 sm:hidden text-base">Home</p>
          </Link>
          <Link href="/about">
            <p>About</p>
          </Link>
          <div>
        <button onClick={toggleSubmenu}>Paintings</button>
        {isSubmenuOpen && (
          <div className="sm:ml-6 text-xs">
            <Link href="/paintings/item1">
              <p className="my-4">Malaismo</p>
            </Link>
            <Link href="/paintings/item2">
              <p className="mb-4">Abstract</p>
            </Link>
            <Link href="/paintings/item3">
              <p className="mb-4">Cogumala</p>
            </Link>
            <Link href="/paintings/item4">
              <p>Contemporary</p>
            </Link>
          </div>
        )}
      </div>
          <Link href="/sculpture">
            <p>Sculpture</p>
          </Link>
          <Link href="/theatre">
            <p>Theater</p>
          </Link>
          <Link href="/cinema">
            <p>Cinema</p>
          </Link>
          <Link href="/performance">
            <p>Performance</p>
          </Link>
          <Link href="/available-works">
            <p>Available Works</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
