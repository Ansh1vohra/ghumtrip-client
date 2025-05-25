'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <div className="text-xl font-bold text-blue-600">Ghumtrip</div>
      <div className="flex gap-6 text-gray-700">
        <Link href="/" className={pathname === '/' ? 'font-semibold text-blue-600' : ''}>Home</Link>
        <Link href="/packages" className={pathname === '/packages' ? 'font-semibold text-blue-600' : ''}>Packages</Link>
      </div>
    </nav>
  );
};

export default Navbar;
