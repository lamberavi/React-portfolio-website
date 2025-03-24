import React from 'react';

// Import project images (Make sure these images exist in your assets folder)
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';

const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description: "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ecommerce-nine-chi-58.vercel.app/",
  },
  {
    title: "Task Management App",
    image: project2,
    description: "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://taskmanager-demo.com",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description: "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    link: "https://react-portfolio-website-black.vercel.app",
  },
  {
    title: "Online-E-Learnig Platform",
    image: project4,
    description: "An interactive online e-learning platform offering courses on various subjects.",
    technologies: ["HTML", "CSS", "React","JavaScript","NodeJs"],
    link: "https://onlineelearning.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl font-bold text-cyan-400'>Projects</h1>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {PROJECTS.map((project, index) => (
          <div key={index} className='border border-neutral-800 p-4 rounded-lg shadow-lg'>
            
            {/* Project Image */}
            <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-md' />
            
            {/* Project Title */}
            <h2 className='mt-4 text-lg font-semibold text-white'>{project.title}</h2>
            
            {/* Project Description */}
            <p className='text-neutral-400'>{project.description}</p>
            
            {/* Technologies Used */}
            <div className='mt-2 flex flex-wrap gap-2'>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className='text-sm font-medium text-cyan-400 border border-cyan-400 px-2 py-1 rounded-lg'>
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Link */}
            <div className='mt-4'>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-block bg-cyan-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-cyan-500 transition'
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
