// components/Header.tsx
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-5 py-5 md:px-[60px] bg-white">
      <div className="text-xl font-bold">
        <Link href="/">REIJI SHIMANE</Link></div>
      <nav className="flex gap-16 text-lg">
        <Link href="/works" className="hover:underline">Works</Link>
        {/* <Link href="/sketch" className="hover:underline">Sketch</Link>
        <Link href="/digital" className="hover:underline">Digital</Link>
        <Link href="/collaborations" className="hover:underline">Collaborations</Link> */}
      </nav>

      <div className="flex items-center gap-6">
        <Link href="https://www.instagram.com/rei_dan/" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
