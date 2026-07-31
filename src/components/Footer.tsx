import { Heart, Code, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <p className="text-2xl font-bold gradient-text mb-2">Mashudu Nemutudi</p>
              <p className="text-sm font-medium text-foreground/80 mb-3">
                Software Developer | Full-Stack Developer
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Science graduate building practical, production-ready software with React, Node.js and
                PostgreSQL.
              </p>
            </div>

            {/* Quick Links */}
            <nav aria-label="Footer">
              <h2 className="font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Experience", href: "#experience" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contact Info */}
            <div>
              <h2 className="font-semibold mb-4">Get In Touch</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:nemutudimashudu03@gmail.com" className="hover:text-primary transition-colors">
                    nemutudimashudu03@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+27694016726" className="hover:text-primary transition-colors">
                    +27 69 401 6726
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} aria-hidden="true" />
                  Soweto, Gauteng, South Africa
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>© {currentYear} Mashudu Nemutudi.</span>
                <span>Made with</span>
                <Heart size={14} className="text-destructive" aria-hidden="true" />
                <span>and</span>
                <Code size={14} className="text-primary" aria-hidden="true" />
              </p>
              <p className="text-xs text-muted-foreground">Built with React, TypeScript and Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
