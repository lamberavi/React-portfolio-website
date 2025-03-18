// import React from 'react'
// import logo from "../assets/RLLogo.jpg";
// import { FaLinkedin } from 'react-icons/fa';
// import { FaGithub } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaFacebook } from 'react-icons/fa';
// const Navbar = () => {
//   return (
//     <nav className="mb-20 flex flex-items-center justify-between">
//         <div className='flex flex-shrink-0 items-center'>
//             <img className='mx-2 w-20' src={logo} alt="Logo"/>
//         </div>
//         <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
//             <FaLinkedin/>
//             <FaGithub/>
//             <FaTwitter/>
//             <FaInstagram/>
//             <FaFacebook/>
//         </div>
//     </nav> 
//   );
// };

// export default Navbar




import React from 'react';
import logo from "../assets/RLLogo.jpg";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between">
      {/* Logo */}
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-20' src={logo} alt="Logo"/>
      </div>

      {/* Social Media Icons with Links */}
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/in/ravi-lambe-64a458289/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
          <FaLinkedin />
        </a>
        <a href="https://github.com/lamberavi" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/mr_ravi_6361/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
          <FaInstagram />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
          <FaFacebook />
        </a>
      </div> 
    </nav>
  );
};

export default Navbar;
