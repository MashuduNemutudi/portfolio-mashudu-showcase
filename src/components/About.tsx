import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Diploma in Computer Science from Tshwane University of Technology. Graduated and successfully completed Work Integrated Learning (WIL) as a Frontend Developer Intern. Currently pursuing a Certificate in Cyber Security at the University of Johannesburg."
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Chairperson of Geekulcha Student Society (2025), Scrum Master at MAISH Hackathon, successfully completed real-world development projects, and built and deployed a portfolio showcasing practical software development skills."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active leader and mentor. Guided young learners at Kidathon through foundational programming concepts. Mentored youth at Telkom 10x Hackathon, fostering innovation and technical skills."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Passionate about staying current with technology trends. Completed Java Fundamentals (Code with Mosh), HP LIFE courses (IT for Business, Business Communication, Cybersecurity Awareness), freeCodeCamp certifications, and pursuing Cyber Security certification."
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
              Motivated and detail-oriented Computer Science graduate seeking to build a career in software development, 
              with practical experience in application development, debugging, and system testing.
            </p>
          </div>

          {/* Main Story */}
          <div className="mb-16 animate-fade-in animate-delay-200">
            <Card className="p-8 md:p-12 shadow-soft hover-glow">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a Computer Science graduate from Tshwane University of Technology who has successfully 
                  completed my Diploma along with Work Integrated Learning (WIL) as a Frontend Developer Intern 
                  at the Informatics Community Engagement Programme (ICEP). My major fields of study include 
                  Software Programming, Mobile Device Programming, Database Design, and System Analysis.
                </p>
                <p>
                  I have a strong foundation in <strong>Java</strong>, <strong>JavaScript</strong>, <strong>Python</strong>,
                  <strong> SQL</strong>, and web development technologies including <strong>ReactJS</strong>, <strong>React Native</strong>,
                  <strong> Node.js</strong>, <strong>HTML</strong>, and <strong>CSS</strong>. I've built secure applications with REST APIs,
                  implemented MVC architecture, and worked extensively with PostgreSQL, Oracle SQL, and MySQL databases.
                </p>
                <p>
                  My experience includes user requirement analysis, application development, system maintenance, and 
                  database design principles gained through my internship and academic projects. I've demonstrated 
                  the ability to troubleshoot technical issues, collaborate in agile teams, and deliver functional 
                  software solutions.
                </p>
                <p>
                  I'm passionate about learning and developing in low-code/no-code environments, software engineering 
                  principles, and modern development frameworks. As Chairperson of the Geekulcha Student Society (2025) 
                  and Scrum Master at MAISH Hackathon, I've developed leadership abilities that complement my technical expertise.
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
                "Motivated and detail-oriented Computer Science graduate with practical experience in software 
                development, application support, and system troubleshooting, seeking to build a career in software 
                development. Passionate about learning and developing in modern development frameworks, with strong 
                problem-solving, communication, and teamwork skills."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
