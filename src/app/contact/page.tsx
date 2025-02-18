"use client";

import Image from "next/image";
import { defaultImages } from "../config";
import Map from "../components/Map";

export default function ContactPage() {
  const contactInfo = {
    address: {
      street: "437 Beralihela, Colony 5",
      city: "Tissamaharama",
      postalCode: "82600",
      country: "Sri Lanka"
    },
    phone: {
      reception: "+94 76 281 0000"
    },
    email: {
      general: "info@rajinihotels.com"
    },
    location: {
      lat: 6.300069720777323,
      lng: 81.28802054738836
    }
  };

  const inquiryTypes = [
    { value: "booking", label: "Booking Inquiry" },
    { value: "general", label: "General Inquiry" },
    { value: "feedback", label: "Feedback" },
    { value: "other", label: "Other" }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
          Contact Us
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          We're here to assist you with any questions about your stay at Rajini by The Waters.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-[var(--gold-400)]">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--gold-400)] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--gold-400)] focus:border-transparent transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--gold-400)] focus:border-transparent transition-all duration-300"
                  required
                >
                  <option value="">Select a subject</option>
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--gold-400)] focus:border-transparent transition-all duration-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-gold py-3 rounded-md transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-[var(--gold-400)]">Hotel Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--gold-400)] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Address</h3>
                    <p className="text-gray-600">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city} {contactInfo.address.postalCode}<br />
                      {contactInfo.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--gold-400)] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Phone</h3>
                    <p className="text-gray-600">
                      Reception: <a href={`tel:${contactInfo.phone.reception}`} className="hover:text-[var(--gold-400)] transition-colors">{contactInfo.phone.reception}</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <svg className="w-6 h-6 text-[var(--gold-400)] mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Email</h3>
                    <p className="text-gray-600">
                      General: <a href={`mailto:${contactInfo.email.general}`} className="hover:text-[var(--gold-400)] transition-colors">{contactInfo.email.general}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-[var(--gold-400)]">Getting Here</h2>
              <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
                <Map 
                  center={contactInfo.location}
                  zoom={15}
                  className="w-full h-full rounded-lg"
                />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[var(--gold-400)]">Directions</h3>
                <p className="text-gray-600">
                  Our hotel is situated in the serene surroundings of Tissamaharama, offering a peaceful retreat by the waters.
                  We provide complimentary airport transfers for our guests with advance booking.
                </p>
                <a 
                  href={`https://www.openstreetmap.org/directions?from=&to=${contactInfo.location.lat}%2C${contactInfo.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 btn-gold px-6 py-2 rounded-md"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 