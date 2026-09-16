export interface AboutContent {
  tagline: string;
  perspective: string;
  traitsIntro: string;
  traits: { label: string; description: string }[];
  closing: string;
  now: string[];
  interests?: { label: string; items: string[] }[];
}

export const ABOUT: AboutContent = {
  tagline: "The person behind the CV.",
  perspective:
    "When AI can make anyone sound like a specialist nowadays, being a generalist is how you bring something valuable to the table.",
  traitsIntro:
    "I have worked across many roles, projects, industries, and countries which have all taught me important skills or brought out certain attributes of mine:",
  traits: [
    { label: "Adaptability", description: "There's nothing quite like living in 4 countries within a span of 1.5 years." },
    {
      label: "Storytelling & communication",
      description:
        'It\'s important to be able to explain your thoughts, but bringing someone along for the journey is a whole other "story."',
    },
    { label: "Authenticity", description: "I show up professionally and respectfully, but also as myself." },
    { label: "Resilience", description: "Things don't always go to plan, but I'm better for it!" },
  ],
  closing: "I'm keen to keep growing — let's chat about what that could look like.",
  now: [
    "Canadian based in London, UK",
    "No visa sponsorship required",
    "Currently focused on EMEA commercial marketing strategy and asset development at Avalere Health",
    "Outside of work, I'm spending time growing my AI literacy",
  ],
  interests: [
    {
      label: "Outside of work",
      items: [
        "Baking",
        "Bouldering",
        "Embroidery",
        "Horseback Riding",
        "Learning Claude Code",
        "Pickleball",
        "Pilates",
        "Reading",
        "Skiing",
        "Travel",
      ],
    },
  ],
};
