"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function ToriPage() {
  const artwork = images.find((art) => art.slug === "Tori");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
