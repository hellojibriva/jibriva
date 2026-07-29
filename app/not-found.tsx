import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { notFound } from "@/content/not-found";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-navy px-6 text-center">
      <span className="inline-flex items-center justify-center rounded-[10px] bg-neutral p-[14px]">
        <Image
          src="/logos/logo-mark.png"
          alt="Jibriva"
          width={40}
          height={40}
          className="h-10 w-10"
        />
      </span>

      <p className="mt-8 text-[13px] font-semibold uppercase tracking-[0.1em] text-emerald">
        {notFound.eyebrow}
      </p>
      <h1 className="mt-4 text-[clamp(32px,5vw,48px)] font-extrabold tracking-[-0.02em] text-white">
        {notFound.h1}
      </h1>
      <p className="mt-4 max-w-[420px] text-[16px] leading-relaxed text-white/60">
        {notFound.body}
      </p>

      <Button href="/" tone="dark" className="mt-8">
        {notFound.buttonLabel}
      </Button>
    </div>
  );
}
