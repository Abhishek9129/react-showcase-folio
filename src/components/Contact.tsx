
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 container">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-portfolio-green text-lg">04. What's Next?</h2>
        <h3 className="text-portfolio-lightestSlate text-4xl font-bold mt-4">Get In Touch</h3>
        
        <p className="my-6 text-lg">
          I'm currently looking for new opportunities and my inbox is always open. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <Button 
          variant="outline"
          className="text-portfolio-green border-2 border-portfolio-green hover:bg-portfolio-green hover:bg-opacity-10 px-8 py-6 text-base"
        >
          Say Hello
        </Button>
      </div>
    </section>
  );
};

export default Contact;
