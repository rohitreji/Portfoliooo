import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Code2, GraduationCap, School } from "lucide-react";

const strengths = [
  { icon: Code2, number: "01", title: "Full-stack development", description: "Building end-to-end web applications with modern technologies and practical thinking." },
  { icon: BookOpen, number: "02", title: "UI / UX design", description: "Creating clear, intuitive interfaces that make useful products feel effortless." },
  { icon: GraduationCap, number: "03", title: "Continuous learning", description: "Exploring new tools and ideas, then putting what I learn into practice." },
];

const education = [
  { icon: School, index: "01", title: "Higher Secondary", institution: "Gitarattan Jindal Public School · New Delhi", period: "Completed", description: "Where my curiosity and interest in technology first took shape." },
  { icon: BookOpen, index: "02", title: "Bachelor of Computer Applications", institution: "Cherpulassery College of Science and Technology", period: "Graduated", description: "Built a foundation in programming, software development, and problem-solving." },
  { icon: GraduationCap, index: "03", title: "Master of Computer Applications", institution: "Lovely Professional University", period: "Currently pursuing", description: "Growing my knowledge of modern technologies and advanced computing." },
];

const bio = "Full-stack developer with experience in React, JavaScript, Python, HTML, and CSS. I’ve built projects including a movie recommendation system and SensAI, an AI-powered career mentor developed during a hackathon. I’m also a Best Manager competition finalist and a Best NSS Member, recognised for leadership and community contributions.";

export const About = () => (
  <section id="about" className="relative overflow-hidden py-24 md:py-36">
    <div className="pointer-events-none absolute -right-52 top-20 h-[34rem] w-[34rem] rounded-full bg-primary/[0.07] blur-[120px]" />
    <div className="section-wrap relative z-10">
      <motion.div initial={{ opacity: 0, y: 55 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .8, ease: [0.22, 1, .36, 1] }} className="grid gap-8 border-b border-foreground/15 pb-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <div><p className="eyebrow mb-5">01 / A little about me</p><h2 className="section-title max-w-3xl">Curiosity is how<br />I <span className="text-primary">build.</span></h2></div>
        <div className="max-w-xl lg:justify-self-end"><p className="text-lg leading-relaxed text-foreground/75 md:text-xl">Passionate developer and designer focused on crafting digital experiences that bring useful ideas to life.</p><a href="#contact" className="mt-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary">A little more about me <span className="grid h-9 w-9 place-items-center rounded-full border border-foreground/25"><ArrowUpRight size={15} /></span></a></div>
      </motion.div>

      <div className="grid border-b border-foreground/15 md:grid-cols-3">
        {strengths.map((item, index) => <motion.article key={item.number} initial={{ opacity: 0, y: 48, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: index * .1, ease: [0.22, 1, .36, 1] }} whileHover={{ y: -6, rotateY: index - 1, transition: { duration: .25 } }} style={{ transformPerspective: 1000 }} className="group relative min-h-[245px] border-b border-foreground/15 py-7 md:border-b-0 md:px-7 md:first:pl-0 md:last:pr-0 md:[&:not(:last-child)]:border-r md:[&:not(:last-child)]:border-foreground/15">
          <div className="mb-11 flex items-center justify-between"><span className="eyebrow">{item.number}</span><item.icon className="h-5 w-5 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" /></div>
          <h3 className="mb-3 text-2xl font-extrabold capitalize tracking-tight">{item.title}</h3><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </motion.article>)}
      </div>

      <motion.div initial={{ opacity: 0, y: 50, rotateX: 5 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8 }} style={{ transformPerspective: 1200 }} className="my-20 grid overflow-hidden border border-foreground/15 bg-card md:grid-cols-[.34fr_1fr]">
        <div className="relative min-h-48 overflow-hidden bg-primary p-7 text-primary-foreground md:p-9"><span className="eyebrow text-primary-foreground">A thought I work by</span><div className="absolute -bottom-12 -right-9 rotate-12 text-[11rem] font-black leading-none tracking-[-.12em] opacity-15">RR</div><Code2 className="absolute bottom-8 left-8 h-10 w-10" /></div>
        <div className="p-7 md:p-10"><p className="eyebrow mb-4">The work behind the work</p><h3 className="mb-5 text-3xl font-extrabold tracking-tight md:text-4xl">Building digital <span className="text-primary">experiences.</span></h3><p className="max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">{bio}</p><p className="mt-4 max-w-4xl text-sm leading-7 text-muted-foreground md:text-base">I’m currently looking for internship and entry-level software development opportunities where I can contribute, keep learning, and solve real problems with a thoughtful team.</p></div>
      </motion.div>

      <div className="relative">
        <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .7 }} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow mb-4">The path so far · 01—03</p><h3 className="section-title text-4xl md:text-6xl">Education <span className="text-primary">journey.</span></h3></div><p className="max-w-md text-sm leading-relaxed text-muted-foreground">Each step has added a new way to think, make, and solve problems.</p></motion.div>
        <div className="relative grid gap-4 md:grid-cols-3 md:gap-0">
          <motion.div aria-hidden="true" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: 1.2, ease: [0.22, 1, .36, 1] }} style={{ transformOrigin: "left" }} className="absolute left-0 right-0 top-0 hidden h-px bg-primary/60 md:block" />
          {education.map((item, index) => <motion.article key={item.index} initial={{ opacity: 0, y: 65, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .75, delay: index * .17, ease: [0.22, 1, .36, 1] }} whileHover={{ y: -8, transition: { duration: .25 } }} style={{ transformPerspective: 900 }} className="group relative border border-foreground/15 bg-background/60 p-6 md:border-0 md:border-r md:border-foreground/15 md:px-7 md:pt-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0">
            <div className="mb-8 flex items-center justify-between"><span className="grid h-9 w-9 place-items-center rounded-full border border-primary/60 bg-background text-xs font-bold text-primary">{item.index}</span><item.icon className="h-5 w-5 text-foreground/45 transition-colors group-hover:text-primary" /></div>
            <p className="eyebrow mb-3">{item.period}</p><h4 className="mb-3 text-xl font-extrabold leading-tight tracking-tight md:min-h-14">{item.title}</h4><p className="mb-4 text-xs font-semibold leading-relaxed text-primary/85">{item.institution}</p><p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </motion.article>)}
        </div>
      </div>
    </div>
  </section>
);
