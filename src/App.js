import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';

function Home() {
  return (
    <>
      <header className="hero" id="home">
        <img
          src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80"
          alt="Fitness Club Hero"
          className="hero-image"
        />
        <div className="hero-content">
          <h1>Welcome to Ambitious Endurance Club</h1>
          <p>Your journey to fitness and endurance starts here.</p>
        </div>
      </header>
      {/* Cards Section */}
      <section className="cards-section">
        <div className="cards-container">
          <div className="card">
            <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80" alt="Strength Training" className="card-image" />
            <h3>Strength Training</h3>
            <p>Build muscle and improve endurance with our expert-led strength training sessions.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Group Classes" className="card-image" />
            <h3>Group Classes</h3>
            <p>Stay motivated and have fun with a variety of group fitness classes for all levels.</p>
          </div>
          <div className="card">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=400&q=80" alt="Personal Coaching" className="card-image" />
            <h3>Personal Coaching</h3>
            <p>Get personalized fitness plans and one-on-one coaching from certified trainers.</p>
          </div>
        </div>
      </section>
    </>
  );
}
function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <h2>Our Achievements</h2>
      <p className="achievements-desc">At Ambitious Endurance Club, we take pride in our journey and the milestones we’ve achieved together. Our dedication to fitness, community, and excellence is reflected in these accomplishments.</p>
      <div className="achievements-container">
        <div className="achievement">
          <span className="achievement-icon" role="img" aria-label="Members">💪</span>
          <div className="achievement-number">1500+</div>
          <div className="achievement-desc">Active Members</div>
        </div>
        <div className="achievement">
          <span className="achievement-icon" role="img" aria-label="Awards">🏆</span>
          <div className="achievement-number">12</div>
          <div className="achievement-desc">Fitness Awards Won (2015-2024)</div>
        </div>
        <div className="achievement">
          <span className="achievement-icon" role="img" aria-label="Years">⏳</span>
          <div className="achievement-number">10+</div>
          <div className="achievement-desc">Years of Excellence</div>
        </div>
        <div className="achievement">
          <span className="achievement-icon" role="img" aria-label="Marathon">🏃‍♂️</span>
          <div className="achievement-number">5</div>
          <div className="achievement-desc">Marathon Events Organized</div>
        </div>
        <div className="achievement">
          <span className="achievement-icon" role="img" aria-label="Community">🤝</span>
          <div className="achievement-number">20+</div>
          <div className="achievement-desc">Community Fitness Drives</div>
        </div>
        <div className="achievement">
          <span className="achievement-icon" role="img" aria-label="Transformation">🔥</span>
          <div className="achievement-number">300+</div>
          <div className="achievement-desc">Member Transformations</div>
        </div>
        <div className="achievement">
          <span className="achievement-icon" role="img" aria-label="Trainer">👨‍🏫</span>
          <div className="achievement-number">8</div>
          <div className="achievement-desc">Certified Trainers</div>
        </div>
      </div>
    </section>
  );
}
function About() {
  return (
    <section className="about-section" id="about">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="owner-info">
          <img src="owner.png" alt="Owner" className="owner-photo" />
          <div>
            <h3>Kiran Sahu</h3>
            <p>Owner & Head Coach</p>
            <p>Kiran is a certified fitness expert with over 15 years of experience in training and coaching. His passion for health and endurance inspires everyone at the club.</p>
          </div>
        </div>
        <div className="club-history">
          <h3>Our History</h3>
          <p>Founded in 2013, Ambitious Endurance Club started as a small group of fitness enthusiasts. Over the years, it has grown into a thriving community, helping hundreds achieve their fitness goals through expert guidance, modern facilities, and a supportive environment.</p>
        </div>
        <div className="about-youtube">
          <h3>Watch Our Club in Action</h3>
          <div className="about-youtube-video">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/hX9PCMrOFPI"
              title="Ambitious Endurance Club YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-details">
          <p><strong>Address:</strong> Mahavir Udyan road opp Madhumitra the market , Nishant Colony, Sangli, Sangli Miraj Kupwad, Maharashtra- 416416</p>
          <p><strong>Email:</strong> <a href="mailto:ambitiousenduranceclub@gmail.com">ambitiousenduranceclub@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+918668395029">+91866 839 5029</a></p>
          <div className="contact-social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/ambitious_endurance_club/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://wa.me/918668395029" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" alt="WhatsApp" className="social-icon" />
            </a>
            <a href="https://youtu.be/hX9PCMrOFPI" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" className="social-icon" />
            </a>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            title="Ambitious Endurance Club Location"
            src="https://www.google.com/maps?q=Sangli+Kisan+Chowk+416416&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function FitnessTips() {
  const [form, setForm] = useState({ interest: '', age: '', height: '', weight: '' });
  const [tip, setTip] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple logic for demonstration
    let tipMsg = '';
    const age = parseInt(form.age);
    const height = parseInt(form.height);
    const weight = parseInt(form.weight);
    if (!form.interest || !age || !height || !weight) {
      tipMsg = 'Please fill in all fields to get a personalized tip.';
    } else if (form.interest === 'muscle') {
      tipMsg = 'Focus on strength training and protein-rich diet. Compound lifts and progressive overload are key!';
    } else if (form.interest === 'weightloss') {
      tipMsg = 'Combine cardio with resistance training. Maintain a calorie deficit and stay consistent.';
    } else if (form.interest === 'endurance') {
      tipMsg = 'Incorporate interval training and long steady-state cardio. Hydration and gradual progression are important.';
    } else {
      tipMsg = 'Stay active, eat balanced meals, and get enough rest. Consistency is the secret to fitness!';
    }
    if (age < 18) {
      tipMsg += ' As you are under 18, focus on learning proper form and avoid heavy weights.';
    } else if (age > 50) {
      tipMsg += ' For your age, prioritize joint health, flexibility, and regular checkups.';
    }
    setTip(tipMsg);
  };

  return (
    <section className="tips-section">
      <h2>AI Fitness Tips</h2>
      <form className="tips-form" onSubmit={handleSubmit}>
        <label>
          Fitness Interest:
          <select name="interest" value={form.interest} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="muscle">Muscle Gain</option>
            <option value="weightloss">Weight Loss</option>
            <option value="endurance">Endurance</option>
            <option value="general">General Fitness</option>
          </select>
        </label>
        <label>
          Age:
          <input type="number" name="age" value={form.age} onChange={handleChange} min="10" max="100" required />
        </label>
        <label>
          Height (cm):
          <input type="number" name="height" value={form.height} onChange={handleChange} min="100" max="250" required />
        </label>
        <label>
          Weight (kg):
          <input type="number" name="weight" value={form.weight} onChange={handleChange} min="30" max="200" required />
        </label>
        <button type="submit">Get Tip</button>
      </form>
      {tip && <div className="tip-result">{tip}</div>}
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon" aria-label="logo" role="img">
            {/* Fitness SVG Logo: Person lifting barbell */}
            <svg width="36" height="36" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{verticalAlign: 'middle', marginRight: '0.5rem'}}>
              <circle cx="32" cy="16" r="6" fill="#61dafb"/>
              <rect x="12" y="28" width="40" height="6" rx="3" fill="#222"/>
              <rect x="8" y="24" width="4" height="14" rx="2" fill="#61dafb"/>
              <rect x="52" y="24" width="4" height="14" rx="2" fill="#61dafb"/>
              <rect x="30" y="34" width="4" height="14" rx="2" fill="#61dafb"/>
              <rect x="24" y="48" width="16" height="4" rx="2" fill="#222"/>
            </svg>
          </span>
          Ambitious Endurance Club
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/achievements">Our Achievements</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          {/* <li><Link to="/tips">AI Fitness Tips</Link></li> */}
        </ul>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" className="social-icon" />
          </a>
          <a href="https://www.instagram.com/ambitious_endurance_club/?utm_source=qr&r=nametag" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://wa.me/918668395029" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg" alt="WhatsApp" className="social-icon" />
          </a>
          <a href="https://youtu.be/hX9PCMrOFPI" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg" alt="YouTube" className="social-icon" />
          </a>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tips" element={<FitnessTips />} />
      </Routes>
      <footer className="footer">
        &copy; {new Date().getFullYear()} Ambitious Endurance Club. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
