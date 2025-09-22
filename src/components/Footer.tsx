import { Heart, Code } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="text-2xl font-bold gradient-text mb-4">
                Mashudu Nemutudi
              </div>
              <p className="text-sm text-muted-foreground">
                Computer Science Student & Full-Stack Developer passionate about 
                creating innovative solutions with modern technology.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Skills", href: "#skills" },
                  { label: "Projects", href: "#projects" },
                  { label: "Contact", href: "#contact" }
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a 
                  href="mailto:nemutudimashudu03@gmail.com"
                  className="block hover:text-primary transition-colors"
                >
                  nemutudimashudu03@gmail.com
                </a>
                <a 
                  href="tel:+27694016726"
                  className="block hover:text-primary transition-colors"
                >
                  +27 69 401 6726
                </a>
                <p>Kempton Park, South Africa</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span>© {currentYear} Mashudu Nemutudi.</span>
                <span>Made with</span>
                <Heart size={14} className="text-red-500" />
                <span>and</span>
                <Code size={14} className="text-primary" />
              </div>

              {/* Tech Stack */}
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Built with React + TypeScript + Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;