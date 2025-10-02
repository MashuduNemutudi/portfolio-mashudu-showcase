import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Wrench, Brain, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      color: "bg-blue-500",
      skills: [
        { name: "Java", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL/PL-SQL", level: 85 },
        { name: "HTML/CSS", level: 90 },
      ]
    },
    {
      icon: Globe,
      title: "Frontend Development",
      color: "bg-green-500",
      skills: [
        { name: "ReactJS", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "JavaScript ES6+", level: 85 },
        { name: "State Management", level: 80 },
        { name: "API Integration", level: 85 },
      ]
    },
    {
      icon: Database,
      title: "Backend & Databases",
      color: "bg-purple-500",
      skills: [
        { name: "Java EE (Servlets, JSP)", level: 85 },
        { name: "Node.js", level: 75 },
        { name: "PostgreSQL", level: 85 },
        { name: "Oracle SQL", level: 80 },
        { name: "REST APIs", level: 85 },
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "bg-orange-500",
      skills: [
        { name: "Git/Version Control", level: 85 },
        { name: "FastAPI", level: 75 },
        { name: "MVC Architecture", level: 85 },
        { name: "GlassFish", level: 75 },
        { name: "UML Design", level: 80 },
      ]
    },
    {
      icon: Brain,
      title: "Emerging Technologies",
      color: "bg-pink-500",
      skills: [
        { name: "Artificial Intelligence", level: 70 },
        { name: "Data Science", level: 65 },
        { name: "Natural Language Processing", level: 70 },
        { name: "Mobile Development", level: 60 },
        { name: "System Analysis", level: 80 },
      ]
    },
    {
      icon: Users,
      title: "Soft Skills",
      color: "bg-cyan-500",
      skills: [
        { name: "Team Leadership", level: 90 },
        { name: "Problem Solving", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Project Management", level: 80 },
        { name: "Mentoring", level: 85 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on projects, coursework, and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title} 
                className={`p-6 shadow-soft hover-glow animate-fade-in animate-delay-${(categoryIndex + 1) * 100}`}
              >
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg ${category.color} flex items-center justify-center`}>
                    <category.icon size={20} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                        style={{
                          animationDelay: `${(categoryIndex * 6 + skillIndex) * 100}ms`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 animate-fade-in animate-delay-400">
            <Card className="p-8 bg-gradient-card shadow-soft">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Certifications & Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  "Java Fundamentals - Code with Mosh",
                  "HP LIFE: IT for Business", 
                  "FNB App of the Year Certificate",
                  "SMU Digital Health Hackathon",
                  "Python Programming Certificate",
                  "Web Development Certificate",
                  "Database Management Certificate",
                  "Project Management Certificate"
                ].map((cert, index) => (
                  <div 
                    key={cert}
                    className={`text-center p-4 rounded-lg bg-card border border-border hover-glow animate-fade-in animate-delay-${(index + 5) * 100}`}
                  >
                    <p className="text-sm font-medium text-foreground">{cert}</p>
                  </div>
                ))}
              </div>
              
              {/* LinkedIn Note */}
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  View more certificates and detailed experience on my{" "}
                  <a 
                    href="https://www.linkedin.com/in/mashudu-nemutudi-201368316/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 font-medium underline"
                  >
                    LinkedIn Profile
                  </a>
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