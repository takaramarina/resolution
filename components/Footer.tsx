import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 content-padding" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      {/* <div className="border-b border-gray-300 md:mx-[60px] mb-4" /> */}
      <div className="flex flex-col items-left text-sm">
        <Link href="/works" className="hover:underline">
        All Works
        </Link>
        <Link href="/available-works" className="hover:underline">
          Available Works
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="mb-4 hover:underline">
          Contact
        </Link>
        
        <a
          href="mailto:fannymoneyonline@gmail.com"
          className="text-sm hover:text-gray-400"
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
