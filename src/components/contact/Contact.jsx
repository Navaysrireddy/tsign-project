// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiChevronRight } from 'react-icons/fi';
// // // import { FaWhatsapp } from 'react-icons/fa';
// // import './Contact.css';
// // import Header from '../header/Header';
// // import Footer from '../footer/Footer';
// // // import contactImage from '../../assests/about-us-back.webp';
// // import contactImage from '../../assests/healthy-hands.jpg';

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     userType: '',
// //     message: ''
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [isSubmitting, setIsSubmitting] = useState(false);
// //   const [submitSuccess, setSubmitSuccess] = useState(false);
// //   const [activeField, setActiveField] = useState(null);
// //   const [showScrollTop, setShowScrollTop] = useState(false);

// //   // Scroll to top visibility
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.pageYOffset > 300) {
// //         setShowScrollTop(true);
// //       } else {
// //         setShowScrollTop(false);
// //       }
// //     };
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData(prev => ({
// //       ...prev,
// //       [name]: value
// //     }));
// //     if (errors[name]) {
// //       setErrors(prev => ({
// //         ...prev,
// //         [name]: null
// //       }));
// //     }
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
// //     if (!formData.name.trim()) newErrors.name = 'Name is required';
// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
// //       newErrors.email = 'Please enter a valid email';
// //     }
// //     if (!formData.userType) newErrors.userType = 'Please select user type';
// //     if (!formData.message.trim()) newErrors.message = 'Message is required';

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       setIsSubmitting(true);
// //       // Simulate API call
// //       setTimeout(() => {
// //         setIsSubmitting(false);
// //         setSubmitSuccess(true);
// //         setFormData({
// //           name: '',
// //           email: '',
// //           userType: '',
// //           message: ''
// //         });
// //         setTimeout(() => setSubmitSuccess(false), 5000);
// //       }, 2000);
// //     }
// //   };

// //   const scrollToTop = () => {
// //     window.scrollTo({
// //       top: 0,
// //       behavior: 'smooth'
// //     });
// //   };

// //   return (
// //     <div className="contact-page">
// //       {/* Hero Section */}
// //       <Header/>
// // <motion.section 
// //   className="contact-hero"
// //   initial={{ opacity: 0 }}
// //   animate={{ opacity: 1 }}
// //   transition={{ duration: 0.8 }}
// //   style={{
// //     background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${contactImage}) no-repeat center center`,
// //     backgroundSize: 'cover'
// //   }}
// // >
// //   <div className="hero-overlay"></div>
// //   <div className="hero-content">
// //     <motion.h1
// //       initial={{ y: 30, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ delay: 0.2, duration: 0.8 }}
// //     >
// //       Let's Build Your Future Amazing
// //     </motion.h1>
// //     <motion.p
// //       initial={{ y: 30, opacity: 0 }}
// //       animate={{ y: 0, opacity: 1 }}
// //       transition={{ delay: 0.4, duration: 0.8 }}
// //     >
// //       We're excited to hear about your questions and we can help bring your vision to life.
// //     </motion.p>
// //   </div>
// // </motion.section>

// //       {/* Main Content */}
// //       <div className="contact-container">
// //         {/* Contact Form */}
// //         <motion.div 
// //           className="contact-form-section"
// //           initial={{ opacity: 0, x: -50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //         >
// //           <div className="form-header">
// //             <motion.h2
// //               initial={{ opacity: 0 }}
// //               whileInView={{ opacity: 1 }}
// //               transition={{ delay: 0.2, duration: 0.6 }}
// //               viewport={{ once: true }}
// //             >
// //               Get In Touch
// //             </motion.h2>
// //             <motion.p
// //               initial={{ opacity: 0 }}
// //               whileInView={{ opacity: 1 }}
// //               transition={{ delay: 0.3, duration: 0.6 }}
// //               viewport={{ once: true }}
// //             >
// //               Fill out the form below and our team will get back to you within 24 hours.
// //             </motion.p>
// //           </div>

// //           <form onSubmit={handleSubmit} className="contact-form">
// //             <div className={`form-group ${activeField === 'name' ? 'active' : ''} ${errors.name ? 'error' : ''}`}>
// //               <label htmlFor="name">Your Name</label>
// //               <input
// //                 type="text"
// //                 id="name"
// //                 name="name"
// //                 value={formData.name}
// //                 onChange={handleChange}
// //                 onFocus={() => setActiveField('name')}
// //                 onBlur={() => setActiveField(null)}
// //                 placeholder="Your Name"
// //               />
// //               {errors.name && <span className="error-message">{errors.name}</span>}
// //             </div>

// //             <div className={`form-group ${activeField === 'email' ? 'active' : ''} ${errors.email ? 'error' : ''}`}>
// //               <label htmlFor="email">Email Address</label>
// //               <input
// //                 type="email"
// //                 id="email"
// //                 name="email"
// //                 value={formData.email}
// //                 onChange={handleChange}
// //                 onFocus={() => setActiveField('email')}
// //                 onBlur={() => setActiveField(null)}
// //                 placeholder="Enter email"
// //               />
// //               {errors.email && <span className="error-message">{errors.email}</span>}
// //             </div>

// //             <div className={`form-group ${activeField === 'userType' ? 'active' : ''} ${errors.userType ? 'error' : ''}`}>
// //               <label htmlFor="userType">I am a</label>
// //               <select
// //                 id="userType"
// //                 name="userType"
// //                 value={formData.userType}
// //                 onChange={handleChange}
// //                 onFocus={() => setActiveField('userType')}
// //                 onBlur={() => setActiveField(null)}
// //               >
// //                 <option value="">Select an option</option>
// //                 <option value="Student">Student</option>
// //                 <option value="Professional">Professional</option>
// //                 <option value="Business Owner">Business Owner</option>
// //                 <option value="Other">Other</option>
// //               </select>
// //               {errors.userType && <span className="error-message">{errors.userType}</span>}
// //             </div>

// //             <div className={`form-group ${activeField === 'message' ? 'active' : ''} ${errors.message ? 'error' : ''}`}>
// //               <label htmlFor="message">Your Message</label>
// //               <textarea
// //                 id="message"
// //                 name="message"
// //                 value={formData.message}
// //                 onChange={handleChange}
// //                 onFocus={() => setActiveField('message')}
// //                 onBlur={() => setActiveField(null)}
// //                 placeholder="Tell us about your project..."
// //               ></textarea>
// //               {errors.message && <span className="error-message">{errors.message}</span>}
// //             </div>

// //             <motion.button
// //               type="submit"
// //               className="submit-btn"
// //               whileHover={{ scale: 1.02 }}
// //               whileTap={{ scale: 0.98 }}
// //               disabled={isSubmitting}
// //             >
// //               {isSubmitting ? (
// //                 <span className="spinner"></span>
// //               ) : (
// //                 <>
// //                   Send Message <FiSend className="send-icon" />
// //                 </>
// //               )}
// //             </motion.button>

// //             <AnimatePresence>
// //               {submitSuccess && (
// //                 <motion.div
// //                   className="success-message"
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   exit={{ opacity: 0, y: -20 }}
// //                 >
// //                   <svg viewBox="0 0 24 24">
// //                     <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
// //                   </svg>
// //                   Thank you! Your message has been sent successfully.
// //                 </motion.div>
// //               )}
// //             </AnimatePresence>
// //           </form>
// //         </motion.div>

// //         {/* Contact Info */}
// //         <motion.div 
// //           className="contact-info-section"
// //           initial={{ opacity: 0, x: 50 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           viewport={{ once: true }}
// //         >
// //           <div className="info-card">
// //             <div className="info-icon">
// //               <FiPhone />
// //             </div>
// //             <div className="info-content">
// //               <h3>Phone</h3>
// //               <p>+ 91 888 659 9438</p>
// //               <a href="tel:+ 918886599438" className="contact-link">
// //                 Call Now <FiChevronRight />
// //               </a>
// //             </div>
// //           </div>

// //           <div className="info-card">
// //             <div className="info-icon">
// //               <FiMail />
// //             </div>
// //             <div className="info-content">
// //               <h3>Email</h3>
// //               <p>hr@vidyardi.com</p>
// //               <a href="mailto:contact@example.com" className="contact-link">
// //                 Email Us <FiChevronRight />
// //               </a>
// //             </div>
// //           </div>

// //           <div className="info-card">
// //             <div className="info-icon">
// //               <FiMapPin />
// //             </div>
// //             <div className="info-content">
// //               <h3>Location</h3>
// //               <p>Ektha towers Ektha Towers,<br /> White Field Rd, Ashok Nagar <br />Golden Habitat Whitefields, <br />HITEC City, Hyderabad, Kondapur,<br /> Telangana 500084</p>
// //               <a href="#map" className="contact-link">
// //                 View Map <FiChevronRight />
// //               </a>
// //             </div>
// //           </div>

// //           <div className="info-card">
// //             <div className="info-icon">
// //               <FiLinkedin />
// //             </div>
// //             <div className="info-content">
// //               <h3>LinkedIn</h3>
// //               <p>Connect with our team</p>
// //               <a href="https://linkedin.com/company" target="_blank" rel="noopener noreferrer" className="contact-link">
// //                 Connect <FiChevronRight />
// //               </a>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>

// //       {/* Map Section */}
// //       {/* Map Section */}
// // <motion.section 
// //   id="map"
// //   className="map-section"
// //   initial={{ opacity: 0 }}
// //   whileInView={{ opacity: 1 }}
// //   transition={{ duration: 0.8 }}
// //   viewport={{ once: true }}
// // >
// //   <div className="map-container">
// //     <iframe
// //       title="Vidyardi Pvt Ltd Location"
// //       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.6609836803887!2d78.36169247440552!3d17.454125500880565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb966568bb921d%3A0x49af78aa4fc3b6e!2sVidyardi%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1751543136483!5m2!1sen!2sin"
// //       width="100%"
// //       height="500"
// //       style={{ border: 0 }}
// //       allowFullScreen=""
// //       loading="lazy"
// //       referrerPolicy="no-referrer-when-downgrade"
// //     ></iframe>
// //   </div>
// // </motion.section>

// //       {/* Scroll to Top Button */}
// //       <AnimatePresence>
// //         {showScrollTop && (
// //           <motion.button
// //             className="scroll-top-btn"
// //             onClick={scrollToTop}
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             exit={{ opacity: 0, y: 20 }}
// //             whileHover={{ scale: 1.1 }}
// //             whileTap={{ scale: 0.9 }}
// //           >
// //             <svg viewBox="0 0 24 24">
// //               <path d="M7 15l5-5 5 5" />
// //             </svg>
// //           </motion.button>
// //         )}
// //       </AnimatePresence>
// //       <Footer/>
// //     </div>
// //   );
// // };

// // export default Contact;




// // import React from "react";
// // import "./Contact.css";
// // import Header from "../header/Header";
// // import Footer from "../footer/Footer";
// // import heroImage from "../../assets/image-4.jpg"; // Replace with your image

// // const Contact = () => {
// //   return (
// //     <div className="contact-page">
// //       <Header />

// //      {/* Hero Section */}
// // <section className="contact-hero">
// //   <div className="hero-content">
// //     <h1>
// //       Welcome to <span>T-SIGN</span>
// //     </h1>
// //     <p>
// //       Simplifying student identity, credential verification, and recruitment
// //       for a future-ready digital ecosystem.
// //     </p>
// //     <div className="hero-buttons">
// //       <button className="primary-btn">Get Started</button>
// //       <button className="secondary-btn">Learn More</button>
// //     </div>
// //   </div>
// //   <div className="hero-image">
// //     <img
// //       src={heroImage}
// //       alt="Empower Education with T-SIGN"
// //     />
// //   </div>
// // </section>


// //      {/* Expertise Section */}
// // <section className="expertise-section">
// //   <h2>Our Expertise</h2>
// //   <div className="expertise-cards">
// //     <div className="expertise-card">
// //       <div className="icon">🛡</div>
// //       <h3>Secure Digital Identities</h3>
// //       <p>
// //         Empower students with verified digital IDs that simplify enrollment,
// //         access to services, and career readiness.
// //       </p>
// //     </div>
// //     <div className="expertise-card">
// //       <div className="icon">🏫</div>
// //       <h3>College Enablement</h3>
// //       <p>
// //         Provide institutions with tools to issue credentials, manage student
// //         records, and ensure compliance effortlessly.
// //       </p>
// //     </div>
// //     <div className="expertise-card">
// //       <div className="icon">💼</div>
// //       <h3>Recruitment Integration</h3>
// //       <p>
// //         Connect verified student profiles with recruiters for faster,
// //         trusted hiring and onboarding processes.
// //       </p>
// //     </div>
// //   </div>
// // </section>


// //     {/* Contact Form Section */}
// // <section className="form-section">
// //   <h2>Get in Touch with T-SIGN</h2>
// //   <p>
// //     Whether you’re a student, college, or recruiter, we’re here to help you make the most of digital credentials.
// //   </p>
// //   <form className="contact-form">
// //     <div className="form-row">
// //       <input type="text" placeholder="First Name" required />
// //       <input type="text" placeholder="Last Name" required />
// //     </div>
// //     <div className="form-row">
// //       <input type="email" placeholder="Email Address" required />
// //       <input type="tel" placeholder="Phone Number" />
// //     </div>
// //     <div className="form-row">
// //       <select required>
// //         <option value="">I am a...</option>
// //         <option value="student">Student</option>
// //         <option value="college">College Representative</option>
// //         <option value="recruiter">Recruiter / Employer</option>
// //         <option value="other">Other</option>
// //       </select>
// //     </div>
// //     <textarea
// //       placeholder="Please describe your requirements or questions..."
// //     ></textarea>
// //     <div className="form-row">
// //       <select>
// //         <option value="">Area of Interest</option>
// //         <option value="verification">Identity Verification & Credentials</option>
// //         <option value="enrollment">College Enrollment Solutions</option>
// //         <option value="recruitment">Recruitment & Placements</option>
// //         <option value="partnership">Partnership Opportunities</option>
// //         <option value="support">Technical Support</option>
// //       </select>
// //     </div>
// //     <button type="submit" className="submit-btn">
// //       Send Message
// //     </button>
// //   </form>
// // </section>


// //       {/* Embedded Map Section */}
// //       <section className="map-section">
// //         <iframe
// //           title="T-SIGN Office Location"
// //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.698073036828!2d78.362!3d17.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20Whitefields%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1749022319448!5m2!1sen!2sin"
// //           width="100%"
// //           height="400"
// //           style={{ border: 0 }}
// //           allowFullScreen=""
// //           loading="lazy"
// //           referrerPolicy="no-referrer-when-downgrade"
// //         ></iframe>
// //       </section>

     
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default Contact;























// import React, { useState } from "react";
// import "./Contact.css";
// import Header from "../header/Header";
// import Footer from "../footer/Footer";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     role: "",
//     interest: "",
//     message: ""
//   });
  
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitSuccess, setSubmitSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setSubmitSuccess(true);
//       setFormData({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         role: "",
//         interest: "",
//         message: ""
//       });
      
//       // Reset success message after 5 seconds
//       setTimeout(() => setSubmitSuccess(false), 5000);
//     }, 1500);
//   };

//   return (
//     <div className="contact-page">
//       <Header />
      
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <div className="hero-content">
//           <h1>
//             Welcome to <br/>
//             <span>T-SIGN</span>
//           </h1>
//           <p>
//             Simplifying student identity, credential verification, and recruitment
//             for a future-ready digital ecosystem.
//           </p>
//           <div className="hero-buttons">
//             <button className="primary-btn">Get Started</button>
//             <button className="secondary-btn">Learn More</button>
//           </div>
//         </div>
//         <div className="hero-image">
//           <div className="hero-graphic">
//             <div className="graphic-circle"></div>
//             <div className="graphic-element">🎓</div>
//             <div className="graphic-element">📄</div>
//             <div className="graphic-element">💼</div>
//           </div>
//         </div>
//       </section>
      
//       {/* Expertise Section */}
//       <section className="expertise-section">
//         <div className="section-header">
//           <h2>Our Expertise</h2>
//           <p>Empowering education through secure digital solutions</p>
//         </div>
//         <div className="expertise-cards">
//           <div className="expertise-card">
//             <div className="card-icon">🛡</div>
//             <h3>Secure Digital Identities</h3>
//             <p>
//               Empower students with verified digital IDs that simplify enrollment,
//               access to services, and career readiness.
//             </p>
//           </div>
//           <div className="expertise-card">
//             <div className="card-icon">🏫</div>
//             <h3>College Enablement</h3>
//             <p>
//               Provide institutions with tools to issue credentials, manage student
//               records, and ensure compliance effortlessly.
//             </p>
//           </div>
//           <div className="expertise-card">
//             <div className="card-icon">💼</div>
//             <h3>Recruitment Integration</h3>
//             <p>
//               Connect verified student profiles with recruiters for faster,
//               trusted hiring and onboarding processes.
//             </p>
//           </div>
//         </div>
//       </section>
      
//       {/* Contact Form Section */}
//       <section className="form-section">
//         <div className="form-container">
//           <div className="form-content">
//             <div className="form-header">
//               <h2>Get in Touch with T-SIGN</h2>
//               <p>
//                 Whether you're a student, college, or recruiter, we're here to help you make the most of digital credentials.
//               </p>
//             </div>
            
//             {submitSuccess && (
//               <div className="success-message">
//                 Thank you for your message! Our team will contact you shortly.
//               </div>
//             )}
            
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="firstName">First Name</label>
//                   <input 
//                     type="text" 
//                     id="firstName" 
//                     name="firstName" 
//                     value={formData.firstName} 
//                     onChange={handleChange} 
//                     required 
//                     placeholder="John" 
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="lastName">Last Name</label>
//                   <input 
//                     type="text" 
//                     id="lastName" 
//                     name="lastName" 
//                     value={formData.lastName} 
//                     onChange={handleChange} 
//                     required 
//                     placeholder="Smith" 
//                   />
//                 </div>
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="email">Email Address</label>
//                   <input 
//                     type="email" 
//                     id="email" 
//                     name="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     required 
//                     placeholder="john@institution.edu" 
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone Number</label>
//                   <input 
//                     type="tel" 
//                     id="phone" 
//                     name="phone" 
//                     value={formData.phone} 
//                     onChange={handleChange} 
//                     placeholder="(123) 456-7890" 
//                   />
//                 </div>
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="role">I am a...</label>
//                   <select 
//                     id="role" 
//                     name="role" 
//                     value={formData.role} 
//                     onChange={handleChange} 
//                     required
//                   >
//                     <option value="">Select your role</option>
//                     <option value="student">Student</option>
//                     <option value="college">College Representative</option>
//                     <option value="recruiter">Recruiter / Employer</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//               </div>
              
//               <div className="form-group">
//                 <label htmlFor="message">Your Message</label>
//                 <textarea 
//                   id="message" 
//                   name="message" 
//                   value={formData.message} 
//                   onChange={handleChange} 
//                   required 
//                   rows="5" 
//                   placeholder="Please describe your requirements or questions..."
//                 ></textarea>
//               </div>
              
//               <div className="form-row">
//                 <div className="form-group">
//                   <label htmlFor="interest">Area of Interest</label>
//                   <select 
//                     id="interest" 
//                     name="interest" 
//                     value={formData.interest} 
//                     onChange={handleChange}
//                   >
//                     <option value="">Select area of interest</option>
//                     <option value="verification">Identity Verification & Credentials</option>
//                     <option value="enrollment">College Enrollment Solutions</option>
//                     <option value="recruitment">Recruitment & Placements</option>
//                     <option value="partnership">Partnership Opportunities</option>
//                     <option value="support">Technical Support</option>
//                   </select>
//                 </div>
//               </div>
              
//               <button 
//                 type="submit" 
//                 className="submit-btn"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </div>
          
//           <div className="contact-info">
//             <div className="info-card">
//               <h3>Contact Information</h3>
//               <div className="info-item">
//                 <div className="info-icon">📍</div>
//                 <div className="info-detail">
//                   5th Floor Ektha Towers,<br />
//                   White Field Rd, Ashok Nagar,<br />
//                   Golden Habitat Whitefields,<br />
//                   HITEC City, Hyderabad,<br />
//                   Kondapur, Telangana 500084
//                 </div>
//               </div>
//               <div className="info-item">
//                 <div className="info-icon">📧</div>
//                 <div className="info-detail">
//                   contact@vidyardi.com<br />
//                   info@vidyardi.com
//                 </div>
//               </div>
//               <div className="info-item">
//                 <div className="info-icon">📞</div>
//                 <div className="info-detail">
//                   +1 (800) EDU-VERIFY<br />
//                   +1 (800) T-SIGN-SALE
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Map Section */}
//       <section className="map-section">
//         <h2>Our Location</h2>
//         <div className="map-container">
//           <iframe
//             title="T-SIGN Office Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.698073036828!2d78.362!3d17.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20Whitefields%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1749022319448!5m2!1sen!2sin"
//             width="100%"
//             height="400"
//             style={{ border: 0 }}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>
//       </section>
      
//       <Footer />
//     </div>
//   );
// };

// export default Contact;













import React, { useState } from "react";
import "./Contact.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import service1 from "../../assests/image.png";
import service2 from "../../assests/image copy.png";
import service3 from "../../assests/image copy 2.png";


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    interest: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        role: "",
        interest: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="contact-page">
      <Header />
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>T-SIGN</span>
          </h1>
          <p>
            Simplifying student identity, credential verification, and recruitment
            for a future-ready digital ecosystem.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Get Started</button>
            <button className="secondary-btn">Learn More</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="graphic-circle"></div>
            <div className="graphic-element">🎓</div>
            <div className="graphic-element">📄</div>
            <div className="graphic-element">💼</div>
          </div>
        </div>
      </section>
      
      {/* Expertise Section */}
      <section className="expertise-section">
        <div className="section-header">
          <h2>Our Expertise</h2>
          <p>Empowering education through secure digital solutions</p>
        </div>
        <div className="expertise-cards">
          <div className="expertise-card">
            <div className="card-icon"><img className="service-imgs" src={service1} alt="" /></div>
            <h3>Secure Digital Identities for Students</h3>
            <p>
              Equip institutions with the vital tools necessary to effortlessly issue credentials,manage student records, and maintain compliance.
            </p>
          </div>
          <div className="expertise-card">
            <div className="card-icon"><img className="service-imgs" src={service2} alt="" /> </div>
            <h3>College Enablement</h3>
            <p>
                Empower students by providing verified digital IDs that streamline enrollment, facilitate access to services, and enhance career readiness.
            </p>
          </div>
          <div className="expertise-card">
            <div className="card-icon"><img className="service-imgs" src={service3} alt="" /> </div>
            <h3>Recruitment Integration</h3>
            <p>
              Connect verified student profiles with recruiters to facilitate quicker and more reliable
               hiring and onboarding processes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="form-section">
        <div className="form-container">
          <div className="form-content">
            <div className="form-header">
              <h2>Get in Touch with T-SIGN</h2>
              <p>
                Whether you're a student, college, or recruiter, we're here to help you make the most of digital credentials.
              </p>
            </div>
            
            {submitSuccess && (
              <div className="success-message">
                Thank you for your message! Our team will contact you shortly.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    required 
                    placeholder="John" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    required 
                    placeholder="Smith" 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="john@institution.edu" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    placeholder="(123) 456-7890" 
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="role">I am a...</label>
                  <select 
                    id="role" 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange} 
                    required
                  >
                    <option value="">Select your role</option>
                    <option value="student">Student</option>
                    <option value="college">College Representative</option>
                    <option value="recruiter">Recruiter / Employer</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                  rows="5" 
                  placeholder="Please describe your requirements or questions..."
                ></textarea>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="interest">Area of Interest</label>
                  <select 
                    id="interest" 
                    name="interest" 
                    value={formData.interest} 
                    onChange={handleChange}
                  >
                    <option value="">Select area of interest</option>
                    <option value="verification">Identity Verification & Credentials</option>
                    <option value="enrollment">College Enrollment Solutions</option>
                    <option value="recruitment">Recruitment & Placements</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="contact-info">
            <div className="info-card">
              <h3>Contact Information</h3>
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-detail">
                  5th Floor Ektha Towers,<br />
                  White Field Rd, Ashok Nagar,<br />
                  Golden Habitat Whitefields,<br />
                  HITEC City, Hyderabad,<br />
                  Kondapur, Telangana 500084
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-detail">
                  contact@vidyardi.com<br />
                  info@vidyardi.com
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-detail">
                  +1 (800) EDU-VERIFY<br />
                  +1 (800) T-SIGN-SALE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="T-SIGN Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.698073036828!2d78.362!3d17.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20Whitefields%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1749022319448!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;