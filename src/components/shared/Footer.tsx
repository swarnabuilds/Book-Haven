import Image from "next/image";
import logo from '@/assets/book.ico';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-emerald-500 mt-20">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="p-2 bg-pink-100/10 rounded-xl">
                <Image src={logo} alt="logo" width={32} height={32} className="object-contain" />
              </div>
              <span className="text-2xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-pink-400 bg-clip-text text-transparent tracking-tight">
                Book Vibe
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Discover, read, and organize your favorite books in one place. Your ultimate personal library companion to keep your reading vibes alive.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg border-l-2 border-emerald-500 pl-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><Link href="/books" className="hover:text-emerald-400 transition-colors">Books</Link></li>
              <li><Link href="/listed-books" className="hover:text-emerald-400 transition-colors">Listed Books</Link></li>
              <li><Link href="/read-books" className="hover:text-emerald-400 transition-colors">Read Books</Link></li>
            </ul>
          </div>

          {/* Categories Links */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg border-l-2 border-pink-500 pl-3">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/books" className="hover:text-pink-400 transition-colors">Fiction</Link></li>
              <li><Link href="/books" className="hover:text-pink-400 transition-colors">Non-Fiction</Link></li>
              <li><Link href="/books" className="hover:text-pink-400 transition-colors">Sci-Fi & Fantasy</Link></li>
              <li><Link href="/books" className="hover:text-pink-400 transition-colors">Self-Help</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="/" className="hover:text-slate-400 transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;