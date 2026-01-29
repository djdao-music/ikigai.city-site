import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      {/* Navigation */}
      <nav className="w-full flex items-center justify-between px-5 md:px-10 pt-4 md:pt-5 pb-2">
        <Link href="/">
          <Image
            src="/ikigai-logo.svg"
            alt="ikigai.city"
            width={200}
            height={60}
            className="h-10 sm:h-12 md:h-16 w-auto"
            priority
          />
        </Link>

        <Link
          href="/"
          className="text-stone-600 hover:text-stone-900 transition-colors font-medium text-base sm:text-lg md:text-xl tracking-wide"
        >
          Home
        </Link>
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 sm:px-8 md:px-12 py-12 sm:py-16 md:py-24">
        <Image
          src="/ikigai-logo-symbol.svg"
          alt="ikigai symbol"
          width={80}
          height={80}
          className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-10 sm:mb-12 md:mb-16"
        />
        <div className="max-w-2xl text-center text-black text-base sm:text-lg md:text-xl leading-relaxed">

          <p className="mb-10 sm:mb-14 md:mb-20">
            We are a systems change organisation.
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            Our mission is systems change.
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            Simple.
          </p>

          <p className="mb-10 sm:mb-14 md:mb-20">
            We play our part in service of systems change
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            by each of us at <em>ikigai</em> pursuing our mastery.
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            Our life&apos;s work.
          </p>

          <p className="mb-10 sm:mb-14 md:mb-20">
            We are a professional services and experiences company.
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            10% of our revenue, time and attention goes to
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            our in-house non-profit, <em>ikigai foundation</em>.
          </p>

          <p className="mb-10 sm:mb-14 md:mb-20">
            The best way to understand <em>ikigai city</em> is as a beautiful tree.
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            Each branch of the tree is owned by a co-founder
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            who has ownership and mastery of what that branch promises.
          </p>

          <p className="mb-10 sm:mb-14 md:mb-20">
            From <em>ikigai strategy</em> to <em>ikigai music</em>,
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            and <em>ikigai engineering</em> to <em>ikigai art</em>.
          </p>

          <p className="mb-10 sm:mb-14 md:mb-20">
            Our founders will serve you to the highest possible standards on Earth.
            <br className="hidden sm:block" /><span className="sm:hidden"> </span>
            We are all masters pursuing the infinite game.
          </p>

          <p>
            Love.<br />
            Wisdom.<br />
            Wonder.<br />
            Creation.<br />
            Abundance.
          </p>

        </div>
      </div>
    </main>
  );
}
