import React from 'react';
import footerBg from '../../assests/background.png';
import tgLogo from '../../assests/TG-SIGN (2).png';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-5 font-sans overflow-hidden"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-900/80 z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                src={tgLogo}
                alt="T-Sign Logo"
                className="h-20 w-auto bg-white rounded-2xl p-3 shadow-lg" 
              />
            </div>
            <p className="text-gray-200 leading-relaxed mb-6 text-justify pr-4">
              T-Sign is a blockchain-based credentialing platform by T-Sign & Govt. of Telangana,
              streamlining student, college, and recruiter interactions through secure digital verification.
            </p>
            <h4 className="text-base mb-4 font-semibold text-cyan-100">Stay connected with us</h4>
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF />, href: "https://www.facebook.com/TSignHyd", label: "Facebook" },
                { icon: <FaTwitter />, href: "https://twitter.com/TSignHyd", label: "Twitter" },
                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/company/tSignhyd", label: "LinkedIn" },
                { icon: <FaYoutube />, href: "https://www.youtube.com/channel/UCx3-nAxbesZcemtLftckP9Q", label: "YouTube" },
                { icon: <FaInstagram />, href: "https://www.instagram.com/tSignhyd", label: "Instagram" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white transition-all duration-300 hover:bg-cyan-500 hover:scale-110 shadow-md"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* About T-Sign */}
          <div>
            <h3 className="text-lg mb-5 font-bold relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-cyan-400">
              About T-Sign
            </h3>
            <ul className="space-y-3">
              {["Our Vision", "Our Mission", "Platform Benefits", "How It Works", "Leadership", "Media & Press"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="/" 
                    className="text-gray-300 no-underline transition-all duration-300 hover:text-cyan-400 hover:pl-2 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Stakeholder */}
          <div>
            <h3 className="text-lg mb-5 font-bold relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-cyan-400">
              Stakeholder
            </h3>
            <ul className="space-y-3">
              {["Students", "Colleges", "Recruiters", "Universities", "Employers", "Government"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="/" 
                    className="text-gray-300 no-underline transition-all duration-300 hover:text-cyan-400 hover:pl-2 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg mb-5 font-bold relative pb-2 after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-10 after:bg-cyan-400">
              Resources
            </h3>
            <ul className="space-y-3">
              {["Documentation", "FAQs", "Terms of Use", "Privacy Policy", "Accessibility Statement", "Support Center"].map((item, index) => (
                <li key={index}>
                  <a 
                    href="/" 
                    className="text-gray-300 no-underline transition-all duration-300 hover:text-cyan-400 hover:pl-2 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-cyan-400 rounded-full mr-0 opacity-0 group-hover:opacity-100 group-hover:mr-2 transition-all"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-sm text-gray-300">
            &copy; 2025 All rights reserved by{' '}
            <a
              href="/"
              className="text-cyan-400 no-underline hover:text-cyan-300 transition-colors font-medium"
            >
              Vidyardi Institutions Pvt.Ltd
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;