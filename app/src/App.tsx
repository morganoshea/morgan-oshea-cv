import { useState } from "react";
import { FilterBar } from "@/components/FilterBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { TopBar } from "@/components/TopBar";
import { ENTRIES, SKILLS, type EntryType } from "@/data/entries";

const entriesWithIds = ENTRIES.map((entry, id) => ({ ...entry, id }));

function App() {
  const [activeFilters, setActiveFilters] = useState<Record<EntryType, boolean>>({
    role: true,
    project: true,
    education: true,
  });

  function toggleFilter(type: EntryType) {
    setActiveFilters((prev) => {
      const activeCount = Object.values(prev).filter(Boolean).length;
      if (prev[type] && activeCount === 1) return prev;
      return { ...prev, [type]: !prev[type] };
    });
  }

  return (
    <>
      <TopBar />
      <main className="mx-auto max-w-[1040px] px-[clamp(18px,5vw,48px)] pb-[100px]">
        <Hero />

        <section aria-labelledby="timeline-head">
          <div className="pt-[clamp(36px,6vw,56px)] pb-4.5">
            <p className="mb-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
              Present — 2016
            </p>
            <h2 className="font-display text-[clamp(22px,4vw,28px)] font-extrabold">The Timeline</h2>
          </div>

          <FilterBar active={activeFilters} onToggle={toggleFilter} />

          <Timeline entries={entriesWithIds} activeFilters={activeFilters} />
        </section>

        <section aria-labelledby="skills-head">
          <div className="pt-[clamp(36px,6vw,56px)] pb-4.5">
            <p className="mb-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
              Outside the timeline
            </p>
            <h2 className="font-display text-[clamp(22px,4vw,28px)] font-extrabold">Skills &amp; Tools</h2>
          </div>
          <Skills groups={SKILLS} />
        </section>

        <Footer />
      </main>
    </>
  );
}

export default App;
