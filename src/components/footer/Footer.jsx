 
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
      className="bg-cover bg-center bg-no-repeat text-white py-10 px-5 font-sans"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 md:gap-10">
          {/* Logo and Description */}
          <div className="flex-1 min-w-[250px] md:max-w-[300px]">
            <div className="flex items-center justify-start mb-4">
              <img
                src={tgLogo}
                alt="T-Sign Logo"
                className="h-16 w-auto bg-white rounded-xl p-2"
              />
            </div>
            <p className=" leading-relaxed mb-4 text-justify-center">
              T-Sign is a blockchain-based credentialing platform by T-Sign & Govt. of Telangana,
              streamlining student, college, and recruiter interactions through secure digital verification.
            </p>
            <h4 className="text-base mb-3 font-semibold">Stay connected with us</h4>
            <div className="flex gap-4 text-lg">
              <a
                href="https://www.facebook.com/TSignHyd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-red-500"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/TSignHyd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-red-500"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/tSignhyd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-red-500"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/channel/UCx3-nAxbesZcemtLftckP9Q"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-red-500"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/tSignhyd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-red-500"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
 
          {/* About T-Sign */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg mb-4 font-bold">About T-Sign</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Platform Benefits
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  How It Works
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Leadership
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Media & Press
                </a>
              </li>
            </ul>
          </div>
 
          {/* Stakeholder */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg mb-4 font-bold">Stakeholder</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Students
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Colleges
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Recruiters
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Universities
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Employers
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Government
                </a>
              </li>
            </ul>
          </div>
 
          {/* Resources */}
          <div className="flex-1 min-w-[200px]">
            <h3 className="text-lg mb-4 font-bold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Accessibility Statement
                </a>
              </li>
              <li>
                <a href="/" className="text-white no-underline transition-colors hover:text-red-500">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
        </div>
 
        <div className="text-center md:text-left mt-10 pt-6 border-t border-white/20">
          <p className="text-sm">
            &copy; 2025 All rights reserved by{' '}
            <a
              href="/"
              className="text-blue-300 no-underline hover:text-blue-200 transition-colors"
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

 