
"use client";
import { useState } from 'react';
import Navbar from "@/components/Navbar";

interface Hotel {
  id: number;
  name: string;
  location: string;
  price: number;
  rating: number;
  stars: number;
  amenities: string[];
  deal?: string;
}

interface Offer {
  id: number;
  title: string;
  code: string;
  description: string;
}

export default function Hotels() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    starRating: [] as number[],
    amenities: [] as string[],
    hotelType: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [activeOffer, setActiveOffer] = useState<number | null>(null);

  // Sample data
  const hotels: Hotel[] = [
    {
      id: 1,
      name: 'The Park Chennai',
      location: 'Chennai',
      price: 4500,
      rating: 4.5,
      stars: 5,
      amenities: ['Free WiFi', 'Pool', 'Restaurant', 'Spa'],
      deal: '10% OFF',
    },
    {
      id: 2,
      name: 'Country Inn & Suites By Radisson',
      location: 'Bangalore',
      price: 3200,
      rating: 4.2,
      stars: 4,
      amenities: ['Free WiFi', 'Breakfast', 'Gym'],
      deal: '5% OFF with HDFC',
    },
    {
      id: 3,
      name: 'Lemon Tree Premier',
      location: 'Mumbai',
      price: 3800,
      rating: 4.3,
      stars: 4,
      amenities: ['Free WiFi', 'Airport Shuttle', 'Restaurant'],
    },
    {
      id: 4,
      name: 'Golden Tulip Suites',
      location: 'Gurgaon',
      price: 5200,
      rating: 4.6,
      stars: 5,
      amenities: ['Free WiFi', 'Pool', 'Spa', 'Gym', 'Restaurant'],
      deal: '15% OFF Weekend Special',
    },
    {
      id: 5,
      name: 'The Fern Residency',
      location: 'Jaipur',
      price: 2800,
      rating: 4.1,
      stars: 3,
      amenities: ['Free WiFi', 'Restaurant'],
    },
  ];

  const offers: Offer[] = [
    {
      id: 1,
      title: '5% - 30% Off up to ₹4,000 on Domestic and International Hotels',
      code: 'GHUMHOTEL',
      description: 'Use code GHUMHOTEL for instant discount',
    },
    {
      id: 2,
      title: 'Up to 30% off on Hotels with HDFC Bank Credit Card',
      code: 'HDFCCC',
      description: 'HDFC Bank Credit Card & EMI Transactional',
    },
    {
      id: 3,
      title: 'Up to 4000 off on International Hotels',
      code: 'GHUMINTL',
      description: 'Book international hotels with this offer',
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching with:', searchParams);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };

  const toggleFilter = (filterType: string, value: number | string) => {
    if (filterType === 'starRating') {
      const numValue = value as number;
      const newRatings = filters.starRating.includes(numValue)
        ? filters.starRating.filter((r) => r !== numValue)
        : [...filters.starRating, numValue];
      setFilters({ ...filters, starRating: newRatings });
    } else {
      setFilters({ ...filters, [filterType]: value });
    }
  };

  const formatDate = (date: string) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-IN');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Book Hotels Online</h1>
          <p className="text-gray-600">With Ghumtrip, booking a hotel online doesn't get simpler</p>
        </header>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City/Locality/Hotel</label>
              <input
                type="text"
                name="location"
                value={searchParams.location}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter city, locality or hotel name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-in</label>
              <input
                type="date"
                name="checkIn"
                value={searchParams.checkIn}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Check-out</label>
              <input
                type="date"
                name="checkOut"
                value={searchParams.checkOut}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
              <select
                name="guests"
                value={searchParams.guests}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="md:col-span-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Search Hotels
            </button>
          </form>
        </div>

        {/* Offers Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Special Offers on Hotel Bookings</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className={`p-4 rounded-lg border ${activeOffer === offer.id ? 'bg-blue-600 text-white border-blue-600' : 'bg-blue-50 border-blue-200'}`}
                onClick={() => setActiveOffer(offer.id)}
              >
                <h3 className="font-medium mb-2">{offer.title}</h3>
                <p className="text-sm mb-2">{offer.description}</p>
                <div className={`text-sm font-semibold ${activeOffer === offer.id ? 'text-blue-100' : 'text-blue-600'}`}>
                  Use code: {offer.code}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className="w-full md:w-64">
            <button
              className="md:hidden bg-blue-600 text-white py-2 px-4 rounded-md mb-4 w-full"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>

            <div className={`bg-white rounded-lg shadow-md p-4 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Price Range (₹)</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm">0</span>
                  <input
                    type="range"
                    min="0"
                    max="50000"
                    step="1000"
                    value={filters.priceRange[1]}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        priceRange: [filters.priceRange[0], parseInt(e.target.value)],
                      })
                    }
                    className="flex-1"
                  />
                  <span className="text-sm">50,000+</span>
                </div>
                <div className="text-center font-medium text-blue-600">
                  ₹0 - ₹{filters.priceRange[1].toLocaleString('en-IN')}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Star Rating</h3>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`stars-${stars}`}
                      checked={filters.starRating.includes(stars)}
                      onChange={() => toggleFilter('starRating', stars)}
                      className="mr-2"
                    />
                    <label htmlFor={`stars-${stars}`} className="flex">
                      {Array(stars).fill('★').join('')}
                      {stars < 5 && Array(5 - stars).fill('☆').join('')}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-800 mb-3">Amenities</h3>
                {['Free WiFi', 'Pool', 'Restaurant', 'Spa', 'Gym', 'Breakfast'].map((amenity) => (
                  <div key={amenity} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`amenity-${amenity}`}
                      checked={filters.amenities.includes(amenity)}
                      onChange={() => {
                        const newAmenities = filters.amenities.includes(amenity)
                          ? filters.amenities.filter((a) => a !== amenity)
                          : [...filters.amenities, amenity];
                        setFilters({ ...filters, amenities: newAmenities });
                      }}
                      className="mr-2"
                    />
                    <label htmlFor={`amenity-${amenity}`}>{amenity}</label>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-3">Hotel Type</h3>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`px-3 py-1 rounded-md text-sm ${filters.hotelType === 'couple-friendly' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        hotelType: filters.hotelType === 'couple-friendly' ? '' : 'couple-friendly',
                      })
                    }
                  >
                    Couple Friendly
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm ${filters.hotelType === 'luxury' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        hotelType: filters.hotelType === 'luxury' ? '' : 'luxury',
                      })
                    }
                  >
                    Luxury
                  </button>
                  <button
                    className={`px-3 py-1 rounded-md text-sm ${filters.hotelType === 'budget' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'}`}
                    onClick={() =>
                      setFilters({
                        ...filters,
                        hotelType: filters.hotelType === 'budget' ? '' : 'budget',
                      })
                    }
                  >
                    Budget
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Hotel Listings */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Hotels in {searchParams.location || 'Popular Destinations'}
                {searchParams.checkIn &&
                  searchParams.checkOut &&
                  ` from ${formatDate(searchParams.checkIn)} to ${formatDate(searchParams.checkOut)}`}
              </h2>
              <p className="text-gray-600">{hotels.length} properties found</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
                <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gray-200">
                    {/* Placeholder for hotel image */}
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Hotel Image
                    </div>
                    {hotel.deal && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {hotel.deal}
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{hotel.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{hotel.location}</p>
                    <div className="flex items-center mb-3">
                      <span className="text-yellow-400">
                        {Array(Math.floor(hotel.rating)).fill('★').join('')}
                      </span>
                      <span className="ml-1 text-gray-700">{hotel.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {hotel.amenities.slice(0, 3).map((amenity) => (
                        <span key={amenity} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {amenity}
                        </span>
                      ))}
                      {hotel.amenities.length > 3 && (
                        <span className="text-gray-500 text-xs">
                          +{hotel.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bold text-lg">₹{hotel.price.toLocaleString('en-IN')}</p>
                        <p className="text-gray-500 text-sm">per night</p>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-8">Benefits of Booking Hotels on Ghumtrip</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-blue-600 mb-2">Diverse Range of Hotels</h3>
              <p className="text-gray-600 text-sm">From budget stays to luxury resorts</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-blue-600 mb-2">Best Offers</h3>
              <p className="text-gray-600 text-sm">Discounts with bank cards and wallets</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-blue-600 mb-2">Flexible Cancellation</h3>
              <p className="text-gray-600 text-sm">Easy cancellation policies</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg text-center">
              <h3 className="font-medium text-blue-600 mb-2">EMI Options</h3>
              <p className="text-gray-600 text-sm">Pay in installments with 0% interest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}