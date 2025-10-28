"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function PhysicalDrawingPage() {
  const artwork = images.find((art) => art.slug === "Physical-Drawing");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
