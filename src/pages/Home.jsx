import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowRight, Bell, Brain, Check, ChevronLeft, ChevronRight,
  ClipboardCheck, Cloud, Coins, FileText, Monitor,
  Play, Route, ShieldCheck, Sparkles, Target, Trophy, Users,
  MessageSquare, BarChart3, Video
} from 'lucide-react';
import InteractiveDashboard from '../components/InteractiveDashboard';
import InteractivePortals from '../components/InteractivePortals';
import CBECompetencyCard from '../components/CBECompetencyCard';
import SeniorSchoolPathways from '../components/SeniorSchoolPathways';
import { heroSlides } from '../data/heroSlides';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const currentSlide = heroSlides[activeSlide];

  const heroIconMap = {
    barChart: BarChart3,
    brain: Brain,
    shield: ShieldCheck,
    cloud: Cloud,
    users: Users,
    coins: Coins,
    file: FileText,
    bell: Bell,
    monitor: Monitor,
    clipboard: ClipboardCheck,
    check: Check,
    sparkles: Sparkles,
    target: Target,
    route: Route,
    trophy: Trophy
  };

  const goToSlide = (index) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => goToSlide(activeSlide + 1);
  const goToPreviousSlide = () => goToSlide(activeSlide - 1);

  useEffect(() => {
    if (heroPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [heroPaused]);

  const handleHeroKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      goToNextSlide();
    }

    if (event.key === 'ArrowLeft') {
      goToPreviousSlide();
    }
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;

    const distance = touchStartX - event.changedTouches[0].clientX;

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        goToNextSlide();
      } else {
        goToPreviousSlide();
      }
    }

    setTouchStartX(null);
  };

  // Animation presets
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true, margin: '-100px' }
  };

  const cardHover = {
    whileHover: { y: -5, boxShadow: 'var(--shadow-lg)' }
  };

  const row1Schools = [
    { name: 'MCK Isiolo Highway Academy', logo: 'MH' },
    { name: 'WASO Primary', logo: 'WP' },
    { name: 'Merti Comprehensive School', logo: 'MC' },
    { name: 'Kambi Garba Comprehensive School', logo: 'KG' },
    { name: 'Lions Complex Academy', logo: 'LC' },
    { name: 'New Vision Academy', logo: 'NV' }
  ];

  const row2Schools = [
    { name: 'MCK Isiolo Highway Academy', logo: 'MH' },
    { name: 'WASO Primary', logo: 'WP' },
    { name: 'Merti Comprehensive School', logo: 'MC' },
    { name: 'Kambi Garba Comprehensive School', logo: 'KG' },
    { name: 'Lions Complex Academy', logo: 'LC' },
    { name: 'New Vision Academy', logo: 'NV' }
  ];

  const testimonials = [
    {
      quote: 'Our previous system was not ready for CBE. Teachers spent hours grading portfolios. With TrendScore, assessment levels are logged in seconds, and our term report compilers run automatically.',
      initials: 'JK',
      name: 'John Kipkemboi',
      role: 'Principal, Rift Valley Academy',
    },
    {
      quote: 'Fee reconciliation used to take our finance team two weeks at start of term. With M-Pesa automated ledgers, parents pay and receive receipts immediately. Our collection rate jumped by 24%.',
      initials: 'AW',
      name: 'Alice Wambui',
      role: 'Director, Sunshine School Nairobi',
    },
    {
      quote: 'The parent portal has transformed parent-school collaboration. Parents track attendance warnings and results directly on mobile, reducing customer support queries in our offices.',
      initials: 'SO',
      name: 'Sister Olivia',
      role: "Headmistress, St. Mary's Girls Primary",
    },
  ];

  return (
    <div className="home-wrapper">
      {/* 2. Hero Section */}
      <section
        className="hero-section hero-slider-section"
        tabIndex={0}
        onKeyDown={handleHeroKeyDown}
        onMouseEnter={() => setHeroPaused(true)}
        onMouseLeave={() => setHeroPaused(false)}
        onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)}
        onTouchEnd={handleTouchEnd}
        aria-label="TrendSCORE stakeholder slider"
      >
        <AnimatePresence mode="wait">
          <motion.div
            className={`hero-slide hero-slide-${currentSlide.id}`}
            key={currentSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
          >
            <div className="hero-slide-content">
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="hero-slide-eyebrow">
                  <span>{currentSlide.badge}</span>
                  <strong>{currentSlide.role}</strong>
                </div>
                <h1 className="hero-title">
                  {currentSlide.title}
                </h1>
                <p className="hero-subtitle">
                  {currentSlide.description}
                </p>

                <motion.div
                  className="hero-chip-row"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } }
                  }}
                >
                  {currentSlide.chips.map((chip) => (
                    <motion.div
                      className="hero-feature-chip"
                      key={chip}
                      variants={{
                        hidden: { opacity: 0, y: 12 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      <Check size={17} />
                      <span>{chip}</span>
                    </motion.div>
                  ))}
                </motion.div>

                <div className="hero-buttons">
                  <Link to="/book-demo" className="btn btn-primary">
                    Book Free Demo <ArrowRight size={16} />
                  </Link>
                  <a href="#tour" className="btn btn-secondary hero-secondary-cta">
                    <Play size={16} fill="currentColor" /> {currentSlide.secondaryCta}
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <img src={currentSlide.image} alt={`${currentSlide.role} using TrendSCORE`} className="hero-slide-image" />
                <div className="hero-image-fade hero-image-fade-side" />
                <div className="hero-image-fade hero-image-fade-bottom" />

                <motion.div
                  className="hero-floating-cards"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12 } }
                  }}
                >
                  {currentSlide.floatingCards.map((card, index) => {
                    const Icon = heroIconMap[card.icon] || Sparkles;

                    return (
                      <motion.div
                        className={`hero-floating-card hero-floating-card-${index + 1}`}
                        key={card.title}
                        variants={{
                          hidden: { opacity: 0, y: 18, scale: 0.96 },
                          visible: { opacity: 1, y: 0, scale: 1 }
                        }}
                      >
                        <span className="hero-floating-icon">
                          <Icon size={22} />
                        </span>
                        <span>
                          <strong>{card.title}</strong>
                          {card.description && <small>{card.description}</small>}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button type="button" className="hero-slider-arrow hero-slider-arrow-left" onClick={goToPreviousSlide} aria-label="Previous slide">
          <ChevronLeft size={24} />
        </button>
        <button type="button" className="hero-slider-arrow hero-slider-arrow-right" onClick={goToNextSlide} aria-label="Next slide">
          <ChevronRight size={24} />
        </button>

        <div className="hero-slider-dots" aria-label="Hero slide navigation">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              className={`hero-slider-dot ${index === activeSlide ? 'is-active' : ''}`}
              key={slide.id}
              onClick={() => goToSlide(index)}
              aria-label={`Show ${slide.role} slide`}
            />
          ))}
        </div>
      </section>

      {/* 3. Full Width Platform Statement */}
      <section className="platform-hero-section">
        <div className="platform-hero-overlay">
          <div className="container">
            <div className="platform-hero-content">
              <h2>Make Decisions With <span>Confidence</span></h2>
              <p>
                TrendScore gives school leaders a real-time view of academics, finance, attendance,
                and learner growth all in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Built For CBE (Formative & Summative) */}
      <section className="cbe-section" id="tour">
        {/* Right column: background image filling half the viewport */}
        <div className="cbe-visual-col">
          <div
            className="cbe-img-bg"
            style={{
              backgroundImage: 'url(/marketing-teacher-cbe-assessment-v1.jpg)',
            }}
          />
          <div className="cbe-card-overlay">
            <CBECompetencyCard />
          </div>
        </div>

        <div className="container">
          <motion.div className="cbe-text-col" {...fadeUp}>
            <span className="badge badge-teal">Competency-Based Education</span>
            <h2>Built Specifically for the CBE Curriculum</h2>
            <p style={{ marginBottom: '24px' }}>
              Unlike Western ERPs repurposed with custom fields, TrendScore was engineered from the ground up for CBE. Track learner growth across all dimensions of formative and summative metrics.
            </p>
            
            <div className="cbe-feature-list">
              <div className="cbe-feature-item">
                <div className="cbe-feature-num">1</div>
                <div className="cbe-feature-info">
                  <h3>Formative rubrics entry</h3>
                  <p>Grade indicators, observations, and class activities instantly on mobile.</p>
                </div>
              </div>
              <div className="cbe-feature-item">
                <div className="cbe-feature-num">2</div>
                <div className="cbe-feature-info">
                  <h3>Summative consolidation</h3>
                  <p>Consolidate school-based assessments (SBAs) with term examinations seamlessly.</p>
                </div>
              </div>
              <div className="cbe-feature-item">
                <div className="cbe-feature-num">3</div>
                <div className="cbe-feature-info">
                  <h3>KNEC-Compliant Reporting</h3>
                  <p>Generate clean, professional report sheets showing EE, ME, AE, and BE levels.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8. Senior School Pathways (New Interactive Redesign) */}
      <SeniorSchoolPathways />
      {/* 9. Connected Portals */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Portals</span>
            <h2>Teachers, Learners, and Parents in One Platform.</h2>
            <p>Simple, secure portals for every part of your school community.</p>
          </div>
          <InteractivePortals />
        </div>
      </section>

      {/* 11. Analytics Command Center (Dark section) */}
      <section className="section section-dark">
        <div className="container">
          <InteractiveDashboard />
        </div>
      </section>

      {/* 13. Integrations */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-orange">Integrations</span>
            <h2>Unified with the Apps You Already Use</h2>
            <p>Connect communication, spreadsheets, video meetings, and AI tools in one simple workflow.</p>
          </div>
          
          <div className="integrations-box">
            <div className="integrations-grid">
              <div className="integration-item">
                <img src="/mpesa-icon.png" alt="M-Pesa" className="integration-logo-img" />
                <div className="integration-logo-text">M-Pesa</div>
              </div>
              <div className="integration-item">
                <MessageSquare className="integration-logo-icon" style={{ color: '#F97316' }} />
                <div className="integration-logo-text">SMS</div>
              </div>
              <div className="integration-item">
                <svg className="integration-logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="16" fill="#25D366"/>
                  <path d="M22.5 9.5C20.7 7.7 18.4 6.7 16 6.7c-5.2 0-9.4 4.2-9.4 9.4 0 1.7.4 3.3 1.2 4.7L6.6 25.3l4.7-1.2c1.4.7 2.9 1.1 4.5 1.1h.1c5.2 0 9.4-4.2 9.4-9.4-.1-2.5-1.1-4.8-2.8-6.3zm-6.5 14.4h-.1c-1.4 0-2.8-.4-4-1.1l-.3-.2-3 .8.8-2.9-.2-.3c-.8-1.3-1.2-2.7-1.2-4.2 0-4.3 3.5-7.8 7.9-7.8 2.1 0 4.1.8 5.5 2.3 1.5 1.5 2.3 3.4 2.3 5.5-.1 4.3-3.6 7.9-7.7 7.9zm4.3-5.8c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.4c.1-.1.2-.3.3-.4.1-.2.1-.3 0-.5-.1-.2-.5-1.3-.7-1.7-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2.9 2.4c.1.2 1.6 2.5 4 3.5.6.2 1 .4 1.3.5.6.2 1.1.2 1.5.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3z" fill="white"/>
                </svg>
                <div className="integration-logo-text">WhatsApp</div>
              </div>
              <div className="integration-item">
                <svg className="integration-logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-3.3-4.53-6.16-4.53z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="integration-logo-text">Google</div>
              </div>
              <div className="integration-item">
                <svg className="integration-logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="4" width="18" height="24" rx="2" fill="#107C41"/>
                  <path d="M23 8h4v16h-4V8z" fill="#21A366"/>
                  <path d="M11 11l2.2 3.8L15.6 11h3l-3.8 5.4L18.9 22h-3.1l-2.6-4-2.6 4H7.7l4-5.6L8 11h3z" fill="#FFFFFF"/>
                </svg>
                <div className="integration-logo-text">Excel</div>
              </div>
              <div className="integration-item">
                <Video className="integration-logo-icon" style={{ color: '#2563EB' }} />
                <div className="integration-logo-text">Jitsi Video</div>
              </div>
              <div className="integration-item">
                <svg className="integration-logo-icon" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.1 13.1c.6-2.1-.2-4.4-2.1-5.6-1.4-.9-3.1-1.1-4.7-.6-1.4-1.7-3.8-2.4-5.9-1.6-1.6.6-2.8 1.8-3.4 3.3-2.1.4-3.8 2.1-4.2 4.3-.3 1.6.1 3.2 1.1 4.5-.6 2.1.2 4.4 2.1 5.6 1.4.9 3.1 1.1 4.7.6 1.4 1.7 3.8 2.4 5.9 1.6 1.6-.6 2.8-1.8 3.4-3.3 2.1-.4 3.8-2.1 4.2-4.3.3-1.6-.1-3.2-1.1-4.5zm-10.2-5.7c1.2-.4 2.6-.1 3.4.8l-5.6 3.2v-2.2c.5-.9 1.2-1.5 2.2-1.8zm-7.9 6c.2-1.3 1.1-2.4 2.3-2.8v6.5l-1.9-1.1c-.4-.8-.6-1.7-.4-2.6zm2.2 7.7c-1.1-.7-1.7-1.9-1.5-3.2l5.6 3.2-1.9 1.1c-.8.2-1.6.1-2.2-.3zm8-8.4 2.5 1.4v2.9l-2.5 1.4-2.5-1.4v-2.9l2.5-1.4zm-.2 10.5c-1.2.4-2.6.1-3.4-.8l5.6-3.2v2.2c-.5.9-1.2 1.5-2.2 1.8zm7-6c-.2 1.3-1.1 2.4-2.3 2.8v-6.5l1.9 1.1c.4.8.6 1.7.4 2.6zm-4.4-5.1L17 8.9l1.9-1.1c.8-.2 1.6-.1 2.3.3 1.1.7 1.7 1.9 1.5 3.2z" fill="#0F172A"/>
                </svg>
                <div className="integration-logo-text">OpenAI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Success Stories */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Case Studies</span>
            <h2>Success Stories from School Leaders</h2>
            <p>Read how principals and administrators achieved financial transparency and simplified grading using TrendScore.</p>
          </div>

          <div className="testimonials-carousel">
            <div className="testimonials-row">
              {testimonials.map((item) => (
                <div className="testimonial-card" key={item.name}>
                  <p className="testimonial-text">"{item.quote}"</p>
                  <div className="testimonial-user">
                    <div className="testimonial-avatar">{item.initials}</div>
                    <div className="testimonial-meta">
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section" style={{ padding: '50px 0', overflow: 'hidden' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="trusted-title">We are trusted</div>
        </div>
        <div className="trusted-marquee-wrapper">
          {/* Row 1: Scrolling Left */}
          <div className="trusted-marquee-track">
            <div className="marquee-content-left">
              {[...row1Schools, ...row1Schools, ...row1Schools].map((school, i) => (
                <div key={i} className="school-marquee-item">
                  <div className="school-logo-badge">
                    {school.logo}
                  </div>
                  <span>{school.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="trusted-marquee-track">
            <div className="marquee-content-right">
              {[...row2Schools, ...row2Schools, ...row2Schools].map((school, i) => (
                <div key={i} className="school-marquee-item">
                  <div className="school-logo-badge">
                    {school.logo}
                  </div>
                  <span>{school.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 16. Book Demo (CTA Form) */}
      <section className="section" style={{ backgroundColor: 'var(--color-teal-light)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <span className="badge badge-orange">Get Started</span>
          <h2 style={{ fontSize: '2.25rem', marginBottom: '16px', color: 'var(--color-teal)' }}>Ready to Transform Your School?</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
            Book a personalized 30-minute system tour. We\'ll demonstrate how to set up your CBE rubrics, configure fee balances, and onboard teachers.
          </p>
          <Link to="/book-demo" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Book Your Free System Tour &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
