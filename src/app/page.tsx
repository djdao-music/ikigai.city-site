"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between relative z-10 px-7 md:px-10 pt-6 md:pt-5 pb-2">
        {/* Logo - top left */}
        <Link href="/">
          <Image
            src="/ikigai-logo.svg"
            alt="ikigai.city"
            width={200}
            height={60}
            className="h-12 md:h-16 w-auto"
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
      <div className="flex-1 flex flex-col items-center justify-center pb-20 -mt-8 md:pb-[120px] md:-mt-[60px]">
        {/* City Earth graphic */}
        <div className="w-full max-w-xs md:max-w-2xl px-10 md:px-6 md:scale-[0.99]">
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
        <div className="-mt-1 w-full max-w-[280px] md:max-w-lg px-8 md:px-6 md:scale-[0.98]">
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
