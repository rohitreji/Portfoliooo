import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { smoothScrollTo } from "@/lib/smoothScroll";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#achievements" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const goTo = (href: string) => { smoothScrollTo(href); setIsOpen(false); };

  return (
    <motion.header initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: .7, delay: .4, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 bottom-4 z-50 mx-auto w-full px-3 md:bottom-5 md:w-fit md:px-0">
      <AnimatePresence>
        {isOpen && <motion.nav initial={{ opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .96 }} className="mb-3 ml-auto grid w-[min(100%,360px)] grid-cols-2 gap-1 rounded-[26px] border border-white/15 bg-[#f4f4f0] p-3 text-[#141412] shadow-2xl md:absolute md:bottom-[calc(100%+14px)] md:right-0 md:w-80">
          {navItems.map((item, index) => <motion.button key={item.name} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * .045 }} onClick={() => goTo(item.href)} className="flex items-center justify-between rounded-2xl px-4 py-3 text-left text-xs font-bold uppercase tracking-wider transition-colors hover:bg-black/5 hover:text-primary"><span>{item.name}</span><ArrowUpRight size={14} /></motion.button>)}
        </motion.nav>}
      </AnimatePresence>
      <div className="mx-auto flex h-[58px] w-full max-w-[460px] items-center justify-between gap-5 rounded-full border border-black/5 bg-[#f4f4f0] px-3 pl-5 text-[#141412] shadow-[0_10px_40px_rgba(0,0,0,.35)] md:w-[min(690px,calc(100vw-48px))] md:px-5">
        <button onClick={() => goTo("#home")} className="shrink-0 text-[10px] font-extrabold uppercase tracking-[.14em] md:text-xs">Rohit Reji<span className="ml-1 text-primary">®</span></button>
        <div className="hidden flex-1 items-center justify-center gap-1 md:flex">{navItems.slice(0, 4).map((item) => <button key={item.name} onClick={() => goTo(item.href)} className="rounded-full px-3 py-2 text-[9px] font-bold uppercase tracking-[.1em] text-black/60 transition-colors hover:bg-black/5 hover:text-black">{item.name}</button>)}</div>
        <button onClick={() => goTo("#contact")} className="hidden items-center gap-1 rounded-full bg-black px-4 py-2.5 text-[9px] font-bold uppercase tracking-wider text-white transition-transform hover:scale-105 md:flex">Let’s talk <ArrowUpRight size={13} /></button>
        <button onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black text-white transition-transform hover:scale-105">{isOpen ? <X size={17} /> : <Menu size={17} />}</button>
      </div>
    </motion.header>
  );
};
