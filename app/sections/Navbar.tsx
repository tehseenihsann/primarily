import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow">
      <div className="flex items-center gap-8">
        <Link href="/" className="font-bold text-xl text-emerald-600">Primarily</Link>
        <div className="hidden md:flex gap-6">
          <Link href="/features" className="hover:text-emerald-600">Features</Link>
          <Link href="/solutions" className="hover:text-emerald-600">Solutions</Link>
          <Link href="/learn" className="hover:text-emerald-600">Learn</Link>
          <Link href="/enterprise" className="hover:text-emerald-600">Enterprise</Link>
          <Link href="/pricing" className="hover:text-emerald-600">Pricing</Link>
        </div>
      </div>
      <div className="flex gap-4">
        <Link href="/login" className="bg-gray-300 text-black px-4 py-2 rounded-full font-semibold hover:bg-gray-400 transition">Login</Link>
        <Link href="/login">
          <button className="bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-700 transition cursor-pointer">
            Start Free Trial
          </button>
        </Link>
      </div>
    </nav>
  );
}
