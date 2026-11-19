import { motion } from "framer-motion";

const moments = [
  { src: "/images/rohit-flowers.png", alt: "Rohit among bright bougainvillea", caption: "A little colour, Kerala" },
  { src: "/images/rohit-casual.png", alt: "Rohit in a patterned shirt", caption: "Slow afternoons" },
  { src: "/images/rohit-full.png", alt: "Rohit standing in the sunlight", caption: "Out and about" },
  { src: "/images/rohit-warm.png", alt: "A warm portrait of Rohit", caption: "One for the camera" },
];

export const PhotoJournal = () => (
  <section className="py-20 md:py-28">
    <div className="section-wrap">
      <div className="mb-9 flex flex-col justify-between gap-4 border-b border-foreground/15 pb-6 md:flex-row md:items-end">
        <div><p className="eyebrow mb-3">Off the screen</p><h2 className="text-4xl font-extrabold md:text-6xl">A few moments, <span className="text-primary">lately.</span></h2></div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A small collection of portraits and everyday scenes from Kerala.</p>
      </div>
      <motion.div initial={{ opacity: 0, scale: .96, rotateX: 5 }} whileInView={{ opacity: 1, scale: 1, rotateX: 0 }} viewport={{ once: true, amount: .2 }} transition={{ duration: .9 }} style={{ transformStyle: "preserve-3d", transformPerspective: 1200 }} className="mb-5 aspect-[2.3/1] overflow-hidden bg-secondary">
        <motion.img whileHover={{ scale: 1.035 }} transition={{ duration: .8 }} src="/images/rohit-bw.jpeg" alt="Black and white portrait of Rohit Reji" className="h-full w-full object-cover object-[center_42%]" loading="lazy" />
      </motion.div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
        {moments.map((moment, index) => <motion.figure key={moment.src} initial={{ opacity: 0, y: 48, rotateY: index % 2 ? -6 : 6 }} whileInView={{ opacity: 1, y: 0, rotateY: 0 }} viewport={{ once: true, amount: .3 }} transition={{ duration: .7, delay: index * .08 }} whileHover={{ y: -7, rotateZ: index % 2 ? -1.5 : 1.5 }} style={{ transformPerspective: 900 }} className="group overflow-hidden">
          <div className="aspect-[4/5] overflow-hidden bg-secondary"><motion.img whileHover={{ scale: 1.07 }} transition={{ duration: .7 }} src={moment.src} alt={moment.alt} loading="lazy" className="h-full w-full object-cover" /></div>
          <figcaption className="eyebrow mt-3">{moment.caption}</figcaption>
        </motion.figure>)}
      </div>
    </div>
  </section>
);

