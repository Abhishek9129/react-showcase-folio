
import React from 'react';
import { Code2, Database, Layout, Server, Settings, Terminal } from 'lucide-react';

const skillsData = [
  {
    category: 'Frontend Development',
    icon: <Layout className="h-8 w-8 text-portfolio-green" />,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'TailwindCSS', 'Responsive Design', 'Redux']
  },
  {
    category: 'Backend Development',
    icon: <Server className="h-8 w-8 text-portfolio-green" />,
    skills: ['Node.js', 'Express', 'Python', 'Django', 'RESTful APIs', 'GraphQL', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'Development Tools',
    icon: <Terminal className="h-8 w-8 text-portfolio-green" />,
    skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Webpack', 'Jest', 'CI/CD', 'Agile']
  },
  {
    category: 'Programming Languages',
    icon: <Code2 className="h-8 w-8 text-portfolio-green" />,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL', 'C#', 'PHP', 'Bash']
  },
  {
    category: 'Database Management',
    icon: <Database className="h-8 w-8 text-portfolio-green" />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'DynamoDB', 'SQLite', 'Prisma']
  },
  {
    category: 'DevOps & Infrastructure',
    icon: <Settings className="h-8 w-8 text-portfolio-green" />,
    skills: ['AWS', 'Azure', 'Netlify', 'Vercel', 'Heroku', 'Docker', 'Kubernetes', 'GitHub Actions']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 container">
      <h2 className="section-heading">
        <span className="section-number">02.</span>
        Skills
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skillGroup, index) => (
          <div 
            key={index} 
            className="bg-portfolio-lightNavy p-6 rounded-lg hover:translate-y-[-5px] transition-transform duration-300 border border-portfolio-lightestNavy"
          >
            <div className="flex items-center mb-4">
              {skillGroup.icon}
              <h3 className="text-portfolio-lightestSlate text-xl font-semibold ml-3">
                {skillGroup.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.skills.map((skill, skillIndex) => (
                <span 
                  key={skillIndex} 
                  className="bg-portfolio-navy px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
