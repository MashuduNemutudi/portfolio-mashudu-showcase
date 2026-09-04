import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Headphones,
  Monitor,
  Network,
  Wrench,
  Code,
  Award,
  Layout,
  Server,
  Database,
  Layers,
  UserRound,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["JavaScript", "Java", "Python", "SQL", "HTML", "CSS", "TypeScript"],
    },
    {
      icon: Layout,
      title: "Frontend Development",
      skills: [
        "React.js",
        "React Native",
        "Responsive Web Design",
        "Reusable Components",
        "User Interface Development",
        "HTML5 & CSS3",
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Java EE", "JSP", "Servlets", "REST APIs", "MVC Architecture"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "Oracle SQL",
        "Database Schema Design",
        "Data Modelling",
        "CRUD Operations",
        "Data Integrity",
      ],
    },
    {
      icon: Wrench,
      title: "Development & Deployment Tools",
      skills: ["Git & GitHub", "Visual Studio Code", "IntelliJ IDEA", "GlassFish Server", "Postman", "Vercel", "Render"],
    },
    {
      icon: Layers,
      title: "Software Development Capabilities",
      skills: [
        "Full-Stack Application Development",
        "Business Requirements Analysis",
        "Software Architecture",
        "UI & UX Design",
        "API Design & Integration",
        "Authentication & Access Control",
        "Application Testing",
        "Software Debugging",
        "Application Deployment",
        "Production Maintenance",
        "Functional Specifications",
        "Technical Documentation",
        "User Support",
        "Project Scope Coordination",
      ],
    },
    {
      icon: Headphones,
      title: "IT Support & Troubleshooting",
      skills: ["Technical Support", "IT Support", "User Support", "Troubleshooting", "IT Service Management"],
    },
    {
      icon: Monitor,
      title: "Hardware, Software & Networking",
      skills: [
        "Hardware Troubleshooting",
        "Software Troubleshooting",
        "Computer Hardware",
        "Networking",
        "System Administration",
        "Microsoft Office",
      ],
    },
    {
      icon: UserRound,
      title: "Professional & Additional Skills",
      skills: [
        "Customer Communication",
        "Attention to Detail",
        "Analytical Thinking",
        "Problem-Solving",
        "Time Management",
        "Team Collaboration",
        "Independent Working",
        "Multitasking",
        "Deadline Management",
        "Adaptability",
      ],
    },
    {
      icon: Award,
      title: "Leadership & Delivery",
      skills: [
        "Scrum Master (MAISH Hackathon)",
        "Team Leadership",
        "Mentoring",
        "Requirements Gathering",
        "Stakeholder Communication",
        "Agile Development",
      ],
    },
    {
      icon: Network,
      title: "Core Competencies",
      skills: [
        "Full-Stack Software Development",
        "Software Application Design",
        "Frontend Architecture",
        "Backend System Development",
        "System Integration",
        "Digital Transformation Solutions",
        "Independent Project Delivery",
      ],
    },
  ];

  const certifications = [
    "Certificate in Cyber Security – University of Johannesburg (Completed, certificate pending)",
    "Java Fundamentals – Code with Mosh",
    "freeCodeCamp: Responsive Web Design",
    "freeCodeCamp: Back End Development & APIs",
    "freeCodeCamp: Relational Databases",
    "freeCodeCamp: JavaScript Algorithms & Data Structures",
    "freeCodeCamp: Frontend Development Libraries",
    "HP LIFE: IT for Business",
    "HP LIFE: Cybersecurity Awareness",
    "HP LIFE: Business Communication",
    "HP LIFE: Effective Presentation",
    "HP LIFE: Selling Online",
    "HackerRank: SQL (Basic)",
    "HackerRank: SQL (Intermediate)",
    "FNB App of the Year: Full Stack Development",
    "Scrum Master Training",
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" aria-hidden="true"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A toolkit built through full-stack development, first-line IT support and continuous professional learning.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <Card
                key={category.title}
                className={`p-6 shadow-soft hover-glow transition-transform duration-medium hover:-translate-y-1 animate-fade-in animate-delay-${((categoryIndex % 4) + 1) * 100}`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <category.icon size={20} className="text-primary-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground">{category.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <li key={skill}>
                      <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
                        {skill}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-fade-in animate-delay-400">
            <Card className="p-8 bg-gradient-card shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-center">Certifications &amp; Training</h3>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="p-4 rounded-lg bg-card border border-border text-center transition-transform duration-medium hover:-translate-y-0.5 hover-glow"
                  >
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  View more certificates and detailed experience on my{" "}
                  <a
                    href="https://www.linkedin.com/in/mashudu-nemutudi-201368316/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium underline underline-offset-2"
                  >
                    LinkedIn profile
                  </a>
                  .
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
