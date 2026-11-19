import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Instagram, Linkedin } from "lucide-react";

export const Hero3D = () => {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [5, -5]), { stiffness: 75, damping: 22 });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [-4, 4]), { stiffness: 75, damping: 22 });
  const rotateZ = useTransform(px, [-0.5, 0.5], [-3, 3]);
  const imageX = useSpring(useTransform(px, [-0.5, 0.5], [12, -12]), { stiffness: 50, damping: 24 });
  const imageY = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 50, damping: 24 });

  const trackPointer = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section id="home" onMouseMove={trackPointer} onMouseLeave={() => { px.set(0); py.set(0); }} className="film-grain relative flex min-h-[760px] h-[100svh] max-h-[1200px] items-end overflow-hidden bg-background pb-32 pt-24 md:pb-36">
      <motion.img src="/images/rohit-bw.jpeg" alt="" aria-hidden="true" style={{ x: imageX, y: imageY, scale: 1.08 }} className="absolute inset-0 h-full w-full object-cover object-[center_42%] opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-background/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-background/15" />
      <div className="section-wrap relative z-10 w-full" style={{ perspective: 1200 }}>
        <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
          <div className="max-w-5xl">
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .15 }} className="eyebrow mb-6 flex items-center gap-3 text-primary"><span className="h-2 w-2 animate-pulse rounded-full bg-primary" />Developer · Digital creator · Kerala, India</motion.p>
            <h1 className="text-[clamp(4.5rem,13vw,12rem)] font-extrabold leading-[0.78] tracking-[-0.105em] text-foreground">
              <motion.span initial={{ y: 120, opacity: 0, rotateX: -35 }} animate={{ y: 0, opacity: 1, rotateX: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="block origin-bottom">Rohit</motion.span>
              <motion.span initial={{ y: 120, opacity: 0, rotateX: -35 }} animate={{ y: 0, opacity: 1, rotateX: 0 }} transition={{ duration: 1, delay: .12, ease: [0.22, 1, 0.36, 1] }} className="block origin-bottom text-primary">Reji<span className="text-foreground">®</span></motion.span>
            </h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .45 }} className="mt-9 flex max-w-4xl flex-col gap-6 border-t border-foreground/25 pt-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-base leading-relaxed text-foreground/75 md:text-lg">I design and build thoughtful digital experiences, from sharp interfaces to full stack products.</p>
              <a href="#projects" className="group inline-flex shrink-0 items-center gap-3 text-xs font-bold uppercase tracking-widest">Explore my work <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-45 group-hover:scale-110"><ArrowUpRight size={19} /></span></a>
            </motion.div>
            <div className="mt-6 flex items-center gap-3">
              <a href="/images/Rohit Reji.pdf" download className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-4 py-2.5 text-[10px] font-bold uppercase tracking-wider transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"><Download size={14} /> Download CV</a>
              <a href="https://www.instagram.com/rohit_reji/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-foreground/30 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"><Instagram size={16} /></a>
              <a href="https://www.linkedin.com/in/rohit-reji-455a67249/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-foreground/30 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"><Linkedin size={16} /></a>
            </div>
          </div>
          <motion.div style={{ x: imageX, y: imageY, rotateZ }} initial={{ opacity: 0, scale: .8, rotate: 8 }} animate={{ opacity: 1, scale: 1, rotate: 3 }} transition={{ duration: 1.1, delay: .35 }} className="motion-safe-drift relative mb-4 hidden w-[min(24vw,290px)] rotate-3 border border-white/25 bg-card p-2 pb-9 shadow-2xl shadow-black/40 lg:block">
            <img src="/images/rohit-flowers.png" alt="Rohit in front of bougainvillea" className="aspect-[4/5] w-full object-cover" />
            <span className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-widest text-foreground/75">Kerala · 2026</span>
          </motion.div>
        </motion.div>
        <div className="mt-12 flex items-center justify-between border-t border-foreground/20 pt-4 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/55"><span>Building with purpose</span><a href="#about" className="flex items-center gap-2 transition-colors hover:text-primary">Scroll to discover <ArrowDown size={14} /></a><span className="hidden sm:inline">Scroll / Explore</span></div>
      </div>
      <div className="pointer-events-none absolute -right-16 top-[12%] h-[40rem] w-[40rem] rounded-full bg-primary/10 blur-[140px]" />
    </section>
  );
};
