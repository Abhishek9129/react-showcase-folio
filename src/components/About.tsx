
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 container">
      <h2 className="section-heading">
        <span className="section-number">01.</span>
        About Me
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          <p>
            Hello! My name is John and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try editing 
            custom Tumblr themes — turns out hacking together a custom reblog button taught me 
            a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising agency, 
            a start-up, a huge corporation, and a student-led design studio. My main focus these 
            days is building accessible, inclusive products and digital experiences for a variety 
            of clients.
          </p>
          <p>
            I also recently launched a course that covers everything you need to build a web app 
            with the React ecosystem.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          
          <div className="grid grid-cols-2 gap-2 mt-5">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">▹</span> JavaScript (ES6+)
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">▹</span> React
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">▹</span> Node.js
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">▹</span> TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">▹</span> TailwindCSS
              </li>
              <li className="flex items-center">
                <span className="text-portfolio-green mr-2">▹</span> GraphQL
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-portfolio-green opacity-75 rounded-lg blur-sm group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative bg-portfolio-navy p-1 rounded-lg">
            <div className="relative h-64 w-64 mx-auto overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-portfolio-green bg-opacity-20"></div>
              <div className="absolute inset-0 border-2 border-portfolio-green rounded-lg"></div>
              {/* Replace with actual image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-600">
                Your Photo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
