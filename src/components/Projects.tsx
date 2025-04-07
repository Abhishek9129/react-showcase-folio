
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, cart functionality, payment processing, and order management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    imageUrl: "",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Content Management System",
    description: "A custom CMS built for content creators to easily manage their online presence. Includes a WYSIWYG editor, media library, SEO tools, and analytics dashboard.",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "GraphQL", "TailwindCSS"],
    imageUrl: "",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks, track time, and manage projects. Features include drag-and-drop task organization, time tracking, and reporting.",
    tags: ["Vue.js", "Firebase", "Vuex", "Sass", "PWA"],
    imageUrl: "",
    githubUrl: "#",
    liveUrl: "#",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 container">
      <h2 className="section-heading">
        <span className="section-number">03.</span>
        Projects
      </h2>
      
      <div className="space-y-24">
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            className={`relative grid md:grid-cols-12 gap-4 items-center ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            {/* Project Image */}
            <div 
              className={`md:col-span-7 relative rounded-lg overflow-hidden h-80 group ${
                index % 2 === 0 
                ? 'md:order-1' 
                : 'md:order-2'
              }`}
            >
              <div className="absolute inset-0 bg-portfolio-green opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
              <div className="h-full w-full bg-portfolio-lightNavy flex items-center justify-center">
                <span className="text-portfolio-green">Project Screenshot</span>
              </div>
              <div className="absolute inset-0 bg-portfolio-navy opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
            
            {/* Project Info */}
            <div 
              className={`md:col-span-6 md:col-start-${
                index % 2 === 0 ? '6' : '1'
              } md:row-start-1 z-10`}
            >
              <span className="text-portfolio-green text-sm">Featured Project</span>
              <h3 className="text-portfolio-lightestSlate text-2xl font-bold mt-1">
                {project.title}
              </h3>
              
              <div className="bg-portfolio-lightNavy p-5 my-5 rounded-lg shadow-lg">
                <p>{project.description}</p>
              </div>
              
              <div className={`flex flex-wrap gap-2 my-3 ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-portfolio-lightSlate text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className={`flex items-center gap-4 mt-4 ${
                index % 2 === 0 ? '' : 'md:justify-end'
              }`}>
                <a 
                  href={project.githubUrl} 
                  className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github size={20} />
                </a>
                <a 
                  href={project.liveUrl} 
                  className="text-portfolio-lightestSlate hover:text-portfolio-green transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-20 text-center">
        <h3 className="text-portfolio-lightestSlate text-xl mb-6">Other Noteworthy Projects</h3>
        <Button 
          variant="outline" 
          className="text-portfolio-green border border-portfolio-green hover:bg-portfolio-green hover:bg-opacity-10"
        >
          View the Archive
        </Button>
      </div>
    </section>
  );
};

export default Projects;
