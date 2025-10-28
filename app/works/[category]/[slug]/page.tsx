"use client";
import ArtworkPage from "@/components/ArtworkPage";
import { images } from "@/data/imageData";
import { notFound } from "next/navigation";
import { use } from "react";

export default function DynamicArtworkPage({ 
  params 
}: { 
  params: Promise<{ category: string; slug: string }> 
}) {
  // Unwrap the params Promise using React.use()
  const { category, slug } = use(params);
  
  // Find artwork by slug (case-insensitive matching)
  const artwork = images.find((art) => art.slug.toLowerCase() === slug.toLowerCase());

  // If no artwork found, show 404
  if (!artwork) {
    notFound();
  }

  // Optional: Verify the category matches the artwork's tags for SEO consistency
  // This ensures URLs like /works/rotation/dream work correctly
  const belongsToCategory = artwork.tags.includes(category);
  
  if (!belongsToCategory) {
    notFound();
  }

  return <ArtworkPage artwork={artwork} />;
}