export function Footer() {
  const today = new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  return (
    <footer className="mt-[clamp(50px,8vw,80px)] flex flex-wrap justify-between gap-3.5 border-t border-line pt-6 font-mono text-xs text-ink-faint">
      <span>Morgan O&apos;Shea — contact@morganoshea.com</span>
      <span>Created with Claude Code</span>
      <span>Updated {today}</span>
    </footer>
  );
}
