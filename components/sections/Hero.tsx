import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

interface HeroButton {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface HeroProps {
  eyebrow: string;
  h1: string;
  paragraph?: string;
  buttons?: HeroButton[];
  variant?: "home" | "page";
}

/** Faint decorative node/line "network graph" motif — texture only, not literal illustration. */
function DecorativeGraph() {
  return (
    <svg
      viewBox="0 0 500 400"
      aria-hidden="true"
      className="pointer-events-none absolute right-0 top-0 h-full w-1/2 max-w-[560px] opacity-[0.18]"
    >
      <g stroke="#0F172A" strokeWidth="1">
        <line x1="60" y1="20" x2="220" y2="90" />
        <line x1="220" y1="90" x2="380" y2="40" />
        <line x1="220" y1="90" x2="180" y2="220" />
        <line x1="180" y1="220" x2="300" y2="290" />
        <line x1="300" y1="290" x2="420" y2="230" />
      </g>
      <g fill="#0F172A">
        <circle cx="60" cy="20" r="5" />
        <circle cx="380" cy="40" r="4" />
        <circle cx="220" cy="90" r="6" />
        <circle cx="180" cy="220" r="4" />
        <circle cx="420" cy="230" r="5" />
      </g>
      <circle cx="300" cy="290" r="6" fill="#10B981" />
    </svg>
  );
}

export function Hero({ eyebrow, h1, paragraph, buttons, variant = "page" }: HeroProps) {
  const isHome = variant === "home";

  return (
    <section className="relative overflow-hidden px-[clamp(24px,5vw,64px)] py-[clamp(64px,10vw,120px)]">
      {isHome && <DecorativeGraph />}

      <div
        className={`relative mx-auto max-w-[1280px] ${isHome ? "fade-up max-w-[860px]" : "max-w-[960px]"}`}
      >
        <Eyebrow className={isHome ? "tracking-[0.12em]" : undefined}>{eyebrow}</Eyebrow>
        <h1
          className={`mt-5 font-extrabold tracking-[-0.02em] text-navy ${
            isHome
              ? "text-[clamp(40px,6.2vw,76px)] leading-[1.08]"
              : "text-[clamp(36px,5.5vw,58px)] leading-[1.1]"
          }`}
        >
          {h1}
        </h1>
        {paragraph && (
          <p className="mt-6 max-w-[720px] text-[18px] leading-relaxed text-text-muted sm:text-[20px]">
            {paragraph}
          </p>
        )}
        {buttons && buttons.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-4">
            {buttons.map((button) => (
              <Button key={button.label} href={button.href} variant={button.variant}>
                {button.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
