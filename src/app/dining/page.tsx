import Image from "next/image";
import { defaultImages } from "../layout";

export default function DiningPage() {
  const restaurants = [
    {
      id: 1,
      name: "The Grand Restaurant",
      description: "Experience fine dining at its best with our international cuisine prepared by world-renowned chefs.",
      cuisine: "International",
      openingHours: "7:00 AM - 11:00 PM",
      image: defaultImages.restaurant1,
      dress: "Smart Casual",
    },
    {
      id: 2,
      name: "Asian Fusion",
      description: "A perfect blend of traditional Asian flavors with a modern twist.",
      cuisine: "Asian Fusion",
      openingHours: "12:00 PM - 10:30 PM",
      image: defaultImages.restaurant2,
      dress: "Casual",
    },
    {
      id: 3,
      name: "Sky Lounge",
      description: "Enjoy breathtaking views while sipping on premium cocktails and enjoying light bites.",
      cuisine: "International",
      openingHours: "4:00 PM - 12:00 AM",
      image: defaultImages.restaurant3,
      dress: "Smart Casual",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Dining Experience</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Indulge in exceptional culinary experiences at our award-winning restaurants and bars.
        </p>

        <div className="space-y-16">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-72 md:h-96">
                  <Image
                    src={restaurant.image}
                    alt={restaurant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{restaurant.name}</h2>
                  <p className="text-gray-600 mb-6">{restaurant.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm text-gray-500">Cuisine</h3>
                      <p className="font-semibold">{restaurant.cuisine}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Opening Hours</h3>
                      <p className="font-semibold">{restaurant.openingHours}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500">Dress Code</h3>
                      <p className="font-semibold">{restaurant.dress}</p>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-4">
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800">
                      Reserve a Table
                    </button>
                    <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-50">
                      View Menu
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Private Dining</h2>
          <p className="text-gray-600 mb-6">
            Looking for an exclusive dining experience? Our private dining rooms offer the perfect setting for special occasions and business meetings.
          </p>
          <button className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800">
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
} 