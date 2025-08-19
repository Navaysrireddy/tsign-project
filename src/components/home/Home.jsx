import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import Header from '../header/Header';

import Footer from '../footer/Footer';
import CollegeSearch from '../college-search/CollegeSearch';
import HTechNews from '../htechnews/HTechNews';
import img1 from '../../assests/Students.png';
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

const coreValues = [
  { letter: 'W', title: 'Services1', description: 'Lorem ipsum, dolor sit amet consectetur', icon: '💡' },
  { letter: 'I', title: 'Services2', description: 'Adipisicing elit. Hic laudantium illo facilis', icon: '💡' },
  { letter: 'N', title: 'Services3', description: 'Lorem ipsum, dolor sit amet consectetur', icon: '💡' },
  { letter: 'G', title: 'Services4', description: 'Adipisicing elit. Hic laudantium illo facilis', icon: '💡' },
  { letter: 'I', title: 'Services5', description: 'Lorem ipsum, dolor sit amet consectetur', icon: '💡' },
  { letter: 'G', title: 'Services6', description: 'Adipisicing elit. Hic laudantium illo facilis', icon: '💡' }
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
  // eslint-disable-next-line
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(statsData.map(() => 0));

  const statsRef = useRef(null);
  const trackRef = useRef(null);
  const paraRef = useRef(null);
  const imgDivRef = useRef(null);
  const videoParaRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            entry.target.classList.add('visible');
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
    <main className="home-page">
    
      <Header />

      {/* === Hero Slider Section === */}
      <section className="hero-banner">
        <section className="h-hero-slider">
          <div
            className="h-slides-wrapper"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="h-slide" key={index}>
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </section>
        {/* <div className="slide-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'active' : ''}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div> */}
      </section>

      {/* === About Section === */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2>About T-Sign</h2>
            <p ref={paraRef} className='telangana-para slide-from-left tsign-para'>
              TG-Sign aids students in collecting and preserving academic achievements, simplifying credit recognition and transfers, which reduces administrative stress. It promotes equitable access to education and supports lifelong learning and professional development. By facilitating seamless transitions between education and employment, TG-Sign enhances workforce readiness and fosters diverse career opportunities. The platform integrates with existing educational technologies while ensuring robust security for student data. Committed to inclusivity, TG-Sign supports personalized education journeys and empowers students, educators, and employers to effectively recognize and nurture talent, emphasizing adaptability in a changing world. 
            </p>
            <button className="hover-button">
              <span className="default-text">Find More!</span>
              <span className="hover-text"><a href="/about">Know Now!</a></span>
            </button>
          </div>
          <div ref={imgDivRef} className="about-image tsign-img">
            <HTechNews />
          </div>
        </div>
      </section>

      {/* === Video Section === */}
      <section className="video-section">
        <div className="video-container">
          <video src={video1} autoPlay loop muted playsInline />
        </div>
        <div className="video-description">
          <h2>What do we do?</h2>
          <p ref={videoParaRef} className="video-para slide-from-right">
            T‑Sign is a unified platform where colleges can onboard students and recruiters can securely access verified credentials and hire talent efficiently. Students upload academic certificates, project documents, and internship proof so their profiles reflect authenticated achievements, while recruiters leverage powerful filters—such as certificate type, CGPA, institution, and skillset—to identify the most relevant candidates quickly. Real-time dashboards provide insights into document submission rates, candidate shortlists, and overall placement performance, enabling data-driven decisions. Designed to scale from individual campus drives to national-level recruitment campaigns, T‑Sign ensures data security, seamless user experience. It transforms traditional paper-based hiring into an organized digital ecosystem, facilitating trust, efficiency, and impactful placement outcomes.
          </p>
          <button className="hover-button">
            <span className="default-text">Find More!</span>
            <span className="hover-text"><a href="/services">Know Now!</a></span>
          </button>
        </div>
      </section>

      {/* === Stats Section === */}
      <section className="stats-section" ref={statsRef}>
        <h2 className="section-title">Our Reach & Impact</h2>
        <div className="stats-grid">
          {statsData.map((stat, index) => (
            <div className="stat-box" key={index}>
              <div className="home-stat-icon">
                <img src={stat.icon} alt={stat.label} className="stat-icon-img" />
              </div>
              <h3 className="stat-number">{animatedStats[index].toLocaleString()}+</h3>
              <h2 className="stat-label">{stat.label}</h2>
            </div>
          ))}
        </div>
      </section>

      {/* === How to Get ID === */}
      <div className='how_to_get'>
        <h2 className="section-heading">How To Get <span className='gradient-text-id'> T-Sign </span> ID</h2>
        <p className="section-subtitle">Innovative solutions for modern education</p>
      </div>

      {/* === Features Section === */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-row">
            {features.map((feature) => (
              <motion.div 
                key={feature.id}
                className="home-feature-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-image-container">
                  <img src={feature.image} alt={feature.title} className="card-image"/>
                </div>
                <h3 className="home-card-title">{feature.title}</h3>
                <p className="home-card-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CollegeSearch />

      {/* === Services Slider Section === */}
      <section className="services-section">
        <div className="container">
          <h2>Our Core Services</h2>
          <div className="services-wrapper">
            <div
              className="core-values-slider"
              ref={trackRef}
              style={{
                width: `${coreValues.length * itemWidth * 2}px`,
                transform: `translateX(-${currentIndex * itemWidth}px)`,
                transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {coreValues.concat(coreValues).map((value, index) => (
                <div className="core-value-item" key={index} style={{ width: `${itemWidth}px` }}>
                  <div className="core-value-icon">
                    <span className="icon-emoji" aria-label="icon">{value.icon}</span>
                  </div>
                  <h3 className="core-value-title">{value.title}</h3>
                  <p className="core-value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="core-values-dots">
            {coreValues.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentIndex % coreValues.length ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => { if (e.key === 'Enter') setCurrentIndex(index); }}
              />
            ))}
          </div>
        </div>
      </section>

      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>

      <Footer />
    </main>
  );
};

export default Home;
