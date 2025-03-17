import React from 'react';

const experiences = [
  {
    year: '2024',
    role: 'Full-Stack Developer Intern',
    company: 'Tech Corp',
    description: 'Developed REST APIs and optimized database queries for a high-traffic web app.',
    technologies: ['JavaScript', 'React.js', 'Next.js', 'MongoDB'],
  },
  {
    year: '2023',
    role: 'Open Source Contributor',
    company: 'GitHub',
    description: 'Contributed to multiple React.js projects, improving UI/UX and performance.',
    technologies: ['React.js', 'Node.js', 'Git', 'Tailwind CSS'],
  },
];

const Experience = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <h1 className='my-20 text-center text-4xl font-bold text-cyan-400'>Experience</h1>
      <div>
        {experiences.map((experience, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            
            {/* Access Year */}
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400 font-semibold'>{experience.year}</p>
            </div>
            
            {/* Access Role, Company & Description */}
            <div className='w-full lg:w-3/4'>
              <h2 className='text-lg font-semibold text-white'>
                {experience.role} - <span className='text-cyan-400'>{experience.company}</span>
              </h2>
              <p className='text-neutral-400'>{experience.description}</p>
              
              {/* Access Technologies and Loop Through */}
              <div className='mt-2 flex flex-wrap gap-2'>
                {experience.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className='text-sm font-medium text-cyan-400 border border-cyan-400 px-2 py-1 rounded-lg'>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
