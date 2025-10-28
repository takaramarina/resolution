"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";

export default function LinguisticVehiclePage() {
  const artwork = images.find((art) => art.slug === "Linguistic-Vehicle");

  if (!artwork) return <div>Not Found</div>;

  return <ArtworkPage artwork={artwork} />;
}
