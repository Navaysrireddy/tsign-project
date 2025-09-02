import React, { useState } from "react";
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
 
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };
 
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 font-inter">
      <Header />
 
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center px-[8%] pt-24 pb-16 bg-gradient-to-br from-sky-200 to-sky-100 overflow-hidden">
        <div className="flex-1 max-w-lg z-10 text-center lg:text-left">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">T-SIGN</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Simplifying student identity, credential verification, and recruitment for a future-ready digital ecosystem.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="px-8 py-3 rounded-lg font-semibold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md transition-transform transform hover:-translate-y-1">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-100 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 relative flex justify-center mt-12 lg:mt-0">
          <div className="relative w-[500px] h-[400px]">
            <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-indigo-200 opacity-30 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
 
            <div className="absolute top-[20%] left-[20%] bg-white rounded-full w-[90px] h-[90px] shadow-lg flex items-center justify-center text-4xl animate-[float_6s_ease-in-out_infinite]">🎓</div>
            <div className="absolute top-[20%] right-[20%] bg-white rounded-full w-[90px] h-[90px] shadow-lg flex items-center justify-center text-4xl animate-[float_6s_ease-in-out_1s_infinite]">📄</div>
            <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 bg-white rounded-full w-[90px] h-[90px] shadow-lg flex items-center justify-center text-4xl animate-[float_6s_ease-in-out_2s_infinite]">💼</div>
          </div>
        </div>
      </section>
 
      {/* Expertise Section */}
      <section className="bg-gray-100 py-16 px-5 md:px-10 lg:px-[8%] text-center">
        <div className="max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Our Expertise</h2>
          <p className="text-gray-600">Empowering education through secure digital solutions</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              img: service1,
              title: "Secure Digital Identities for Students",
              description: "Equip institutions with the vital tools necessary to effortlessly issue credentials, manage student records, and maintain compliance."
            },
            {
              img: service2,
              title: "College Enablement",
              description: "Empower students by providing verified digital IDs that streamline enrollment, facilitate access to services, and enhance career readiness."
            },
            {
              img: service3,
              title: "Recruitment Integration",
              description: "Connect verified student profiles with recruiters to facilitate quicker and more reliable hiring and onboarding processes."
            }
          ].map(({ img, title, description }) => (
            <div key={title} className="bg-white rounded-xl shadow-md p-6 max-w-xs flex flex-col items-center text-center">
              <div className="w-20 h-20 mb-4 flex items-center justify-center">
                <img src={img} alt={title} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>
 
      {/* Contact Form Section */}
      <section className="bg-gradient-to-br from-sky-100 to-sky-200 py-16 px-5 md:px-10 lg:px-[8%]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Form Content */}
          <div className="flex-1 p-12 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2 text-gray-900">Get in Touch with T-SIGN</h2>
              <p className="text-gray-600">Whether you're a student, college, or recruiter, we're here to help you make the most of digital credentials.</p>
            </div>
 
            {submitSuccess && (
              <div className="bg-green-500 text-white py-3 px-5 rounded-lg mb-6 text-center font-medium">
                Thank you for your message! Our team will contact you shortly.
              </div>
            )}
 
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="firstName" className="mb-2 font-medium text-gray-900">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="lastName" className="mb-2 font-medium text-gray-900">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Smith"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
 
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="email" className="mb-2 font-medium text-gray-900">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@institution.edu"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="phone" className="mb-2 font-medium text-gray-900">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
 
              <div className="flex flex-col">
                <label htmlFor="role" className="mb-2 font-medium text-gray-900">I am a...</label>
                <select
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="college">College Representative</option>
                  <option value="recruiter">Recruiter / Employer</option>
                  <option value="other">Other</option>
                </select>
              </div>
 
              <div>
                <label htmlFor="message" className="mb-2 font-medium text-gray-900 block">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Please describe your requirements or questions..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-y"
                />
              </div>
 
              <div className="flex flex-col">
                <label htmlFor="interest" className="mb-2 font-medium text-gray-900">Area of Interest</label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="">Select area of interest</option>
                  <option value="verification">Identity Verification & Credentials</option>
                  <option value="enrollment">College Enrollment Solutions</option>
                  <option value="recruitment">Recruitment & Placements</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                </select>
              </div>
 
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-lg font-semibold text-white transition-shadow ${
                  isSubmitting
                    ? "bg-indigo-400 cursor-not-allowed shadow-none"
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-md hover:shadow-lg"
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
 
          {/* Contact Info */}
          <div className="flex-1 bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 text-white p-10 flex items-center">
            <div className="w-full">
              <h3 className="text-2xl font-semibold mb-8 border-b border-white pb-4 relative">
                Contact Information
                <span className="absolute left-0 bottom-0 w-12 h-1 bg-white rounded-sm"></span>
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="text-2xl mt-1">📍</div>
                  <div className="leading-relaxed text-sm">
                    5th Floor Ektha Towers,<br />
                    White Field Rd, Ashok Nagar,<br />
                    Golden Habitat Whitefields,<br />
                    HITEC City, Hyderabad,<br />
                    Kondapur, Telangana 500084
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl mt-1">📧</div>
                  <div className="leading-relaxed text-sm">
                    contact@vidyardi.com<br />
                    <a href="mailto:info@vidyardi.com" className="underline hover:text-gray-300">info@vidyardi.com</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="text-2xl mt-1">📞</div>
                  <div className="leading-relaxed text-sm">
                    +1 (800) EDU-VERIFY<br />
                    +1 (800) T-SIGN-SALE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Map Section */}
      <section className="py-16 px-[8%] bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
        <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="T-SIGN Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.698073036828!2d78.362!3d17.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20Whitefields%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1749022319448!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="border-0"
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
 
 