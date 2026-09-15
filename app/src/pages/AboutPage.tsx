import { Link } from "react-router-dom";
import morganPhoto from "@/assets/morgan-photo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/Footer";
import { ABOUT } from "@/data/about";

export function AboutPage() {
  return (
    <main className="mx-auto max-w-[1040px] px-[clamp(18px,5vw,48px)] pb-[100px]">
      <section className="grid grid-cols-1 items-start gap-[clamp(20px,4vw,40px)] border-b border-line pt-[clamp(32px,10vw,72px)] pb-7 text-center sm:grid-cols-[auto_1fr] sm:text-left">
        <div className="mx-auto size-[clamp(72px,10vw,96px)] shrink-0 overflow-hidden rounded-full shadow-[0_0_0_3px_var(--paper),0_0_0_4px_var(--line)] sm:mx-0">
          <img
            src={morganPhoto}
            alt="Morgan O'Shea"
            className="size-full object-cover"
            style={{ objectPosition: "50% 18%" }}
          />
        </div>
        <div>
          <h1 className="mb-1.5 font-display text-[clamp(30px,6vw,48px)] leading-[0.98] font-black tracking-tight text-balance">
            About Morgan
          </h1>
          <p className="mx-auto max-w-[52ch] font-mono text-[13px] tracking-widest text-brand-about uppercase sm:mx-0">
            {ABOUT.tagline}
          </p>
        </div>
      </section>

      <section aria-labelledby="range-head" className="pt-[clamp(36px,6vw,56px)]">
        <h2 id="range-head" className="mb-4 max-w-[62ch] font-display text-[clamp(20px,3.4vw,26px)] font-extrabold">
          {ABOUT.perspective}
        </h2>
        <p className="mb-4 max-w-[62ch] text-base text-ink-dim">{ABOUT.traitsIntro}</p>
        <ul className="m-0 max-w-[62ch] list-none space-y-3 pl-0">
          {ABOUT.traits.map((trait) => (
            <li key={trait.label} className="text-[15px] leading-relaxed text-ink">
              <span className="font-semibold text-brand-about">{trait.label}</span> — {trait.description}
            </li>
          ))}
        </ul>
        <p className="mt-5 max-w-[62ch] font-display text-lg font-bold text-ink">{ABOUT.closing}</p>
      </section>

      <section aria-labelledby="now-head" className="pt-[clamp(36px,6vw,56px)]">
        <p className="mb-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">Right now</p>
        <h2 id="now-head" className="sr-only">
          Right now
        </h2>
        <Card className="max-w-[62ch] border-l-4 border-l-brand-about">
          <CardContent>
            <ul className="m-0 list-none space-y-2 pl-0 text-[15px] text-ink">
              {ABOUT.now.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      {ABOUT.interests?.map((group) => (
        <section key={group.label} aria-label={group.label} className="pt-[clamp(36px,6vw,56px)]">
          <p className="mb-3 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">{group.label}</p>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-full border border-line bg-paper-raised px-2.5 py-1.5 text-[13px] text-ink-dim"
              >
                {item}
              </span>
            ))}
          </div>
        </section>
      ))}

      <p className="pt-[clamp(36px,6vw,56px)] font-mono text-[13px]">
        <Link
          to="/"
          className="border-b border-transparent text-ink-dim no-underline transition-colors hover:border-brand-about hover:text-brand-about"
        >
          ← Back to the CV
        </Link>
      </p>

      <Footer />
    </main>
  );
}
