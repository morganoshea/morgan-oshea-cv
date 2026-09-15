import { Badge } from "@/components/ui/badge";
import type { SkillGroup } from "@/data/entries";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface SkillsProps {
  groups: SkillGroup[];
}

function SkillGroupCard({ group }: { group: SkillGroup }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const reduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-500 ease-out",
        !reduced && (inView ? "translate-y-0 opacity-100" : "translate-y-2.5 opacity-0"),
      )}
    >
      <h3 className="mb-1.5 font-mono text-[11px] font-medium tracking-wide text-ink-faint uppercase">
        {group.group}
      </h3>
      <p className="mb-3 max-w-[46ch] text-[13px] leading-relaxed text-ink-dim">{group.story}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <Badge
            key={item}
            variant="outline"
            className="h-auto rounded-full border-line bg-paper-raised px-2.5 py-1.5 text-[13px] font-normal text-ink-dim transition-[transform,color,border-color] duration-150 hover:scale-105 hover:border-brand hover:text-brand"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export function Skills({ groups }: SkillsProps) {
  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))]">
      {groups.map((g) => (
        <SkillGroupCard key={g.group} group={g} />
      ))}
    </div>
  );
}
