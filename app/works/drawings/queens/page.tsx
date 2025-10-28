"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function QueensPage() {
  const artwork = images.find((art) => art.slug === "Queens");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
