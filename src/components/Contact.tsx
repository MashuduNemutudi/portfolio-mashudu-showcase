import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_URL = "https://wa.me/27694016726?text=Hi%20Mashudu%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Portfolio Contact: Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:nemutudimashudu03@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: "Email client opened",
      description: "Your default email client should open with the message pre-filled.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nemutudimashudu03@gmail.com",
      link: "mailto:nemutudimashudu03@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+27 69 401 6726",
      link: "tel:+27694016726",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Soweto, Gauteng, South Africa",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@MashuduNemutudi",
      link: "https://github.com/MashuduNemutudi",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Mashudu Nemutudi",
      link: "https://www.linkedin.com/in/mashudu-nemutudi-201368316/",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 animated-gradient opacity-10" aria-hidden="true"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              I'm open to software developer roles and freelance projects. Let's talk about how I can contribute to
              your team.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in animate-delay-100">
              <Card className="p-6 md:p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle size={22} className="text-primary" aria-hidden="true" />
                  <h3 className="text-xl md:text-2xl font-semibold">Let's Connect</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're hiring a developer, need a business system built, or want to discuss a collaboration,
                  I'd love to hear from you. I typically respond within a day.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button size="lg" className="min-h-11 bg-success text-success-foreground hover:bg-success/90" asChild>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle size={18} className="mr-2" aria-hidden="true" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="min-h-11" asChild>
                    <a href="/Mashudu_Nemutudi_CV.pdf" download="Mashudu_Nemutudi_CV.pdf">
                      <Download size={18} className="mr-2" aria-hidden="true" />
                      Download CV
                    </a>
                  </Button>
                </div>
              </Card>

              {/* Contact Details */}
              <ul className="space-y-4 list-none">
                {contactInfo.map((info) => (
                  <li key={info.label}>
                    <Card className="p-5 shadow-soft hover-glow transition-transform duration-medium hover:-translate-y-0.5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <info.icon size={20} className="text-primary-foreground" aria-hidden="true" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            {info.label}
                          </p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-base md:text-lg font-semibold text-foreground hover:text-primary transition-colors break-words"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-base md:text-lg font-semibold text-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </Card>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Find me online</h3>
                <ul className="space-y-4 list-none">
                  {socialLinks.map((social) => (
                    <li key={social.label}>
                      <Card className="p-5 shadow-soft hover-glow transition-transform duration-medium hover:-translate-y-0.5">
                        <a
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                            <social.icon size={20} className="text-primary-foreground" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {social.label}
                            </p>
                            <p className="text-base md:text-lg font-semibold text-foreground">{social.value}</p>
                          </div>
                        </a>
                      </Card>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in animate-delay-200">
              <Card className="p-6 md:p-8 shadow-soft lg:sticky lg:top-24">
                <h3 className="text-xl md:text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full min-h-11"
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
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full min-h-11"
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

                  <Button type="submit" className="w-full min-h-11 bg-primary-dark hover:bg-primary-dark/90" size="lg">
                    <Send size={18} className="mr-2" aria-hidden="true" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center">
                    Prefer email? Reach me directly at{" "}
                    <a
                      href="mailto:nemutudimashudu03@gmail.com"
                      className="text-primary hover:underline font-medium break-words"
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
              <h3 className="text-2xl font-semibold mb-4">Ready to work together?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I build reliable full-stack systems and I'm eager to bring that to a team that's shipping real
                products.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" asChild className="min-h-11 bg-primary-dark hover:bg-primary-dark/90">
                  <a href="mailto:nemutudimashudu03@gmail.com">
                    <Mail size={18} className="mr-2" aria-hidden="true" />
                    Email Me
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="min-h-11" asChild>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} className="mr-2" aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="min-h-11" asChild>
                  <a href="https://github.com/MashuduNemutudi" target="_blank" rel="noopener noreferrer">
                    <Github size={18} className="mr-2" aria-hidden="true" />
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
