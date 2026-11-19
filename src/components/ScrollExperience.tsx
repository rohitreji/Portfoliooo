import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { cancelSmoothScroll, smoothScrollTo } from "@/lib/smoothScroll";

export const SmoothAnchorScroll = () => {
  useEffect(() => {
    const stop = () => cancelSmoothScroll();
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor || anchor.target === "_blank") return;
      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;
      event.preventDefault();
      window.history.pushState(null, "", hash);
      smoothScrollTo(target);
    };
    const onPopState = () => {
      if (window.location.hash) smoothScrollTo(window.location.hash);
      else window.scrollTo(0, 0);
    };
    document.addEventListener("click", onClick);
    window.addEventListener("wheel", stop, { passive: true });
    window.addEventListener("touchstart", stop, { passive: true });
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);
  return null;
};

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  return <motion.div aria-hidden="true" style={{ scaleX, transformOrigin: "0% 50%" }} className="fixed inset-x-0 top-0 z-[70] h-[3px] bg-primary shadow-[0_0_16px_hsl(var(--primary)/.55)]" />;
};

export const PageLoader = () => {
  const [complete, setComplete] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let fallback: number;
    const finish = () => {
      window.clearTimeout(fallback);
      fallback = window.setTimeout(() => setComplete(true), reduceMotion ? 0 : 380);
    };
    fallback = window.setTimeout(() => setComplete(true), 1900);
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => {
      window.clearTimeout(fallback);
      window.removeEventListener("load", finish);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {!complete && <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: .65, ease: [0.76, 0, .24, 1] } }} className="fixed inset-0 z-[100] grid place-items-center bg-[#11110f] text-[#f4f4f0]">
        <div className="w-[min(78vw,420px)]">
          <div className="mb-5 flex items-end justify-between"><span className="text-2xl font-extrabold tracking-[-.08em]">ROHIT REJI<span className="text-primary">®</span></span><span className="font-mono text-xs text-white/50">LOADING EXPERIENCE</span></div>
          <div className="h-px w-full overflow-hidden bg-white/15"><motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: [0.76, 0, .24, 1] }} style={{ transformOrigin: "left" }} className="h-full bg-primary" /></div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[.22em] text-white/40">A little patience. A lot of pixels.</p>
        </div>
      </motion.div>}
    </AnimatePresence>
  );
};
