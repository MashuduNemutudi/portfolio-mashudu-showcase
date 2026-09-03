import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download, FolderGit2, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-workspace.jpg";
import profileImage from "@/assets/mashudu-profile.jpg.asset.json";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = ["React", "Node.js", "Express", "PostgreSQL", "Java EE", "React Native", "Python"];

  return (
    <section id="home" className="relative min-h-dvh flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 animated-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-7 animate-fade-in text-center md:text-left">
              <div className="space-y-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-white/90 text-xs md:text-sm font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true"></span>
                  IT Technical Support Intern at Nkgwete IT Solutions
                </span>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
                  <span className="gradient-text">Mashudu</span>
                  <br />
                  <span className="text-primary-foreground">Nemutudi</span>
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 font-medium">
                  Software Developer | Full-Stack Developer
                </p>
                <p className="flex items-center justify-center md:justify-start gap-2 text-sm md:text-base text-primary-foreground/70">
                  <MapPin size={16} aria-hidden="true" />
                  Soweto, Gauteng, South Africa
                </p>
              </div>

              {/* Description */}
              <p className="text-base md:text-lg text-primary-foreground/85 leading-relaxed max-w-xl mx-auto md:mx-0 animate-fade-in animate-delay-200">
                Computer Science graduate currently providing first-line IT technical support at Eskom Megawatt Park through
                the Nkgwete IT Solutions Graduate Internship Programme. I bring a full-stack development background — including
                the Mbevha Motors Management System built with React, Node.js and PostgreSQL — to enterprise support and
                problem-solving.
              </p>

              {/* Tech stack badges */}
              <ul className="flex flex-wrap justify-center md:justify-start gap-2.5 animate-fade-in animate-delay-300">
                {techStack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3.5 py-1.5 rounded-full glass text-primary-foreground/90 text-xs md:text-sm font-medium"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center md:justify-start animate-fade-in animate-delay-400">
                <Button
                  size="lg"
                  className="min-h-11 bg-primary-foreground text-primary-dark hover:bg-primary-foreground/90 font-semibold transition-all duration-medium hover:scale-[1.03]"
                  onClick={() => scrollToSection("projects")}
                >
                  <FolderGit2 size={18} className="mr-2" aria-hidden="true" />
                  View Projects
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="min-h-11 bg-white/20 hover:bg-white/30 text-primary-foreground border border-white/30 backdrop-blur-sm transition-all duration-medium hover:scale-[1.03]"
                >
                  <a href="/Mashudu_Nemutudi_CV.pdf" download="Mashudu_Nemutudi_CV.pdf">
                    <Download size={18} className="mr-2" aria-hidden="true" />
                    Download CV
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="min-h-11 bg-transparent hover:bg-white/20 text-primary-foreground border border-white/40 backdrop-blur-sm transition-all duration-medium hover:scale-[1.03]"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail size={18} className="mr-2" aria-hidden="true" />
                  Contact Me
                </Button>
              </div>

              {/* Social links */}
              <div className="flex justify-center md:justify-start gap-5 animate-fade-in animate-delay-400">
                <a
                  href="https://github.com/MashuduNemutudi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-medium"
                >
                  <Github size={24} aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mashudu-nemutudi-201368316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-medium"
                >
                  <Linkedin size={24} aria-hidden="true" />
                </a>
                <a
                  href="mailto:nemutudimashudu03@gmail.com"
                  aria-label="Send an email"
                  className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-medium"
                >
                  <Mail size={24} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center animate-fade-in animate-delay-200">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl hover-glow">
                  <img
                    src={profileImage.url}
                    alt="Portrait of Mashudu Nemutudi, Computer Science graduate and IT Technical Support Intern"
                    width={320}
                    height={320}
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About section"
            className="inline-flex items-center justify-center min-h-11 min-w-11 rounded-full text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-medium"
          >
            <ArrowDown size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
