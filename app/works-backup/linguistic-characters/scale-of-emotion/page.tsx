"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function ScaleOfEmotionPage() {
  const artwork = images.find((art) => art.slug === "Scale-of-Emotion");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
