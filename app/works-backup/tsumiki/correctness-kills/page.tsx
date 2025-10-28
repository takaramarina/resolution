"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function CorrectnessKillsPage() {
  const artwork = images.find((art) => art.slug === "Correctness-Kills");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
