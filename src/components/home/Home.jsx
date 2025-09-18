import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CollegeSearch from '../college-search/CollegeSearch';
import HTechNews from '../htechnews/HTechNews';
import img1 from '../../assests/Student.png';
import img2 from '../../assests/College.png';
import video1 from '../../assests/Video1.mp4';
import icon1 from '../../assests/icon_1.png';
import icon2 from '../../assests/icon_2.png';
import icon3 from '../../assests/icon_3.png';
import icon4 from '../../assests/icon_4.png';
import Step1 from '../../assests/Step1.png';
import Step2 from '../../assests/Step2.png';
import Step3 from '../../assests/Step3.png';
import Step4 from '../../assests/Step4.png';
import { ReachImpactSection } from '../reach/reach';
import { Link } from 'react-router-dom';
 
const coreValues = [
  { 
    letter: 'T', 
    title: 'Trust', 
    description: 'Ensuring transparency and reliability in digital credentials with blockchain technology.', 
    icon: '🔒' 
  },
  { 
    letter: '-', 
    title: 'Technology', 
    description: 'Empowering institutions and recruiters with cutting-edge verification tools.', 
    icon: '⚙️' 
  },
  { 
    letter: 'S', 
    title: 'Security', 
    description: 'Protecting academic and professional records with tamper-proof digital certificates.', 
    icon: '🛡️' 
  },
  { 
    letter: 'I', 
    title: 'Innovation', 
    description: 'Driving forward new ways of validating and sharing achievements securely.', 
    icon: '💡' 
  },
  { 
    letter: 'G', 
    title: 'Growth', 
    description: 'Supporting students, colleges, and recruiters to grow through verified opportunities.', 
    icon: '📈' 
  },
  { 
    letter: 'N', 
    title: 'Networking', 
    description: 'Connecting students, institutions, and employers on a trusted digital ecosystem.', 
    icon: '🌐' 
  }
];

 
const statsData = [
  { label: 'Students', value: 120000, icon: icon1 },
  { label: 'Colleges', value: 2500, icon: icon2 },
  { label: 'Recruiters', value: 650, icon: icon3 },
  { label: 'Partners', value: 500, icon: icon4 },
];
 
const slides = [
  { image: img1 },
  { image: img2 },
];
 
const features = [
  {
    id: 1,
    image: Step1,
    title: 'Secure Verification',
    description: 'Blockchain-powered identity verification ensuring tamper-proof credentials for all students.'
  },
  {
    id: 2,
    image: Step2,
    title: 'Instant Registration',
    description: 'Streamlined digital enrollment process with automated document verification.'
  },
  {
    id: 3,
    image: Step3,
    title: 'Smart Matching',
    description: 'AI-driven recruitment platform connecting verified talent with top employers.'
  },
  {
    id: 4,
    image: Step4,
    title: 'Digital Credentials',
    description: 'Generate and verify authenticated certificates with our digital issuance system.'
  }
];
 
const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  // eslint-disable-next-line
  const [animatedStats, setAnimatedStats] = useState(statsData.map(() => 0));
 
  const statsRef = useRef(null);
  const trackRef = useRef(null);
  const paraRef = useRef(null);
  const imgDivRef = useRef(null);
  const videoParaRef = useRef(null);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
 
  const itemWidth = 280;
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => {
        if (prevIndex >= coreValues.length) {
          if (trackRef.current) {
            trackRef.current.style.transition = 'none';
            trackRef.current.style.transform = 'translateX(0)';
            void trackRef.current.offsetHeight;
            trackRef.current.style.transition = 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
          }
          return 1;
        }
        return prevIndex + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target === statsRef.current) {
            const interval = setInterval(() => {
              setAnimatedStats(prev =>
                prev.map((val, idx) =>
                  val < statsData[idx].value
                    ? Math.min(val + Math.ceil(statsData[idx].value / 40), statsData[idx].value)
                    : val
                )
              );
            }, 50);
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.3 }
    );
 
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);
 
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0', 'translate-y-0');
          }
        });
      },
      { threshold: 0.2 }
    );
 
    if (paraRef.current) observer.observe(paraRef.current);
    if (imgDivRef.current) observer.observe(imgDivRef.current);
    if (videoParaRef.current) observer.observe(videoParaRef.current);
 
    return () => observer.disconnect();
  }, []);
 
  return (
    <main className="font-sans text-gray-800 leading-relaxed w-full overflow-x-hidden">
      <Header />
 
      {/* === Hero Slider Section === */}
    <section className="relative">
  <section className="w-full overflow-hidden relative">
  <div
    className="flex transition-transform duration-1000 ease-in-out"
    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
  >
    {slides.map((slide, index) => {
      // Only wrap student and college images with Link
      if (slide.image === img1 || slide.image === img2) {
        return (
          <div className="flex-shrink-0 w-full" key={index}>
            <Link to="/login">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-contain md:h-auto cursor-pointer"
              />
            </Link>
          </div>
        );
      } else {
        return (
          <div className="flex-shrink-0 w-full" key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto object-contain md:h-auto"
            />
          </div>
        );
      }
    })}
  </div>
</section>
</section>
 
 
      {/* === About Section === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 -mt-12">
            <h2 className="text-3xl font-bold text-center md:text-left mb-6">About T-Sign</h2>
            <p ref={paraRef} className='text-justify opacity-0 -translate-x-24 transition-all duration-800 ease-out'>
              TG-Sign aids students in collecting and preserving academic achievements, simplifying credit recognition and transfers, which reduces administrative stress. It promotes equitable access to education and supports lifelong learning and professional development. By facilitating seamless transitions between education and employment, TG-Sign enhances workforce readiness and fosters diverse career opportunities. The platform integrates with existing educational technologies while ensuring robust security for student data. Committed to inclusivity, TG-Sign supports personalized education journeys and empowers students, educators, and employers to effectively recognize and nurture talent, emphasizing adaptability in a changing world.
            </p>
            <button className="relative overflow-hidden bg-red-600 text-white mt-8 px-8 py-2 text-base rounded-lg cursor-pointer transition-colors duration-500 ease-in-out w-40 h-10 hover:bg-blue-900">
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out opacity-100 hover:opacity-0 hover:-translate-y-3/4">Find More!</span>
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-full transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 hover:-translate-y-1/2">
                <a href="/about" className="text-white no-underline">Know Now!</a>
              </span>
            </button>
          </div>
          <div ref={imgDivRef} className="flex-1 rounded-lg overflow-hidden shadow-lg h-[500px] w-full opacity-0 transition-all duration-800 ease-out">
            <HTechNews />
          </div>
        </div>
      </section>
 
      {/* === Video Section === */}
    <section className="flex items-center justify-center gap-16 py-16 bg-gray-50 px-5 flex-col md:flex-row">
  <div className="flex-1 max-w-full md:max-w-md">
    <video
      src={video1}
      autoPlay
      loop
      muted
      playsInline
      className="w-full rounded-xl shadow-xl"
    />
  </div>
  <div className="flex-1 max-w-full md:max-w-md text-justify text-gray-800 px-2 md:px-0">
    <h2 className="text-2xl font-bold mb-3">What do we do?</h2>
    <p
      ref={videoParaRef}
      className="opacity-100 translate-x-0 transition-all duration-800 ease-out"
    >
      T‑Sign is a unified platform where colleges can onboard students and recruiters can securely access verified credentials and hire talent efficiently. Students upload academic certificates, project documents, and internship proof so their profiles reflect authenticated achievements, while recruiters leverage powerful filters—such as certificate type, CGPA, institution, and skillset—to identify the most relevant candidates quickly. Real-time dashboards provide insights into document submission rates, candidate shortlists, and overall placement performance, enabling data-driven decisions. Designed to scale from individual campus drives to national-level recruitment campaigns, T‑Sign ensures data security, seamless user experience. It transforms traditional paper-based hiring into an organized digital ecosystem, facilitating trust, efficiency, and impactful placement outcomes.
    </p>
    <button className="relative overflow-hidden bg-red-600 text-white mt-8 px-8 py-2 text-base rounded-lg cursor-pointer transition-colors duration-500 ease-in-out w-40 h-10 hover:bg-blue-900">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out opacity-100 hover:opacity-0 hover:-translate-y-3/4">
        Find More!
      </span>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-full transition-all duration-500 ease-in-out opacity-0 hover:opacity-100 hover:-translate-y-1/2">
        <a href="/services" className="text-white no-underline">Know Now!</a>
      </span>
    </button>
  </div>
</section>
 
 
      <ReachImpactSection/>
 
      {/* === How to Get ID === */}
      <div className='mt-8 mb-0 text-center'>
        <h2 className="text-2xl font-bold">How To Get <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent"> T-Sign </span> ID</h2>
        <p className="text-gray-600">Innovative solutions for modern education</p>
      </div>
 
      {/* === Features Section === */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
      {features.map((feature, index) => {
        const baseGradient =
          index % 2 === 0 ? "from-blue-500 to-blue-700" : "from-red-500 to-red-700";
        const gradientClass = baseGradient.replace(/to-\w+-\d+/, "to-white");
 
        return (
          <motion.div
            key={feature.id}
            className="group relative rounded-2xl p-6 shadow-md w-full max-w-[260px] h-64 flex flex-col items-center text-center overflow-hidden transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Gradient overlay on left half */}
            <div
              className={`absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              style={{ zIndex: 0 }}
            />
            {/* Card content */}
            <div className="relative z-10 w-20 h-20 mb-4 flex items-center justify-center bg-white rounded-full p-3">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="relative z-10 text-base font-semibold text-black mb-2">
              {feature.title}
            </h3>
            <p className="relative z-10 text-sm text-black line-clamp-3">
              {feature.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
 
 
      <CollegeSearch />
     
      {/* === Services Slider Section === */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10">Our Core Services</h2>
          <div className="overflow-hidden relative w-full m-0">
            <div
              className="flex"
              ref={trackRef}
              style={{
                width: `${coreValues.length * itemWidth * 2}px`,
                transform: `translateX(-${currentIndex * itemWidth}px)`,
                transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {coreValues.concat(coreValues).map((value, index) => (
                <div className="text-center p-8 flex-shrink-0" key={index} style={{ width: `${itemWidth}px` }}>
                  <div className="text-4xl mb-4">
                    <span aria-label="icon">{value.icon}</span>
                  </div>
                  <h3 className="text-blue-700 font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-6">
            {coreValues.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors duration-300 ${index === currentIndex % coreValues.length ? 'bg-blue-700' : 'bg-gray-300'}`}
                onClick={() => setCurrentIndex(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => { if (e.key === 'Enter') setCurrentIndex(index); }}
              />
            ))}
          </div>
        </div>
      </section>
 
      <button
        className="fixed bottom-8 right-8 bg-blue-700 text-white rounded-full w-12 h-12 text-xl cursor-pointer shadow-md transition-colors duration-300 hover:bg-blue-900 z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
 
      <Footer />
    </main>
  );
};
 
export default Home;
 