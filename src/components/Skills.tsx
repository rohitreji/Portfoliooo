import { motion } from "framer-motion";
import { Braces, Database, Sparkles } from "lucide-react";

const categories = [
  { number: "01", title: "Frontend", icon: Braces, note: "Interfaces & interaction", skills: [{ name: "React / Next.js", level: 50 }, { name: "HTML & CSS", level: 90 }] },
  { number: "02", title: "Backend", icon: Database, note: "Data & application logic", skills: [{ name: "MongoDB", level: 88 }, { name: "Python", level: 82 }, { name: "SQL", level: 85 }] },
  { number: "03", title: "Tools & design", icon: Sparkles, note: "Making ideas real", skills: [{ name: "Figma", level: 40 }, { name: "Git", level: 70 }, { name: "VS Code", level: 88 }] },
];

export const Skills = () => (
  <section id="skills" className="relative overflow-hidden py-24 md:py-36">
    <div className="pointer-events-none absolute right-0 top-1/4 h-[36rem] w-[36rem] rounded-full bg-primary/[0.06] blur-[140px]" />
    <div className="section-wrap relative z-10">
      <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .75 }} className="mb-14 flex flex-col justify-between gap-6 border-b border-foreground/15 pb-9 md:flex-row md:items-end">
        <div><p className="eyebrow mb-5">Tools I reach for</p><h2 className="section-title">Technical<br /><span className="text-primary">expertise.</span></h2></div>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">A growing toolkit for designing, building, and refining digital products. The meters animate as each skill set comes into view.</p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-3">
        {categories.map((category, categoryIndex) => <motion.article key={category.number} initial={{ opacity: 0, y: 70, rotateX: 10 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .75, delay: categoryIndex * .13, ease: [0.22, 1, .36, 1] }} whileHover={{ y: -8, transition: { duration: .25 } }} style={{ transformPerspective: 1000 }} className="group relative overflow-hidden border border-foreground/15 bg-card p-6 md:p-8">
          <div className="mb-12 flex items-start justify-between"><div><p className="eyebrow mb-2">{category.number} / Capabilities</p><h3 className="text-3xl font-extrabold tracking-tight">{category.title}</h3><p className="mt-2 text-xs text-muted-foreground">{category.note}</p></div><category.icon className="h-6 w-6 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" /></div>
          <div className="space-y-7">
            {category.skills.map((skill, skillIndex) => <div key={skill.name}>
              <div className="mb-3 flex items-end justify-between"><span className="text-sm font-semibold">{skill.name}</span><span className="font-mono text-xs text-primary">{skill.level}<span className="text-foreground/45"> / 100</span></span></div>
              <div className="h-[3px] overflow-hidden bg-foreground/12"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: .75 }} transition={{ duration: 1.05, delay: .25 + categoryIndex * .15 + skillIndex * .12, ease: [0.22, 1, .36, 1] }} style={{ width: `${skill.level}%`, transformOrigin: "left" }} className="h-full bg-primary" /></div>
            </div>)}
          </div>
          <div className="mt-12 flex items-center justify-between border-t border-foreground/15 pt-4"><span className="font-mono text-[9px] uppercase tracking-[.18em] text-muted-foreground">Always learning</span><span className="text-primary transition-transform duration-300 group-hover:translate-x-1">↗</span></div>
        </motion.article>)}
      </div>

      <motion.p initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .8 }} transition={{ duration: .6, delay: .2 }} className="mt-8 text-center font-mono text-[10px] uppercase tracking-[.2em] text-muted-foreground">Always learning · Always building</motion.p>
    </div>
  </section>
);
