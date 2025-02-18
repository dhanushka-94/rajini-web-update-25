"use client";

import Image from "next/image";
import { defaultImages } from "../config";
import { useState } from "react";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryCategories = [
    {
      title: "Hotel Environment",
      description: "Experience the serene surroundings of our hotel",
      images: [
        { src: defaultImages.hotelExterior, alt: "Hotel Exterior View" },
        { src: defaultImages.hotelNight, alt: "Hotel at Night" },
        { src: defaultImages.hotelView, alt: "Scenic Hotel View" }
      ]
    },
    {
      title: "Rooms & Suites",
      description: "Discover our comfortable and luxurious accommodations",
      images: [
        { src: defaultImages.room, alt: "Standard Room" },
        { src: defaultImages.deluxeRoom, alt: "Deluxe Room" },
        { src: defaultImages.familyRoom, alt: "Family Room" },
        { src: defaultImages.suite, alt: "Suite Room" }
      ]
    },
    {
      title: "Cabanas",
      description: "Relax in our private cabanas",
      images: [
        { src: defaultImages.cabana1, alt: "Cabana View 1" },
        { src: defaultImages.cabana2, alt: "Cabana View 2" },
        { src: defaultImages.cabana3, alt: "Cabana View 3" }
      ]
    },
    {
      title: "Lobby & Common Areas",
      description: "Explore our welcoming spaces",
      images: [
        { src: defaultImages.lobby1, alt: "Hotel Lobby 1" },
        { src: defaultImages.lobby2, alt: "Hotel Lobby 2" }
      ]
    },
    {
      title: "Amenities",
      description: "Enjoy our premium facilities",
      images: [
        { src: defaultImages.pool1, alt: "Swimming Pool 1" },
        { src: defaultImages.pool2, alt: "Swimming Pool 2" },
        { src: defaultImages.spa1, alt: "Spa 1" },
        { src: defaultImages.spa2, alt: "Spa 2" },
        { src: defaultImages.gym1, alt: "Gym 1" },
        { src: defaultImages.gym2, alt: "Gym 2" },
        { src: defaultImages.restaurant1, alt: "Restaurant View 1" },
        { src: defaultImages.restaurant2, alt: "Restaurant View 2" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
          Photo Gallery
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Take a visual journey through our luxurious hotel and its amenities
        </p>

        {/* Gallery Categories */}
        {galleryCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-[var(--gold-400)]">
              {category.title}
            </h2>
            <p className="text-gray-600 mb-8">{category.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="relative h-64 md:h-72 lg:h-80 group cursor-pointer overflow-hidden rounded-lg shadow-lg"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-lg font-semibold">{image.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full max-w-6xl h-[80vh]">
            <Image
              src={selectedImage}
              alt="Enlarged view"
              fill
              className="object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-[var(--gold-400)]"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 