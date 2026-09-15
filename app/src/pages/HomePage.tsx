import { useState } from "react";
import { BackToTop } from "@/components/BackToTop";
import { FilterBar } from "@/components/FilterBar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Timeline } from "@/components/Timeline";
import { ENTRIES, INDUSTRIES, SKILLS, type EntryType } from "@/data/entries";

const entriesWithIds = ENTRIES.map((entry, id) => ({ ...entry, id }));

export function HomePage() {
  const [activeFilters, setActiveFilters] = useState<Record<EntryType, boolean>>({
    role: true,
    project: true,
    education: true,
  });

  const [activeIndustries, setActiveIndustries] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(INDUSTRIES.map((industry) => [industry, true])),
  );

  function toggleFilter(type: EntryType) {
    setActiveFilters((prev) => {
      const activeCount = Object.values(prev).filter(Boolean).length;
      if (prev[type] && activeCount === 1) return prev;
      return { ...prev, [type]: !prev[type] };
    });
  }

  function toggleIndustry(industry: string) {
    setActiveIndustries((prev) => {
      const activeCount = Object.values(prev).filter(Boolean).length;
      if (prev[industry] && activeCount === 1) return prev;
      return { ...prev, [industry]: !prev[industry] };
    });
  }

  function toggleAllIndustries() {
    setActiveIndustries((prev) => {
      const allActive = INDUSTRIES.every((industry) => prev[industry]);
      return Object.fromEntries(INDUSTRIES.map((industry) => [industry, !allActive]));
    });
  }

  return (
    <main className="mx-auto max-w-[1040px] px-[clamp(18px,5vw,48px)] pb-[100px]">
      <Hero />

      <section aria-labelledby="timeline-head">
        <div className="pt-[clamp(36px,6vw,56px)] pb-4.5">
          <p className="mb-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
            Present — 2016
          </p>
          <h2 id="timeline-head" className="font-display text-[clamp(22px,4vw,28px)] font-extrabold">
            The Timeline
          </h2>
        </div>

        <FilterBar
          active={activeFilters}
          onToggle={toggleFilter}
          industries={INDUSTRIES}
          activeIndustries={activeIndustries}
          onToggleIndustry={toggleIndustry}
          onToggleAllIndustries={toggleAllIndustries}
        />

        <Timeline entries={entriesWithIds} activeFilters={activeFilters} activeIndustries={activeIndustries} />
      </section>

      <section
        aria-labelledby="skills-head"
        className="relative left-1/2 mt-[clamp(36px,6vw,56px)] w-screen -translate-x-1/2 border-y border-line bg-paper-raised print:static print:left-auto print:w-auto print:translate-x-0 print:border-none print:bg-transparent"
      >
        <div className="mx-auto max-w-[1040px] px-[clamp(18px,5vw,48px)] py-[clamp(36px,6vw,56px)]">
          <div className="pb-4.5">
            <p className="mb-1.5 font-mono text-[11px] tracking-[0.12em] text-ink-faint uppercase">
              Outside the timeline
            </p>
            <h2 id="skills-head" className="font-display text-[clamp(22px,4vw,28px)] font-extrabold">
              Skills &amp; Tools
            </h2>
          </div>
          <Skills groups={SKILLS} />
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}
