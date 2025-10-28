"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function JunichiroTanizakiPage() {
  const artwork = images.find((art) => art.slug === "Junichiro-Tanizaki");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
