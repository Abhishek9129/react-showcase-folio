
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { Icon: Github, href: 'https://github.com' },
    { Icon: Linkedin, href: 'https://linkedin.com' },
    { Icon: Twitter, href: 'https://twitter.com' },
    { Icon: Mail, href: 'mailto:email@example.com' },
  ];

  return (
    <footer className="py-8 text-center">
      <div className="flex justify-center space-x-6 mb-6">
        {socialLinks.map((link, index) => (
          <a 
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-portfolio-lightSlate hover:text-portfolio-green transition-colors"
          >
            <link.Icon size={20} />
            <span className="sr-only">Social link</span>
          </a>
        ))}
      </div>

      <div className="text-portfolio-slate text-sm">
        <p>Designed & Built with React & TailwindCSS</p>
        <p className="mt-2">© {new Date().getFullYear()} John Doe. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
