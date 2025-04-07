
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '01. About', href: '#about' },
    { label: '02. Skills', href: '#skills' },
    { label: '03. Projects', href: '#projects' },
    { label: '04. Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 py-4 px-6 md:px-10 ${
        isScrolled ? 'bg-portfolio-lightNavy bg-opacity-90 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center">
        <a href="#" className="text-portfolio-green font-bold text-2xl">JD</a>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="nav-link"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button 
                variant="outline"
                className="text-portfolio-green border border-portfolio-green hover:bg-portfolio-green hover:bg-opacity-10"
              >
                Resume
              </Button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-portfolio-green"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav 
        className={`md:hidden fixed top-[72px] right-0 h-screen w-3/4 bg-portfolio-lightNavy transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-center pt-10 space-y-8">
          {navItems.map((item, index) => (
            <li key={index}>
              <a 
                href={item.href} 
                className="text-xl nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <Button 
              variant="outline"
              className="text-portfolio-green border border-portfolio-green hover:bg-portfolio-green hover:bg-opacity-10"
              onClick={() => setIsMenuOpen(false)}
            >
              Resume
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
