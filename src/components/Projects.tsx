import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { number: "01", type: "Full stack · Identity tech", title: "Pehchaan", description: "A voter identity verification platform bringing face recognition, OCR and secure registration together in one clear experience.", image: "/images/Pehchaan.png", tags: ["React", "Node.js", "FastAPI", "MongoDB"], github: "https://github.com/rohitreji/Pehaachan", website: "https://pehchaan-two.vercel.app/" },
  { number: "02", type: "AI · Movie discovery", title: "MovieTox", description: "An AI powered movie discovery experience that uses personal preferences to help people find their next watch.", image: "/images/movietox.png", tags: ["React", "Python", "Machine Learning", "API"], github: "https://github.com/rohitreji", website: "#" },
];

export const Projects = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="section-wrap">
      <div className="mb-14 flex flex-col justify-between gap-6 border-b border-foreground/15 pb-8 md:flex-row md:items-end">
        <div><p className="eyebrow mb-4">Selected work · 2024—2026</p><h2 className="text-5xl font-extrabold leading-none md:text-7xl">Things I’ve<br /><span className="text-primary">put into the world.</span></h2></div>
        <p className="max-w-sm text-muted-foreground">A selection of products and experiments shaped by curiosity, care and a love of solving useful problems.</p>
      </div>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
        {projects.map((project, index) => (
          <motion.article key={project.number} initial={{ opacity: 0, y: 80, rotateX: 8 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .8, delay: index * .12, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8, rotateY: index % 2 ? -1.2 : 1.2, transition: { duration: .35 } }} style={{ transformStyle: "preserve-3d", transformPerspective: 1200 }} className="group">
            <a href={project.website === "#" ? project.github : project.website} target="_blank" rel="noreferrer" className="relative mb-6 block aspect-[1.52/1] overflow-hidden bg-secondary">
              <img src={project.image} alt={`${project.title} project`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" />
              <span className="absolute bottom-4 right-4 grid h-12 w-12 place-items-center rounded-full bg-primary text-white transition-transform group-hover:rotate-45"><ArrowUpRight size={21} /></span>
            </a>
            <div className="flex items-start justify-between gap-4">
              <div><p className="eyebrow mb-2">{project.number} / {project.type}</p><h3 className="text-3xl font-bold md:text-4xl">{project.title}</h3></div>
              <div className="flex gap-2 pt-2"><a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`} className="grid h-10 w-10 place-items-center border border-foreground/20 hover:border-primary hover:text-primary"><Github size={17} /></a><a href={project.website} target="_blank" rel="noreferrer" aria-label={`${project.title} live website`} className="grid h-10 w-10 place-items-center border border-foreground/20 hover:border-primary hover:text-primary"><ArrowUpRight size={17} /></a></div>
            </div>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-foreground/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider">{tag}</span>)}</div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
