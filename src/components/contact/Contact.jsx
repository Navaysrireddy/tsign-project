import React, { useState } from "react";

import Header from "../header/Header";

import Footer from "../footer/Footer";

 

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

    <div className="min-h-screen bg-[#f9fbfd] text-[#1e293b] font-inter">

      <Header />

     

      {/* Hero Section */}

      <section className="relative flex items-center px-[8%] py-24 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] overflow-hidden">

        <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full bg-radial-circle"></div>

       

        <div className="flex-1 max-w-[600px] z-10">

          <h1 className="text-5xl font-extrabold leading-tight mb-6">

            Welcome to <span className="bg-gradient-to-r from-[#4f46e5] to-[#4338ca] bg-clip-text text-transparent">T-SIGN</span>

          </h1>

          <p className="text-xl text-[#64748b] mb-8 leading-relaxed">

            Simplifying student identity, credential verification, and recruitment

            for a future-ready digital ecosystem.

          </p>

          <div className="flex gap-4">

            <button className="px-8 py-3.5 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#4338ca] text-white font-semibold shadow-lg shadow-[#4f46e54d] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#4f46e566] transition-all duration-300">

              Get Started

            </button>

            <button className="px-8 py-3.5 rounded-lg border-2 border-[#4f46e5] text-[#4f46e5] font-semibold hover:bg-[#4f46e50d] transition-colors duration-300">

              Learn More

            </button>

          </div>

        </div>

       

        <div className="flex-1 flex justify-center relative">

          <div className="relative w-[500px] h-[400px]">

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#4f46e51a] to-[#4f46e500] animate-pulse-slow"></div>

            <div className="absolute top-[20%] left-[20%] w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center text-5xl shadow-lg animate-float">

              🎓

            </div>

            <div className="absolute top-[20%] right-[20%] w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center text-5xl shadow-lg animate-float animation-delay-1000">

              📄

            </div>

            <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2 w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center text-5xl shadow-lg animate-float animation-delay-2000">

              💼

            </div>

          </div>

        </div>

      </section>

     

      {/* Expertise Section */}

      <section className="px-[8%] py-24 bg-white">

        <div className="max-w-[700px] mx-auto text-center mb-16">

          <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>

          <p className="text-lg text-[#64748b] leading-relaxed">

            Empowering education through secure digital solutions

          </p>

        </div>

       

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">

          <div className="bg-[#f9fbfd] rounded-2xl p-10 text-center shadow-lg shadow-[#0000000d] border border-[#e2e8f0] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4f46e51a] transition-all duration-300">

            <div className="text-5xl mb-6">🛡</div>

            <h3 className="text-2xl mb-4">Secure Digital Identities</h3>

            <p className="text-[#64748b] leading-relaxed">

              Empower students with verified digital IDs that simplify enrollment,

              access to services, and career readiness.

            </p>

          </div>

         

          <div className="bg-[#f9fbfd] rounded-2xl p-10 text-center shadow-lg shadow-[#0000000d] border border-[#e2e8f0] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4f46e51a] transition-all duration-300">

            <div className="text-5xl mb-6">🏫</div>

            <h3 className="text-2xl mb-4">College Enablement</h3>

            <p className="text-[#64748b] leading-relaxed">

              Provide institutions with tools to issue credentials, manage student

              records, and ensure compliance effortlessly.

            </p>

          </div>

         

          <div className="bg-[#f9fbfd] rounded-2xl p-10 text-center shadow-lg shadow-[#0000000d] border border-[#e2e8f0] hover:-translate-y-2 hover:shadow-xl hover:shadow-[#4f46e51a] transition-all duration-300">

            <div className="text-5xl mb-6">💼</div>

            <h3 className="text-2xl mb-4">Recruitment Integration</h3>

            <p className="text-[#64748b] leading-relaxed">

              Connect verified student profiles with recruiters for faster,

              trusted hiring and onboarding processes.

            </p>

          </div>

        </div>

      </section>

     

      {/* Contact Form Section */}

      <section className="px-[8%] py-24 bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe]">

        <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto bg-white rounded-2xl overflow-hidden shadow-xl shadow-[#0000001a]">

          <div className="flex-1 p-12">

            <div className="mb-8">

              <h2 className="text-3xl font-bold mb-4">Get in Touch with T-SIGN</h2>

              <p className="text-[#64748b] leading-relaxed">

                Whether you're a student, college, or recruiter, we're here to help you make the most of digital credentials.

              </p>

            </div>

           

            {submitSuccess && (

              <div className="bg-[#10b981] text-white p-4 rounded-lg mb-6 text-center font-medium">

                Thank you for your message! Our team will contact you shortly.

              </div>

            )}

           

            <form className="flex flex-col" onSubmit={handleSubmit}>

              <div className="flex flex-col md:flex-row gap-6 mb-6">

                <div className="flex-1 mb-4">

                  <label htmlFor="firstName" className="block font-medium mb-2">First Name</label>

                  <input

                    type="text"

                    id="firstName"

                    name="firstName"

                    value={formData.firstName}

                    onChange={handleChange}

                    required

                    placeholder="John"

                    className="w-full p-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-3 focus:ring-[#4f46e51a] transition-all duration-300"

                  />

                </div>

                <div className="flex-1 mb-4">

                  <label htmlFor="lastName" className="block font-medium mb-2">Last Name</label>

                  <input

                    type="text"

                    id="lastName"

                    name="lastName"

                    value={formData.lastName}

                    onChange={handleChange}

                    required

                    placeholder="Smith"

                    className="w-full p-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-3 focus:ring-[#4f46e51a] transition-all duration-300"

                  />

                </div>

              </div>

             

              <div className="flex flex-col md:flex-row gap-6 mb-6">

                <div className="flex-1 mb-4">

                  <label htmlFor="email" className="block font-medium mb-2">Email Address</label>

                  <input

                    type="email"

                    id="email"

                    name="email"

                    value={formData.email}

                    onChange={handleChange}

                    required

                    placeholder="john@institution.edu"

                    className="w-full p-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-3 focus:ring-[#4f46e51a] transition-all duration-300"

                  />

                </div>

                <div className="flex-1 mb-4">

                  <label htmlFor="phone" className="block font-medium mb-2">Phone Number</label>

                  <input

                    type="tel"

                    id="phone"

                    name="phone"

                    value={formData.phone}

                    onChange={handleChange}

                    placeholder="(123) 456-7890"

                    className="w-full p-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-3 focus:ring-[#4f46e51a] transition-all duration-300"

                  />

                </div>

              </div>

             

              <div className="mb-6">

                <div className="flex-1 mb-4">

                  <label htmlFor="role" className="block font-medium mb-2">I am a...</label>

                  <select

                    id="role"

                    name="role"

                    value={formData.role}

                    onChange={handleChange}

                    required

                    className="w-full p-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-3 focus:ring-[#4f46e51a] transition-all duration-300"

                  >

                    <option value="">Select your role</option>

                    <option value="student">Student</option>

                    <option value="college">College Representative</option>

                    <option value="recruiter">Recruiter / Employer</option>

                    <option value="other">Other</option>

                  </select>

                </div>

              </div>

             

              <div className="mb-6">

                <label htmlFor="message" className="block font-medium mb-2">Your Message</label>

                <textarea

                  id="message"

                  name="message"

                  value={formData.message}

                  onChange={handleChange}

                  required

                  rows="5"

                  placeholder="Please describe your requirements or questions..."

                  className="w-full p-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-3 focus:ring-[#4f46e51a] transition-all duration-300 min-h-[120px]"

                ></textarea>

              </div>

             

              <div className="mb-6">

                <div className="flex-1 mb-4">

                  <label htmlFor="interest" className="block font-medium mb-2">Area of Interest</label>

                  <select

                    id="interest"

                    name="interest"

                    value={formData.interest}

                    onChange={handleChange}

                    className="w-full p-4 border border-[#e2e8f0] rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring-3 focus:ring-[#4f46e51a] transition-all duration-300"

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

                className="w-full p-4 rounded-lg bg-gradient-to-br from-[#4f46e5] to-[#4338ca] text-white font-semibold text-lg hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#4f46e566] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"

                disabled={isSubmitting}

              >

                {isSubmitting ? 'Sending...' : 'Send Message'}

              </button>

            </form>

          </div>

         

          <div className="flex-1 bg-gradient-to-br from-[#716afc] to-[#50259a] text-white p-12 flex items-center">

            <div className="w-full">

              <h3 className="text-2xl font-bold mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-1 after:bg-white after:rounded">Contact Information</h3>

             

              <div className="flex gap-4 items-start mb-6">

                <div className="text-2xl mt-1">📍</div>

                <div className="leading-relaxed">

                  5th Floor Ektha Towers,<br />

                  White Field Rd, Ashok Nagar,<br />

                  Golden Habitat Whitefields,<br />

                  HITEC City, Hyderabad,<br />

                  Kondapur, Telangana 500084

                </div>

              </div>

             

              <div className="flex gap-4 items-start mb-6">

                <div className="text-2xl mt-1">📧</div>

                <div className="leading-relaxed">

                  contact@vidyardi.com<br />

                  info@vidyardi.com

                </div>

              </div>

             

              <div className="flex gap-4 items-start">

                <div className="text-2xl mt-1">📞</div>

                <div className="leading-relaxed">

                  +1 (800) EDU-VERIFY<br />

                  +1 (800) T-SIGN-SALE

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

     

      {/* Map Section */}

      <section className="px-[8%] py-24 bg-white text-center">

        <h2 className="text-4xl font-bold mb-4">Our Location</h2>

       

        <div className="max-w-[1200px] mx-auto mt-8 rounded-2xl overflow-hidden shadow-xl shadow-[#0000001a]">

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

     

      <style jsx>{`

        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

       

        .font-inter {

          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

        }

       

        .bg-radial-circle {

          background: radial-gradient(circle, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0) 70%);

        }

       

        @keyframes pulse-slow {

          0% { transform: translate(-50%, -50%) scale(1); }

          50% { transform: translate(-50%, -50%) scale(1.1); }

          100% { transform: translate(-50%, -50%) scale(1); }

        }

       

        .animate-pulse-slow {

          animation: pulse-slow 8s infinite;

        }

       

        @keyframes float {

          0% { transform: translateY(0); }

          50% { transform: translateY(-20px); }

          100% { transform: translateY(0); }

        }

       

        .animate-float {

          animation: float 6s ease-in-out infinite;

        }

       

        .animation-delay-1000 {

          animation-delay: 1s;

        }

       

        .animation-delay-2000 {

          animation-delay: 2s;

        }

       

        @media (max-width: 900px) {

          .px-[8%] {

            padding-left: 5%;

            padding-right: 5%;

          }

        }

       

        @media (max-width: 600px) {

          .text-5xl {

            font-size: 2.5rem;

          }

        }

      `}</style>

    </div>

  );

};

 

export default Contact;