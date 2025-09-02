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
    <div className="bg-gray-50 min-h-screen text-gray-900 font-inter">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center px-8 py-24 bg-gradient-to-br from-blue-200 to-sky-100 relative overflow-hidden">
        {/* Background circle */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[300px] rounded-full bg-gradient-radial from-indigo-700/10 to-indigo-700/0 animate-pulse"></div>

        <div className="flex-1 max-w-xl z-10 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">T-SIGN</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Simplifying student identity, credential verification, and recruitment for a future-ready digital ecosystem.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <button className="px-8 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-transform transform hover:-translate-y-1 shadow-md">
              Get Started
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-100 font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center relative mt-12 lg:mt-0">
          <div className="relative w-[500px] h-[400px]">
            <div className="absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-tr from-indigo-700/10 to-indigo-700/0 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-[20%] left-[20%] w-20 h-20 rounded-full bg-white shadow-lg animate-float"></div>
            <div className="absolute top-[20%] right-[20%] w-20 h-20 rounded-full bg-white shadow-lg animate-float animation-delay-1000"></div>
            <div className="absolute bottom-[20%] left-1/2 w-20 h-20 rounded-full bg-white shadow-lg animate-float animation-delay-2000 -translate-x-1/2"></div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 px-8 bg-gray-100">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-lg text-gray-600">Empowering education through secure digital solutions</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {[
            {
              img: service1,
              title: "Secure Digital Identities for Students",
              description:
                "Equip institutions with the vital tools necessary to effortlessly issue credentials,manage student records, and maintain compliance."
            },
            {
              img: service2,
              title: "College Enablement",
              description:
                "Empower students by providing verified digital IDs that streamline enrollment, facilitate access to services, and enhance career readiness."
            },
            {
              img: service3,
              title: "Recruitment Integration",
              description:
                "Connect verified student profiles with recruiters to facilitate quicker and more reliable hiring and onboarding processes."
            }
          ].map(({ img, title, description }, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 w-72 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4 flex justify-center items-center">
                <img src={img} alt={title} className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="font-semibold text-lg mb-3 text-gray-900">{title}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-8 bg-gradient-to-br from-sky-100 to-blue-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Form Content */}
          <div className="flex-1 p-12 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-2">Get in Touch with T-SIGN</h2>
              <p className="text-gray-600">
                Whether you're a student, college, or recruiter, we're here to help you make the most of digital credentials.
              </p>
            </div>

            {submitSuccess && (
              <div className="mb-6 p-4 rounded-lg bg-green-500 text-white text-center font-medium">
                Thank you for your message! Our team will contact you shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="firstName" className="mb-2 font-medium text-gray-900">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="John"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="lastName" className="mb-2 font-medium text-gray-900">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Smith"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1 flex flex-col">
                  <label htmlFor="email" className="mb-2 font-medium text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@institution.edu"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  />
                </div>
                <div className="flex-1 flex flex-col">
                  <label htmlFor="phone" className="mb-2 font-medium text-gray-900">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                  />
                </div>
              </div>

              <div className="flex flex-col max-w-xs">
                <label htmlFor="role" className="mb-2 font-medium text-gray-900">
                  I am a...
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
                >
                  <option value="">Select your role</option>
                  <option value="student">Student</option>
                  <option value="college">College Representative</option>
                  <option value="recruiter">Recruiter / Employer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="mb-2 font-medium text-gray-900">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Please describe your requirements or questions..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300 resize-y"
                />
              </div>

              <div className="flex flex-col max-w-xs">
                <label htmlFor="interest" className="mb-2 font-medium text-gray-900">
                  Area of Interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-indigo-300"
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
                className={`w-full mt-4 py-3 rounded-lg font-semibold text-white transition-transform duration-300 ${
                  isSubmitting
                    ? "bg-indigo-400 cursor-not-allowed shadow-none"
                    : "bg-indigo-600 hover:bg-indigo-700 shadow-md hover:-translate-y-1"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
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
      <section className="py-24 px-8 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Location</h2>
        <div className="max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <iframe
            title="T-SIGN Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.698073036828!2d78.362!3d17.453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93c7b5299b7b%3A0xa6e7e79d255d7cdf!2sEktha%20Towers%2C%20Whitefields%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1749022319448!5m2!1sen!2sin"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen
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
