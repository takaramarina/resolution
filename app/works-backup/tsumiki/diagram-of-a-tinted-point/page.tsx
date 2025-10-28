"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function DiagramOfATintedPointPage() {
  const artwork = images.find((art) => art.slug === "Diagram-of-a-Tinted-Point");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
