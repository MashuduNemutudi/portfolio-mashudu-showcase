import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Diploma in Computer Science from Tshwane University of Technology, Emalahleni. All coursework completed June 2025, currently completing Work Integrated Learning (WIL) at ICEP, graduating in 2026."
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Chairperson of Geekulcha Student Society (2025-Present), Class Representative (2024), Deputy Head Girl at Lwamondo High School (2021), FNB App of the Year: Full Stack Development certification."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active leader and mentor. Guided young learners at Kidathon through foundational programming concepts. Mentored youth at Telkom 10x Hackathon, fostering innovation and technical skills."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Passionate about staying current with technology trends. Completed Java Fundamentals (Code with Mosh), HP LIFE courses (IT for Business, Business Email, Cybersecurity), freeCodeCamp certifications, and HackerRank SQL."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Detail-oriented and motivated Computer Science graduate with hands-on experience in full-stack and mobile development, 
              eager to contribute to business intelligence and custom software projects.
            </p>
          </div>

          {/* Main Story */}
          <div className="mb-16 animate-fade-in animate-delay-200">
            <Card className="p-8 md:p-12 shadow-soft hover-glow">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a Computer Science graduate from Tshwane University of Technology who completed all
                  coursework in June 2025. Currently completing my Work Integrated Learning as a Frontend Developer Intern 
                  at the Informatics Community Engagement Programme (ICEP), with graduation expected in 2026. 
                  My major fields of study include Software Programming, Mobile Device Programming, Database Design, and System Analysis.
                </p>
                <p>
                  I have hands-on experience with full-stack web and mobile application development using <strong>Java</strong>,
                  <strong> JavaScript</strong>, <strong> ReactJS</strong>, <strong> React Native</strong>, <strong> Expo</strong>,
                  <strong> Python</strong>, and <strong>SQL</strong>. I've built secure applications with REST APIs,
                  implemented MVC architecture, and worked extensively with PostgreSQL, Oracle SQL, and MySQL databases.
                </p>
                <p>
                  My experience includes hands-on mobile app development using Expo + React Native, strong API & system 
                  integration skills connecting frontend to backend, and experience building UI components, integrating APIs, 
                  and testing features in Agile environments.
                </p>
                <p>
                  I'm passionate about IT, teamwork, adaptability, and continuous learning. Self-motivated with strong
                  communication skills and driven to solve problems in dynamic, collaborative environments. As Chairperson
                  of the Geekulcha Student Society (2025-Present) and former Class Representative (2024), I've developed
                  leadership abilities that complement my technical expertise.
                </p>
              </div>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title} 
                className={`p-6 shadow-soft hover-glow animate-fade-in animate-delay-${(index + 3) * 100}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <highlight.icon size={24} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Professional Summary */}
          <div className="mt-16 text-center animate-fade-in animate-delay-400">
            <Card className="p-8 bg-gradient-card border-0 shadow-soft">
              <p className="text-lg text-muted-foreground italic">
                "Detail-oriented and motivated Computer Science graduate with hands-on experience in full-stack and mobile development. 
                Skilled in Java, JavaScript, ReactJS, React Native, Python, SQL, and integrating frontend applications with backend systems. 
                Experienced in building responsive interfaces, consuming APIs, and contributing to Agile software teams. 
                Currently completing WIL as a Frontend Developer Intern at ICEP, graduating in 2026."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
