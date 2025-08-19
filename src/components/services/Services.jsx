import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiUser, FiBook, FiBriefcase, FiFileText, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Services.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TsignID from '../../assests/TSIGNServices-removebg-preview.png';


const Services = () => {
  const [activeTab, setActiveTab] = useState('identity');
  const [email, setEmail] = useState('');

  const services = [
  {
    id: 'identity',
    icon: <FiUser />,
    title: 'T-SIGN Digital Identity',
    description: 'A secure and unified platform for Telangana students to manage, verify, and share academic identity through blockchain-enabled digital credentials.',
    features: [
      'Secure QR code-based ID verification',
      'Time-bound credential validity checks',
      'Tamper-proof digital certificates',
      'Seamless integration with institutions & employers'
    ],
    cta: 'Explore T-SIGN'
  },
  {
    id: 'registration',
    icon: <FiBook />,
    title: 'T-SIGN Institutional Enrollment',
    description: 'Streamlined digital onboarding for colleges and students in Telangana with automated verification and transparent status tracking.',
    features: [
      'AI-assisted form validation',
      'Auto-verification of documents with state databases',
      'Multi-tier approval workflow (Student → College → Admin)',
      'Real-time enrollment progress dashboard'
    ],
    cta: 'Start Onboarding'
  },
  {
    id: 'recruitment',
    icon: <FiBriefcase />,
    title: 'T-SIGN Career Connect',
    description: 'Bridge between verified Telangana students and recruiters, ensuring trusted hiring through authenticated academic data.',
    features: [
      'Pre-verified student profiles',
      'AI-powered skill and role matching',
      'Integrated interview scheduling system',
      'Insights for recruiters and colleges'
    ],
    cta: 'Join Talent Network'
  },
  {
    id: 'documents',
    icon: <FiFileText />,
    title: 'T-SIGN Digital Credentials',
    description: 'Generate and share tamper-proof academic certificates, transcripts, and badges—trusted across institutions and industries.',
    features: [
      'Blockchain-secured digital documents',
      'Institution-branded templates',
      'Instant QR code-based validation',
      'QR-based lifetime verification'
    ],
    cta: 'View Credentials'
  }
];


  const testimonials = [
    {
      quote: "Reduced identity fraud by 98% while cutting verification time from days to seconds.",
      author: "Dr. Sarah Chen",
      role: "Dean of Admissions, MIT",
      rating: 5
    },
    {
      quote: "Our placement rates increased 40% in the first semester using their matching system.",
      author: "Prof. Raj Patel",
      role: "Career Services Director, IIT Delhi",
      rating: 5
    },
    {
      quote: "The digital credential system saved us 300+ administrative hours monthly.",
      author: "Emily Rodriguez",
      role: "Registrar, Stanford University",
      rating: 5
    }
  ];

  return (
    <div className="services-page">
      <Header/>
      {/* Glowing Hero Section */}
      <section className="services-hero-section">
        <div className="particles-background"></div>
        <div className="services-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="services-hero-text"
          >
            <h1>
              <span className="gradient-text">Telangana Student Identity</span>  Generated Number
            </h1>
            <p>The complete platform for verifiable academic credentials and seamless institutional operations</p>
            <div className="hero-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="primary-button"
              >
                Book Executive Demo
              </motion.button>
              
            </div>
          </motion.div>
          <motion.div
  initial={{ opacity: 0, x: 100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="hero-visual"
>
  <div className="floating-card-container">
    {/* Animated Circle Background */}
    <motion.div 
      className="circle-overlay"
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
    />
    
    {/* Floating Card */}
   <div className="floating-card">

    <img className="base-img" src={TsignID} alt="Base Verified Student ID" />
  </div>


  </div>
</motion.div>
        </div>
      </section>

      {/* Animated Services Showcase */}
      <section className="services-showcase">
        <div className="section-header">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Our <span className="highlight">Comprehensive</span> Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Designed for the digital-first education ecosystem
          </motion.p>
        </div>

        <div className="services-tabs">
          {services.map((service) => (
            <button
              key={service.id}
              className={`tab-button ${activeTab === service.id ? 'active' : ''}`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {services.map((service) => (
            activeTab === service.id && (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="service-detail"
              >
                <div className="detail-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="features-list">
                    {service.features.map((feature, index) => (
                      <li key={index}>
                        <FiCheckCircle className="feature-icon" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="cta-button">
                    {service.cta} <FiArrowRight />
                  </button>
                </div>
                <div className="detail-visual">
                  <div className={`service-visual ${service.id}`}></div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </section>

      {/* Interactive Testimonials */}
      <section className="testimonials-section">
        <div className="section-header">
          <h2>Trusted by <span className="highlight">Global</span> Institutions</h2>
          <p>Join 850+ universities and colleges transforming their operations</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author-info">
                <div className="author-avatar"></div>
                <div>
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dynamic CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2>Ready to <span className="gradient-text">Elevate</span> Your Institution?</h2>
            <p>Schedule a personalized consultation with our education technology specialists</p>
            
            <div className="cta-form">
              <div className="input-group">
                <FiMail className="input-icon" />
                <input
                  type="email"
                  placeholder="Enter your institutional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="submit-button">
                <a href="/contact">Contact Us </a><FiArrowRight />
              </button>
            </div>
          </motion.div>
          
          <div className="contact-methods">
            <div className="contact-card">
              <FiPhone className="contact-icon" />
              <h4>Global Support</h4>
              <p>+91 9996662221</p>
              {/* <a href="tel:+15551234567">Call now</a> */}
            </div>
            <div className="contact-card">
              <FaWhatsapp className="contact-icon" />
              <h4>Instant Chat</h4>
              <p>Message our team</p>
              <a href="/">Start chat</a>
            </div>
            <div className="contact-card">
              <FiMapPin className="contact-icon" />
              <h4>Visit Us</h4>
              <p>  5th Floor Ektha Towers,<br />
                  White Field Rd, Ashok Nagar,<br />
                  Golden Habitat Whitefields,<br />
                  HITEC City, Hyderabad,<br />
                  Kondapur, Telangana 500084</p>
              {/* <a href="#map">View locations</a> */}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Services;