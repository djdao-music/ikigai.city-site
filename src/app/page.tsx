"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav
        className="w-full flex items-center justify-between relative z-10"
        style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '8px' }}
      >
        {/* Logo - top left */}
        <Link href="/">
          <Image
            src="/ikigai-logo.svg"
            alt="ikigai.city"
            width={200}
            height={60}
            className="h-14 md:h-16 w-auto"
            priority
          />
        </Link>

        {/* About Us link - top right */}
        <Link
          href="/about"
          className="text-stone-600 hover:text-stone-900 transition-colors font-medium text-lg md:text-xl tracking-wide"
        >
          About Us
        </Link>
      </nav>

      {/* Main content - centered */}
      <div
        className="flex-1 flex flex-col items-center justify-center"
        style={{ paddingBottom: '120px', marginTop: '-60px' }}
      >
        {/* City Earth graphic */}
        <div className="w-full max-w-xl md:max-w-2xl px-6">
          <Image
            src="/ikigai-city-earth.png"
            alt="ikigai city"
            width={800}
            height={533}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Welcome text/graphic */}
        <div className="mt-6 w-full max-w-md md:max-w-lg px-6">
          <Image
            src="/ikigai-city-welcome.svg"
            alt="Welcome to ikigai city"
            width={600}
            height={150}
            className="w-full h-auto"
          />
        </div>
      </div>
    </main>
  );
}
