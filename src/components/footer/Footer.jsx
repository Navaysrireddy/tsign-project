// import React from 'react';
// import './Footer.css';
// import logo from '../../assests/TG-SIGN (2).png';
// import BusinessIcon from '@mui/icons-material/Business';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import YouTubeIcon from '@mui/icons-material/YouTube';

// const Footer = () => {
//   // State and functions for gallery removed since no images yet

//   return (
//     <>
//       {/* No fullscreen gallery popup since no images */}

//       <footer className="custom-footer">
//         <div className="footer-top">
//           <div className="footer-logo">
//             <img src={logo} alt="Logo" className="logo" />
//             <p>
//               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio ad ab, rerum sit aliquid.
//             </p>
            
//           </div>

//           <div className="footer-links">
//             <h2>SUPPORT</h2>
//             <ul>
//               <li className="links-footer">
//                 <a href="/contact">Contact us</a>
//               </li>
//               <li className="links-footer">
//                 <a href="/support">Support System</a>
//               </li>
//               <li className="links-footer">
//                 <a href="/privacy">Privacy Policy</a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-info">
//             <h2>ADDRESS</h2>
//             <div className="info-line">
//               <BusinessIcon /> 
//                  5th Floor Ektha Towers,
//                  <br />
//                  White Field Rd, Ashok Nagar
//                  <br />
//                  Golden Habitat Whitefields,
//                  <br />
//                  HITEC City,
//                  <br />
//                  Hyderabad, Kondapur,
//                 Telangana 500084
//               </div>
//             <div className="info-line">
//               <MailOutlineIcon /> contact@vidyardi.com
//             </div>
//             <div className="info-line">
//               <MailOutlineIcon /> info@vidyardi.com
//             </div>
//           </div>

//           <div className="footer-gallery">
//             <h2>SOCIAL MEDIA</h2>
//             <br />
//             <div className="footer-socials">
//             <a
//               className="icons-links"
//               href="https://facebook.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <FacebookIcon />
//             </a>
//             <a
//               className="icons-links"
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <LinkedInIcon />
//             </a>
//             <a
//               className="icons-links"
//               href="https://youtube.com"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <YouTubeIcon />
//             </a>
//           </div>
//           </div>
//         </div>

//         <div className="footer-bottom">
//           <p>
//             &copy; 2025 All rights reserved. by{' '}
//             <a className="wingig-copy" href="/">
//               Vidyardi Institutions Pvt.Ltd
//             </a>
//           </p>
          
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;





import React from 'react';
import './Footer.css';
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
      className="footer"
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="footer-overlay">
        <div className="footer-container">

          {/* Logo and Description */}
          <div className="footer-section">
            <div className="footer-logos">
              <img src={tgLogo} alt="T-Sign Logo" className="footer-logo" />
              </div>
              <br />
            <p className="footer-description">
              T-Sign is a blockchain-based credentialing platform by T-Sign & Govt. of Telangana,
              streamlining student, college, and recruiter interactions through secure digital verification.
            </p>
            <h4 className="footer-subheading">Stay connected with us</h4>
            <div className="footer-socials">
              <a href="https://www.facebook.com/TSignHyd" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com/TSignHyd" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/tSignhyd" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://www.youtube.com/channel/UCx3-nAxbesZcemtLftckP9Q" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://www.instagram.com/tSignhyd" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
          </div>

          {/* About T-Sign */}
          <div className="footer-section">
            <h3 className="footer-heading">About T-Sign</h3>
            <ul className="footer-links">
              <li><a href="/">Our Vision</a></li>
              <li><a href="/">Our Mission</a></li>
              <li><a href="/">Platform Benefits</a></li>
              <li><a href="/">How It Works</a></li>
              <li><a href="/">Leadership</a></li>
              <li><a href="/">Media & Press</a></li>
            </ul>
          </div>

          {/* Stakeholder */}
          <div className="footer-section">
            <h3 className="footer-heading">Stakeholder</h3>
            <ul className="footer-links">
              <li><a href="/">Students</a></li>
              <li><a href="/">Colleges</a></li>
              <li><a href="/">Recruiters</a></li>
              <li><a href="/">Universities</a></li>
              <li><a href="/">Employers</a></li>
              <li><a href="/">Government</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="/">Documentation</a></li>
              <li><a href="/">FAQs</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Accessibility Statement</a></li>
              <li><a href="/">Support Center</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
             &copy; 2025 All rights reserved. by{' '}
             <a className="vidyardi-copy" href="/">
               Vidyardi Institutions Pvt.Ltd
             </a>
           </p>
          
         </div>
      </div>
    </footer>
  );
};

export default Footer;