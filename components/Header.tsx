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
      <div className="flex items-center justify-between content-padding py-5">
        <div className="text-l font-serif uppercase" style={{ fontFamily: 'GeneralSans-Semibold', fontWeight: 600 }}>
          <Link href="/">Reiji Shimane</Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm uppercase" style={{ letterSpacing: '0.03em' }}>
          <Link href="/vector" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Vector
          </Link>
          <Link href="/raster" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Raster
          </Link>
          <Link href="/practice" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Practice
          </Link>
          <Link href="/about" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            About
          </Link>
          <Link href="/contact" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Contact
          </Link>
          <Link href="https://www.instagram.com/moon_rail/" aria-label="Instagram">
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

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-0 left-0 w-full bg-white p-5 shadow-lg z-40 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center uppercase" style={{ letterSpacing: '0.03em' }}>
          <Link href="/vector" className="py-2 text-sm hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Vector
          </Link>
          <Link href="/raster" className="py-2 text-sm hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Raster
          </Link>
          <Link href="/practice" className="py-2 text-sm hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Practice
          </Link>
          <Link href="/about" className="py-2 text-sm hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            About
          </Link>
          <Link href="/contact" className="py-2 text-sm hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
            Contact
          </Link>
          <Link
            href="https://www.instagram.com/moon_rail/"
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
