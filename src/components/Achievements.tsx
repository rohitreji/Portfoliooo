import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy, Star, Target, Zap, Medal } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Best Actor of The College",
    description: "Awarded Best actor in the college Short Film Competition for outstanding performance and screen presence",
    image: "/images/bestactor.jpg",
  },
  {
    icon: Award,
    title: "Participate in Best Manager Of Kerala",
    description: "Reached Round 4 in Kerala’s prestigious best manager contest organized by GIIMS.",
    image: "/images/manag.jpg",
  },
  {
    icon: Star,
    title: "Mr. CCST",
    description: "Awarded for personality and charisma at Cherpulassery College of Science & Technology.",
    image: "/images/MR.jpg" /* or keep external URL if you prefer */,
  },
  {
    icon: Target,
    title: "Best NSS Member",
    description: "Recognized as Best NSS Member for exceptional dedication to community service and impactful initiatives",
    image: "/images/bsd.jpg",
  },
  {
    icon: Zap,
    title: "Coordinated Mime",
    description: "Coordinated mime consist of 7 students under my leadership won 1st prize in mime performance competition",
    image: "/images/street.jpg",
  },
  {
    icon: Medal,
    title: "Hosted NAAC Peer Team Visit",
    description: "Successfully hosted the NAAC Peer Team Visit program, ensuring smooth coordination and effective communication between faculty, students, and evaluators.",
    image: "/images/NAAC.jpg",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent/40 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
            My <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Milestones and accomplishments throughout my journey
          </p>
        </motion.div>

        {/* Horizontal Scrolling Container */}
        <div className="relative">
          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            <div className="flex gap-6 pb-4 px-4 min-w-max">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-xl overflow-hidden w-80 flex-shrink-0 hover:border-primary/50 transition-all duration-300 group"
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    
                    {/* Icon */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-lg bg-primary/20 glass flex items-center justify-center">
                      <achievement.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold font-playfair mb-2 group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-muted-foreground text-sm mt-6"
        >
          ← Scroll to explore more achievements →
        </motion.p>
      </div>
    </section>
  );
};
