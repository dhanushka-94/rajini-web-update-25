import Image from "next/image";
import { defaultImages } from "../config";

export default function OffersPage() {
  const offers = [
    {
      id: 1,
      title: "Early Bird Special",
      description: "Book 60 days in advance and save up to 25% on your stay. Includes complimentary breakfast and airport transfer.",
      validUntil: "2024-12-31",
      discount: "25%",
      image: defaultImages.room,
      code: "EARLY25",
      terms: [
        "Must book 60 days in advance",
        "Full prepayment required",
        "Non-refundable",
        "Subject to availability",
      ],
    },
    {
      id: 2,
      title: "Weekend Getaway",
      description: "Enjoy a luxurious weekend stay with spa credits and dining discounts. Perfect for couples seeking a romantic escape.",
      validUntil: "2024-12-31",
      perks: ["$100 Spa Credit", "20% Off Dining", "Late Checkout"],
      image: defaultImages.spa,
      code: "WEEKEND",
      terms: [
        "Valid for Friday to Sunday stays",
        "Minimum 2 nights stay",
        "Subject to availability",
      ],
    },
    {
      id: 3,
      title: "Family Package",
      description: "Create unforgettable memories with our family package including connecting rooms, kids' activities, and family dining benefits.",
      validUntil: "2024-12-31",
      perks: ["50% Off Second Room", "Kids Eat Free", "Family Activities"],
      image: defaultImages.deluxeRoom,
      code: "FAMILY",
      terms: [
        "Valid for families with children under 12",
        "Minimum 3 nights stay",
        "Subject to availability",
      ],
    },
    {
      id: 4,
      title: "Honeymoon Special",
      description: "Begin your journey together with our romantic honeymoon package featuring luxury suite accommodation and special amenities.",
      validUntil: "2024-12-31",
      perks: ["Champagne on Arrival", "Romantic Dinner", "Spa Treatment"],
      image: defaultImages.suite,
      code: "HONEY",
      terms: [
        "Valid within 6 months of wedding date",
        "Minimum 4 nights stay",
        "Marriage certificate required",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Special Offers</h1>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Discover our exclusive offers and packages designed to make your stay even more special.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((offer) => (
            <div key={offer.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 badge-gold px-4 py-2 rounded-full font-semibold">
                  {offer.discount || "Special Offer"}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-[var(--gold-400)]">{offer.title}</h2>
                <p className="text-gray-600 mb-4">{offer.description}</p>

                {offer.perks && (
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2 text-[var(--gold-500)]">Package Inclusions:</h3>
                    <ul className="space-y-1">
                      {offer.perks.map((perk, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="mr-2 text-[var(--gold-400)]">✓</span>
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-4">
                  <h3 className="font-semibold mb-2 text-[var(--gold-500)]">Terms & Conditions:</h3>
                  <ul className="space-y-1">
                    {offer.terms.map((term, index) => (
                      <li key={index} className="text-sm text-gray-600">
                        <span className="text-[var(--gold-400)]">•</span> {term}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-6 pt-6 border-t border-[var(--gold-100)]">
                  <div>
                    <p className="text-sm text-gray-500">Promo Code</p>
                    <p className="font-mono font-bold text-lg text-[var(--gold-400)]">{offer.code}</p>
                  </div>
                  <button className="btn-gold px-6 py-3 rounded-md">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-[var(--gold-50)] rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[var(--gold-400)]">Stay Updated</h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to receive exclusive offers and updates.
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