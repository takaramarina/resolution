"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function StretchingTimeToBeOnTimePage() {
  const artwork = images.find((art) => art.slug === "Stretching-Time-to-Be-On-Time");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
