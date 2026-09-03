import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, CheckCircle, Headset, Code2 } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  type: string;
  current?: boolean;
  summary: string;
  groups: { label: string; items: string[] }[];
};

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: "IT Technical Support Intern",
      company: "Nkgwete IT Solutions",
      period: "3 August 2026 – Present",
      type: "Internship (Current) – On-site",
      current: true,
      summary:
        "Providing first-line IT technical support to users at Eskom Megawatt Park as part of the Nkgwete IT Solutions Graduate Internship Programme. Supporting users with hardware, software, connectivity, system and general IT-related issues, troubleshooting technical problems, escalating issues where required, and assisting with day-to-day IT operations. Gaining practical experience in enterprise IT support, incident troubleshooting, user assistance, system administration processes, documentation and professional IT service delivery within an Eskom environment.",
      groups: [
        {
          label: "First-Line Support & Troubleshooting",
          items: [
            "Provide first-line IT technical support to users at Eskom Megawatt Park",
            "Support users with hardware, software, connectivity, system and general IT-related issues",
            "Troubleshoot technical problems and escalate issues where required",
            "Assist with day-to-day IT operations and user assistance",
          ],
        },
        {
          label: "Enterprise IT & Service Delivery",
          items: [
            "Gain practical experience in enterprise IT support and incident troubleshooting",
            "Support system administration processes and documentation",
            "Develop professional IT service delivery skills within an Eskom environment",
            "Build hands-on experience in IT service management and user support workflows",
          ],
        },
      ],
    },
    {
      title: "Administrator",
      company: "Mbevha Motors (Pty) Ltd",
      period: "2026",
      type: "Full-Time",
      summary:
        "I managed the company's day-to-day administrative operations while also driving its digital transformation. Alongside my administrative duties, I designed and built the Mbevha Motors Management System — a full-stack platform that replaced manual processes with an efficient digital workflow, which I continue to maintain and extend.",
      groups: [
        {
          label: "Administrative Responsibilities",
          items: [
            "Office administration and record management",
            "Preparing quotations and invoices",
            "Customer communication and support",
            "Managing business documentation",
            "Coordinating daily office operations",
            "Supporting management with administrative and operational tasks",
          ],
        },
        {
          label: "Software Development Contributions",
          items: [
            "Designed and developed the Mbevha Motors Management System while employed at the company",
            "Gathered business requirements directly from management and translated them into software solutions",
            "Designed the system architecture, database structure, and user interface",
            "Developed the frontend using React and the backend using Node.js and Express",
            "Integrated PostgreSQL for data storage and management",
            "Built authentication, inventory, quotations, invoicing, vehicle service management and administration features",
            "Continuously maintain, improve, and expand the system based on business needs",
          ],
        },
      ],
    },
    {
      title: "Frontend Developer Intern",
      company: "Informatics Community Engagement Programme (ICEP)",
      period: "July 2025 – December 2025",
      type: "Work Integrated Learning (Completed)",
      summary:
        "Throughout my WIL I engaged in both individual and collaborative development, strengthening my technical, analytical and project management skills. I contributed to proposal writing, system design, prototyping, full-stack development and mobile app integration in an agile environment with continuous feedback and review sessions.",
      groups: [
        {
          label: "Development & Engineering",
          items: [
            "Participated in application development, enhancement, and maintenance processes",
            "Diagnosed and resolved technical issues during development and testing phases",
            "Assisted in identifying user requirements and translating them into functional solutions",
            "Supported system testing to ensure application functionality, performance, and reliability",
            "Built frontend pages and reusable UI components for web and mobile applications",
            "Integrated APIs and connected the frontend to backend endpoints",
            "Used React Native + Expo, including SecureStore for authentication tokens",
            "Implemented CRUD operations through backend APIs",
            "Managed state, validation, and form handling across applications",
            "Debugged integration and UI errors to ensure smooth user experiences",
            "Ensured smooth data flow between frontend and backend systems",
          ],
        },
        {
          label: "Collaboration & Delivery",
          items: [
            "Collaborated with team members in agile environments to deliver project milestones",
            "Communicated technical issues effectively within the development team",
            "Worked in an Agile environment with daily stand-ups, planning and review sessions",
            "Contributed to mobile and web modules in multi-team development",
            "Contributed to proposal writing, diagram modelling, prototyping and system planning",
            "Contributed to the TUT Event Project and Library Project (proposals, low- and high-fidelity prototypes, sequence and use-case diagrams)",
            "Participated in team collaboration sessions and stakeholder review meetings",
            "Presented progress, prototypes and final app demos during Show & Tell sessions",
          ],
        },
        {
          label: "Projects & Growth",
          items: [
            "Developed the UbuntuExplorer WebApp at the G20 Hackathon",
            "Developed mobile app pages for the Library Project (Leave Request, Schedule & Timetable, Admin Dashboard, Notifications)",
            "Fixed critical bugs in authentication and leave-request features",
            "Debugged and tested integrated mobile pages for functionality and stability",
            "Developed an Emoji App and an Instagram Clone using React Native",
            "Built a Salon Appointment Scheduler and World Cup Database using React.js",
            "Completed freeCodeCamp certificates: Responsive Web Design, JavaScript Algorithms & Data Structures, Frontend Development Libraries, Relational Database, Backend Development & APIs",
            "Completed Scrum Master Training and attended the AI Student Workshop, Career Expo and Robotics Event",
          ],
        },
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" aria-hidden="true"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Real-world experience across IT support, business operations, full-stack development and agile software delivery.
            </p>
          </div>

          {/* Experience Cards */}
          <ol className="space-y-8 list-none">
            {experiences.map((exp, index) => (
              <li key={exp.title}>
                <Card
                  className={`p-6 md:p-8 shadow-soft hover-glow transition-transform duration-medium hover:-translate-y-1 animate-fade-in animate-delay-${(index + 1) * 100}`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                        {exp.current ? (
                          <Headset size={26} className="text-primary-foreground" aria-hidden="true" />
                        ) : (
                          <Briefcase size={26} className="text-primary-foreground" aria-hidden="true" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-base md:text-lg text-primary font-medium">{exp.company}</p>
                        <Badge variant="secondary" className="mt-2 bg-primary/10 text-primary hover:bg-primary/15">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground md:pt-1">
                      <Calendar size={18} aria-hidden="true" />
                      <span className="font-medium text-sm md:text-base">{exp.period}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-muted-foreground leading-relaxed">{exp.summary}</p>
                  </div>

                  {/* Grouped responsibilities */}
                  <div className="space-y-6">
                    {exp.groups.map((group) => (
                      <div key={group.label}>
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground/80 mb-3">
                          {group.label}
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-x-6 gap-y-2.5">
                          {group.items.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle size={17} className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                              <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
