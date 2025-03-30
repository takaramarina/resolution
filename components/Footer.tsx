import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-8 px-5 md:px-10 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tagline / Short Bio */}
        <p className="text-lg italic mb-4">
          Fannymoney | Experimental digital and physical works by Reiji Shimane.
        </p>

        {/* Contact Info */}
        <p className="mb-2">
          Contact:{" "}
          <a
            href="mailto:fannymoneyonline@gmail.com"
            className="underline hover:text-gray-400"
          >
            fannymoneyonline@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-4">
          <Link href="https://www.instagram.com/rei_dan/" aria-label="Instagram">
            <Instagram className="h-6 w-6 hover:text-gray-400 transition" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
