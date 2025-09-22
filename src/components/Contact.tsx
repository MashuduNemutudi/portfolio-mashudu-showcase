import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:nemutudimashudu03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nemutudimashudu03@gmail.com",
      link: "mailto:nemutudimashudu03@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 69 401 6726",
      link: "tel:+27694016726"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kempton Park, South Africa",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@MashuduNemutudi",
      link: "https://github.com/MashuduNemutudi"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mashudu Nemutudi",
      link: "https://www.linkedin.com/in/mashudu-nemutudi-201368316/"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm currently seeking Work Integrated Learning opportunities. 
              Let's discuss how we can work together!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in animate-delay-100">
              {/* Intro */}
              <Card className="p-8 shadow-soft">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageCircle size={24} className="text-primary" />
                  <h3 className="text-2xl font-semibold">Let's Connect</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm excited to explore Work Integrated Learning opportunities where I can 
                  apply my full-stack development skills and contribute to meaningful projects. 
                  Whether you're looking for a motivated intern or want to discuss potential 
                  collaborations, I'd love to hear from you.
                </p>
              </Card>

              {/* Contact Details */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={info.label} className={`p-6 shadow-soft hover-glow animate-fade-in animate-delay-${(index + 2) * 100}`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a 
                            href={info.link} 
                            className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-semibold text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Connect on Social Media</h4>
                {socialLinks.map((social, index) => (
                  <Card key={social.label} className={`p-6 shadow-soft hover-glow animate-fade-in animate-delay-${(index + 5) * 100}`}>
                    <a href={social.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <social.icon size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{social.label}</p>
                        <p className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                          {social.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in animate-delay-200">
              <Card className="p-8 shadow-soft">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-32 resize-none"
                      placeholder="Tell me about the opportunity or how we can work together..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary-dark hover:bg-primary-dark/90"
                    size="lg"
                  >
                    <Send size={18} className="mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    You can also reach me directly at{" "}
                    <a 
                      href="mailto:nemutudimashudu03@gmail.com" 
                      className="text-primary hover:underline font-medium"
                    >
                      nemutudimashudu03@gmail.com
                    </a>
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-fade-in animate-delay-400">
            <Card className="p-8 bg-gradient-card shadow-soft">
              <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm passionate about technology and eager to contribute to innovative projects. 
                Let's discuss how my skills in full-stack development can benefit your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="bg-primary-dark hover:bg-primary-dark/90">
                  <a href="mailto:nemutudimashudu03@gmail.com">
                    <Mail size={18} className="mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="https://github.com/MashuduNemutudi" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" />
                    View GitHub
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;