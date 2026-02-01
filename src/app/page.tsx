"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen w-full bg-white flex flex-col overflow-hidden">
      {/* Navigation */}
      <nav
        className="w-full flex items-center justify-between relative z-10 px-7 pt-6 pb-2 md:py-0"
        style={{ paddingLeft: undefined, paddingRight: undefined, paddingTop: undefined, paddingBottom: undefined }}
      >
        <div className="hidden md:flex w-full items-center justify-between" style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '16px', paddingBottom: '8px' }}>
          {/* Desktop Logo */}
          <Link href="/">
            <Image
              src="/ikigai-logo.svg"
              alt="ikigai.city"
              width={200}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>
          {/* Desktop About Us link */}
          <Link
            href="/about"
            className="text-stone-600 hover:text-stone-900 transition-colors font-medium text-lg tracking-wide"
          >
            About Us
          </Link>
        </div>
        <div className="flex md:hidden w-full items-center justify-between px-10 pt-8 pb-2">
          {/* Mobile Logo */}
          <Link href="/">
            <Image
              src="/ikigai-logo.svg"
              alt="ikigai.city"
              width={200}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>
          {/* Mobile About Us link */}
          <Link
            href="/about"
            className="text-stone-600 hover:text-stone-900 transition-colors font-medium text-lg tracking-wide"
          >
            About Us
          </Link>
        </div>
      </nav>

      {/* Main content - centered */}
      {/* Desktop version */}
      <div
        className="hidden md:flex flex-1 flex-col items-center justify-center"
        style={{ paddingBottom: '80px', marginTop: '-40px' }}
      >
        <div className="w-full max-w-[560px] px-6 scale-[0.99]">
          <Image
            src="/ikigai-city-earth.png"
            alt="ikigai city"
            width={800}
            height={533}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="-mt-4 w-full max-w-[420px] px-6 scale-[0.98]">
          <Image
            src="/ikigai-city-welcome.svg"
            alt="Welcome to ikigai city"
            width={600}
            height={150}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Mobile version */}
      <div className="flex md:hidden flex-1 flex-col items-center justify-center pb-20 -mt-4">
        <div className="w-full max-w-[320px] px-6">
          <Image
            src="/ikigai-city-earth.png"
            alt="ikigai city"
            width={800}
            height={533}
            className="w-full h-auto"
            priority
          />
        </div>
        <div className="-mt-1 w-full max-w-[220px] px-6">
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
