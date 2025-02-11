import Image from "next/image";
import { defaultImages } from "../config";

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "25+" },
    { label: "Luxury Rooms", value: "200+" },
    { label: "Happy Guests", value: "50K+" },
    { label: "Awards Won", value: "100+" },
  ];

  const team = [
    {
      name: "John Smith",
      position: "General Manager",
      image: defaultImages.team1,
    },
    {
      name: "Sarah Johnson",
      position: "Executive Chef",
      image: defaultImages.team2,
    },
    {
      name: "Michael Brown",
      position: "Guest Relations Manager",
      image: defaultImages.team3,
    },
    {
      name: "Emily Davis",
      position: "Spa Director",
      image: defaultImages.team4,
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About Rajini Hotel</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A legacy of luxury and excellence in hospitality since 1998.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/hotel-history.jpg"
              alt="Hotel History"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 1998, Rajini Hotel has been a symbol of luxury and excellence in hospitality.
                What started as a boutique hotel has grown into one of the most prestigious hotels in the region.
              </p>
              <p>
                Our commitment to providing exceptional service and creating memorable experiences for our guests
                has earned us numerous accolades and a loyal clientele from around the world.
              </p>
              <p>
                Today, we continue to set new standards in luxury hospitality while maintaining the warm,
                personalized service that has been our hallmark for over two decades.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 rounded-lg p-12 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from service to amenities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Personalization</h3>
            <p className="text-gray-600">
              We believe in creating unique, personalized experiences for each guest.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Passion</h3>
            <p className="text-gray-600">
              Our passion for hospitality drives us to exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 