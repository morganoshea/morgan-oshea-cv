import { useEffect, useMemo, useRef, useState } from "react";
import type { EntryType, TimelineEntry } from "@/data/entries";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

const ACCENT_VAR: Record<EntryType, string> = {
  role: "var(--brand)",
  project: "var(--brand-proj)",
  education: "var(--brand-edu)",
};

const MARKER_SHAPE: Record<EntryType, string> = {
  role: "rounded-[3px]",
  project: "[clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]",
  education: "rounded-full",
};

function sideFor(type: EntryType): "left" | "right" {
  return type === "project" ? "right" : "left";
}

interface TimelineProps {
  entries: (TimelineEntry & { id: number })[];
  activeFilters: Record<EntryType, boolean>;
  activeIndustries: Record<string, boolean>;
}

export function Timeline({ entries, activeFilters, activeIndustries }: TimelineProps) {
  const visible = useMemo(
    () =>
      entries.filter(
        (e) =>
          activeFilters[e.type] &&
          (!e.industries || e.industries.length === 0 || e.industries.some((i) => activeIndustries[i])),
      ),
    [entries, activeFilters, activeIndustries],
  );
  const reduced = useReducedMotion();

  const containerRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef(new Map<number, HTMLLIElement>());

  const [activeIds, setActiveIds] = useState<Set<number>>(new Set());
  const [seenIds, setSeenIds] = useState<Set<number>>(new Set());

  const visibleIds = visible.map((e) => e.id).join(",");

  useEffect(() => {
    if (reduced) return;

    const observer = new IntersectionObserver(
      (obs) => {
        setActiveIds((prevActive) => {
          const nextActive = new Set(prevActive);
          setSeenIds((prevSeen) => {
            const nextSeen = new Set(prevSeen);
            obs.forEach((entry) => {
              const id = Number((entry.target as HTMLElement).dataset.id);
              if (entry.isIntersecting) {
                nextActive.add(id);
                nextSeen.add(id);
              } else {
                nextActive.delete(id);
                if (entry.boundingClientRect.top < 0) nextSeen.add(id);
                else nextSeen.delete(id);
              }
            });
            return nextSeen;
          });
          return nextActive;
        });
      },
      { threshold: 0, rootMargin: "-42% 0px -42% 0px" },
    );

    itemRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [reduced, visibleIds]);

  useEffect(() => {
    if (reduced) {
      if (fillRef.current) fillRef.current.style.height = "100%";
      return;
    }

    let ticking = false;
    function update() {
      const container = containerRef.current;
      const fill = fillRef.current;
      if (!container || !fill) return;
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height;
      const traveled = Math.min(Math.max(vh * 0.5 - rect.top, 0), total);
      const pct = total > 0 ? (traveled / total) * 100 : 0;
      fill.style.height = pct + "%";
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced, visibleIds]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute top-1.5 bottom-1.5 left-[5px] w-0.5 translate-x-0 bg-line min-[800px]:left-1/2 min-[800px]:-translate-x-1/2" />
      <div
        ref={fillRef}
        className="absolute top-1.5 left-[5px] h-0 w-0.5 translate-x-0 bg-brand transition-[height] duration-100 ease-linear min-[800px]:left-1/2 min-[800px]:-translate-x-1/2"
      />
      <ol className="m-0 list-none p-0 pl-[30px] min-[800px]:pl-0">
        {visible.map((entry, i) => {
          const side = sideFor(entry.type);
          const isActive = activeIds.has(entry.id);
          const isSeen = seenIds.has(entry.id);
          const isLast = i === visible.length - 1;

          return (
            <li
              key={entry.id}
              data-id={entry.id}
              ref={(el) => {
                if (el) itemRefs.current.set(entry.id, el);
                else itemRefs.current.delete(entry.id);
              }}
              style={{ "--entry-accent": ACCENT_VAR[entry.type] } as React.CSSProperties}
              className={cn(
                "relative",
                isLast ? "pb-1" : "pb-[clamp(34px,5vw,46px)]",
                "min-[800px]:w-[calc(50%-30px)]",
                side === "left" ? "min-[800px]:mr-auto min-[800px]:ml-0" : "min-[800px]:ml-auto min-[800px]:mr-0",
              )}
            >
              {/* marker */}
              <span
                className={cn(
                  "absolute top-1 left-[-30px] z-[1] size-3 transition-[background,box-shadow,transform] duration-300",
                  MARKER_SHAPE[entry.type],
                  side === "left" && "min-[800px]:left-auto min-[800px]:right-[-30px]",
                  isSeen && !reduced ? "bg-(--entry-accent)" : "bg-line",
                  isActive && !reduced && "scale-[1.3] shadow-[0_0_0_5px_color-mix(in_srgb,var(--entry-accent)_18%,transparent)]",
                )}
              >
                <span
                  className={cn(
                    "absolute top-[5px] h-0.5 w-[18px] left-3 right-auto transition-colors duration-300",
                    side === "left" && "min-[800px]:right-3 min-[800px]:left-auto",
                    isSeen && !reduced ? "bg-(--entry-accent)" : "bg-line",
                  )}
                />
              </span>

              {/* card */}
              <div
                className={cn(
                  "-m-4 rounded-[10px] p-4 opacity-100 transition-[opacity,transform,background,box-shadow] duration-[450ms] ease-out",
                  !reduced && !isActive && "scale-[0.97] opacity-30",
                  isActive &&
                    !reduced &&
                    cn(
                      "bg-paper-raised",
                      "shadow-[0_16px_36px_rgba(0,0,0,0.16),inset_3px_0_0_var(--entry-accent)]",
                      side === "left" &&
                        "min-[800px]:shadow-[0_16px_36px_rgba(0,0,0,0.16),inset_-3px_0_0_var(--entry-accent)]",
                    ),
                )}
              >
                <div className="mb-1.5 flex flex-wrap items-baseline gap-x-2.5 gap-y-1 font-mono text-xs text-ink-faint">
                  <span className="tracking-wide text-ink-dim uppercase">{entry.type}</span>
                  <span className="tabular-nums">{entry.dates}</span>
                </div>
                <p
                  className={cn(
                    "mb-0.5 font-display text-[clamp(18px,3vw,21px)] font-bold transition-colors duration-[450ms]",
                    isActive && !reduced && "text-(--entry-accent)",
                  )}
                >
                  {entry.title}
                </p>
                <p className="mb-2.5 text-sm text-ink-dim">
                  {entry.org} <span className="text-ink-faint">— {entry.loc}</span>
                </p>
                {entry.industries && entry.industries.length > 0 && (
                  <div className="mb-2.5 flex flex-wrap gap-1.5">
                    {entry.industries.map((industry) => (
                      <span
                        key={industry}
                        className="rounded-full border border-line bg-paper px-2 py-0.5 font-mono text-[10px] tracking-wide text-ink-faint uppercase"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                )}
                <ul className="m-0 max-w-[64ch] list-none space-y-1.5 pl-0">
                  {entry.bullets.map((b) => (
                    <li key={b} className="text-[15px] leading-relaxed text-ink">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
