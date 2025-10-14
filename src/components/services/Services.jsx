import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiCheckCircle, FiUser, FiBook, FiBriefcase, FiFileText, FiMail } from 'react-icons/fi';
// import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TSignServices from '../../assests/TSIGNServices-removebg-preview.png';

const gradient = "bg-gradient-to-tr from-blue-600 via-pink-500 to-pink-500";
const textGradient = "bg-gradient-to-tr from-blue-600 via-pink-400 to-pink-500 bg-clip-text text-transparent";

const Services = () => {
  const [activeTab, setActiveTab] = useState('identity');
  const [email, setEmail] = useState('');

    const services = [
    {
      id: 'identity',
      icon: <FiUser className="mr-2" />,
      title: 'Next-Gen Identity Verification',
      description:
        'Revolutionary blockchain-powered student authentication with biometric matching and tamper-proof digital credentials.',
      features: [
        'Secure QR code-based ID verification',
        "Time-bound credential validity checks",
        'Tamper-proof digital certificates',
        'Seamless integration with institutions & employers',
      ],
      cta: 'Explore T-SIGN',
      ctaLink: '/about',
    },
    {
      id: 'registration',
      icon: <FiBook className="mr-2" />,
      title: 'T-SIGN Institutional Enrollment',
      description:
        'Streamlined digital onboarding for colleges and students in Telangana with automated verification and transparent status tracking.',
      features: [
        'AI-assisted form validation',
        'Auto-verification of documents with state databases',
        'Multi-tier approval workflow (Student → College → Admin)',
        'Real-time enrollment progress dashboard',
      ],
      cta: 'Start Onboarding',
      ctaLink: '/about',
    },
    {
      id: 'recruitment',
      icon: <FiBriefcase className="mr-2" />,
      title: 'T-SIGN Career Connect',
      description:
        'Bridge between verified Telangana students and recruiters, ensuring trusted hiring through authenticated academic data.',
      features: [
        'Pre-verified student profiles',
        'AI-powered skill and role matching',
        'Integrated interview scheduling system',
        'Insights for recruiters and colleges',
      ],
      cta: 'Join Talent Network',
      ctaLink: '/about',
    },
    {
      id: 'documents',
      icon: <FiFileText className="mr-2" />,
      title: 'T-SIGN Digital Credentials',
      description:
        'Generate and share tamper-proof academic certificates, transcripts, and badges—trusted across institutions and industries.',
      features: [
        'Blockchain-secured digital documents',
        'Institution-branded templates',
        "Instant QR code-based validation",
        'QR-based lifetime verification',
      ],
      cta: 'View Credentials',
      ctaLink: '/about',
    },
  ];

// eslint-disable-next-line
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

  // Map service ID to images used in .service-visual CSS background
  const serviceImages = {
    identity: require('../../assests/photo.png'),
    registration: require('../../assests/healthy-hands.jpg'),
    recruitment: require('../../assests/istockphoto.jpg'),
    documents: require('../../assests/healthy-hands.jpg')
  };

  return (
    <div className="relative font-inter bg-white text-[#16213e]">
      <Header/>
      {/* Glowing Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center bg-gradient-to-tr from-blue-200 via-blue-100 to-cyan-100 px-4 md:px-24 py-16">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_50%,rgba(67,97,238,0.15),transparent_70%)]"></div>
        <div className="flex flex-col md:flex-row items-center gap-12 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className={`${textGradient} text-4xl md:text-5xl font-bold mb-8 leading-tight`}>
              <span className="text-sm-blue-700">Telangana Student Identity Genrated Number</span>
              {/* <span className="text-blue-700">S</span>tudent  
              <br /><span className="text-blue-700 ml-2">I</span>dentity<br />
              <span className="text-blue-700">G</span>enerated <br /><span className="text-blue-700">N</span>umber */}
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-xl">
              The complete platform for verifiable academic credentials and seamless institutional operations
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${gradient} text-white px-8 py-4 rounded-full font-semibold transition shadow-md hover:-translate-y-1`}
              >
                Book Executive Demo
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="flex flex-col items-center">
              <div className="w-[350px] h-[250px] md:w-[550px] md:h-[400px] backdrop-blur-lg flex items-center justify-center">
                <img className="w-full h-full object-contain" src={TSignServices} alt="Verified Student ID" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Animated Services Showcase */}
       <section className="py-20 px-2 md:px-24 bg-white">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our <span className={textGradient}>Comprehensive</span> Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Designed for the digital-first education ecosystem
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition ${
                activeTab === service.id
                  ? 'bg-blue-100 text-blue-700 shadow'
                  : 'bg-transparent text-gray-600 hover:bg-blue-500 hover:text-white'
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.icon}
              {service.title}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {services.map(
            (service) =>
              activeTab === service.id && (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl py-10 px-6 md:px-12 gap-6 md:gap-16 items-center mb-10"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">{service.title}</h3>
                    <p className="text-gray-500 mb-8">{service.description}</p>
                    <ul className="mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-4 text-base">
                          <FiCheckCircle className="text-blue-600 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.ctaLink}
                      className={`${gradient} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition hover:-translate-y-1`}
                    >
                      {service.cta} <FiArrowRight />
                    </Link>
                  </div>
                  <div className="flex-1 flex items-center justify-center h-[260px] md:h-[400px] relative overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={serviceImages[service.id]}
                      alt={service.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              ),
          )}
        </AnimatePresence>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 md:px-24 px-2 bg-gradient-to-tr from-blue-200 via-blue-100 to-cyan-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className={textGradient}>Global</span> Institutions
          </h2>
          <p className="text-base md:text-lg text-black-100 max-w-2xl mx-auto">
            Join 850+ universities and colleges transforming their operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/60 rounded-xl p-8 border border-white/20 shadow transition hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-yellow-400 mb-3 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="italic text-gray-700 mb-6 relative">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${gradient}`}></div>
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-20 md:px-24 px-2 bg-white">
        <div className="max-w-5xl mx-auto rounded-2xl shadow-xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle,rgba(67,97,238,0.11),transparent_70%)] -z-10"></div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative text-center z-10 max-w-2xl mx-auto mb-12"
          >
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${textGradient}`}>Ready to Elevate Your Institution?</h2>
            <p className="text-gray-500 mb-8">Schedule a personalized consultation with our education technology specialists</p>
            <form className="flex flex-col md:flex-row items-stretch max-w-xl mx-auto bg-white rounded-full shadow-lg overflow-hidden mb-6">
              <div className="flex items-center flex-1 px-5 py-3">
                <FiMail className="text-gray-400 mr-3" />
                <input
                  type="email"
                  placeholder="Enter your institutional email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="flex-1 outline-none bg-transparent text-base"
                />
              </div>
              <button type="submit" className={`${gradient} text-white px-8 py-3 font-semibold flex items-center gap-2 hover:-translate-y-1 transition`}>
                <a href="/contact">Contact Us</a> <FiArrowRight />
              </button>
            </form>
          </motion.div>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl shadow p-6 text-center transition hover:-translate-y-1">
              <FiPhone className="text-blue-600 text-2xl mb-4 mx-auto" />
              <h4 className="font-semibold mb-1">Global Support</h4>
              <p className="text-gray-500 mb-2">+1 (555) 123-4567</p>
              <a href="tel:+15551234567" className="text-blue-700 font-semibold hover:underline transition">Call now</a>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center transition hover:-translate-y-1">
              <FaWhatsapp className="text-blue-600 text-2xl mb-4 mx-auto" />
              <h4 className="font-semibold mb-1">Instant Chat</h4>
              <p className="text-gray-500 mb-2">Message our team</p>
              <a href="https://wa.me/15551234567" className="text-blue-700 font-semibold hover:underline transition">Start chat</a>
            </div>
            <div className="bg-white rounded-xl shadow p-6 text-center transition hover:-translate-y-1">
              <FiMapPin className="text-blue-600 text-2xl mb-4 mx-auto" />
              <h4 className="font-semibold mb-1">Visit Us</h4>
              <p className="text-gray-500 mb-2">San Francisco • Hyderabad • London</p>
              <a href="#map" className="text-blue-700 font-semibold hover:underline transition">View locations</a>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;


// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   FiArrowRight,
//   FiCheckCircle,
//   FiUser,
//   FiBook,
//   FiBriefcase,
//   FiFileText,
// } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import Header from '../header/Header';
// import Footer from '../footer/Footer';
// import TSignServices from '../../assests/TSIGNServices-removebg-preview.png';

// const gradient = "bg-gradient-to-tr from-blue-600 via-pink-500 to-pink-500";
// const textGradient = "bg-gradient-to-tr from-blue-600 via-pink-400 to-pink-500 bg-clip-text text-transparent";

// const Services = () => {
//   const [activeTab, setActiveTab] = useState('identity');

//   const services = [
//     {
//       id: 'identity',
//       icon: <FiUser className="mr-2" />,
//       title: 'Next-Gen Identity Verification',
//       description:
//         'Revolutionary blockchain-powered student authentication with biometric matching and tamper-proof digital credentials.',
//       features: [
//         'Secure QR code-based ID verification',
//         "Time-bound credential validity checks",
//         'Tamper-proof digital certificates',
//         'Seamless integration with institutions & employers',
//       ],
//       cta: 'Explore T-SIGN',
//       ctaLink: '/about',
//     },
//     {
//       id: 'registration',
//       icon: <FiBook className="mr-2" />,
//       title: 'T-SIGN Institutional Enrollment',
//       description:
//         'Streamlined digital onboarding for colleges and students in Telangana with automated verification and transparent status tracking.',
//       features: [
//         'AI-assisted form validation',
//         'Auto-verification of documents with state databases',
//         'Multi-tier approval workflow (Student → College → Admin)',
//         'Real-time enrollment progress dashboard',
//       ],
//       cta: 'Start Onboarding',
//       ctaLink: '/about',
//     },
//     {
//       id: 'recruitment',
//       icon: <FiBriefcase className="mr-2" />,
//       title: 'T-SIGN Career Connect',
//       description:
//         'Bridge between verified Telangana students and recruiters, ensuring trusted hiring through authenticated academic data.',
//       features: [
//         'Pre-verified student profiles',
//         'AI-powered skill and role matching',
//         'Integrated interview scheduling system',
//         'Insights for recruiters and colleges',
//       ],
//       cta: 'Join Talent Network',
//       ctaLink: '/about',
//     },
//     {
//       id: 'documents',
//       icon: <FiFileText className="mr-2" />,
//       title: 'T-SIGN Digital Credentials',
//       description:
//         'Generate and share tamper-proof academic certificates, transcripts, and badges—trusted across institutions and industries.',
//       features: [
//         'Blockchain-secured digital documents',
//         'Institution-branded templates',
//         "Instant QR code-based validation",
//         'QR-based lifetime verification',
//       ],
//       cta: 'View Credentials',
//       ctaLink: '/about',
//     },
//   ];

//   // Map service ID to images
//   const serviceImages = {
//     identity: require('../../assests/photo.png'),
//     registration: require('../../assests/healthy-hands.jpg'),
//     recruitment: require('../../assests/istockphoto.jpg'),
//     documents: require('../../assests/healthy-hands.jpg'),
//   };

//   return (
//     <div className="relative font-inter bg-white text-[#16213e]">
//       <Header />
//       {/* Glowing Hero Section */}
//       <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center bg-gradient-to-tr from-blue-200 via-blue-100 to-cyan-100 px-4 md:px-24 py-16">
//         <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_20%_50%,rgba(67,97,238,0.15),transparent_70%)]"></div>
//         <div className="flex flex-col md:flex-row items-center gap-12 z-10 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex-1"
//           >
//             <h1 className={`${textGradient} text-4xl md:text-5xl font-bold mb-8 leading-tight`}>
//               <span className="text-sm-blue-700">Telangana Student Identity Generated Number</span>
//             </h1>
//             <p className="text-xl opacity-90 mb-8 max-w-xl">
//               The complete platform for verifiable academic credentials and seamless institutional operations
//             </p>
//             <div className="flex flex-col md:flex-row gap-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`${gradient} text-white px-8 py-4 rounded-full font-semibold transition shadow-md hover:-translate-y-1`}
//               >
//                 Book Executive Demo
//               </motion.button>
//             </div>
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="flex-1 flex justify-center"
//           >
//             <div className="flex flex-col items-center">
//               <div className="w-[350px] h-[250px] md:w-[550px] md:h-[400px] backdrop-blur-lg flex items-center justify-center">
//                 <img className="w-full h-full object-contain" src={TSignServices} alt="Verified Student ID" />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Animated Services Showcase */}
//       <section className="py-20 px-2 md:px-24 bg-white">
//         <div className="text-center mb-16">
//           <motion.h2
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-4xl font-bold mb-4"
//           >
//             Our <span className={textGradient}>Comprehensive</span> Solutions
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//             className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto"
//           >
//             Designed for the digital-first education ecosystem
//           </motion.p>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-4 mb-12">
//           {services.map((service) => (
//             <button
//               key={service.id}
//               className={`flex items-center px-6 py-3 rounded-full font-semibold transition ${
//                 activeTab === service.id
//                   ? 'bg-blue-100 text-blue-700 shadow'
//                   : 'bg-transparent text-gray-600 hover:bg-blue-500 hover:text-white'
//               }`}
//               onClick={() => setActiveTab(service.id)}
//             >
//               {service.icon}
//               {service.title}
//             </button>
//           ))}
//         </div>

//         <AnimatePresence mode="wait">
//           {services.map(
//             (service) =>
//               activeTab === service.id && (
//                 <motion.div
//                   key={service.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -20 }}
//                   transition={{ duration: 0.5 }}
//                   className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl py-10 px-6 md:px-12 gap-6 md:gap-16 items-center mb-10"
//                 >
//                   <div className="flex-1">
//                     <h3 className="text-2xl md:text-3xl font-bold text-[#1a1a2e] mb-4">{service.title}</h3>
//                     <p className="text-gray-500 mb-8">{service.description}</p>
//                     <ul className="mb-8">
//                       {service.features.map((feature, index) => (
//                         <li key={index} className="flex items-center mb-4 text-base">
//                           <FiCheckCircle className="text-blue-600 mr-2 flex-shrink-0" />
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                     <Link
//                       to={service.ctaLink}
//                       className={`${gradient} text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition hover:-translate-y-1`}
//                     >
//                       {service.cta} <FiArrowRight />
//                     </Link>
//                   </div>
//                   <div className="flex-1 flex items-center justify-center h-[260px] md:h-[400px] relative overflow-hidden rounded-lg bg-gray-100">
//                     <img
//                       src={serviceImages[service.id]}
//                       alt={service.title}
//                       className="w-full h-full object-contain"
//                     />
//                   </div>
//                 </motion.div>
//               ),
//           )}
//         </AnimatePresence>
//       </section>

//       {/* Other sections (optional testimonials, CTAs, Footer) */}

//       <Footer />
//     </div>
//   );
// };

// export default Services;
