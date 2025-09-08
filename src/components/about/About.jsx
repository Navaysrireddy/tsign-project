import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import VanillaTilt from 'vanilla-tilt';

// Import all images
import heroBackground from '../../assests/stud.webp';
import telanganaEducation from '../../assests/College.png';
import Logo from '../../assests/TG-SIGN (2).png';

import rajeshKumar from '../../assests/College.png';
import priyaSharma from '../../assests/College.png';
import arjunSingh from '../../assests/College.png';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Decor from '../../assests/decor.svg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Define color palette
const colors = {
  mediumBlue: '#3B5CB1',
  red: '#F04D3E',
  darkBlue: '#15154A',
  deepBlue: '#253B84',
  lightBg: '#F8FAFC',
  cardBg: '#FFFFFF',
  textDark: '#2D3748',
  textLight: '#718096'
};

// Define reusable styles
const styles = {
  glassCard: `bg-${colors.cardBg} backdrop-blur-md border border-${colors.mediumBlue}/20 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`,
  gradientText: 'text-transparent bg-clip-text bg-gradient-to-r from-[#3B5CB1] to-[#253B84]',
  redText: `text-[${colors.red}]`,
  sectionTitle: 'text-4xl md:text-5xl font-bold mb-8 text-center',
  paragraph: 'text-lg md:text-xl leading-relaxed mb-6',
  button: `px-6 py-3 rounded-lg bg-gradient-to-r from-[#3B5CB1] to-[#253B84] text-white hover:opacity-90 transition-all duration-300 transform hover:scale-105`
};

// Inner component functions
const GlassCard = ({ children, className = '', ...props }) => (
  <div className={`${styles.glassCard} ${className} tilt-card`} {...props}>
    {children}
  </div>
);

const StatCard = ({ title, count, suffix = "+" }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <GlassCard className="text-center p-8">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
          }
        }}
      >
        <motion.div 
          className="text-5xl md:text-6xl font-bold mb-2"
          initial={{ number: 0 }}
          animate={{ number: count }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          {({ number }) => (
            <span className={styles.gradientText}>
              {Math.round(number)}{suffix}
            </span>
          )}
        </motion.div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-700">{title}</h3>
      </motion.div>
    </GlassCard>
  );
};

const AccordionItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <GlassCard className="mb-4 overflow-hidden">
      <button
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-xl font-medium text-gray-800">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      <motion.div
        id={`faq-answer-${index}`}
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="p-4 border-t border-gray-100">
          <p className="text-lg text-gray-600">{answer}</p>
        </div>
      </motion.div>
    </GlassCard>
  );
};

const TeamMemberCard = ({ name, role, image, linkedin }) => {
  return (
    <GlassCard className="text-center p-6 group hover:border-[#3B5CB1] transition-all duration-300">
      <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 group-hover:border-[#3B5CB1] transition-all duration-300 shadow-md">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/10 transition-all duration-300"></div>
      </div>
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{name}</h3>
      <p className="text-lg text-[#3B5CB1] mb-4">{role}</p>
      <a 
        href={linkedin} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block p-2 rounded-full bg-gray-100 hover:bg-[#3B5CB1] transition-all duration-300"
        aria-label={`Connect with ${name} on LinkedIn`}
      >
        <svg className="w-6 h-6 text-gray-600 hover:text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      </a>
    </GlassCard>
  );
};

const BackgroundImage = ({ src, alt, opacity = 10, className = "" }) => {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-full object-cover"
        style={{ opacity: opacity / 100 }}
      />
    </div>
  );
};

const About = () => {
  // Refs for tilt elements
  const tiltRefs = useRef([]);
  
  // Initialize tilt.js
  useEffect(() => {
    if (tiltRefs.current.length > 0) {
      tiltRefs.current.forEach(el => {
        if (el) {
          VanillaTilt.init(el, {
            max: 8,
            speed: 400,
            glare: true,
            'max-glare': 0.1,
            scale: 1.03
          });
        }
      });
    }
    
    return () => {
      tiltRefs.current.forEach(el => {
        if (el && el.vanillaTilt) {
          el.vanillaTilt.destroy();
        }
      });
    };
  }, []);
  
  // Add elements to tilt refs
  const addToTiltRefs = (el) => {
    if (el && !tiltRefs.current.includes(el)) {
      tiltRefs.current.push(el);
    }
  };
  
  // FAQ data
  const faqData = [
    {
      question: "What is a T-Sign ID?",
      answer: "T-Sign ID is a unique digital identity for students in Telangana, providing secure access to educational resources, verification services, and career opportunities through the Vidyardi platform."
    },
    {
      question: "How do students benefit from T-SIGN?",
      answer: "Students can manage their academic records, connect with recruiters, access learning resources, and verify their credentials seamlessly using their T-Sign ID across educational institutions and employers."
    },
    {
      question: "How can colleges integrate with T-SIGN?",
      answer: "Colleges can register on the platform to issue T-Sign IDs to their students, manage academic records digitally, and connect their students with employment opportunities through our recruiter network."
    },
    {
      question: "What advantages do recruiters get?",
      answer: "Recruiters can access verified student profiles, filter candidates by skills and qualifications, schedule interviews directly through the platform, and reduce hiring time with pre-verified credentials."
    },
    {
      question: "Is T-SIGN secure for storing student data?",
      answer: "Yes, we employ bank-level encryption, regular security audits, and comply with data protection regulations to ensure all student information remains secure and private."
    }
  ];
  
  // Team data
  const teamData = [
    {
      name: "Rajesh Kumar",
      role: "CEO & Founder",
      image: rajeshKumar,
      linkedin: "#"
    },
    {
      name: "Priya Sharma",
      role: "CTO",
      image: priyaSharma,
      linkedin: "#"
    },
    {
      name: "Arjun Singh",
      role: "Head of Partnerships",
      image: arjunSingh,
      linkedin: "#"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
   const members = [
    {
      name: "Person1",
      role: "xxxx",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolores animi voluptas neque magnam et distinctio!",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0vJF7ccBUmVSx21PGxpoVE8WC6kaPMR-xQ&s",
    },
    {
      name: "person2",
      role: "xxxxxxxxxxx",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum facere ab dolorem dolores animi voluptas neque magnam et distinctio!",
      image: "https://as2.ftcdn.net/jpg/01/38/27/33/1000_F_138273343_wP6MwmkEZOsBhIIj9G1vzWqO9T23SVxF.jpg",
    },
    {
      name: "person3",
      role: "xxxxxxxxxxxxxxx",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum facere ab dolorem dolores animi voluptas neque magnam et distinctio!",
      image: "https://img.freepik.com/premium-vector/vector-image-business-woman-shirt-suit_1213699-3044.jpg",
    },
  ];
 
  const nextMember = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  };
 
  const prevMember = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };
 
  
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans overflow-hidden">
      <Header/>
      {/* Hero Section */}
      <section 
  className="min-h-screen  flex flex-col justify-center relative py-20 px-4 overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBackground})` }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-blue-50/70 z-0"></div>

  <div className="container mx-auto relative z-10">
    <motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        <span className={styles.gradientText}>T-SIGN</span>
        <span className="block text-2xl md:text-3xl mt-4 font-light text-gray-600">
          Empowering Telangana's Future
        </span>
      </h1>
      <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600">
        Connecting Students, Colleges, and Recruiters with T-Sign - The Future of Education Identity
      </p>
    </motion.div>
  </div>
</section>

      
      {/* About Vidyardi Section */}
      <section className="py-20 px-4 relative">
        <BackgroundImage 
          src={heroBackground} 
          alt="About Vidyardi Background" 
          opacity={10}
          className="bg-fixed"
        />
        
        <div className="container mx-auto">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            About <span className={styles.gradientText}>Vidyardi</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <p className={styles.paragraph + " text-gray-600"}>
                   Vidyardi is a forward-thinking ed-tech platform aimed at transforming how children learn by making education more interactive, engaging, and fun. With a strong vision to bring innovation and excellence into the academic space, Vidyardi combines technology and creativity to deliver a unique learning experience tailored to today's generation of students. 
 
              </p>
              <p className={styles.paragraph + " text-gray-600"}>
                Beyond learning, Vidyardi also empowers educators and institutions through its Multipurpose Integrated Tool, designed to streamline business and academic operations. From managing classes and tracking student performance to enabling smooth communication and administrative control, this tool serves as a one-stop solution for all educational management needs. At its core, Vidyardi is not just a digital classroom—it is an ecosystem that bridges the gap between technology and education.
              </p>
              <button className={styles.button}>
                Learn More
              </button>
            </motion.div>
            
            <motion.div
              ref={addToTiltRefs}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex justify-center"
            >
              <GlassCard className="p-2 max-w-md">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D560BAQFtSQfGfQ70Kw/company-logo_200_200/company-logo_200_200/0/1735146105790/vidyardiportal_logo?e=2147483647&v=beta&t=0bzP6hXSSj704Ok1yPo8RUsj68Kymdh9Ts3ZyIg_-eg"
                    alt="Vidyardi Platform" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">T-Sign Digital ID</h3>
                  <p className="text-gray-600">Revolutionizing student identity in Telangana</p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* About Telangana Section */}
      <section className="py-20 px-4 relative">
        <BackgroundImage 
          src={telanganaEducation} 
          alt="Telangana Education Background" 
          opacity={10}
          className="bg-fixed"
        />
        
        <div className="container mx-auto">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Telangana's <span className={styles.gradientText}>Educational Ecosystem</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              ref={addToTiltRefs}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <GlassCard className="p-2">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SVItPOYZ9A8EzoKvWjByJc-GvDUMcD826w&s"
                    alt="Telangana Education" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">Telangana's Progress</h3>
                  <p className="text-gray-600">Leading the way in educational technology</p>
                </div>
              </GlassCard>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <p className={styles.paragraph + " text-gray-600"}>
                Telangana is India’s youngest state, formed on 2nd June 2014, with Hyderabad as its capital. Located on the Deccan Plateau in south-central India, the state is known for its rich cultural heritage, historic landmarks such as Charminar and Golconda Fort, and vibrant festivals like Bathukamma and Bonalu. 
              </p>
              <p className={styles.paragraph + " text-gray-600"}>
                Telangana has emerged as a major hub for information technology, biotechnology, and pharmaceuticals, with Hyderabad being called the “Cyber City” of India. The government has also taken strong initiatives to promote innovation and entrepreneurship through platforms like T-Hub and WE-Hub. Alongside rapid urban growth, Telangana is deeply rooted in agriculture and traditional arts, creating a unique blend of modern progress and cultural identity.
              </p>
              <button className={styles.button}>
                Explore Telangana Education
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
       {/* Team Carousel Section - Improved mobile layout */}
      <section className="bg-white rounded-xl shadow-md max-w-4xl mx-auto my-12 md:my-16 p-6 md:p-8">
        <div className="flex items-center mb-6 md:mb-8">
          <img src={Decor} alt="decor" className="h-5 sm:h-6 md:h-8 mr-3 md:mr-4" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 font-system">OUR DEDICATED TEAM</h2>
        </div>
 
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          <div className="md:w-1/2 order-2 md:order-1 text-center md:text-left">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{members[currentIndex].name}</h2>
            <h4 className="text-sm sm:text-md md:text-lg text-gray-700 mt-1">{members[currentIndex].role}</h4>
            <p className="text-gray-600 mt-3 md:mt-4 text-sm sm:text-base">{members[currentIndex].description}</p>
           
            <div className="flex items-center mt-4 md:mt-6 justify-center md:justify-start">
              <button
                onClick={prevMember}
                className="p-2 rounded-full bg-[#5a94f7] text-white hover:bg-navy-800 transition-colors mr-4"
                aria-label="Previous team member"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextMember}
                className="p-2 rounded-full bg-[#5a94f7] text-white hover:bg-navy-800 transition-colors"
                aria-label="Next team member"
              >
                <FaArrowRight />
              </button>
             
              <div className="flex gap-2 ml-4 md:ml-6">
                {members.map((_, i) => (
                  <span
                    key={i}
                    className={`h-2 w-2 rounded-full ${i === currentIndex ? 'bg-[#0b0378]' : 'bg-gray-400'}`}
                    aria-hidden="true"
                  ></span>
                ))}
              </div>
            </div>
          </div>
         
          <div className="md:w-1/2 order-1 md:order-2 flex justify-center mb-4 md:mb-0">
            <img
              src={members[currentIndex].image}
              alt={members[currentIndex].name}
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
 <section className="py-20 px-4 relative bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Our <span className={styles.gradientText}>Vision & Mission</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision Card */}
            <motion.div
              ref={addToTiltRefs}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <GlassCard className="h-full p-8 text-center hover:shadow-2xl transition-all duration-500">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-blue-200 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To create a unified digital ecosystem where every student in Telangana has seamless access to education, employment opportunities, and lifelong learning through a secure digital identity that empowers their academic and professional journey.
                </p>
              </GlassCard>
            </motion.div>
            
            {/* Mission Card */}
            <motion.div
              ref={addToTiltRefs}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <GlassCard className="h-full p-8 text-center hover:shadow-2xl transition-all duration-500">
                <div className="mb-6">
                  <div className="w-20 h-20 mx-auto bg-green-200 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To revolutionize education and employment in Telangana by providing a secure digital identity platform that connects students, colleges, and recruiters, streamlining verification processes, enhancing accessibility to opportunities, and fostering a thriving educational ecosystem.
                </p>
              </GlassCard>
            </motion.div>
          </div>
          
          {/* Values */}
          <motion.div 
            className="mt-20 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Innovation", 
                  description: "Continuously evolving our platform to meet the changing needs of education and employment",
                  icon: "💡"
                },
                { 
                  title: "Accessibility", 
                  description: "Ensuring every student has equal access to opportunities regardless of background",
                  icon: "🌐"
                },
                { 
                  title: "Security", 
                  description: "Protecting student data with the highest standards of privacy and security",
                  icon: "🔒"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <GlassCard className="p-6 text-center h-full">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className={styles.sectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked <span className={styles.gradientText}>Questions</span>
          </motion.h2>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {faqData.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <AccordionItem {...faq} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer/>
      </div>
  );
};

export default About;