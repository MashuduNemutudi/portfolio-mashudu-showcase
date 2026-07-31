import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ExternalLink,
  Github,
  Code,
  Database,
  Globe,
  Bot,
  Activity,
  Car,
  Sprout,
  CalendarClock,
  Star,
  ArrowRight,
} from "lucide-react";
import mbevhaPreview from "@/assets/mbevha-motors-system.jpg";

const featured = {
  title: "Mbevha Motors Management System",
  role: "Full-Stack Developer",
  status: "In active development — used daily to digitise business operations",
  overview:
    "A comprehensive full-stack web application I designed and developed while working at Mbevha Motors. It modernises and streamlines the company's operations by replacing manual, paper-based processes with an efficient digital solution covering inventory, vehicle servicing, quotations, invoicing and customer records.",
  problem:
    "Mbevha Motors managed vehicle services, stock, quotations and invoices manually across paper files and spreadsheets. Records were easy to lose, quotations were slow to produce, and management had no reliable view of the business.",
  solution:
    "A secure, role-based web platform where staff capture jobs and customers once and reuse that data across services, quotations and invoices — with an administrator dashboard that surfaces inventory levels and business reporting in real time.",
  technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Git"],
  features: [
    "Secure user authentication",
    "Administrator dashboard",
    "Inventory management",
    "Vehicle service management",
    "Quotation management",
    "Invoice generation",
    "Customer records",
    "Business reporting",
    "Responsive user interface",
    "Role-based access control",
  ],
  contributions: [
    "Requirements gathering with management",
    "UI/UX design",
    "Database design",
    "Backend API development",
    "Frontend development",
    "System architecture",
    "Testing and debugging",
    "Ongoing maintenance and feature development",
  ],
};

const projects = [
  {
    title: "QueueWise – Smart Clinic Scheduling",
    description:
      "A smart appointment and queue management solution for clinics, reducing patient waiting times through digital booking, queue positioning and real-time status updates.",
    icon: CalendarClock,
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    type: "Healthcare Platform",
    highlights: [
      "Digital appointment booking and queue positioning",
      "Real-time queue status for patients and staff",
      "Role-based clinic administration",
      "Responsive interface for mobile and desktop",
    ],
  },
  {
    title: "Agrismart",
    description:
      "An agriculture-focused digital solution helping farmers track and manage farm activities and resources through a clean, data-driven interface.",
    icon: Sprout,
    technologies: ["React", "JavaScript", "REST APIs", "Database Design"],
    type: "AgriTech Application",
    highlights: [
      "Farm activity and resource tracking",
      "Data-driven dashboards for decision making",
      "Reusable component-based frontend",
      "Integrated backend data services",
    ],
  },
  {
    title: "AgriVision – User Management Dashboard",
    description:
      "Java EE web application with full CRUD functionality. Designed and implemented database structures and system workflows, troubleshot errors, and deployed and tested on the GlassFish server.",
    icon: Database,
    technologies: ["Java EE", "MVC", "GlassFish", "UML", "CRUD"],
    type: "Enterprise Application",
    highlights: [
      "Full CRUD functionality",
      "Designed database structures and system workflows",
      "Troubleshot system errors and resolved bugs",
      "Deployed and tested using GlassFish server",
      "MVC architectural pattern",
    ],
  },
  {
    title: "MediFile App",
    description:
      "A secure full-stack health record management system built with Java, ReactJS and PostgreSQL, featuring authentication, responsive design and REST API integration.",
    icon: Activity,
    technologies: ["Java EE", "ReactJS", "PostgreSQL", "REST APIs", "Authentication"],
    type: "Full-Stack Application",
    highlights: [
      "Secure user authentication system",
      "Responsive design for all devices",
      "RESTful API architecture",
      "Frontend–backend integration for authentication and data handling",
    ],
  },
  {
    title: "Ubuntu Explorer – Web-Based File Explorer",
    description:
      "Interactive system simulating Linux file navigation, developed at the G20 Tourism Hackathon with a focus on usability and user interaction.",
    icon: Globe,
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    type: "Web Application",
    highlights: [
      "Interactive Linux file navigation simulation",
      "Identified and resolved UI and functionality issues",
      "Enhanced system usability and user interaction",
      "Built during the G20 Tourism Hackathon",
    ],
  },
  {
    title: "e-Library-Log – Attendance & Leave Management",
    description:
      "Attendance and leave management system with role-based access control. Analysed requirements, designed workflows and built the mobile pages powering the system.",
    icon: Code,
    technologies: ["React Native", "Expo", "Node.js", "PostgreSQL"],
    type: "Mobile & Web System",
    highlights: [
      "Analysed system requirements and designed workflows",
      "Implemented role-based access control",
      "Built mobile pages (Leave Request, Schedule, Admin Dashboard, Notifications)",
      "Secure token handling with SecureStore",
    ],
  },
  {
    title: "KhulumaNathi Chatbot",
    description:
      "Intelligent chatbot developed in Python with Vula-Vula API integration, focused on local-language interactions for enhanced user communication.",
    icon: Bot,
    technologies: ["Python", "Vula-Vula API", "Team Project"],
    type: "AI/ML Application",
    highlights: [
      "Local language support",
      "API integration",
      "Collaborative development",
      "Enhanced user communication",
    ],
  },
  {
    title: "GitHub Microservices",
    description:
      "A collection of backend microservices including a Timestamp Microservice, URL Shortener, Exercise Tracker and Celestial Bodies Database.",
    icon: Code,
    technologies: ["JavaScript", "Node.js", "Express", "PostgreSQL"],
    type: "Microservices",
    highlights: [
      "Multiple deployed microservice projects",
      "RESTful API design",
      "Node.js and Express expertise",
      "Relational database modelling",
    ],
    githubLink: "https://github.com/MashuduNemutudi",
  },
];

const hackathons = [
  "G20 Tourism Hackathon – Participant",
  "Geekulcha Annual Hackathon",
  "Vulavula API Hackathon",
  "Ayoba Business Chat Hackathon",
  "TelkomLearn Hackathon",
  "MAISH 3rd Annual Hackathon – Scrum Master",
  "SMU Digital Health Hackathon",
  "Kidathon – Mentor",
  "Telkom 10x Hackathon Emalahleni – Mentor",
  "FNB App of the Year – Support Team",
];

const Projects = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" aria-hidden="true"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Applications and systems I've designed and built — from a production business platform to hackathon
              prototypes and academic full-stack projects.
            </p>
          </div>

          {/* Flagship project */}
          <Card className="overflow-hidden shadow-medium mb-12 animate-fade-in border-primary/20">
            <div className="grid lg:grid-cols-2">
              <div className="relative bg-muted">
                <img
                  src={mbevhaPreview}
                  alt="Screenshot of the Mbevha Motors Management System administrator dashboard"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground shadow-soft">
                  <Star size={13} className="mr-1.5" aria-hidden="true" />
                  Flagship Project
                </Badge>
              </div>

              <div className="p-6 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Car size={24} className="text-primary-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground">{featured.title}</h3>
                    <p className="text-sm text-muted-foreground">{featured.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-4">{featured.overview}</p>

                <p className="text-sm text-primary font-medium mb-5">{featured.status}</p>

                <ul className="flex flex-wrap gap-2 mb-6">
                  {featured.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge variant="secondary" className="text-xs px-3 py-1">
                        {tech}
                      </Badge>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="min-h-11 bg-primary-dark hover:bg-primary-dark/90">
                        View Case Study
                        <ArrowRight size={17} className="ml-2" aria-hidden="true" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">{featured.title}</DialogTitle>
                        <DialogDescription>
                          {featured.role} · {featured.status}
                        </DialogDescription>
                      </DialogHeader>

                      <img
                        src={mbevhaPreview}
                        alt="Mbevha Motors Management System dashboard interface"
                        loading="lazy"
                        decoding="async"
                        className="w-full rounded-lg border border-border aspect-[16/10] object-cover"
                      />

                      <div className="space-y-6 mt-2">
                        <div>
                          <h4 className="font-semibold mb-2">The problem</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{featured.problem}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">The solution</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{featured.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Key features</h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {featured.features.map((f) => (
                              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">My role &amp; contributions</h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {featured.contributions.map((c) => (
                              <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" aria-hidden="true" />
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Technologies</h4>
                          <ul className="flex flex-wrap gap-2">
                            {featured.technologies.map((tech) => (
                              <li key={tech}>
                                <Badge variant="secondary" className="text-xs px-3 py-1">
                                  {tech}
                                </Badge>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button size="lg" variant="outline" className="min-h-11" asChild>
                    <a href="https://github.com/MashuduNemutudi" target="_blank" rel="noopener noreferrer">
                      <Github size={17} className="mr-2" aria-hidden="true" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Projects Grid */}
          <ul className="grid md:grid-cols-2 gap-6 mb-16 list-none">
            {projects.map((project, index) => (
              <li key={project.title}>
                <Card
                  className={`h-full p-6 shadow-soft hover-glow transition-transform duration-medium hover:-translate-y-1 animate-fade-in animate-delay-${((index % 4) + 1) * 100}`}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        <project.icon size={22} className="text-primary-foreground" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.type}</p>
                      </div>
                    </div>
                    {project.githubLink && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="min-h-11 min-w-11 flex-shrink-0"
                        aria-label={`View ${project.title} on GitHub`}
                        asChild
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github size={18} aria-hidden="true" />
                        </a>
                      </Button>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-2">
                      Key features
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1.5">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" aria-hidden="true" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ul>

          {/* GitHub Link */}
          <div className="text-center mb-16 animate-fade-in animate-delay-300">
            <Card className="p-8 bg-gradient-card shadow-soft">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Github size={30} className="text-primary" aria-hidden="true" />
                <h3 className="text-2xl font-semibold">Explore more on GitHub</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Additional projects, microservices and code samples live on my GitHub profile.
              </p>
              <Button size="lg" asChild className="min-h-11 bg-primary-dark hover:bg-primary-dark/90">
                <a href="https://github.com/MashuduNemutudi" target="_blank" rel="noopener noreferrer">
                  <Github size={18} className="mr-2" aria-hidden="true" />
                  View GitHub Profile
                  <ExternalLink size={15} className="ml-2" aria-hidden="true" />
                </a>
              </Button>
            </Card>
          </div>

          {/* Hackathon Participation */}
          <div className="animate-fade-in animate-delay-400">
            <Card className="p-8 shadow-soft">
              <h3 className="text-2xl font-semibold mb-3 text-center">Hackathon Experience</h3>
              <p className="text-muted-foreground text-center mb-6">
                Active participation in competitive programming events and innovation challenges.
              </p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {hackathons.map((hackathon) => (
                  <li
                    key={hackathon}
                    className="text-center p-4 rounded-lg bg-muted/50 border border-border transition-transform duration-medium hover:-translate-y-0.5"
                  >
                    <p className="text-sm font-medium text-foreground">{hackathon}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
