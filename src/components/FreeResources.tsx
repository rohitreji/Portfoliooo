import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, Code, Target, BookOpen, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All Resources" },
  { id: "programming", label: "Programming" },
  { id: "interview", label: "Interview Prep" },
  { id: "notes", label: "Notes" },
  { id: "projects", label: "Projects" },
];

const resources = [
  {
    id: 1,
    title: "BCA Survival Guide",
    description: "The ultimate survival guide and roadmap for BCA students.",
    category: "notes",
    icon: BookOpen,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    gradient: "from-blue-500/20 to-cyan-500/20",
    link: "/images/BCA_Survival_Guide.pdf",
    tag: "Popular",
    tagColor: "bg-orange-500/10 text-orange-500",
  },

  {
    id: 2,
    title: "First Step Towards IT field",
    description: "To-do list for beginners in IT field",
    category: "notes",
    icon: FileText,
    color: "text-indigo-500",
    bgColor: "bg-indigo-500/10",
    gradient: "from-indigo-500/20 to-blue-500/20",
    link: "/public/images/BCA_Survival_Guide.pdf",
    tag: "Beginner",
    tagColor: "bg-purple-500/10 text-purple-500",
  },
];

export const FreeResources = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredResources = resources.filter(
    (resource) => activeCategory === "all" || resource.category === activeCategory
  );

  return (
    <section id="resources" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-secondary/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            Free <span className="gradient-text">Resources</span>
          </h2>
          <p className="text-xl text-primary font-medium mb-2">
            Free resources I wish I had as a beginner 🚀
          </p>
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Comment on Instagram to get access or explore below! Downloadable study materials, guides, and toolkits.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id
                ? "bg-primary text-primary-foreground shadow-md scale-105"
                : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Resource Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={resource.id}
                  className="group relative cursor-pointer"
                  onClick={() => window.open(resource.link, '_blank')}
                >
                  <div className="glass h-full rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 border border-white/10 hover:border-primary/30 transition-all duration-300 flex flex-col relative overflow-hidden focus-within:ring-2 ring-primary">

                    {/* Subtle Gradient Background */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${resource.gradient} rounded-bl-full opacity-50 transition-opacity group-hover:opacity-100`} />

                    {/* Tag */}
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${resource.bgColor}`}>
                        <Icon className={`w-6 h-6 ${resource.color}`} />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${resource.tagColor}`}>
                        {resource.tag}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-light leading-relaxed mb-6">
                        {resource.description}
                      </p>
                    </div>

                    {/* Footer / CTA */}
                    <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                        Free PDF
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="group-hover:bg-primary group-hover:text-primary-foreground rounded-full transition-all duration-300 px-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(resource.link, '_blank');
                        }}
                      >
                        <span className="mr-2">Get Resource</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
