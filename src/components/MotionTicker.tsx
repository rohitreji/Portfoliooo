import { ArrowUpRight } from "lucide-react";

const phrases = ["Creative developer", "Product thinker", "MCA student", "Always building"];

export const MotionTicker = () => (
  <div aria-label="Creative developer, product thinker, MCA student, always building" className="overflow-hidden border-y border-foreground/15 bg-primary py-4 text-primary-foreground">
    <div className="ticker-track flex w-max items-center gap-7 whitespace-nowrap">
      {[...phrases, ...phrases, ...phrases, ...phrases].map((phrase, index) => <span key={`${phrase}-${index}`} className="flex items-center gap-7 text-[clamp(1rem,2vw,1.45rem)] font-extrabold uppercase tracking-[-.04em]"><span>{phrase}</span><ArrowUpRight size={18} /></span>)}
    </div>
  </div>
);
