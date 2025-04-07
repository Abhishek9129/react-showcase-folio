
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center container py-20" id="home">
      <div className="space-y-5 max-w-3xl">
        <h1 
          className={`text-portfolio-green text-lg opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
          style={{ animationDelay: '100ms' }}
        >
          Hi, my name is
        </h1>
        <h2 
          className={`text-portfolio-lightestSlate text-5xl sm:text-6xl md:text-7xl font-bold opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
          style={{ animationDelay: '200ms' }}
        >
          John Doe.
        </h2>
        <h3 
          className={`text-portfolio-slate text-4xl sm:text-5xl md:text-6xl font-bold opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
          style={{ animationDelay: '300ms' }}
        >
          I build things for the web.
        </h3>
        <p 
          className={`text-portfolio-slate max-w-lg text-lg opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
          style={{ animationDelay: '400ms' }}
        >
          I'm a software engineer specializing in building exceptional digital experiences. 
          Currently, I'm focused on building accessible, human-centered products.
        </p>
        <div 
          className={`pt-5 opacity-0 ${isVisible ? 'animate-fadeIn' : ''}`}
          style={{ animationDelay: '500ms' }}
        >
          <Button 
            className="text-portfolio-green bg-transparent border border-portfolio-green hover:bg-portfolio-green hover:bg-opacity-10 px-7 py-5 text-lg"
          >
            Check out my projects <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
