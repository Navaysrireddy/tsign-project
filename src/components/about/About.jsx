import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Hands from '../../assests/about-us-back.webp'; 
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const dedicatedImages = [
  { name: 'meghana', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0vJF7ccBUmVSx21PGxpoVE8WC6kaPMR-xQ&s' },
  { name: 'sneha', img: 'https://as2.ftcdn.net/jpg/01/38/27/33/1000_F_138273343_wP6MwmkEZOsBhIIj9G1vzWqO9T23SVxF.jpg' },
  { name: 'lavanya', img: 'https://img.freepik.com/premium-vector/vector-image-business-woman-shirt-suit_1213699-3044.jpg' }
];

const a_stats = [
  { value: 324, label: 'Colleges' },
  { value: 120, label: 'Happy Students' },
  { value: 82, label: 'Recruiters' },
  { value: 524, label: 'Downloads' },
];

const CountUp = ({ end }) => {
  const ref = useRef();
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.max(Math.floor(duration / end), 20);
    const timer = setInterval(() => {
      if (ref.current) {
        start += 1;
        ref.current.textContent = end >= 1000 ? start.toLocaleString() : start;
        if (start === end) clearInterval(timer);
      }
    }, step);
    return () => clearInterval(timer);
  }, [end]);
  return <span ref={ref} className="count">{end.toLocaleString()}+</span>;
};

const AboutStats = () => (
  <section className="about-stats">
    <div className="about-stats-container">
      {a_stats.map((s, i) => (
        <div key={i} className="about-stat-item">
          <CountUp end={s.value} />
          <div className="about-stat-label">{s.label}</div>
          {i < a_stats.length - 1 && <div className="about-stat-divider" />}
        </div>
      ))}
    </div>
  </section>
);

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{question}</span>
        <span className="faq-arrow">{open ? '▲' : '▼'}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const zohoSections = [
  {
    id: 'privacy',
    title: 'VISION',
    paragraphs: [
      "VISION.",
      "From the beginning, we decided we would never show ads inside our products… your business is yours alone.em ipsum dolor sit amet, consectetur adipisicing elit. Distinctio repellat animi officiis, ex explicabo, veritatis inventore nihil maxime quo quae tempora error enim. Nobis cupiditate similique qui, ipsum numquam deserunt optio voluptatum esse ratione, quae accusamus sed delectus error aperiam consectetur quam nisi sunt aliquam ab quibusdam. Sit eum dolore perspiciatis ipsam! Veniam repellendus optio impedit laborum. Quisquam fugit fuga praesentium natus harum optio sit amet deserunt aliquam eos! Ab explicabo iure, ad eaque doloremque alias expedita, quisquam dignissimos soluta magnam magni suscipit in nihil rerum enim cupiditate omnis necessitatibus, dicta odio architecto. Sapiente illum, perspiciatis possimus laudantium voluptatum nemo expedita magni eveniet, at velit fugiat quos, corrupti consequuntur nostrum quam cumque? Fugiat voluptate numquam eos, eveniet debitis obcaecati odit soluta deleniti sed quo aliquid sunt provident, possimus fugit laborum quas pariatur saepe eum nihil laudantium doloremque dolorum! "
    ],
  },
  {
    id: 'vision',
    title: 'MISSION',
    paragraphs: [
      "MISSION.",
      "This kind of independence changes how we approach problem‑solving… em ipsum dolor sit amet, consectetur adipisicing elit. Distinctio repellat animi officiis, ex explicabo, veritatis inventore nihil maxime quo quae tempora error enim. Nobis cupiditate similique qui, ipsum numquam deserunt optio voluptatum esse ratione, quae accusamus sed delectus error aperiam consectetur quam nisi sunt aliquam ab quibusdam. Sit eum dolore perspiciatis ipsam! Veniam repellendus optio impedit laborum. Quisquam fugit fuga praesentium natus harum optio sit amet deserunt aliquam eos! Ab explicabo iure, ad eaque doloremque alias expedita, quisquam dignissimos soluta magnam magni suscipit in nihil rerum enim cupiditate omnis necessitatibus, dicta odio architecto. Sapiente illum, perspiciatis possimus laudantium voluptatum nemo expedita magni eveniet, at velit fugiat quos, corrupti consequuntur nostrum quam cumque? Fugiat voluptate numquam eos, eveniet debitis obcaecati odit soluta deleniti sed quo aliquid sunt provident, possimus fugit laborum quas pariatur saepe eum nihil laudantium doloremque dolorum! "
     
    ],
  },
];

export default function About() {
  const contentRef = useRef(null);
  const [active, setActive] = useState(zohoSections[0].id);

  useEffect(() => {
    const options = { threshold: 0.2 };
    const cb = (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          obs.unobserve(entry.target);
        }
      });
    };
    const obs = new IntersectionObserver(cb, options);
    document.querySelectorAll('.fade-in-left, .fade-in-right').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { root: contentRef.current, threshold: 0.5 }
    );
    zohoSections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

const [currentIndex, setCurrentIndex] = useState(0);

const members = [
  {
    name: "Person1",
    role: "xxxxxxxxx",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum facere ab dolorem dolores animi voluptas neque magnam et distinctio!",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx0vJF7ccBUmVSx21PGxpoVE8WC6kaPMR-xQ&s", // replace with actual URL or local import
  },
  {
    name: "person2",
    role: "xxxxxxxxxxx",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum facere ab dolorem dolores animi voluptas neque magnam et distinctio!",
    image: "https://as2.ftcdn.net/jpg/01/38/27/33/1000_F_138273343_wP6MwmkEZOsBhIIj9G1vzWqO9T23SVxF.jpg",
  },
  {
    name: "person3",
    role: "xxxxxxxxx",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum facere ab dolorem dolores animi voluptas neque magnam et distinctio!",
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
    <div className="about-page">
      <Header />
      <section className="hero-section">
        <img src={Hands} alt="hands" />
        <div className="overlay-text"><span className='aboutus_span'><span className='aspan'>A</span>bout Us</span></div>
      </section>

      <AboutStats />

      <section className="split-section reverse">
        <div className="text-block fade-in-left">
          <h2>About Vidyardi</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio repellat animi officiis, ex explicabo, veritatis inventore nihil maxime quo quae tempora error enim. Nobis cupiditate similique qui, ipsum numquam deserunt optio voluptatum esse ratione, quae accusamus sed delectus error aperiam consectetur quam nisi sunt aliquam ab quibusdam. Sit eum dolore perspiciatis ipsam! Veniam repellendus optio impedit laborum. Quisquam fugit fuga praesentium natus harum optio sit amet deserunt aliquam eos! Ab explicabo iure, ad eaque doloremque alias expedita, quisquam dignissimos soluta magnam magni suscipit in nihil rerum enim cupiditate omnis necessitatibus, dicta odio architecto. Sapiente illum, perspiciatis possimus laudantium voluptatum nemo expedita magni eveniet, at velit fugiat quos, corrupti consequuntur nostrum quam cumque? Fugiat voluptate numquam eos, eveniet debitis obcaecati odit soluta deleniti sed quo aliquid sunt provident, possimus fugit laborum quas pariatur saepe eum nihil laudantium doloremque dolorum! Omnis repellat est, quaerat perferendis sunt a aspernatur consectetur assumenda reiciendis aperiam?.</p>
        </div>
        <div className="image-block fade-in-right">
          <img src="https://media.licdn.com/dms/image/v2/D560BAQFtSQfGfQ70Kw/company-logo_200_200/company-logo_200_200/0/1735146105790/vidyardiportal_logo?e=2147483647&v=beta&t=0bzP6hXSSj704Ok1yPo8RUsj68Kymdh9Ts3ZyIg_-eg" alt="Vidyardi" />
        </div>
      </section>

      <section className="split-section">
        <div className="text-block fade-in-left">
          <h2>About Telangana</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero iusto corporis, eveniet dolore sed esse rem dolorum, sapiente reiciendis harum sit enim quas illo provident quasi quis, error minus distinctio est quibusdam! Dolore quos esse ipsa ad non voluptate. Reprehenderit quam sunt quos ullam culpa adipisci rem quia, mollitia autem? Nam nulla, id earum error nobis unde provident necessitatibus eaque doloremque iusto officia cupiditate fuga in tempora cumque quae inventore voluptate odit quod sed vitae optio quam consectetur! Odio maxime vitae natus atque sint cupiditate aperiam ex veniam consequatur excepturi at incidunt velit rerum quisquam iste ea quo asperiores enim officia nam, mollitia, labore ratione voluptas nobis? Dignissimos, eaque. Facere deserunt facilis provident soluta quia natus magni, quos eligendi officia temporibus accusantium ex magnam delectus enim similique blanditiis tempora, distinctio nostrum commodi quisquam ratione eos veritatis exercitationem debitis. Quidem deserunt at sapiente soluta quo repudiandae officia, iusto perspiciatis culpa dicta!.</p>
        </div>
        <div className="image-block fade-in-right">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-SVItPOYZ9A8EzoKvWjByJc-GvDUMcD826w&s" alt="Telangana" />
        </div>
      </section>

      <section className="content-section">
        <h2>Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, fugit saepe! Dolorum molestiae aliquam asperiores cum distinctio, voluptatibus eaque explicabo aperiam autem est nesciunt et? Repellendus, dolorem. Provident non nobis ab aspernatur deleniti porro, exercitationem, voluptatibus doloribus fuga facilis voluptatem numquam quo minus inventore dolorum reprehenderit ex rem illum accusamus maxime nihil. Blanditiis maxime quod iure amet, deleniti natus, consequuntur beatae impedit exercitationem magni officiis itaque eum, vitae quam mollitia voluptatem! Labore facere impedit fugiat voluptatum. Ipsum hic eius debitis consequatur! Expedita assumenda aspernatur facilis architecto. Cumque impedit fuga delectus laudantium dolor et, a eveniet nemo odit dolores quidem id unde fugit consectetur ut corporis nihil vitae tempore sit maiores sunt incidunt accusantium doloremque ipsum? Blanditiis necessitatibus neque optio dicta.</p>
      </section>

      <section className="content-section">
        <h2>Mission</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore odio architecto eligendi! Quaerat provident ut numquam molestias, optio voluptatem unde magnam velit eius aspernatur placeat sint quisquam nulla pariatur rem quod accusantium esse quidem minus. Et soluta vel sunt. Facere facilis, quaerat reiciendis laboriosam voluptatibus, laborum perferendis ipsam dicta nihil consequuntur doloribus inventore explicabo minus voluptatem officiis suscipit ab soluta? Iste laborum architecto, totam assumenda corporis voluptas veniam obcaecati expedita quibusdam tenetur quidem porro et vel consequuntur, hic debitis modi quae. Modi, quia iure sapiente perspiciatis suscipit laborum dignissimos voluptatum accusamus quas, tenetur consequuntur incidunt iste voluptatibus ullam reiciendis dolores nobis reprehenderit eveniet ipsa itaque doloremque hic quaerat illum dolorem. Quisquam error iste, explicabo dolor placeat architecto veniam iusto ut!.</p>
      </section>

      <section className="team-section">
        <h2>Our Dedicated Team</h2>
        <div className="team-grid">
          {dedicatedImages.map((item, idx) => (
            <div key={idx} className="team-card">
              <div className="image-container">
                <img src={item.img} alt={`Team member ${idx + 1}`} />
                <div className="overlay">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </section>


<section className="owner-carousel-section">
  <div className="owner-header">
    <h2 className="small-title">OUR DEDICATED TEAM</h2>
    
  </div>

  <div className="owner-card">
    <div className="owner-text">
      <h2>{members[currentIndex].name}</h2>
      <h4>{members[currentIndex].role}</h4>
      <p>{members[currentIndex].description}</p>
      <div className="navigation">
  <button onClick={prevMember}><FaArrowLeft /></button>
  <button onClick={nextMember}><FaArrowRight /></button>
  <div className="dots">
    {members.map((_, i) => (
      <span
        key={i}
        className={`dot ${i === currentIndex ? "active" : ""}`}
      ></span>
    ))}
  </div>
</div>

    </div>
    <div className="owner-image">
      <img src={members[currentIndex].image} alt={members[currentIndex].name} />
    </div>
  </div>
</section>



       <div className="zoho-wrapper">
        <nav className="zoho-sidebar">
          {zohoSections.map(sec => (
            <div
              key={sec.id}
              className={`zoho-heading${active === sec.id ? ' active' : ''}`}
              onClick={() =>
                document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
            >
              {sec.title}
            </div>
          ))}
        </nav>
        <div className="zoho-content" ref={contentRef}>
          {zohoSections.map(sec => (
            <section key={sec.id} id={sec.id} className="zoho-section">
              {sec.paragraphs.map((txt, idx) => (
                <p key={idx} className="zoho-text">{txt}</p>
              ))}
            </section>
          ))}
        </div>
      </div>

     
      <section className="faq-section">
        <h2>Related Questions</h2>
        {[{
          question: "1. What is T‑Sign and how does it support students?",
      
          answer: " T‑Sign is a digital platform designed for managing academic achievements such as transcripts, credentials, and course credits. It simplifies credit recognition and transfers, reducing administrative stress for both students and institutions. T‑Sign supports seamless transitions in education and employment by securely preserving academic records and integrating them with existing education tech."
        }, {
          question: "2. Are the digital credentials issued by T‑Sign secure and verifiable?",
          answer: "Yes. T‑Sign issues PKI-based digital credentials, which are encrypted and cryptographically signed—similar to how digital badges use tamper-resistant data to confirm authenticity—so credentials can be instantly verified online."
        }, {
          question: "3.Can T‑Sign credentials be used for credit transfers and job applications?",
          answer: "Absolutely. Digital credentials travel with the student, making it easy for them to present official credentials to universities or employers. This supports credit transfers, enrollment processes, and hiring decisions. The use of digital records enables real-time verification during admissions and employment screening."
        }].map((item, idx) => (
          <FAQItem key={idx} question={item.question} answer={item.answer} />
        ))}
      </section>
 <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
  ↑
</button>
<br/>
<br/>

      <Footer />
    </div>
  );
};

