import type { TimelineStep } from "@/types/content";

/** Homepage variant: shorter descriptions, fixed 6-column dark timeline. */
export const homeApproachSteps: TimelineStep[] = [
  { name: "Discover", desc: "Understand context, constraints and priorities." },
  { name: "Research", desc: "Generate evidence to ground every decision." },
  { name: "Design", desc: "Translate evidence into practical solutions." },
  { name: "Implement", desc: "Deploy with the teams who will run it." },
  { name: "Measure", desc: "Track performance against real outcomes." },
  { name: "Improve", desc: "Refine continuously as conditions change." },
];

/** About page variant: fuller descriptions, reflowing auto-fit grid. */
export const aboutApproachSteps: TimelineStep[] = [
  {
    name: "Discover",
    desc: "We understand context, constraints and priorities before proposing anything.",
  },
  {
    name: "Research",
    desc: "We generate the evidence needed to ground every decision that follows.",
  },
  {
    name: "Design",
    desc: "We translate evidence into solutions built for the realities on the ground.",
  },
  {
    name: "Implement",
    desc: "We deploy alongside the teams who will run the system day to day.",
  },
  {
    name: "Measure",
    desc: "We track performance against outcomes that matter, not just activity.",
  },
  {
    name: "Improve",
    desc: "We refine continuously as conditions, data and needs evolve.",
  },
];
