import Image from "next/image";
import { defaultImages } from "../config";

export default function AmenitiesPage() {
  const mainAmenities = [
    {
      id: 1,
      name: "Air Conditioning",
      description: "Stay comfortable with modern climate control in all rooms",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.25 4.75h5.5v3.5h-5.5v-3.5zM7.75 14.75h8.5M12 8.25v6.5M15.75 17.75l-1.5-3h-4.5l-1.5 3M6.75 19.25h10.5M4.75 8.75h14.5" />
        </svg>
      ),
    },
    {
      id: 2,
      name: "Smart TV",
      description: "Modern flat-screen TVs with satellite channels",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17.25v-6m4.5 6v-6M7.75 7.75h8.5v9.5h-8.5v-9.5zM5.75 4.75h12.5v14.5H5.75V4.75z" />
        </svg>
      ),
    },
    {
      id: 3,
      name: "Mini Fridge",
      description: "Keep your beverages and snacks cool",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.75 4.75h12.5v14.5H5.75V4.75zM12 4.75v14.5M8.75 8.75h-1M8.75 12.75h-1" />
        </svg>
      ),
    },
    {
      id: 4,
      name: "Private Locker",
      description: "Secure storage for your valuables",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15.75v-4.5M8.75 7.75h6.5v8.5h-6.5v-8.5zM6.75 4.75h10.5v14.5H6.75V4.75z" />
        </svg>
      ),
    },
    {
      id: 5,
      name: "Pool Access",
      description: "Complimentary access to our swimming pool",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.75 12.75c2 1.5 4.5 1.5 6.5 0 2-1.5 4.5-1.5 6.5 0M4.75 15.75c2 1.5 4.5 1.5 6.5 0 2-1.5 4.5-1.5 6.5 0M4.75 9.75c2 1.5 4.5 1.5 6.5 0 2-1.5 4.5-1.5 6.5 0" />
        </svg>
      ),
    },
    {
      id: 6,
      name: "Free WiFi",
      description: "High-speed internet access throughout the property",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
    {
      id: 7,
      name: "24/7 Service",
      description: "Round-the-clock assistance for your needs",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const facilities = [
    {
      id: 1,
      name: "Swimming Pool",
      description: "Our infinity pool offers breathtaking views of the surroundings",
      image: defaultImages.pool,
      hours: "6:00 AM - 10:00 PM",
    },
    {
      id: 2,
      name: "Restaurant",
      description: "Enjoy local and international cuisine with scenic views",
      image: defaultImages.restaurant1,
      hours: "6:30 AM - 10:30 PM",
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
          Amenities & Services
        </h1>
        <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Experience comfort and convenience with our comprehensive range of amenities
        </p>

        {/* Room Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {mainAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-[var(--gold-400)] mb-4">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">
                {amenity.name}
              </h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Facilities */}
        <h2 className="text-3xl font-bold mb-12 text-center text-[var(--gold-400)]">
          Hotel Facilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={facility.image}
                  alt={facility.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[var(--gold-400)]">
                  {facility.name}
                </h3>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-5 h-5 mr-2 text-[var(--gold-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {facility.hours}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 