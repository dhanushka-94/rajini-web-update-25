import Image from "next/image";
import { defaultImages } from "../config";

export default function OffersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">Special Offers</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Stay tuned for our upcoming special offers and exclusive deals.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto text-center">
          <div className="w-16 h-16 mx-auto mb-6 bg-[var(--gold-50)] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--gold-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4 text-[var(--gold-400)]">No Current Offers</h2>
          <p className="text-gray-600 mb-6">
            We are currently updating our special offers. Please check back later for new exciting deals and packages.
          </p>
          <p className="text-gray-500 text-sm">
            For room rates and availability, please visit our <a href="/rooms" className="text-[var(--gold-400)] hover:underline">Rooms & Suites</a> page.
          </p>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-[var(--gold-50)] rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[var(--gold-400)]">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to be the first to know about our upcoming offers and promotions.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-[var(--gold-200)] rounded-md focus:ring-2 focus:ring-[var(--gold-400)] focus:border-transparent"
            />
            <button className="btn-gold px-6 py-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 