import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      {/* Navigation */}
      <nav
        className="w-full flex items-center justify-between"
        style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '20px', paddingBottom: '8px' }}
      >
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

        <Link
          href="/"
          className="text-stone-600 hover:text-stone-900 transition-colors font-medium text-lg md:text-xl tracking-wide"
        >
          Home
        </Link>
      </nav>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-16 md:py-24">
        <Image
          src="/ikigai-logo-symbol.svg"
          alt="ikigai symbol"
          width={80}
          height={80}
          className="mb-12 md:mb-16"
        />
        <div className="max-w-2xl text-center text-black text-lg md:text-xl leading-relaxed">

          <p className="mb-16 md:mb-20">
            We are a systems change organisation.<br />
            Our mission is systems change.<br />
            Simple.
          </p>

          <p className="mb-16 md:mb-20">
            We play our part in service of systems change<br />
            by each of us at <em>ikigai</em> pursuing our mastery.<br />
            Our life&apos;s work.
          </p>

          <p className="mb-16 md:mb-20">
            We are a professional services and experiences company.<br />
            10% of our revenue, time and attention goes to<br />
            our in-house non-profit, <em>ikigai foundation</em>.
          </p>

          <p className="mb-16 md:mb-20">
            The best way to understand <em>ikigai city</em> is as a beautiful tree.<br />
            Each branch of the tree is owned by a co-founder<br />
            who has ownership and mastery of what that branch promises.
          </p>

          <p className="mb-16 md:mb-20">
            From <em>ikigai strategy</em> to <em>ikigai music</em>,<br />
            and <em>ikigai engineering</em> to <em>ikigai art</em>.
          </p>

          <p className="mb-16 md:mb-20">
            Our founders will serve you to the highest possible standards on Earth.<br />
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
