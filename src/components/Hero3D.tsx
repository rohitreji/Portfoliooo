import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Download } from "lucide-react";

export const Hero3D = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[hsl(14_88%_60%)]/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-text">Rohit Reji</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
               Master of Computer Applications (MCA) Student at LPU | Front-End Developer (React, JavaScript, HTML, CSS) | Python | Exploring AI
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
              {/* anchor with download attribute — file should be at public/cv.pdf */}
              <a href="/images/Rohit reji.pdf" download className="inline-block">
                <Button variant="hero" size="lg" className="gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </Button>
              </a>

               <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com/rohit.reji15"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_hsla(0_72%_51%/0.5)]"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/rohit_reji?igsh=dnRtZ3E3NHU5cHdn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_hsla(0_72%_51%/0.5)]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-reji-455a67249/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-primary transition-all duration-300 flex items-center justify-center hover:shadow-[0_0_20px_hsla(0_72%_51%/0.5)]"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative animate-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-[hsl(14_88%_60%)] rounded-full blur-2xl opacity-30 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-card to-secondary border-2 border-primary/20 overflow-hidden">
                <img 
                  src="/images/FORMM.png"
                  alt="Rohit Reji"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
