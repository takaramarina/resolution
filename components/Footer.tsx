import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 content-padding" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      {/* <div className="border-b border-gray-300 md:mx-[60px] mb-4" /> */}
      <div className="flex flex-col items-left text-sm uppercase" style={{ letterSpacing: '0.03em', lineHeight: '170%' }}>
        <Link href="/vector" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
          Vector
        </Link>
        <Link href="/raster" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
          Raster
        </Link>
        <Link href="/practice" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
          Practice
        </Link>
        <Link href="/available-works" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
          Available Works
        </Link>
        <Link href="/about" className="hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
          About
        </Link>
        <Link href="/contact" className="mb-4 hover:underline" style={{ fontFamily: 'GeneralSans-Regular' }}>
          Contact
        </Link>
        
        <a
          href="mailto:fannymoneyonline@gmail.com"
          className="text-sm hover:text-gray-400 lowercase"
        >
          fannymoneyonline@gmail.com
        </a>

        {/* Social Links */}
        <div className="flex justify-left gap-4 mt-4">
          <Link href="https://www.instagram.com/moon_rail/" aria-label="Instagram">
            <Instagram className="h-6 w-6 hover:text-gray-400 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
