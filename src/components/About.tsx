import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, School, GraduationCap, Code2 } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with modern technologies and best practices.",
  },
  {
    icon: BookOpen,
    title: "UI/UX Design",
    description: "Creating intuitive and beautiful user interfaces that prioritize user experience.",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Always exploring new technologies and methodologies to stay at the forefront of development.",
  },
];

const education = [
  {
    icon: School,
    title: "Higher Secondary",
    institution: "From Gitarattan Jindal Public School, New Delhi",
    period: "Completed",
    description: "Where my journey into the world of technology and learning truly began, sparking curiosity and passion.",
  },
  {
    icon: BookOpen,
    title: "Bachelor of Computer Applications",
    institution: "BCA at Cherpulassery College of Science and Technology",
    period: "Graduated",
    description: "Dove deep into programming fundamentals, software development, and the art of problem-solving.",
  },
  {
    icon: GraduationCap,
    title: "Master of Computer Applications",
    institution: "MCA at Lovely Professional University",
    period: "Currently Pursuing",
    description: "Expanding horizons with advanced concepts, specializing in modern technologies and innovation.",
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer and designer dedicated to crafting exceptional digital experiences
            that merge innovation with elegance.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-xl p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold font-playfair mb-3">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              My Education <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Every step has been a beautiful adventure of growth, discovery, and endless curiosity in technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="glass rounded-xl p-8 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                    <edu.icon className="w-8 h-8 text-primary group-hover:rotate-6 transition-transform duration-500" />
                  </div>
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold font-playfair mb-2 group-hover:text-primary transition-colors duration-300">
                      {edu.title}
                    </h3>
                    
                    <p className="text-sm font-medium text-primary/80 mb-1">
                      {edu.institution}
                    </p>
                    
                    <p className="text-xs text-muted-foreground">
                      {edu.period}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* About Me Detailed Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-xl p-8 md:p-12 border-l-4 border-primary/50"
        >
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center flex-shrink-0">
                <Code2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
                  Building Digital <span className="gradient-text">Excellence</span>
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Full-Stack Developer with expertise in React, JavaScript, Python, HTML, and CSS. Experienced in building and deploying functional applications, including a Movie Recommendation System and 'SensAI', an AI-powered career mentor developed during a hackathon.

                  Proven leadership and teamwork skills, recognized as a Best Manager competition finalist and Best NSS Member for community contributions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Actively seeking internships or entry-level software development roles to leverage my technical skills and problem-solving abilities to deliver impactful, real-world solutions
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">Problem Solving & Innovation</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">Responsive Web Design</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">Leadership Experience in Project & Community Initiatives</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">Strong Communication & Team Collaboration Skills</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">UI/UX Design with a Focus on User-Centered Experiences</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                  <span className="text-foreground group-hover:text-primary transition-colors">Agile Development & Continuous Improvement</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};