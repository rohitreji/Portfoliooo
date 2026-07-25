import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Pehchaan - A Voter ID Verification Application",
    description: "AI based Application Which verifiy wheather the user is Verified Voter of Particular Country Based on his or her Ad ",
    image: "/images/Pehchaan.png",
    tags: ["React", "Node.js", "FastAPI", "Express.js"],
    gradient: "from-purple-500/20 to-pink-500/20",
    github: "https://github.com/rohitreji/Pehaachan",
    website: "https://pehchaan-two.vercel.app/login",
  },
  {
    title: "Zomato Clone",
    description: "Developed a full-stack Zomato-inspired food delivery platform using the MERN stack with secure user authentication, restaurant and menu management, search & filtering, cart functionality, order management, and responsive UI. Built RESTful APIs with MongoDB for seamless data management.",
    image: "/images/zomato.png",
    tags: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    gradient: "from-red-500/20 to-orange-500/20",
    github: "https://github.com/rohitreji/ZomatoDummy",
    website: "https://zomato-dummy.vercel.app/",
  },

];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work combining innovation, design, and technical excellence
          </p>
        </motion.div>

        {/* Centered two-column layout */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="glass rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Hover overlay with working buttons */}
                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/20"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-primary/20"
                        asChild
                      >
                        <a href={project.website} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold font-playfair mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};