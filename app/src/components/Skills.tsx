import { Badge } from "@/components/ui/badge";
import type { SkillGroup } from "@/data/entries";

interface SkillsProps {
  groups: SkillGroup[];
}

export function Skills({ groups }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
      {groups.map((g) => (
        <div key={g.group}>
          <h3 className="mb-1.5 font-mono text-[11px] font-medium tracking-wide text-ink-faint uppercase">
            {g.group}
          </h3>
          <p className="mb-3 max-w-[46ch] text-[13px] leading-relaxed text-ink-dim">{g.story}</p>
          <div className="flex flex-wrap gap-2">
            {g.items.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="h-auto rounded-full border-line bg-paper-raised px-2.5 py-1.5 text-[13px] font-normal text-ink-dim"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
