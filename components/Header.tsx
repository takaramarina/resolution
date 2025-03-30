// components/Header.tsx
import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-5 py-20 md:px-10">
      <div className="text-xl font-bold">REIJI SHIMANE</div>
      <div className="flex items-center gap-6">
        <Link href="https://www.instagram.com/rei_dan/" aria-label="Instagram">
          <Instagram className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
