"use client";

import Image from "next/image";
import { defaultImages } from "./config";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: defaultImages.hotelExterior,
      alt: "Rajini by The Waters - Waterfront View",
      title: "Welcome to Tranquility",
      subtitle: "A peaceful retreat nestled by the waters of Tissamaharama",
      buttonText: "Book Your Stay",
      buttonLink: "/rooms",
    },
    {
      image: defaultImages.deluxeRoom,
      alt: "Scenic Room View",
      title: "Serene Accommodations",
      subtitle: "Wake up to breathtaking water views",
      buttonText: "View Rooms",
      buttonLink: "/rooms",
    },
    {
      image: defaultImages.restaurant1,
      alt: "Activities and Recreation",
      title: "Exciting Activities",
      subtitle: "Enhance your stay with unique experiences",
      buttonText: "Explore Activities",
      buttonLink: "/activities",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Script id="hotel-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Hotel",
            "name": "Rajini by The Waters",
            "image": "${defaultImages.hotelExterior}",
            "description": "A serene hotel in Sri Lanka, offering a peaceful retreat amidst nature. Nestled by tranquil waters, it provides a perfect escape from the bustle, with elegant rooms, scenic views, and exceptional service.",
            "starRating": {
              "@type": "Rating",
              "ratingValue": "5"
            },
            "priceRange": "$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "437 Beralihela, Colony 5",
              "addressLocality": "Tissamaharama",
              "postalCode": "82600",
              "addressCountry": "Sri Lanka"
            },
            "telephone": "+94 76 281 0000",
            "email": "info@rajinihotels.com",
            "amenityFeature": [
              {
                "@type": "LocationFeatureSpecification",
                "name": "Air Rifle Shooting Range",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Board Games",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Scenic Water Views",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Peaceful Environment",
                "value": true
              }
            ]
          }
        `}
      </Script>

      <main className="min-h-screen">
        {/* Hero Section */}
        <header className="relative h-screen">
          <div className="relative h-full overflow-hidden" role="banner">
            {/* Slides */}
            <div 
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              role="region"
              aria-label="Hotel highlights slideshow"
            >
              {slides.map((slide, index) => (
                <article key={index} className="relative min-w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h1 className="text-5xl md:text-7xl font-bold mb-6 slide-in">{slide.title}</h1>
                      <p className="text-xl md:text-2xl mb-8 slide-in" style={{ animationDelay: '0.2s' }}>{slide.subtitle}</p>
                      <a 
                        href={slide.buttonLink}
                        className="btn-outline-gold px-8 py-3 rounded-md text-lg font-semibold inline-block slide-in gold-shimmer"
                        style={{ animationDelay: '0.4s' }}
                      >
                        {slide.buttonText}
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-gradient-to-r hover:from-[var(--gold-400)] hover:to-[var(--gold-500)] transition-all duration-300"
              onClick={prevSlide}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-gradient-to-r hover:from-[var(--gold-400)] hover:to-[var(--gold-500)] transition-all duration-300"
              onClick={nextSlide}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? "bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] scale-125" 
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Rooms */}
        <section className="py-20 bg-gradient-to-b from-white to-[var(--gold-50)]" aria-labelledby="accommodations-title">
          <div className="container mx-auto px-4">
            <h2 id="accommodations-title" className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
              Luxury Accommodations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Chalets */}
              <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <div className="absolute top-4 left-4 bg-[var(--gold-400)] text-white px-4 py-2 rounded-full font-semibold z-10">
                    From LKR 22,000.00
                  </div>
                  <Image
                    src={defaultImages.deluxeRoom}
                    alt="Chalets"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Chalets</h3>
                  <p className="text-gray-600 mb-4">Cozy chalets with scenic views and essential amenities</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">Lake View</span>
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">AC</span>
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">Pool Access</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Room Only</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">LKR 22,000.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Board</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">LKR 28,000.00</p>
                    </div>
                  </div>
                  <button className="w-full btn-gold py-2 rounded-md">
                    View Details
                  </button>
                </div>
              </article>

              {/* Delux Room */}
              <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <div className="absolute top-4 left-4 bg-[var(--gold-400)] text-white px-4 py-2 rounded-full font-semibold z-10">
                    From LKR 23,000.00
                  </div>
                  <Image
                    src={defaultImages.suite}
                    alt="Delux Room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Delux Room</h3>
                  <p className="text-gray-600 mb-4">Spacious rooms with modern amenities and lake views</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">Lake View</span>
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">AC</span>
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">Pool Access</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Room Only</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">LKR 23,000.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Board</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">LKR 32,000.00</p>
                    </div>
                  </div>
                  <button className="w-full btn-gold py-2 rounded-md">
                    View Details
                  </button>
                </div>
              </article>

              {/* Super Delux Room */}
              <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-64">
                  <div className="absolute top-4 left-4 bg-[var(--gold-400)] text-white px-4 py-2 rounded-full font-semibold z-10">
                    From LKR 25,000.00
                  </div>
                  <Image
                    src={defaultImages.presidentialSuite}
                    alt="Super Delux Room"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Super Delux Room</h3>
                  <p className="text-gray-600 mb-4">Premium rooms offering the ultimate luxury experience</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">Lake View</span>
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">AC</span>
                    <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">Pool Access</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Room Only</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">LKR 25,000.00</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Board</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">LKR 34,000.00</p>
                    </div>
                  </div>
                  <button className="w-full btn-gold py-2 rounded-md">
                    View Details
                  </button>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="py-20" aria-labelledby="amenities-title">
          <div className="container mx-auto px-4">
            <h2 id="amenities-title" className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
              Hotel Amenities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8" role="list">
              <div role="listitem" className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--gold-50)] rounded-full flex items-center justify-center text-[var(--gold-400)]">
                  <span className="text-2xl">🏊‍♂️</span>
                </div>
                <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Swimming Pool</h3>
                <p className="text-gray-600">Infinity pool with city views</p>
              </div>
              <div role="listitem" className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--gold-50)] rounded-full flex items-center justify-center text-[var(--gold-400)]">
                  <span className="text-2xl">🍽️</span>
                </div>
                <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Fine Dining</h3>
                <p className="text-gray-600">World-class restaurants</p>
              </div>
              <div role="listitem" className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--gold-50)] rounded-full flex items-center justify-center text-[var(--gold-400)]">
                  <span className="text-2xl">💆‍♀️</span>
                </div>
                <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Spa & Wellness</h3>
                <p className="text-gray-600">Luxury spa treatments</p>
              </div>
              <div role="listitem" className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-[var(--gold-50)] rounded-full flex items-center justify-center text-[var(--gold-400)]">
                  <span className="text-2xl">🏋️‍♂️</span>
                </div>
                <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Fitness Center</h3>
                <p className="text-gray-600">24/7 gym access</p>
              </div>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="py-20 bg-gradient-to-b from-[var(--gold-50)] to-white" aria-labelledby="offers-title">
          <div className="container mx-auto px-4">
            <h2 id="offers-title" className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
              Special Offers
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Take advantage of our exclusive deals and packages
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Early Bird Offer */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={defaultImages.room}
                    alt="Early Bird Special"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 badge-gold px-4 py-2 rounded-full font-semibold">
                    25% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Early Bird Special</h3>
                  <p className="text-gray-600 mb-4">Book 60 days in advance and save 25% on your stay</p>
                  <a 
                    href="/offers" 
                    className="inline-block btn-gold px-6 py-2 rounded-md"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              {/* Weekend Getaway */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={defaultImages.spa}
                    alt="Weekend Getaway"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 badge-gold px-4 py-2 rounded-full font-semibold">
                    Special
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Weekend Getaway</h3>
                  <p className="text-gray-600 mb-4">Enjoy spa credits and dining discounts on weekend stays</p>
                  <a 
                    href="/offers" 
                    className="inline-block btn-gold px-6 py-2 rounded-md"
                  >
                    Learn More
                  </a>
                </div>
              </article>

              {/* Family Package */}
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={defaultImages.deluxeRoom}
                    alt="Family Package"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 badge-gold px-4 py-2 rounded-full font-semibold">
                    50% OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Family Package</h3>
                  <p className="text-gray-600 mb-4">50% off second room for family stays</p>
                  <a 
                    href="/offers" 
                    className="inline-block btn-gold px-6 py-2 rounded-md"
                  >
                    Learn More
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Sports & Activities Section */}
        <section className="py-20 bg-gradient-to-b from-[var(--gold-50)] to-white" aria-labelledby="activities-title">
          <div className="container mx-auto px-4">
            <h2 id="activities-title" className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
              Sports & Activities
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Enhance your stay with our exciting recreational activities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Air Rifle Shooting</h3>
                <p className="text-gray-600 mb-4">Test your precision and focus with our professional air rifle shooting range.</p>
                <p className="text-sm text-[var(--gold-500)]">Additional charges apply</p>
              </article>
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">Board Games</h3>
                <p className="text-gray-600 mb-4">Enjoy quality time with friends and family with our selection of classic board games.</p>
                <p className="text-sm text-[var(--gold-500)]">Additional charges apply</p>
              </article>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-20 bg-white" aria-labelledby="gallery-title">
          <div className="container mx-auto px-4">
            <h2 id="gallery-title" className="text-3xl md:text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
              Gallery
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Experience the beauty and luxury of Rajini by The Waters through our gallery
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="grid gap-4">
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.hotelExterior}
                    alt="Hotel Exterior"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Hotel Exterior</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.deluxeRoom}
                    alt="Deluxe Room"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Deluxe Room</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-4">
                <div className="relative h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.restaurant1}
                    alt="Restaurant"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Restaurant</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.pool}
                    alt="Swimming Pool"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Swimming Pool</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-4">
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.spa}
                    alt="Spa & Wellness"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Spa & Wellness</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.suite}
                    alt="Luxury Suite"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Luxury Suite</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid gap-4">
                <div className="relative h-96 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.presidentialSuite}
                    alt="Presidential Suite"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Presidential Suite</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={defaultImages.restaurant2}
                    alt="Dining Experience"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="font-semibold">Dining Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <a 
                href="/gallery"
                className="inline-block btn-outline-gold px-8 py-3 rounded-md text-lg font-semibold"
              >
                View Full Gallery
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action - Enhanced Contact Section */}
        <section className="py-20 bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] text-white relative overflow-hidden" aria-labelledby="cta-title">
          <div className="gold-shimmer absolute inset-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Experience the serenity of Rajini by The Waters. Contact us to plan your perfect stay or learn more about our exclusive offerings.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Visit Us</h3>
                <p className="opacity-90">437 Beralihela, Colony 5,<br />82600 Tissamaharama,<br />Sri Lanka</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Email Us</h3>
                <p className="opacity-90">General Inquiries:<br />
                  <a href="mailto:info@rajinihotels.com" className="hover:text-[var(--gold-50)] underline">info@rajinihotels.com</a>
                </p>
                <p className="opacity-90 mt-2">Reservations:<br />
                  <a href="mailto:reservations@rajinihotels.com" className="hover:text-[var(--gold-50)] underline">reservations@rajinihotels.com</a>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Call Us</h3>
                <p className="opacity-90">Reception:<br />
                  <a href="tel:+94762810000" className="hover:text-[var(--gold-50)] underline">+94 76 281 0000</a>
                </p>
                <p className="opacity-90 mt-2">Reservations:<br />
                  <a href="tel:+94762810001" className="hover:text-[var(--gold-50)] underline">+94 76 281 0001</a>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 transform hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-2">Opening Hours</h3>
                <p className="opacity-90">Reception: 24/7</p>
                <p className="opacity-90">Restaurant: 6:30 AM - 10:30 PM</p>
                <p className="opacity-90">Spa: 9:00 AM - 9:00 PM</p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>

              <a 
                href="/booking"
                className="bg-white text-[var(--gold-400)] px-8 py-3 rounded-md text-lg font-semibold hover:bg-[var(--gold-50)] transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg inline-block"
                role="button"
              >
                Book Your Peaceful Retreat
              </a>

              <div className="text-sm opacity-75 pt-8 border-t border-white/20">
                <p>© {new Date().getFullYear()} Rajini by The Waters. All rights reserved.</p>
                <p className="mt-1">Developed by Olexto Digital Solutions</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
