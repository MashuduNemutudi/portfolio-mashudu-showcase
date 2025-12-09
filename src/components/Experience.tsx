import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer Intern",
      company: "Informatics Community Engagement Programme (ICEP)",
      period: "July 2025 – December 2025",
      type: "Work Integrated Learning",
      summary: "Throughout my WIL, I actively engaged in both individual and collaborative development activities, strengthening my technical, analytical, and project management skills. I contributed to proposal writing, system design, prototyping, full-stack development, and mobile app integration while working in an agile environment with continuous feedback and review sessions.",
      tasks: [
        "Built frontend pages and reusable UI components for web and mobile applications",
        "Integrated APIs and connected the frontend to backend endpoints",
        "Used React Native + Expo, including SecureStore for authentication tokens",
        "Implemented CRUD operations through backend APIs",
        "Managed state, validation, and form handling across applications",
        "Debugged integration and UI errors to ensure smooth user experiences",
        "Ensured smooth data flow between frontend and backend systems",
        "Worked in Agile environment with daily stand-ups, planning, review sessions",
        "Contributed to mobile and web modules in multi-team development",
        "Completed freeCodeCamp certificates: Responsive Web Design, JavaScript Algorithms & Data Structures, Frontend Development Libraries, Relational Database, Backend Development & APIs",
        "Attended AI Student Workshop, Career Expo, and Robotics Event",
        "Completed Scrum Master Training",
        "Documented effective presentation strategies for future use",
        "Participated in initial planning and design phases for multiple projects",
        "Developed an Emoji App and an Instagram Clone using React Native",
        "Built a Salon Appointment Scheduler and World Cup Database using React.js",
        "Contributed to proposal writing, diagram modeling, prototyping, and system planning",
        "Contributed to TUT Event Project and Library Project (proposal writing, low-fidelity & high-fidelity prototypes, sequence diagrams, use-case diagrams)",
        "Actively participated in team collaboration sessions and stakeholder review meetings",
        "Developed the UbuntuExplorer WebApp at the G20 Hackathon",
        "Developed mobile app pages for the Library Project (Leave Request, Schedule & Timetable, Admin Dashboard, Notification)",
        "Fixed critical bugs in authentication and leave-request features",
        "Integrated multiple features into the mobile app (Leave-Request, Notification, Schedule, Admin Dashboard)",
        "Debugged and tested integrated mobile pages for functionality and stability",
        "Presented progress, prototypes, and final app demos during Show & Tell sessions and stakeholder meetings"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hands-on industry experience in frontend development and software engineering
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title} 
                className={`p-8 shadow-soft hover-glow animate-fade-in animate-delay-${(index + 1) * 100}`}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <Briefcase size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {exp.company}
                      </p>
                      <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-4 md:mt-0 text-muted-foreground">
                    <Calendar size={18} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                {exp.summary && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-muted-foreground italic leading-relaxed">
                      {exp.summary}
                    </p>
                  </div>
                )}

                {/* Tasks */}
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Key Responsibilities & Achievements:</h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start space-x-3">
                        <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
