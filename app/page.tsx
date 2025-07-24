"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./components/ui/Button";
import Navbar from "./sections/Navbar";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      <div>
        <Navbar />
      </div>

      {/* Ratings Section */}
      <section className="flex flex-wrap justify-center gap-4 md:gap-6 py-4 text-xs text-center max-w-screen-xl mx-auto">
        <Image src="/badge-1.svg" alt="Badge 1" width={100} height={100} />
        <Image src="/badge-2.svg" alt="Badge 2" width={100} height={100} />
        <Image src="/badge-3.svg" alt="Badge 3" width={100} height={100} />
        <Image src="/badge-4.svg" alt="Badge 4" width={100} height={100} />
      </section>

      {/* Hero */}
      <section className="text-center px-4 py-8 md:py-12 max-w-screen-xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight">
          <span className="text-emerald-500">Simple</span> Inventory
          <br className="hidden md:block" />
          Management Software.
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl mx-auto text-gray-700">
          The best inventory software for small businesses to manage their physical inventory, including supplies, materials, tools, and equipment.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-7">
          <Link href="/login">
            <Button>Start Free Trial</Button>
          </Link>
          <Link href="/login" className="text-emerald-600 text-md flex flex-row items-center justify-between">
            <span>See All Plans</span><span className="text-md">&gt;</span>
          </Link>
        </div>
      </section>

      {/* Video */}
      <section className="flex justify-center px-2 md:px-4 mb-8 md:mb-12">
        <div className="w-full max-w-2xl md:max-w-6xl aspect-video bg-emerald-300">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/5ioh6O-gCGM?si=XtEMDOB0LV5poMr7"
            title="Primarily Inventory Overview"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Logos */}
      <section className="text-center px-4 mb-8 md:mb-12 mt-16 md:mt-28 max-w-screen-xl mx-auto">
        <p className="font-extrabold text-2xl md:text-4xl text-gray-800">
          Over <span className="text-emerald-600">15,000</span> businesses trust Primarily
        </p>
        <p className="text-2xl md:text-4xl font-extrabold text-gray-800">to track their inventory.</p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-4">
          <Image src="/logo1.png" alt="Schneider" width={180} height={60} />
          <Image src="/logo2.png" alt="Sephora" width={180} height={60} />
          <Image src="/logo3.png" alt="Chewy" width={180} height={60} />
          <Image src="/logo4.png" alt="Kiewit" width={180} height={60} />
          <Image src="/logo5.png" alt="Terminix" width={180} height={60} />
        </div>
      </section>

      {/* Features */}
      <section className="space-y-16 md:space-y-24 px-2 md:px-6 max-w-screen-xl mx-auto">
        {/* Organize */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/org.png" alt="Organize Icon" width={20} height={20} />
              <h1 className="font-bold">Organize</h1>
            </div>
            <h2 className="text-4xl font-bold">Organize and automate your inventory</h2>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>📤 Easily upload your existing inventory list into Primarily.</li>
              <li>📁 Organize inventory folders by location, type, and more.</li>
              <li>🔖 Add critical item details with custom fields.</li>
            </ul>
            <Link href="/login">
              <Button className="mt-4">Start Free Trial</Button>
            </Link>
          </div>
          <div className="col-span-2">
            <Image src="/screen1.png" alt="Organize Screenshot" width={1000} height={600} />
          </div>
        </div>

        {/* Managing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          <div className="col-span-2">
            <Image src="/screen2.png" alt="Manage Screenshot" width={1000} height={600} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/dup.png" alt="Manage Icon" width={20} height={20} />
              <h1 className="font-bold">Managing</h1>
            </div>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>📦 Speed up inventory counts with in-app barcode and QR scanner.</li>
              <li>🖼️ Upload high-resolution photos.</li>
              <li>📱 Get notified when you’re running low on stock.</li>
            </ul>
            <Link href="/login">
              <Button className="mt-4">Start Free Trial</Button>
            </Link>
          </div>
        </div>

        {/* Reporting */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/file.png" alt="Reporting Icon" width={20} height={20} />
              <h1 className="font-bold">Reporting</h1>
            </div>
            <h2 className="text-4xl font-bold">Get real-time reporting insights</h2>
            <ul className="mt-4 space-y-2 text-gray-700 text-xl">
              <li>📁 Drill down data by items, folders, and user histories.</li>
              <li>📊 Easily export custom PDF or CSV reports.</li>
              <li>📈 Perfect for audits, budgeting, and forecasting.</li>
            </ul>
            <Link href="/login">
              <Button className="mt-4">Start Free Trial</Button>
            </Link>
          </div>
          <div className="col-span-2">
            <Image src="/screen3.png" alt="Reporting Screenshot" width={1000} height={600} />
          </div>
        </div>

        {/* Sync */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          <div className="col-span-2">
            <Image src="/screen4.png" alt="Sync Screenshot" width={1000} height={600} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/mobile.png" alt="Mobile Icon" width={20} height={20} />
              <h1 className="font-bold">Synchronization</h1>
            </div>
            <h2 className="text-4xl font-bold">Automatically sync your inventory</h2>
            <p className="mt-4 text-gray-700 text-xl">
              Use Primarily on mobile, desktop, or tablet. Everyone on your team can update inventory in real time from any location.
            </p>
            <Link href="/login">
              <Button className="mt-4">See All Plans</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Inventory Anywhere */}
      <section className="text-center py-10 md:py-16 px-2 md:px-6 max-w-screen-xl mx-auto">
        <div className="mt-6 flex flex-col md:flex-row justify-evenly gap-8 items-center">
          <div>
            <Image src="/screen5.png" alt="Inventory Screenshot" width={600} height={400} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-left">Inventory from anywhere.</h2>
            <p className="my-4 text-gray-600 text-xl">Use our mobile app to access your inventory anytime—even when offline.</p>
            <div className="flex gap-4">
              <Image src="/IOS.svg" alt="App Store" width={120} height={40} />
              <Image src="/google-play.svg" alt="Google Play" width={120} height={40} />
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="text-center bg-gray-50 py-8 md:py-12 px-2 md:px-6 w-full md:w-1/2 flex flex-col mx-auto max-w-screen-xl">
        <h2 className="text-2xl md:text-4xl font-extrabold">Try Primarily inventory software free for 14 days.</h2>
        <p className="text-base md:text-xl text-gray-600 mt-2">
          Track your inventory, supplies, materials, and tools with Primarily and run a more efficient business.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login">
            <Button>Start Free Trial</Button>
          </Link>
          <Link href="/login">
            <button className="bg-transparent border border-emerald-500 px-6 py-2 rounded-full hover:text-white hover:bg-emerald-600 active:bg-emerald-800 transition-all duration-150 cursor-pointer">
              See All Plans
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="bg-black text-white text-sm py-8 md:py-12 px-2 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h4 className="font-bold mb-2 text-xl">Industories</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Inventory Management</a></li>
              <li><a href='#' className='hover:underline'>Construction</a></li>
              <li><a href='#' className='hover:underline'>Medical</a></li>
              <li><a href='#' className='hover:underline'>Warehouse</a></li>
              <li><a href='#' className='hover:underline'>Electrical</a></li>
              <li><a href='#' className='hover:underline'>Interior </a></li> 
              <li><a href='#' className='hover:underline'>Automotive</a></li>
              <li><a href='#' className='hover:underline'>Dental</a></li>
              <li><a href='#' className='hover:underline'>Events</a></li>
              <li><a href='#' className='hover:underline'>Non</a></li>
              <li><a href='#' className='hover:underline'>Education</a></li>
              <li><a href='#' className='hover:underline'>Retail</a></li>
              <li><a href='#' className='hover:underline'>Antiques</a></li>
              <li><a href='#' className='hover:underline'>Government</a></li>
              <li><a href='#' className='hover:underline'>Aviation</a></li>
              <li><a href='#' className='hover:underline'>View All</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2 text-xl">Uses</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Inventory Management</a></li>
              <li><a href="#" className="hover:underline">Supplies & Consumables Tracking</a></li>
              <li><a href="#" className="hover:underline">Asset Tracking</a></li>
              <li><a href="#" className="hover:underline">Parts Tracking</a></li>
              <li><a href="#" className="hover:underline">Raw Materials Tracking</a></li>
              <li><a href="#" className="hover:underline">Tool Tracking</a></li>
              <li><a href="#" className="hover:underline">Equipment Tracking</a></li>
              <li><a href="#" className="hover:underline">PPE Tracking</a></li>
              <li><a href="#" className="hover:underline">IT Asset Tracking</a></li>
              <li><a href="#" className="hover:underline">Selling & Ecommerce Inventory Tracking</a></li>
              <li><a href="#" className="hover:underline">Barcode Inventory</a></li>
              <li><a href="#" className="hover:underline">Inventory App</a></li>
              <li><a href="#" className="hover:underline">ome Inventory Management</a></li>
              <li><a href="#" className="hover:underline">View All</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Information</h4>
            <ul className="space-y-1">
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Talk to an Expert</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Glossary</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Reviews</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
              <li><a href="#" className="hover:underline">Status</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div className='h-full flex flex-col justify-evenly'>
            <h4 className="font-bold text-xl mb-2">Downloads</h4>
            <div className='flex gap-4 '>
              <Image src="app-store1.svg" alt="App Store" width={100} height={30} />
              <Image src="google-play2.svg" alt="Google Play" width={100} height={30} />
            </div>
            <div className='gap-y-4 flex flex-col'>
              <p><b>Become an Inventory Insider:</b> All the inventory news & insights you need, delivered straight to your inbox every week.</p>
              <input type="email" placeholder="Enter your email" className="mt-2 px-4 py-4 rounded bg-white text-black outline-emerald-500 w-full max-w-xs" />
              <em className='text-red-500'> ❌ Please complete this required field.</em>
              <button className="mt-2 bg-white p-2 rounded-full text-black">Submit</button>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">© 2025 Primarily, Inc. All rights reserved.</div>
      </footer>
    </main>
  );
}


// 'use client'

// import { useSession, signIn, signOut } from 'next-auth/react'

// export default function Home() {
//   const { data: session, status } = useSession()

//   if (status === 'loading') {
//     return <p>Loading session...</p>
//   }

//   return (
//     <main style={{ padding: 20 }}>
//       {!session ? (
//         <>
//           <h1>You are not signed in</h1>
//           <button onClick={() => signIn('google')}>Sign in with Google</button>
//         </>
//       ) : (
//         <>
//           <h1>Signed in as {session.user?.email}</h1>
//           <button onClick={() => signOut()}>Sign out</button>
//         </>
//       )}
//     </main>
//   )
// }
