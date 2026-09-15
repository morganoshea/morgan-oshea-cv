import { NavLink, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function TopBar() {
  const isHome = useLocation().pathname === "/";

  return (
    <div className="sticky top-0 z-20 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-b border-line bg-paper/90 px-[clamp(18px,5vw,48px)] py-2.5 backdrop-blur-sm print:static print:border-none print:bg-white print:backdrop-blur-none">
      <div className="flex items-center gap-2 font-mono text-xs tracking-wide text-ink-dim uppercase">
        <span className="grid size-[22px] place-items-center rounded-full bg-brand font-display text-[10px] font-extrabold text-brand-ink">
          MO
        </span>
        Morgan O&apos;Shea
      </div>

      <nav
        aria-label="Primary"
        className="order-3 flex w-full items-center gap-1 font-mono text-[11px] tracking-wide uppercase sm:order-none sm:w-auto print:hidden"
      >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            cn(
              "rounded-[3px] px-2.5 py-1.5 transition-colors",
              isActive ? "bg-ink text-paper" : "text-ink-dim hover:text-brand",
            )
          }
        >
          CV
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            cn(
              "rounded-[3px] px-2.5 py-1.5 transition-colors",
              isActive ? "bg-ink text-paper" : "text-ink-dim hover:text-brand",
            )
          }
        >
          About
        </NavLink>
      </nav>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => window.print()}
          aria-hidden={!isHome}
          tabIndex={isHome ? 0 : -1}
          className={cn(
            "rounded-[3px] bg-ink px-3 py-2 font-mono text-[11px] font-bold tracking-wide text-paper uppercase transition-colors hover:bg-brand hover:text-brand-ink print:hidden",
            !isHome && "invisible",
          )}
        >
          Save as PDF
        </button>
      </div>
    </div>
  );
}
