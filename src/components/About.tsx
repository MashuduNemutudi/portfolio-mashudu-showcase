import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description:
        "Diploma in Computer Science from Tshwane University of Technology, including a completed Work Integrated Learning placement as a Frontend Developer Intern. Currently pursuing a Certificate in Cyber Security at the University of Johannesburg.",
    },
    {
      icon: Award,
      title: "Achievements",
      description:
        "Designed and shipped the Mbevha Motors Management System now used in daily operations, Chairperson of Geekulcha Student Society (2025), Scrum Master at MAISH Hackathon, and delivered multiple real-world development projects.",
    },
    {
      icon: Users,
      title: "Leadership & Mentorship",
      description:
        "Active leader and mentor. Guided young learners at Kidathon through foundational programming concepts and mentored youth at the Telkom 10x Hackathon, fostering innovation and technical skills.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Java Fundamentals (Code with Mosh), five freeCodeCamp certifications, HP LIFE business and cybersecurity courses, Scrum Master training, and ongoing study in cyber security and modern development frameworks.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" aria-hidden="true"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Computer Science graduate and full-stack developer turning real business problems into working software.
            </p>
          </div>

          {/* Main Story */}
          <div className="mb-16 animate-fade-in animate-delay-200">
            <Card className="p-6 md:p-12 shadow-soft hover-glow">
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <p>
                  I'm a <strong>Computer Science graduate</strong> from Tshwane University of Technology with hands-on
                  experience across the full stack. I completed my Diploma along with Work Integrated Learning as a
                  Frontend Developer Intern at the Informatics Community Engagement Programme (ICEP), where I built web
                  and mobile features, integrated APIs and worked in agile delivery teams.
                </p>
                <p>
                  I am currently an <strong>IT Technical Support Intern at Nkgwete IT Solutions</strong>, providing
                  first-line support to users at Eskom Megawatt Park. I troubleshoot hardware, software, connectivity and
                  system issues, escalate where needed, and assist with day-to-day IT operations while building enterprise
                  IT support, system administration and IT service management experience.
                </p>
                <p>
                  Previously, I worked as an <strong>Administrator at Mbevha Motors (Pty) Ltd</strong>, where I managed
                  day-to-day business operations while also designing and building the Mbevha Motors Management System — a
                  React, Node.js, Express and PostgreSQL platform covering authentication, inventory, vehicle servicing,
                  quotations and invoicing — which I continue to maintain and expand based on business needs.
                </p>
                <p>
                  My core toolkit spans <strong>Java</strong>, <strong>JavaScript</strong>, <strong>Python</strong> and{" "}
                  <strong>SQL</strong>, with production experience in <strong>React</strong>,{" "}
                  <strong>React Native</strong>, <strong>Node.js</strong>, <strong>Express</strong> and{" "}
                  <strong>Java EE</strong>. I've built REST APIs, applied MVC architecture and worked extensively with
                  PostgreSQL, Oracle SQL and MySQL.
                </p>
                <p>
                  Beyond code, I lead. As Chairperson of the Geekulcha Student Society (2025), Scrum Master at MAISH
                  Hackathon and a mentor at Kidathon and the Telkom 10x Hackathon, I've developed the communication and
                  teamwork skills that make technical work land.
                </p>
              </div>
            </Card>
          </div>

          {/* Highlights Grid */}
          <ul className="grid md:grid-cols-2 gap-6 list-none">
            {highlights.map((highlight, index) => (
              <li key={highlight.title}>
                <Card
                  className={`h-full p-6 shadow-soft hover-glow transition-transform duration-medium hover:-translate-y-1 animate-fade-in animate-delay-${(index + 3) * 100}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <highlight.icon size={22} className="text-primary-foreground" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{highlight.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{highlight.description}</p>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>

          {/* Professional Summary */}
          <div className="mt-16 text-center animate-fade-in animate-delay-400">
            <Card className="p-8 bg-gradient-card border-0 shadow-soft">
              <blockquote className="text-base md:text-lg text-muted-foreground italic max-w-3xl mx-auto leading-relaxed">
                "Motivated and detail-oriented Computer Science graduate with practical experience in IT technical support,
                software development, application support and system troubleshooting. Strong in first-line user support,
                hardware and software troubleshooting, system administration, and database design, with proven ability to
                solve problems, collaborate in agile teams and deliver functional software solutions."
              </blockquote>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
