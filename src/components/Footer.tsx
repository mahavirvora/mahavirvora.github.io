
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:voramahavir@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/mahavir-vora",
      label: "LinkedIn"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Mahavir Vora</h3>
            <p className="text-muted-foreground">Engineering Manager</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                aria-label={link.label}
                className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary transition-all duration-300 transform hover:scale-110"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
            >
              Back to Top ↑
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mahavir Vora. All rights reserved. Created with dedication.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
