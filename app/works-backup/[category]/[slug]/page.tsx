"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";
import { notFound } from "next/navigation";

export default function DynamicArtworkPage({ 
  params 
}: { 
  params: { category: string; slug: string } 
}) {
  // Find artwork by slug (slug should be unique across all categories)
  const artwork = images.find((art) => art.slug === params.slug);

  // If no artwork found, show 404
  if (!artwork) {
    notFound();
  }

  // Optional: Verify the category matches the artwork's tags for SEO consistency
  // This ensures URLs like /works/rotation/dream work correctly
  const belongsToCategory = artwork.tags.includes(params.category);
  
  if (!belongsToCategory) {
    notFound();
  }

  return <ArtworkPage artwork={artwork} />;
}