import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen w-full bg-white flex flex-col">
      {/* Navigation - Desktop */}
      <nav
        className="hidden md:flex w-full items-center justify-between"
        style={{ paddingLeft: '32px', paddingRight: '32px', paddingTop: '16px', paddingBottom: '8px' }}
      >
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
        <Link
          href="/"
          className="text-stone-600 hover:text-stone-900 transition-colors font-medium text-lg tracking-wide"
        >
          Home
        </Link>
      </nav>

      {/* Navigation - Mobile */}
      <nav className="flex md:hidden w-full items-center justify-between px-10 pt-8 pb-2">
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
        <Link
          href="/"
          className="text-stone-600 hover:text-stone-900 transition-colors font-medium text-lg tracking-wide"
        >
          Home
        </Link>
      </nav>

      {/* Content - Desktop */}
      <div className="hidden md:flex flex-1 flex-col items-center justify-center px-10 pt-8 pb-16 -mt-12">
        <Image
          src="/ikigai-logo-symbol.png"
          alt="ikigai symbol"
          width={80}
          height={80}
          className="w-14 h-14 mb-12"
        />
        <div className="max-w-xl text-center text-black text-base leading-relaxed">

          <p className="mb-14">
            We are a systems change organisation.<br />
            Our mission is systems change.<br />
            Simple.
          </p>

          <p className="mb-14">
            We play our part in service of systems change<br />
            by each of us at <em>ikigai</em> pursuing our mastery.<br />
            Our life&apos;s work.
          </p>

          <p className="mb-14">
            We are a professional services and experiences company.<br />
            10% of our revenue, time and attention goes to<br />
            our in-house non-profit, <em>ikigai foundation</em>.
          </p>

          <p className="mb-14">
            The best way to understand <em>ikigai city</em> is as a beautiful tree.<br />
            Each branch of the tree is owned by a co-founder<br />
            who has ownership and mastery of what that branch promises.
          </p>

          <p className="mb-14">
            From <em>ikigai strategy</em> to <em>ikigai music</em>,<br />
            and <em>ikigai engineering</em> to <em>ikigai art</em>.
          </p>

          <p className="mb-14">
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

      {/* Content - Mobile */}
      <div className="flex md:hidden flex-1 flex-col items-center justify-center px-12 py-12">
        <Image
          src="/ikigai-logo-symbol.png"
          alt="ikigai symbol"
          width={80}
          height={80}
          className="w-14 h-14 mb-10"
        />
        <div className="max-w-2xl text-center text-black text-[13px] leading-[1.9]">

          <p className="mb-8">
            We are a systems change organisation. Our mission is systems change. Simple.
          </p>

          <p className="mb-8">
            We play our part in service of systems change by each of us at <em>ikigai</em> pursuing our mastery. Our life&apos;s work.
          </p>

          <p className="mb-8">
            We are a professional services and experiences company. 10% of our revenue, time and attention goes to our in-house non-profit, <em>ikigai foundation</em>.
          </p>

          <p className="mb-8">
            The best way to understand <em>ikigai city</em> is as a beautiful tree. Each branch of the tree is owned by a co-founder who has ownership and mastery of what that branch promises.
          </p>

          <p className="mb-8">
            From <em>ikigai strategy</em> to <em>ikigai music</em>, and <em>ikigai engineering</em> to <em>ikigai art</em>.
          </p>

          <p className="mb-8">
            Our founders will serve you to the highest possible standards on Earth. We are all masters pursuing the infinite game.
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
