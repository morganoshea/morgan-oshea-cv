import type { EntryType } from "@/data/entries";
import { cn } from "@/lib/utils";

const FILTERS: { type: EntryType; label: string; swatch: string }[] = [
  { type: "role", label: "Role", swatch: "rounded-[3px] bg-brand" },
  {
    type: "project",
    label: "Project",
    swatch: "bg-brand-proj [clip-path:polygon(50%_0,100%_50%,50%_100%,0_50%)]",
  },
  { type: "education", label: "Education", swatch: "rounded-full bg-brand-edu" },
];

const activeBorder: Record<EntryType, string> = {
  role: "border-brand",
  project: "border-brand-proj",
  education: "border-brand-edu",
};

interface FilterBarProps {
  active: Record<EntryType, boolean>;
  onToggle: (type: EntryType) => void;
  industries: string[];
  activeIndustries: Record<string, boolean>;
  onToggleIndustry: (industry: string) => void;
  onToggleAllIndustries: () => void;
}

export function FilterBar({
  active,
  onToggle,
  industries,
  activeIndustries,
  onToggleIndustry,
  onToggleAllIndustries,
}: FilterBarProps) {
  const allIndustriesActive = industries.every((industry) => activeIndustries[industry]);
  return (
    <div className="mb-7 flex flex-col items-center gap-3 sm:items-start">
      <div
        role="group"
        aria-label="Filter timeline by category"
        className="flex w-fit flex-wrap items-center gap-2.5 rounded-full border border-line bg-paper-raised py-2 pr-2 pl-3.5 font-mono text-[11px] tracking-wide text-ink-dim uppercase"
      >
        <span className="mr-0.5 flex items-center gap-1.5 font-semibold text-ink">
          <svg viewBox="0 0 16 16" aria-hidden="true" className="size-3 shrink-0">
            <path
              d="M1.5 2.5h13L9.5 8.2v5l-3 1.6V8.2z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          Filter
        </span>
        {FILTERS.map((f) => {
          const isActive = active[f.type];
          return (
            <button
              key={f.type}
              type="button"
              aria-pressed={isActive}
              onClick={() => onToggle(f.type)}
              className={cn(
                "flex items-center gap-1.5 rounded-[14px] border py-1.5 pr-3 pl-2 transition-[color,background,border-color,transform,opacity] duration-150 active:scale-95",
                isActive ? cn(activeBorder[f.type], "opacity-100") : "border-line opacity-40 hover:bg-paper",
              )}
            >
              <span className={cn("size-[11px] shrink-0", f.swatch)} />
              {f.label}
            </button>
          );
        })}
      </div>

      {industries.length > 0 && (
        <div
          role="group"
          aria-label="Filter timeline by industry"
          className="flex w-fit flex-wrap items-center gap-2 rounded-full border border-line bg-paper-raised py-2 pr-2.5 pl-3.5 font-mono text-[11px] tracking-wide text-ink-dim uppercase"
        >
          <span className="mr-0.5 font-semibold text-ink">Industry</span>
          <button
            type="button"
            onClick={onToggleAllIndustries}
            className="mr-1 rounded-[14px] px-1.5 py-1 normal-case text-ink-dim underline decoration-dotted underline-offset-2 transition-colors hover:text-brand"
          >
            {allIndustriesActive ? "Deselect all" : "Select all"}
          </button>
          {industries.map((industry) => {
            const isActive = activeIndustries[industry];
            return (
              <button
                key={industry}
                type="button"
                aria-pressed={isActive}
                onClick={() => onToggleIndustry(industry)}
                className={cn(
                  "rounded-[14px] border px-2.5 py-1.5 normal-case transition-[color,background,border-color,transform,opacity] duration-150 active:scale-95",
                  isActive ? "border-brand text-ink opacity-100" : "border-line opacity-40 hover:bg-paper",
                )}
              >
                {industry}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
