import Image from "next/image";
import { defaultImages } from "../config";

export default function RoomsPage() {
  const rooms = [
    {
      id: 1,
      name: "Chalets",
      description: "Cozy chalets with scenic views and essential amenities",
      basePrice: 22000,
      image: defaultImages.deluxeRoom,
      amenities: ["Lake View", "AC", "TV", "Mini Fridge", "Private Locker", "Pool Access"],
      moreAmenities: 3,
      rates: {
        twoPersons: {
          roomOnly: { price: 22000, label: "Room Only" },
          bedAndBreakfast: { price: 24000, label: "Bed & Breakfast" },
          halfBoard: { price: 26000, label: "Half Board" },
          fullBoard: { price: 28000, label: "Full Board" },
        },
        extraBed: { price: 4000, label: "Extra Bed" }
      }
    },
    {
      id: 2,
      name: "Delux Room",
      description: "Spacious rooms with modern amenities and lake views",
      basePrice: 23000,
      image: defaultImages.suite,
      amenities: ["Lake View", "AC", "TV", "Mini Fridge", "Private Locker", "Pool Access"],
      moreAmenities: 3,
      rates: {
        twoPersons: {
          roomOnly: { price: 23000, label: "Room Only" },
          bedAndBreakfast: { price: 26000, label: "Bed & Breakfast" },
          halfBoard: { price: 29000, label: "Half Board" },
          fullBoard: { price: 32000, label: "Full Board" },
        },
        threePersons: {
          roomOnly: { price: 26000, label: "Room Only" },
          bedAndBreakfast: { price: 29000, label: "Bed & Breakfast" },
          halfBoard: { price: 33000, label: "Half Board" },
          fullBoard: { price: 38000, label: "Full Board" },
        },
        extraBed: { price: 4000, label: "Extra Bed" }
      }
    },
    {
      id: 3,
      name: "Super Delux Room",
      description: "Premium rooms offering the ultimate luxury experience",
      basePrice: 25000,
      image: defaultImages.presidentialSuite,
      amenities: ["Lake View", "AC", "TV", "Mini Fridge", "Private Locker", "Pool Access"],
      moreAmenities: 3,
      rates: {
        twoPersons: {
          roomOnly: { price: 25000, label: "Room Only" },
          bedAndBreakfast: { price: 28000, label: "Bed & Breakfast" },
          halfBoard: { price: 31000, label: "Half Board" },
          fullBoard: { price: 34000, label: "Full Board" },
        },
        threePersons: {
          roomOnly: { price: 28000, label: "Room Only" },
          bedAndBreakfast: { price: 31000, label: "Bed & Breakfast" },
          halfBoard: { price: 34000, label: "Half Board" },
          fullBoard: { price: 37000, label: "Full Board" },
        },
        extraBed: { price: 4000, label: "Extra Bed" }
      }
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-400)] to-[var(--gold-500)]">
          Our Rooms & Suites
        </h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Experience comfort and luxury with our range of accommodations
        </p>
        
        <div className="space-y-12">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <div className="absolute top-4 left-4 bg-[var(--gold-400)] text-white px-4 py-2 rounded-full font-semibold z-10">
                    From LKR {room.basePrice.toLocaleString()}.00
                  </div>
                  <Image
                    src={room.image}
                    alt={room.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-2 text-[var(--gold-400)]">{room.name}</h2>
                  <p className="text-gray-600 mb-6">{room.description}</p>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {room.amenities.map((amenity, index) => (
                      <span key={index} className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">
                        {amenity}
                      </span>
                    ))}
                    {room.moreAmenities > 0 && (
                      <span className="px-3 py-1 bg-[var(--gold-50)] text-[var(--gold-500)] rounded-full text-sm">
                        +{room.moreAmenities} more
                      </span>
                    )}
                  </div>

                  {/* Rates for 2 Persons */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-[var(--gold-400)]">2 People</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(room.rates.twoPersons).map(([key, rate]) => (
                        <div key={key}>
                          <p className="text-sm text-gray-500">{rate.label}</p>
                          <p className="font-semibold">LKR {rate.price.toLocaleString()}.00</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Rates for 3 Persons if available */}
                  {room.rates.threePersons && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold mb-3 text-[var(--gold-400)]">3 People</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {Object.entries(room.rates.threePersons).map(([key, rate]) => (
                          <div key={key}>
                            <p className="text-sm text-gray-500">{rate.label}</p>
                            <p className="font-semibold">LKR {rate.price.toLocaleString()}.00</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Extra Bed Rate */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">{room.rates.extraBed.label}</p>
                      <p className="font-semibold">LKR {room.rates.extraBed.price.toLocaleString()}.00</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button className="flex-1 btn-outline-gold px-6 py-3 rounded-md">
                      View Details
                    </button>
                    <button className="flex-1 btn-gold px-6 py-3 rounded-md">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 