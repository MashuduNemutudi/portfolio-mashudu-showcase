import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import profileImage from "@/assets/mashudu-profile.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 animated-gradient opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in text-center md:text-left">
              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                  <span className="gradient-text">Mashudu</span>
                  <br />
                  <span className="text-white">Nemutudi</span>
                </h1>
                <p className="text-lg md:text-xl text-white/90 font-medium">
                  Final Year Computer Science Student | Full-Stack Developer
                </p>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-white/80 leading-relaxed animate-fade-in animate-delay-200">
                Passionate about creating innovative solutions with Java EE, React, Python, and modern web technologies. 
                Currently seeking Work Integrated Learning opportunities to complete my National Diploma.
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 animate-fade-in animate-delay-300">
                {["Java EE", "ReactJS", "Python", "PostgreSQL", "JavaScript", "REST APIs"].map((tech, index) => (
                  <span 
                    key={tech}
                    className={`px-4 py-2 rounded-full glass text-white/90 text-sm font-medium hover-glow animate-delay-${(index + 1) * 100}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in animate-delay-400">
                <Button 
                  size="lg" 
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-medium hover:scale-105 hover:shadow-glow"
                  onClick={() => scrollToSection("projects")}
                >
                  View My Work
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm transition-all duration-medium hover:scale-105"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </div>

              {/* Social links */}
              <div className="flex justify-center md:justify-start gap-6 animate-fade-in animate-delay-400">
                <a 
                  href="https://github.com/MashuduNemutudi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-medium hover:scale-110 transform"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mashudu-nemutudi-201368316/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors duration-medium hover:scale-110 transform"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:nemutudimashudu03@gmail.com"
                  className="text-white/70 hover:text-white transition-colors duration-medium hover:scale-110 transform"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in animate-delay-200">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover-glow">
                  <img 
                    src={profileImage} 
                    alt="Mashudu Nemutudi - Professional Profile"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-white/60 hover:text-white transition-colors duration-medium"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;