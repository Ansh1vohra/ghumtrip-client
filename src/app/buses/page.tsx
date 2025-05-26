import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function BusPage() {
  return (
    <>
      <div
        className={`${poppins.className} bg-[url(/Images/bus-mountain.jpg)] bg-cover h-[100vh] p-4`}
      >
        {/* For mobile devices */}
        <nav className='md:hidden flex items-center text-2xl mb-4'>
          <Link href={"/"} className='mr-4'>
            <IoIosArrowBack />
          </Link>
          <span>Bus Ticket Booking</span>
        </nav>

        <main>
          {/* Booking section */}
          <div className='mb-24'>
            <div className='hidden md:block text-center mb-4'>
              <h1>Search buses</h1>
              <p>Enjoy hassle-free booking with Ghumtrip</p>
            </div>
            <div className='md:flex md:h-32 md:mb-4'>
              <input
                type='text'
                placeholder='Leaving from'
                className='h-8 w-full mb-4 border border-white/50 px-2 rounded-md md:h-full md:text-4xl lg:text-7xl md:rounded-r-none'
              />
              <input
                type='text'
                placeholder='Going to'
                className='h-8 w-full mb-4 border border-white/50 px-2 rounded-md md:h-full md:text-4xl lg:text-7xl md:rounded-none'
              />
              <input
                type='date'
                className='h-8 w-full mb-4 border border-white/50 px-2 rounded-md md:h-full md:w-fit md:text-2xl md:rounded-l-none'
              />
            </div>
            <div className='md:h-16 md:w-[50vw] md:m-auto'>
              <Link href={"/bus"}>
                <button className='h-8 w-full rounded-md bg-blue-500 md:h-full md:text-4xl md:w-[50vw]'>
                  Search buses
                </button>
              </Link>
            </div>
          </div>

          <div className='bg-black/60 rounded p-4'>
            <h2>Offers on Bus Booking at Ghumtrip</h2>
            <p>
              Ghumtrip makes bus travel more affordable and enjoyable. It offers
              fantastic bus booking offers throughout the year, ensuring you get
              the best deal. One standout perk when booking through Ghumtrip is
              the zero convenience fee on bus bookings made through their app.
              It means no extra charges or hidden fees—just the price of your
              ticket. Additionally, Ghumtrip frequently runs special discounts
              during peak travel seasons, such as holidays and festive periods,
              giving you more opportunities to save. Whether planning a weekend
              getaway or a long vacation, you can always find a deal to help
              stretch your travel budget. Be sure to regularly check the app for
              the latest online bus reservation deals. With these offers, you
              can feel confident that you're starting your journey with the best
              price, leaving you more to spend on experiences along the way.
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
