'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';

const packages = [
  {
    slug: 'romantic-goa-getaway',
    title: 'Romantic Goa Getaway',
    nights: 3,
    days: 4,
    meals: 'Breakfast Included',
    price: '₹9,999',
    image:'/Images/goa.jpg',
    description: 'Enjoy a romantic escape to Goa with beach walks, candlelight dinners and more.'
  },
  {
    slug: 'shimla-manali-tour',
    title: 'Shimla & Manali Tour',
    nights: 5,
    days: 6,
    meals: 'All Meals Included',
    price: '₹14,999',
    image:'/Images/manali.jpg',
    description: 'Snow-covered peaks, scenic drives, and cozy mountain stays await you.'
  },
  {
    title: 'Kerala Backwaters Bliss',
    nights: 4,
    days: 5,
    meals: 'Houseboat Stay',
    price: '₹12,500',
    image:'/Images/kerala.jpg',
    slug: 'kerala-backwaters-bliss',
    description: 'Cruise through Kerala’s tranquil backwaters on a traditional houseboat, surrounded by lush greenery and coconut palms.'
  },
  {
    title: 'Dubai Adventure',
    nights: 5,
    days: 6,
    meals: 'Breakfast & Dinner',
    price: '₹29,999',
    image:'/Images/Dubai.jpg',
    slug: 'dubai-adventure',
    description: 'Experience the thrill of desert safaris, luxury shopping, and iconic skyscrapers in the heart of the UAE.'
  },
  {
    title: 'Singapore City Escape',
    nights: 4,
    days: 5,
    meals: 'All Meals Included',
    price: '₹24,999',
    image:'/Images/Singapore.jpg',
    slug: 'singapore-city-escape',
    description: 'Discover Singapore’s vibrant culture, lush gardens, and futuristic skyline on a perfect city escape.'
  },
  {
    title: 'Amazing Thailand Tour',
    nights: 5,
    days: 6,
    meals: 'Breakfast Included',
    price: '₹19,999',
    image:'/Images/Thailand.jpg',
    slug: 'amazing-thailand-tour',
    description: 'Explore the temples, beaches, and street food of Thailand for an unforgettable Southeast Asian adventure.'
  },
  {
    title: 'Ayodya Temple Tour',
    nights: 3,
    days: 4,
    meals: 'Breakfast Included',
    price: '₹8,999',
    image:'/Images/Ayodhya.jpg',
    slug: 'ayodya-temple-tour',
    description: 'Visit the sacred city of Ayodhya, rich in religious history and spiritual significance.'
  },
  {
    title: 'Mathura Vrindavan Pilgrimage',
    nights: 2,
    days: 3,
    meals: 'Breakfast Included',
    price: '₹6,999',
    image:'/Images/Mathura.jpg',
    slug: 'mathura-vrindavan-pilgrimage',
    description: 'Walk through the legendary towns of Mathura and Vrindavan, immersed in Lord Krishna’s divine pastimes.'
  },
  {
    title: 'Haridwar Rishikesh Spiritual Retreat',
    nights: 3,
    days: 4,
    meals: 'Houseboat Stay',
    price: '₹7,500',
    image:'/Images/Haridwar.jpg',
    slug: 'haridwar-rishikesh-retreat',
    description: 'Rejuvenate your soul with Ganga Aarti in Haridwar and yoga by the riverbanks in Rishikesh.'
  },
  {
    title: 'Kedarnath Yatra',
    nights: 3,
    days: 4,
    meals: 'Houseboat Stay',
    price: '₹10,500',
    image:'/Images/KedarNath.jpg',
    slug: 'kedarnath-yatra',
    description: 'Embark on a spiritual trek to one of India’s holiest shrines nestled in the Himalayas.'
  },
  {
    title: 'Badrinath Yatra',
    nights: 3,
    days: 4,
    meals: 'Houseboat Stay',
    price: '₹10,500',
    image:'/Images/Badrinath.jpg',
    slug: 'badrinath-yatra',
    description: 'Seek blessings at the sacred Badrinath Temple, surrounded by majestic mountain views and serenity.'
  }
];

interface PackageDetailsProps {
  params: {
    slug: string;
  };
}

export default function PackageDetails({ params }: PackageDetailsProps) {
  const { slug } = params;

  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  // State for booking modal open/close
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle form input changes
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // Form submit handler
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log('Booking Data:', { package: pkg?.title, ...formData });

    // For now just alert success and close modal
    alert('Thank you for booking! We will contact you soon.');
    setIsBookingOpen(false);

    // Reset form data
    setFormData({ name: '', email: '', phone: '', message: '' });
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-6">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-xl"
          priority
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">{pkg.title}</h1>
      <p className="text-gray-600 mb-4">{pkg.description}</p>

      <ul className="text-lg mb-6 space-y-2">
        <li>🛌 {pkg.nights} Nights | {pkg.days} Days</li>
        <li>🍽️ {pkg.meals}</li>
        <li>
          💰 <span className="text-blue-600 font-bold">{pkg.price}</span>
        </li>
      </ul>

      <button
        onClick={() => setIsBookingOpen(true)}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Book This Package
      </button>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal on clicking inside form
          >
            <h2 className="text-2xl font-bold mb-4">Book: {pkg.title}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500"
              />
              <input
                required
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500"
              />
              <textarea
                name="message"
                placeholder="Additional Message (optional)"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500"
                rows={3}
              ></textarea>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}