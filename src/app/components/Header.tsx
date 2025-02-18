"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Rajini by The Waters"
              width={180}
              height={60}
              className="h-16 w-auto"
              priority
              onError={(e: any) => {
                e.target.src = "/default-logo.png";
              }}
            />
          </Link>
          <div className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-600 hover:text-[var(--gold-400)] transition-colors">Home</Link>
            <Link href="/rooms" className="text-gray-600 hover:text-[var(--gold-400)] transition-colors">Rooms & Suites</Link>
            <Link href="/gallery" className="text-gray-600 hover:text-[var(--gold-400)] transition-colors">Gallery</Link>
            <Link href="/amenities" className="text-gray-600 hover:text-[var(--gold-400)] transition-colors">Amenities</Link>
            <Link href="/offers" className="text-gray-600 hover:text-[var(--gold-400)] transition-colors">Offers</Link>
            <Link href="/contact" className="text-gray-600 hover:text-[var(--gold-400)] transition-colors">Contact</Link>
          </div>
          <Link href="/contact" className="btn-gold px-8 py-2.5 rounded-md">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
} 