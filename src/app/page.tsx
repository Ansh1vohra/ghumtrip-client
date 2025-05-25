
import Link from 'next/link';

export default function Home() {
  const options = ['Flights', 'Hotels', 'Trains', 'Packages'];

  return (
    <>
   
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Where would you like to go?</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {options.map(option => (
            option === 'Packages' ? (
              <Link
                key={option}
                href="/packages"
                className="bg-blue-100 hover:bg-blue-200 text-blue-700 font-semibold py-6 px-4 rounded text-center"
              >
                {option}
              </Link>
            ) : (
              <div
                key={option}
                className="bg-gray-100 text-gray-700 py-6 px-4 rounded text-center"
              >
                {option}
              </div>
            )
          ))}
        </div>
      </div>
    </>
  );
}
