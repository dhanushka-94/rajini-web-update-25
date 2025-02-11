import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rajini by The Waters - Serene Luxury Hotel in Tissamaharama, Sri Lanka",
  description: "Experience tranquil luxury at Rajini by The Waters, a peaceful retreat in Tissamaharama, Sri Lanka. Featuring elegant rooms with scenic water views, recreational activities, and exceptional service for a relaxing stay.",
  keywords: "luxury hotel Sri Lanka, Tissamaharama hotel, waterfront hotel, peaceful retreat, air rifle shooting, recreational activities, scenic views, luxury accommodation",
  openGraph: {
    title: "Rajini by The Waters - Serene Luxury Hotel in Sri Lanka",
    description: "A peaceful retreat nestled by tranquil waters in Tissamaharama, offering elegant rooms, scenic views, and exceptional service for a relaxing stay.",
    url: "https://rajinihotels.com",
    siteName: "Rajini by The Waters",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        width: 1920,
        height: 1080,
        alt: "Rajini by The Waters - Waterfront View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajini by The Waters - Serene Luxury in Sri Lanka",
    description: "Experience tranquil luxury by the waters of Tissamaharama. Book your peaceful retreat today.",
    images: ["https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rajinihotels.com",
  },
}; 