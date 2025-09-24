import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Globe, Bot, Activity, FileText } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MediFile App",
      description: "A secure full-stack health record management system built with Java, ReactJS, and PostgreSQL. Features user authentication, responsive design, and REST API integration for seamless frontend-backend communication.",
      icon: Activity,
      technologies: ["Java EE", "ReactJS", "PostgreSQL", "REST APIs", "Authentication"],
      type: "Full-Stack Application",
      highlights: [
        "Secure user authentication system",
        "Responsive design for all devices", 
        "RESTful API architecture",
        "Team collaboration project"
      ]
    },
    {
      title: "AgriVision Dashboard",
      description: "User management dashboard with comprehensive CRUD operations using Java EE and MVC architecture. Deployed on GlassFish server with complete system documentation and UML diagrams.",
      icon: Database,
      technologies: ["Java EE", "MVC", "GlassFish", "UML", "CRUD"],
      type: "Enterprise Application",
      highlights: [
        "Complete CRUD functionality",
        "MVC architectural pattern",
        "Professional documentation",
        "GlassFish deployment"
      ]
    },
    {
      title: "KhulumaNathi Chatbot",
      description: "Intelligent chatbot developed in Python with Vula-Vula API integration. Focused on local-language interactions and natural language processing capabilities for enhanced user communication.",
      icon: Bot,
      technologies: ["Python", "NLP", "Vula-Vula API", "Team Project"],
      type: "AI/ML Application",
      highlights: [
        "Natural language processing",
        "Local language support",
        "API integration",
        "Collaborative development"
      ]
    },
    {
      title: "React Frontend Components",
      description: "Collection of reusable React components with state management, API connectivity, and modern UI/UX patterns. Demonstrates proficiency in component-based architecture and modern React practices.",
      icon: Globe,
      technologies: ["ReactJS", "State Management", "APIs", "Components"],
      type: "Frontend Development",
      highlights: [
        "Reusable component library",
        "State management patterns",
        "API integration",
        "Modern React practices"
      ]
    },
    {
      title: "GitHub Projects",
      description: "Various microservices and applications including Timestamp Microservice, URL Shortener, Exercise Tracker, and Celestial Bodies Database. Showcasing backend development skills.",
      icon: Code,
      technologies: ["JavaScript", "Node.js", "Microservices", "APIs"],
      type: "Microservices",
      highlights: [
        "Multiple microservice projects",
        "RESTful API design",
        "JavaScript/Node.js expertise",
        "Scalable architecture"
      ],
      githubLink: "https://github.com/MashuduNemutudi"
    }
  ];

  const hackathons = [
    "G20 Tourism Hackathon - Participated",
    "Geekulcha Annual Hackathon",
    "Vulavula API Hackathon", 
    "Ayoba Business Chat Hackathon",
    "TelkomLearn Hackathon",
    "Maish 2nd Annual Hackathon",
    "SMU Digital Health Hackathon",
    "Kiddathon - Mentor",
    "Telkom 10 Hackathon Emalahleni - Mentor"
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of applications and systems I've built, demonstrating full-stack development 
              capabilities and problem-solving skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className={`p-6 shadow-soft hover-glow animate-fade-in animate-delay-${(index + 1) * 100}`}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <project.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.type}
                      </p>
                    </div>
                  </div>
                  {project.githubLink && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={18} />
                      </a>
                    </Button>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* GitHub Link */}
          <div className="text-center mb-16 animate-fade-in animate-delay-300">
            <Card className="p-8 bg-gradient-card shadow-soft">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Github size={32} className="text-primary" />
                <h3 className="text-2xl font-semibold">Explore More on GitHub</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Check out additional projects, microservices, and code samples on my GitHub profile
              </p>
              <Button asChild className="bg-primary-dark hover:bg-primary-dark/90">
                <a href="https://github.com/MashuduNemutudi" target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="mr-2" />
                  View GitHub Profile
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </Card>
          </div>

          {/* Hackathon Participation */}
          <div className="animate-fade-in animate-delay-400">
            <Card className="p-8 shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Hackathon Experience
              </h3>
              <p className="text-muted-foreground text-center mb-6">
                Active participation in competitive programming events and innovation challenges
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hackathons.map((hackathon, index) => (
                  <div 
                    key={hackathon}
                    className={`text-center p-4 rounded-lg bg-muted/50 border border-border hover-glow animate-fade-in animate-delay-${(index + 5) * 100}`}
                  >
                    <p className="text-sm font-medium text-foreground">{hackathon}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;