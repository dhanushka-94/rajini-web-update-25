import Image from "next/image";
import { defaultImages } from "../layout";

export default function AmenitiesPage() {
  const amenities = [
    {
      id: 1,
      name: "Infinity Pool",
      description: "Our rooftop infinity pool offers breathtaking views of the city skyline. Relax in the sun loungers or enjoy a refreshing swim.",
      image: defaultImages.pool,
      hours: "6:00 AM - 10:00 PM",
    },
    {
      id: 2,
      name: "Luxury Spa",
      description: "Indulge in our world-class spa treatments. Our experienced therapists offer a range of massages and beauty treatments.",
      image: defaultImages.spa,
      hours: "9:00 AM - 9:00 PM",
    },
    {
      id: 3,
      name: "Fitness Center",
      description: "Stay fit during your stay with our state-of-the-art fitness equipment and personal training services.",
      image: defaultImages.gym,
      hours: "24/7 Access",
    },
    {
      id: 4,
      name: "Business Center",
      description: "Full-service business center with meeting rooms, video conferencing facilities, and secretarial services.",
      image: defaultImages.businessCenter,
      hours: "7:00 AM - 9:00 PM",
    },
  ];

  const services = [
    "24/7 Concierge",
    "Valet Parking",
    "Room Service",
    "Laundry Service",
    "Airport Transfer",
    "Currency Exchange",
    "Childcare Services",
    "Tour Desk",
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Hotel Amenities</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience luxury and comfort with our world-class amenities and services.
        </p>

        {/* Main Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{amenity.name}</h2>
                <p className="text-gray-600 mb-4">{amenity.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Opening Hours: {amenity.hours}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow">
                <svg className="w-6 h-6 text-gray-900 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Something Special?</h2>
          <p className="text-gray-600 mb-6">
            Our concierge team is available 24/7 to assist you with any special requests.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800">
            Contact Concierge
          </button>
        </div>
      </div>
    </div>
  );
} 