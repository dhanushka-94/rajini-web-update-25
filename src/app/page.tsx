"use client";

import Image from "next/image";
import { defaultImages } from "./config";
import { useState, useEffect } from "react";
import Script from "next/script";
import dynamic from "next/dynamic";
import Link from "next/link";

// Create a client-side only component for dynamic content
const DynamicContent = dynamic(() => Promise.resolve(() => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return <p>&copy; {currentYear} Rajini by The Waters. All rights reserved.</p>
}), { ssr: false });

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
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Swimming Pool",
                "value": true
              },
              {
                "@type": "LocationFeatureSpecification",
                "name": "Restaurant",
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
                      <Link 
                        href={slide.buttonLink}
                        className="btn-outline-gold px-8 py-3 rounded-md text-lg font-semibold inline-block slide-in gold-shimmer"
                        style={{ animationDelay: '0.4s' }}
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[var(--gold-400)] transition-colors"
              aria-label="Previous slide"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[var(--gold-400)] transition-colors"
              aria-label="Next slide"
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[var(--gold-400)] w-6' : 'bg-white/50 hover:bg-white'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={currentSlide === index ? 'true' : 'false'}
                />
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
                    From USD $62
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
                      <p className="text-lg font-bold text-[var(--gold-500)]">USD $62</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Board</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">USD $92</p>
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
                    From USD $72
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
                      <p className="text-lg font-bold text-[var(--gold-500)]">USD $72</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Board</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">USD $102</p>
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
                    From USD $82
                  </div>
                  <Image
                    src={defaultImages.suite}
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
                      <p className="text-lg font-bold text-[var(--gold-500)]">USD $82</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Full Board</p>
                      <p className="text-lg font-bold text-[var(--gold-500)]">USD $112</p>
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
                    src={defaultImages.pool1}
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
                    src={defaultImages.spa1}
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
                    alt="Presidential Suite"
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
                    src={defaultImages.suite}
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
              <Link 
                href="/gallery"
                className="inline-block btn-outline-gold px-8 py-3 rounded-md text-lg font-semibold"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action - Enhanced Contact Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-[var(--gold-900)] to-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[var(--gold-300)] to-[var(--gold-400)] bg-clip-text text-transparent">Get in Touch</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Experience the serenity of Rajini by The Waters. Contact us to plan your perfect stay or learn more about our exclusive offerings.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-500)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--gold-300)]">Visit Us</h3>
                <p className="text-gray-300">437 Beralihela, Colony 5,<br />82600 Tissamaharama,<br />Sri Lanka</p>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-500)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--gold-300)]">Email Us</h3>
                <div className="space-y-3">
                  <a href="mailto:info@rajinihotels.com" className="block text-gray-300 hover:text-[var(--gold-300)] transition-colors">info@rajinihotels.com</a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-500)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--gold-300)]">Call Us</h3>
                <div className="space-y-3">
                  <a href="tel:+94762810000" className="block text-gray-300 hover:text-[var(--gold-300)] transition-colors">+94 76 281 0000</a>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 transform hover:-translate-y-1 transition-all duration-300 border border-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-[var(--gold-400)] to-[var(--gold-500)] rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-[var(--gold-300)]">Opening Hours</h3>
                <div className="space-y-3 text-gray-300">
                  <p>Reception: 24/7</p>
                  <p>Restaurant: 6:30 AM - 10:30 PM</p>
                  <p>Spa: 9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="flex justify-center space-x-6 mb-8">
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[var(--gold-300)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[var(--gold-300)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 group">
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-[var(--gold-300)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>

              <Link 
                href="/contact"
                className="inline-block bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)] px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Book Your Peaceful Retreat
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
