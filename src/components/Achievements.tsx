import { motion } from "framer-motion";
import { Award, Medal, Star, Target, Trophy, Zap } from "lucide-react";

const achievements = [
  { icon: Trophy, title: "Best Actor of the College", description: "Awarded Best Actor in the college short film competition for performance and screen presence.", image: "/images/PASS.jpeg", label: "Performance" },
  { icon: Award, title: "Best Manager of Kerala", description: "Reached Round 4 in Kerala’s prestigious Best Manager contest, organised by GIIMS.", image: "/images/NAAC.png", label: "Leadership" },
  { icon: Star, title: "Mr. CCST", description: "Recognised for personality and charisma at Cherpulassery College of Science & Technology.", image: "/images/MR.jpg", label: "Recognition" },
  { icon: Target, title: "Best NSS Member", description: "Recognised for dedication to community service and impactful initiatives.", image: "/images/bsd.jpg", label: "Community" },
  { icon: Zap, title: "Coordinated Mime", description: "Led a team of seven students to win first prize in a mime performance competition.", image: "/images/street.jpg", label: "Teamwork" },
  { icon: Medal, title: "Hosted NAAC Peer Team Visit", description: "Coordinated the visit and helped faculty, students, and evaluators communicate smoothly.", image: "/images/NAAC.png", label: "Coordination" },
];

export const Achievements = () => (
  <section id="achievements" className="relative overflow-hidden py-24 md:py-36">
    <div className="absolute inset-0 bg-secondary/45" />
    <div className="pointer-events-none absolute -left-48 top-1/4 h-[38rem] w-[38rem] rounded-full bg-primary/[0.06] blur-[140px]" />
    <div className="section-wrap relative z-10">
      <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8 }} className="mb-14 grid gap-6 border-b border-foreground/15 pb-9 md:grid-cols-[1fr_auto] md:items-end">
        <div><p className="eyebrow mb-5">Milestones · 01—06</p><h2 className="section-title">Moments that<br /><span className="text-primary">moved me forward.</span></h2></div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A few moments of performance, leadership, and community that have shaped my journey.</p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, index) => <motion.article key={item.title} initial={{ opacity: 0, y: 70, rotateX: 10, scale: .97 }} whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .75, delay: (index % 3) * .12, ease: [0.22, 1, .36, 1] }} whileHover={{ y: -9, rotateY: index % 2 === 0 ? 1.8 : -1.8, transition: { duration: .3 } }} style={{ transformPerspective: 1100 }} className="group overflow-hidden border border-foreground/15 bg-card">
          <div className="relative aspect-[1.45/1] overflow-hidden">
            <motion.img src={item.image} alt={item.title} loading="lazy" whileHover={{ scale: 1.08 }} transition={{ duration: .8 }} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 backdrop-blur-md"><item.icon size={14} className="text-primary" /><span className="font-mono text-[9px] uppercase tracking-widest text-white">{item.label}</span></div>
            <span className="absolute bottom-3 right-5 font-mono text-4xl font-bold tracking-tighter text-white/70">0{index + 1}</span>
          </div>
          <div className="relative -mt-8 p-5 pt-0 md:p-6 md:pt-0"><h3 className="mb-3 text-xl font-extrabold tracking-tight transition-colors group-hover:text-primary">{item.title}</h3><p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p><div className="mt-5 h-px w-full bg-foreground/15"><motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: .8, delay: .25 + (index % 3) * .12 }} style={{ transformOrigin: "left" }} className="h-px w-1/3 bg-primary" /></div></div>
        </motion.article>)}
      </div>
    </div>
  </section>
);
