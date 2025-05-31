{/* Footer */ }
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-50 py-12 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4 font-serif tracking-wide">Ghumtrip</h3>
                    <p className="text-cream-200">Crafting Royal Journeys Since 2025</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 font-serif tracking-wide">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="text-cream-200 hover:text-gold-400 transition-colors">About Us</Link></li>
                        <li><Link href="/support" className="text-cream-200 hover:text-gold-400 transition-colors">Support</Link></li>
                        <li><Link href="/policies" className="text-cream-200 hover:text-gold-400 transition-colors">Policies</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4 font-serif tracking-wide">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">Facebook</a>
                        <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">Twitter</a>
                        <a href="#" className="text-cream-200 hover:text-gold-400 transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="text-center text-cream-200 mt-8">
                © 2025 Ghumtrip. All Rights Reserved.
            </div>
        </footer>
    )
}