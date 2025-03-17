import React from 'react'
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-20 text-center text-4xl'> About 
            <span className='text-neutral-500'>Me</span>
            </h2>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl' src={aboutImg} alt="about" />
                </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center lg:justify-start'>
                    <p className='my-2 max-w-xl py-6'>As a passionate Full Stack Developer, I specialize in building dynamic and scalable web applications, combining front-end and back-end technologies to deliver seamless user experiences. 
                        With expertise in modern frameworks like React, Node.js, and databases such as MongoDB and PostgreSQL,
                        I create efficient, responsive, and secure solutions. My problem-solving skills, 
                        along with a keen eye for design and functionality, allow me to develop applications that are both visually appealing and high-performing. 
                        Whether working on API development, database management, or UI/UX enhancements,
                        I strive to deliver high-quality code and innovative solutions that meet business needs.</p>
                </div>
                </div>
            </div>
    </div>
  );
};

export default About


