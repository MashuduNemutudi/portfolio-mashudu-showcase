import { Card } from "@/components/ui/card";
import { GraduationCap, Award, Users, BookOpen } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "National Diploma in Computer Science from Tshwane University of Technology (TUT). All coursework completed June 2025, currently doing WIL at ICEP TUT."
    },
    {
      icon: Award,
      title: "Achievements",
      description: "Class Representative (2024), Chairperson of Geekulcha Student Society (2025), Deputy Head Girl at high school, multiple hackathon participations."
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Active leader in student organizations and mentoring programs. Mentor at Kiddathon and Telkom 10 Hackathon Emalahleni, guiding young learners through programming concepts."
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description: "Passionate about staying current with technology trends, completed multiple certifications including Java Fundamentals and HP LIFE courses."
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
              A passionate Computer Science student with hands-on experience in full-stack development 
              and a drive to solve real-world problems through technology.
            </p>
          </div>

          {/* Main Story */}
          <div className="mb-16 animate-fade-in animate-delay-200">
            <Card className="p-8 md:p-12 shadow-soft hover-glow">
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I'm a final-year Computer Science student at Tshwane University of Technology, 
                  passionate about creating innovative software solutions. My journey in technology 
                  has been driven by curiosity and a desire to build applications that make a difference.
                </p>
                <p>
                  Throughout my studies, I've gained hands-on experience with <strong>Java EE</strong>, 
                  <strong> ReactJS</strong>, <strong>Python</strong>, and <strong>SQL databases</strong>. 
                  I've worked on diverse projects ranging from health record management systems to 
                  chatbots with natural language processing capabilities.
                </p>
                <p>
                  Beyond technical skills, I'm a natural leader who believes in the power of 
                  collaboration and continuous learning. As Chairperson of the Geekulcha Student Society 
                  and former Class Representative, I've developed strong communication and teamwork skills 
                  that complement my technical expertise.
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

          {/* Personal Touch */}
          <div className="mt-16 text-center animate-fade-in animate-delay-400">
            <Card className="p-8 bg-gradient-card border-0 shadow-soft">
              <p className="text-lg text-muted-foreground italic">
                "I'm currently completing my Work Integrated Learning at ICEP TUT, where I'm applying my 
                skills, learning from industry professionals, and contributing to meaningful projects 
                that make a positive impact."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;