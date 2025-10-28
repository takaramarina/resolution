"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function DigitalDrawingPage() {
  const artwork = images.find((art) => art.slug === "Digital-Drawing");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
