export function TopBar() {
  return (
    <div className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-line bg-paper/90 px-[clamp(18px,5vw,48px)] py-2.5 backdrop-blur-sm print:static print:border-none print:bg-white print:backdrop-blur-none">
      <div className="flex items-center gap-2 font-mono text-xs tracking-wide text-ink-dim uppercase">
        <span className="grid size-[22px] place-items-center rounded-full bg-brand font-display text-[10px] font-extrabold text-brand-ink">
          MO
        </span>
        Morgan O&apos;Shea — CV
      </div>
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded-[3px] bg-ink px-3 py-2 font-mono text-[11px] font-bold tracking-wide text-paper uppercase transition-colors hover:bg-brand hover:text-brand-ink print:hidden"
      >
        Save as PDF
      </button>
    </div>
  );
}
