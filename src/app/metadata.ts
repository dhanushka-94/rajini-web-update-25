import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://rajinihotels.com'),
  title: {
    default: "Rajini by The Waters | Luxury Hotel in Tissamaharama, Sri Lanka",
    template: "%s | Rajini by The Waters"
  },
  description: "Experience luxury at Rajini by The Waters, a 5-star hotel in Tissamaharama, Sri Lanka. Featuring scenic lake views, spa, infinity pool, gourmet dining, and exclusive amenities. Book your peaceful retreat today.",
  keywords: [
    "luxury hotel Sri Lanka",
    "5 star hotel Tissamaharama",
    "waterfront hotel Sri Lanka",
    "Tissamaharama luxury accommodation",
    "lake view hotel Sri Lanka",
    "spa resort Tissamaharama",
    "infinity pool hotel",
    "gourmet dining Tissamaharama",
    "wedding venue Sri Lanka",
    "business conference hotel",
    "Rajini by The Waters",
    "family resort Sri Lanka"
  ].join(", "),
  authors: [{ name: "Rajini by The Waters" }],
  creator: "Rajini by The Waters",
  publisher: "Rajini by The Waters",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/web-app-manifest-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/web-app-manifest-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Rajini by The Waters - Luxury Hotel in Tissamaharama, Sri Lanka",
    description: "Discover serenity at Rajini by The Waters, a luxury hotel in Tissamaharama featuring scenic lake views, spa, infinity pool, and gourmet dining. Perfect for romantic getaways, family vacations, and special events.",
    url: "https://rajinihotels.com",
    siteName: "Rajini by The Waters",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
        width: 1920,
        height: 1080,
        alt: "Rajini by The Waters - Luxury Waterfront Hotel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajini by The Waters - Luxury Hotel in Sri Lanka",
    description: "Experience luxury in Tissamaharama with scenic lake views, spa, infinity pool, and gourmet dining. Book your serene escape today.",
    images: [{
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      alt: "Rajini by The Waters - Luxury Waterfront View",
      width: 1920,
      height: 1080,
    }],
    site: "@rajinihotels",
    creator: "@rajinihotels",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rajinihotels.com",
    languages: {
      'en-US': 'https://rajinihotels.com/en-US',
      'si-LK': 'https://rajinihotels.com/si-LK',
      'ta-LK': 'https://rajinihotels.com/ta-LK',
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
    other: {
      "yandex": "yandex-verification-code",
      "yahoo": "yahoo-verification-code",
      "bing": "bing-verification-code"
    }
  },
}; 