"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function MaterialityInSoundPage() {
  const artwork = images.find((art) => art.slug === "Materiality-in-Sound");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
