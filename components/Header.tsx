import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu visibility on mobile
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col bg-white">
      <div className="flex items-center justify-between px-5 py-5 md:px-[60px]">
        <div className="text-xl font-bold">
          <Link href="/">REIJI SHIMANE</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-base">
          <Link href="/works" className="hover:underline">
            Works
          </Link>
          <Link href="/digital" className="hover:underline">
            Digital
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="https://www.instagram.com/shimanereiji/" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center z-50">
          <button
            onClick={toggleMenu}
            className="text-black"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Thin gray line */}
      {/* <div className="border-b border-gray-300 mx-5 md:mx-[60px]" /> */}

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-white p-5 shadow-lg z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center">
          <Link href="/works" className="py-2 text-base hover:underline">
            Works
          </Link>
          <Link href="/digital" className="py-2 text-base hover:underline">
            Digital
          </Link>
          <Link href="/about" className="py-2 text-base hover:underline">
            About
          </Link>
          <Link href="/contact" className="py-2 text-base hover:underline">
            Contact
          </Link>
          <Link
            href="https://www.instagram.com/shimanereiji/"
            aria-label="Instagram"
            className="py-2"
          >
            <Instagram className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </header>
  );
}
