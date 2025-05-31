'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Navbar from '@/components/Navbar';

const packages = [
  {
    title: 'Romantic Goa Getaway',
    nights: 3,
    days: 4,
    meals: 'Breakfast Included',
    price: '₹9,999',
    image: '/Images/goa.jpg',
    slug: 'romantic-goa-getaway',
  },
  {
    title: 'Shimla & Manali Tour',
    nights: 5,
    days: 6,
    meals: 'All Meals Included',
    price: '₹14,999',
    image: '/Images/manali.jpg',
    slug: 'shimla-manali-tour',
  },
  {
    title: 'Kerala Backwaters Bliss',
    nights: 4,
    days: 5,
    meals: 'Houseboat Stay',
    price: '₹12,500',
    image: '/Images/kerala.jpg',
    slug: 'kerala-backwaters-bliss',
  },
  {
    title: 'Dubai Adventure',
    nights: 5,
    days: 6,
    meals: 'Breakfast & Dinner',
    price: '₹29,999',
    image: '/Images/Dubai.jpg',
    slug: 'dubai-adventure',
  },
  {
    title: 'Singapore City Escape',
    nights: 4,
    days: 5,
    meals: 'All Meals Included',
    price: '₹24,999',
    image: '/Images/Singapore.jpg',
    slug: 'singapore-city-escape',
  },
  {
    title: 'Amazing Thailand Tour',
    nights: 5,
    days: 6,
    meals: 'Breakfast Included',
    price: '₹19,999',
    image: '/Images/Thailand.jpg',
    slug: 'amazing-thailand-tour',
  },
  {
    title: 'Ayodya Temple Tour',
    nights: 3,
    days: 4,
    meals: 'Breakfast Included',
    price: '₹8,999',
    image: '/Images/Ayodhya.jpg',
    slug: 'ayodya-temple-tour',
  },
  {
    title: 'Mathura Vrindavan Pilgrimage',
    nights: 2,
    days: 3,
    meals: 'Breakfast Included',
    price: '₹6,999',
    image: '/Images/Mathura.jpg',
    slug: 'mathura-vrindavan-pilgrimage',
  },
  {
    title: 'Haridwar Rishikesh Spiritual Retreat',
    nights: 3,
    days: 4,
    meals: 'Houseboat Stay',
    price: '₹7,500',
    image: '/Images/Haridwar.jpg',
    slug: 'haridwar-rishikesh-retreat',
  },
  {
    title: 'Kedarnath Yatra',
    nights: 3,
    days: 4,
    meals: 'Houseboat Stay',
    price: '₹10,500',
    image: '/Images/KedarNath.jpg',
    slug: 'kedarnath-yatra',
  },
  {
    title: 'Badrinath Yatra',
    nights: 3,
    days: 4,
    meals: 'Houseboat Stay',
    price: '₹10,500',
    image: '/Images/Badrinath.jpg',
    slug: 'badrinath-yatra',
  },
];

export default function PackagesPage() {
  const [search, setSearch] = useState('');
  const filteredPackages = packages.filter(pkg =>
    pkg.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Navbar /> 
      <div className="bg-gradient-to-b from-blue-100 via-white to-white min-h-screen py-10 px-4">
        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search Destinations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-4 rounded-lg bg-white/95 backdrop-blur-sm border-2 border-white/30 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 focus:outline-none text-lg placeholder-gray-600/80"
          />
          <span className="absolute right-4 top-4 text-2xl text-gray-500">🔍</span>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-12 max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
          >
            {packages.map((pkg, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[500px] relative rounded-xl overflow-hidden">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    layout="fill"
                    objectFit="cover"
                    className="hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white">{pkg.title}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Packages Grid */}
        <section className="py-12 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Exclusive Travel Packages</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Choose the best plan for your next adventure</p>
          </div>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPackages.length > 0 ? (
              filteredPackages.map((pkg, index) => (
                <Link key={index} href={`/packages/${pkg.slug}`}>
                  <article className="rounded-xl border shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                    <div className="relative h-60 w-full">
                      <Image
                        src={pkg.image}
                        alt={pkg.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-xl"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                      <div className="text-gray-600 space-y-1 mb-4">
                        <p>{pkg.nights} Nights | {pkg.days} Days</p>
                        <p>{pkg.meals}</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg text-blue-600">{pkg.price}</span>
                        <span className="text-blue-500 font-medium">View More →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500 py-12">
                No packages found matching your search
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}