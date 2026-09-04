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
  Banknote,
  Cloud,
  Plug,
} from "lucide-react";

type FeaturedProject = {
  id: string;
  title: string;
  tagline: string;
  role: string;
  status: string;
  icon: typeof Car;
  flagship?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  problem: string;
  solution: string;
  result?: string;
  integration?: { title: string; body: string };
  architecture?: string[];
  deployment?: string[];
  technologies: string[];
  features: string[];
  contributions: string[];
};

const featuredProjects: FeaturedProject[] = [
  {
    id: "vhalaudzi",
    title: "Vhalaudzi Cash Loan",
    tagline: "Full-Stack Loan Management & Digital Lending Platform",
    role: "Full-Stack Developer",
    status: "Live in production on the business's own domain",
    icon: Banknote,
    flagship: true,
    liveUrl: "https://vhalaudzicashloans.co.za",
    githubUrl: "https://github.com/MashuduNemutudi/vlms",
    overview:
      "A full-stack digital lending platform developed for Vhalaudzi Cash Loan, featuring customer loan applications, administrative management, loan tracking and NuPay API integration. Customers interact with the lending business online while administrators manage applications, customers, loan information and repayments through the system.",
    problem:
      "The business needed a digital system to manage its lending operations and reduce reliance on manual, paper-based processes.",
    solution:
      "I developed a full-stack web-based loan management platform with customer-facing functionality, an administrative system, database integration and NuPay API integration.",
    result: "A deployed production system accessible through the business's own domain.",
    integration: {
      title: "NuPay API integration",
      body: "The system integrates with NuPay's API to connect the loan management workflow with payment and debit-order processing, so repayment-related operations are handled through the business's existing payment provider rather than manually.",
    },
    architecture: ["React frontend", "Node.js / Express REST API", "PostgreSQL database", "NuPay API"],
    deployment: ["Frontend → Vercel", "Backend → Render", "Database → PostgreSQL", "Storage → Cloudflare R2"],
    technologies: [
      "React",
      "JavaScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "REST APIs",
      "NuPay API",
      "Vercel",
      "Render",
      "Cloudflare R2",
      "Git/GitHub",
    ],
    features: [
      "Customer registration and authentication",
      "Customer login",
      "Loan application workflow",
      "Loan application management",
      "Loan status tracking",
      "Loan repayment information",
      "Administrative dashboard",
      "Admin authentication",
      "Loan and customer management",
      "Payment / debit-order integration",
      "API-based frontend–backend communication",
      "Responsive user interface",
      "Secure backend and API architecture",
      "Database-driven application",
      "Deployed to production",
    ],
    contributions: [
      "System and database design",
      "Frontend development in React",
      "Backend and REST API development",
      "NuPay API integration",
      "Authentication and access control",
      "Testing and debugging",
      "Production deployment",
      "Ongoing maintenance",
    ],
  },
  {
    id: "mbevha",
    title: "Mbevha Motors – Workshop Management System",
    tagline: "Full-Stack Workshop & Business Administration Platform",
    role: "Full-Stack Developer",
    status: "In active use — maintained and expanded as the business grows",
    icon: Car,
    overview:
      "A comprehensive full-stack web application I designed and developed while working at Mbevha Motors. It modernises and streamlines the company's operations by replacing manual, paper-based processes with an efficient digital solution covering inventory, vehicle servicing, quotations, invoicing and customer records.",
    problem:
      "Mbevha Motors managed vehicle services, stock, quotations and invoices manually across paper files and spreadsheets. Records were easy to lose, quotations were slow to produce, and management had no reliable view of the business.",
    solution:
      "A secure, role-based web platform where staff capture jobs and customers once and reuse that data across services, quotations and invoices — with an administrator dashboard that surfaces inventory levels and business reporting in real time.",
    result: "A deployed system that improved the company's administrative and workshop-management processes.",
    architecture: ["React frontend", "Node.js / Express REST API", "PostgreSQL database"],
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "REST APIs", "Git"],
    features: [
      "Secure user authentication",
      "Administrator dashboard",
      "Inventory management",
      "Vehicle service management",
      "Quotation management",
      "Invoice generation",
      "Customer and vehicle records",
      "Business reporting",
      "Responsive user interface",
      "Role-based access control",
    ],
    contributions: [
      "Requirements gathering with management",
      "UI/UX design",
      "Database schema design",
      "Backend API development",
      "Frontend development",
      "System architecture",
      "Testing and debugging",
      "Ongoing maintenance and feature development",
    ],
  },
];

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
    technologies: ["Java EE", "JSP", "Servlets", "MVC", "GlassFish", "CRUD"],
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

const FeaturedCard = ({ project }: { project: FeaturedProject }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="p-6 md:p-10 shadow-medium border-primary/20 animate-fade-in">
      <div className="flex flex-wrap items-start gap-4 mb-5">
        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
          <project.icon size={24} className="text-primary-foreground" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">{project.title}</h3>
            {project.flagship && (
              <Badge className="bg-primary text-primary-foreground">
                <Star size={12} className="mr-1.5" aria-hidden="true" />
                Flagship Project
              </Badge>
            )}
          </div>
          <p className="text-sm font-medium text-foreground/80">{project.tagline}</p>
          <p className="text-sm text-muted-foreground">{project.role}</p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-4">{project.overview}</p>
      <p className="text-sm text-primary font-medium mb-5">{project.status}</p>

      <ul className="flex flex-wrap gap-2 mb-6">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Badge variant="secondary" className="text-xs px-3 py-1">
              {tech}
            </Badge>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="min-h-11 bg-primary-dark hover:bg-primary-dark/90">
              View Case Study
              <ArrowRight size={17} className="ml-2" aria-hidden="true" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl">{project.title}</DialogTitle>
              <DialogDescription>
                {project.tagline} · {project.role}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-2">
              <div>
                <h4 className="font-semibold mb-2">Overview</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.overview}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Problem</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>
              {project.result && (
                <div>
                  <h4 className="font-semibold mb-2">Result</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.result}</p>
                </div>
              )}
              <div>
                <h4 className="font-semibold mb-3">Key features</h4>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {project.features.map((f) => (
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
                  {project.contributions.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              {project.integration && (
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Plug size={16} className="text-primary" aria-hidden="true" />
                    {project.integration.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.integration.body}</p>
                </div>
              )}
              {project.architecture && (
                <div>
                  <h4 className="font-semibold mb-3">Architecture</h4>
                  <ul className="flex flex-wrap items-center gap-2">
                    {project.architecture.map((layer, i) => (
                      <li key={layer} className="flex items-center gap-2">
                        <span className="text-sm px-3 py-1.5 rounded-lg bg-card border border-border text-foreground">
                          {layer}
                        </span>
                        {i < project.architecture!.length - 1 && (
                          <ArrowRight size={14} className="text-muted-foreground" aria-hidden="true" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project.deployment && (
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Cloud size={16} className="text-primary" aria-hidden="true" />
                    Deployment
                  </h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.deployment.map((d) => (
                      <li key={d} className="text-sm text-muted-foreground">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h4 className="font-semibold mb-3">Technology stack</h4>
                <ul className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
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

        {project.liveUrl && (
          <Button size="lg" variant="outline" className="min-h-11" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={17} className="mr-2" aria-hidden="true" />
              Live Website
            </a>
          </Button>
        )}
        <Button size="lg" variant="outline" className="min-h-11" asChild>
          <a href={project.githubUrl ?? "https://github.com/MashuduNemutudi"} target="_blank" rel="noopener noreferrer">
            <Github size={17} className="mr-2" aria-hidden="true" />
            GitHub
          </a>
        </Button>
      </div>
    </Card>
  );
};

const Projects = () => {
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
              Applications and systems I've designed and built — from production business platforms to hackathon
              prototypes and academic full-stack projects.
            </p>
          </div>

          {/* Featured projects */}
          <div className="space-y-8 mb-12">
            {featuredProjects.map((project) => (
              <FeaturedCard key={project.id} project={project} />
            ))}
          </div>

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
