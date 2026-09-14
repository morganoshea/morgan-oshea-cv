import morganPhoto from "@/assets/morgan-photo.png";

export function Hero() {
  return (
    <section className="grid grid-cols-1 items-start gap-[clamp(20px,4vw,40px)] border-b border-line px-0 pt-[clamp(32px,10vw,72px)] pb-7 text-center sm:grid-cols-[auto_1fr] sm:text-left">
      <div className="mx-auto size-[clamp(84px,14vw,116px)] shrink-0 overflow-hidden rounded-full shadow-[0_0_0_3px_var(--paper),0_0_0_4px_var(--line)] sm:mx-0">
        <img
          src={morganPhoto}
          alt="Morgan O'Shea"
          className="size-full object-cover"
          style={{ objectPosition: "50% 18%" }}
        />
      </div>
      <div>
        <h1 className="mb-1.5 font-display text-[clamp(40px,8vw,76px)] leading-[0.98] font-black tracking-tight text-balance">
          Morgan O&apos;Shea
        </h1>
        <p className="mb-4 font-mono text-[13px] tracking-widest text-brand uppercase">
          Adaptable. Authentic. Detailed.
        </p>
        <p className="mx-auto mb-3.5 max-w-[62ch] text-base text-ink-dim sm:mx-0">
          Morgan has partnered with companies in Canada, Peru, and the UK to turn strategy into
          go-to-market execution. Her experiences span a variety of industries including financial
          technology, health technology, professional services, financial services, pharmaceuticals,
          not-for-profit, and education. She currently supports on a £950k+ annual client portfolio
          creating marketing assets for products at the launch stage through to mid-lifecycle. She
          trained across medical science, applied science, and international business before bringing
          that range to client-facing marketing. She prides herself on being detail-oriented, organised,
          and personable; a trusted partner both internal and externally.
        </p>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 font-mono text-[13px] sm:justify-start">
          <a
            href="mailto:contact@morganoshea.com"
            className="border-b border-transparent text-ink-dim no-underline transition-colors hover:border-brand hover:text-brand"
          >
            contact@morganoshea.com
          </a>
          <a
            href="https://www.linkedin.com/in/morgan-oshea"
            target="_blank"
            rel="noopener"
            className="border-b border-transparent text-ink-dim no-underline transition-colors hover:border-brand hover:text-brand"
          >
            linkedin.com/in/morgan-oshea
          </a>
          <span className="text-ink-dim">London, UK</span>
        </div>
      </div>
    </section>
  );
}
