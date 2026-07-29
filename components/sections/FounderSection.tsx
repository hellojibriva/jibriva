import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { founder } from "@/content/founder";

export function FounderSection() {
  return (
    <Section background="neutral" contentClassName="max-w-[1000px]">
      <div className="grid grid-cols-[minmax(200px,240px)_1fr] gap-10 max-sm:grid-cols-1">
        <div className="relative aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-[4px] border border-border bg-white">
          <Image
            src="/team/abi-precious-jibrin.png"
            alt="Abi Precious Jibrin, Founder & Principal Consultant, Jibriva"
            fill
            sizes="240px"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h2 className="text-[clamp(26px,3.2vw,34px)] font-bold text-navy">{founder.name}</h2>
          <p className="mt-1 text-[15px] font-semibold text-emerald">{founder.title}</p>

          <div className="mt-6 space-y-4">
            <h3 className="text-[15px] font-bold uppercase tracking-[0.06em] text-navy">
              My Story
            </h3>
            {founder.myStory.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-[15.5px] leading-relaxed text-text-muted">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-14 max-md:grid-cols-1 max-md:gap-8">
        <div>
          <h3 className="mb-5 text-[15px] font-bold uppercase tracking-[0.06em] text-navy">
            Areas of Expertise
          </h3>
          <ul className="space-y-3">
            {founder.areasOfExpertise.map((area) => (
              <li key={area} className="flex items-center gap-3 text-[15px] text-text">
                <span className="h-[7px] w-[7px] shrink-0 bg-emerald" />
                {area}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-[15px] font-bold uppercase tracking-[0.06em] text-navy">
            Professional Journey
          </h3>
          <ul className="space-y-6">
            {founder.professionalJourney.map((milestone) => (
              <li key={milestone.period} className="border-l-2 border-border pl-5">
                <p className="text-[12px] font-bold uppercase tracking-[0.06em] text-text-faint">
                  {milestone.period}
                </p>
                <p className="mt-1 text-[15px] font-bold text-navy">{milestone.title}</p>
                <p className="mt-1 text-[13.5px] leading-relaxed text-text-muted">
                  {milestone.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-14 max-md:grid-cols-1 max-md:gap-8">
        <div>
          <h3 className="mb-4 text-[15px] font-bold uppercase tracking-[0.06em] text-navy">
            Research & Thought Leadership
          </h3>
          <p className="text-[14.5px] leading-relaxed text-text-muted">
            {founder.researchThoughtLeadership}
          </p>
        </div>
        <div>
          <h3 className="mb-4 text-[15px] font-bold uppercase tracking-[0.06em] text-navy">
            Personal Philosophy
          </h3>
          <p className="text-[14.5px] leading-relaxed text-text-muted">
            {founder.personalPhilosophy}
          </p>
        </div>
      </div>

      <Button href="/contact" className="mt-12">
        Discuss Your Project
      </Button>
    </Section>
  );
}
