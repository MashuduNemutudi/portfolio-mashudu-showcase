import { Card } from "@/components/ui/card";
import { Heart, Users, Award, Handshake } from "lucide-react";

const Mentorship = () => {
  const involvements = [
    {
      icon: Users,
      title: "Mentor – Kidathon",
      description: "Guided young learners through foundational programming concepts, encouraging teamwork, problem-solving, and digital creativity. Helped children discover their passion for technology and coding."
    },
    {
      icon: Award,
      title: "Mentor – Telkom 10x Hackathon",
      description: "Supported youth participants with coding challenges during the hackathon. Helped foster innovation, collaboration, and technical skills among aspiring developers."
    },
    {
      icon: Handshake,
      title: "Support Team – FNB App of the Year Hackathon",
      description: "Assisted participants with setup, technical challenges, and workflow organization. Contributed to smooth event coordination during the national competition."
    }
  ];

  return (
    <section id="mentorship" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mentorship & <span className="gradient-text">Community</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Giving back to the tech community through mentorship and event support
            </p>
          </div>

          {/* Involvement Cards */}
          <div className="grid md:grid-cols-1 gap-8">
            {involvements.map((item, index) => (
              <Card 
                key={item.title} 
                className={`p-8 shadow-soft hover-glow animate-fade-in animate-delay-${(index + 1) * 100}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Community Note */}
          <div className="mt-12 animate-fade-in animate-delay-400">
            <Card className="p-8 bg-gradient-card shadow-soft text-center">
              <div className="flex justify-center mb-4">
                <Heart size={32} className="text-primary" />
              </div>
              <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
                "I believe in the power of community and giving back. Mentoring young developers and 
                contributing to tech events has been one of the most rewarding aspects of my journey 
                in technology."
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentorship;
