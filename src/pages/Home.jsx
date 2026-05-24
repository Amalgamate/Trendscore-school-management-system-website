import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Coins, GraduationCap, 
  Users, MessageSquare, BarChart3, HelpCircle, Activity, Play, 
  Plus, Check, Smartphone, Landmark, CheckSquare
} from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';
import InteractiveDashboard from '../components/InteractiveDashboard';
import InteractivePortals from '../components/InteractivePortals';
import ComparisonTable from '../components/ComparisonTable';
import CBECompetencyCard from '../components/CBECompetencyCard';
import SeniorSchoolPathways from '../components/SeniorSchoolPathways';

const Home = () => {

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
    { name: 'Alliance High School', logo: 'AHS' },
    { name: 'Isiolo Girls High School', logo: 'IG' },
    { name: 'Meru Elite Academy', logo: 'ME' },
    { name: 'Lions Academy Isiolo', logo: 'LA' },
    { name: 'Moyale Boys Secondary', logo: 'MB' },
    { name: 'Nyeri Primary School', logo: 'NP' },
    { name: 'Nairobi School', logo: 'NS' },
    { name: 'Garbatula Boys High School', logo: 'GB' },
    { name: 'Zawadi Junior Academy', logo: 'ZJ' }
  ];

  const row2Schools = [
    { name: 'Kenya High School', logo: 'KH' },
    { name: 'Merti Comprehensive School', logo: 'MC' },
    { name: 'Nanyuki High School', logo: 'NY' },
    { name: 'MCK Highway Academy Isiolo', logo: 'MH' },
    { name: 'Mombasa Academy', logo: 'MA' },
    { name: 'Karatina Girls Secondary', logo: 'KG' },
    { name: 'Lenana School', logo: 'LS' },
    { name: 'Loreto Limuru', logo: 'LL' },
    { name: 'Starehe Boys\' Centre', logo: 'SBC' }
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
      <section className="hero-section">
        <div className="container grid-2">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge badge-orange hero-top-label">
              CBE-Ready & M-Pesa Integrated
            </span>
            <h1 className="hero-title">
              Run Your Entire School on <span>One Smart System</span>
            </h1>
            <p className="hero-subtitle">
              TrendScore helps schools manage academics, CBE assessments, fees, staff, finance and parents — all from one powerful platform built for modern African education.
            </p>
            <div className="hero-buttons">
              <Link to="/book-demo" className="btn btn-primary">
                Book Free Demo <ArrowRight size={16} />
              </Link>
              <a href="#tour" className="btn btn-secondary">
                <Play size={16} fill="currentColor" /> Watch System Tour
              </a>
            </div>
            
            {/* KPI Cards */}
            <div className="hero-kpi-row">
              <div className="hero-kpi-item">
                <div className="hero-kpi-val">500+</div>
                <div className="hero-kpi-lbl">Partner Schools</div>
              </div>
              <div className="hero-kpi-item">
                <div className="hero-kpi-val">150,000+</div>
                <div className="hero-kpi-lbl">Learners Managed</div>
              </div>
              <div className="hero-kpi-item">
                <div className="hero-kpi-val">KES 1.2B+</div>
                <div className="hero-kpi-lbl">Fees Processed</div>
              </div>
              <div className="hero-kpi-item">
                <div className="hero-kpi-val">98%</div>
                <div className="hero-kpi-lbl">Parent Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Mockup */}
          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-main-img-wrap">
              <ImagePlaceholder name="hero-main" type="dashboard" height="420px" />
            </div>
            
            {/* Floaties */}
            <div className="hero-float-card hero-float-cbe">
              <div className="hero-float-icon">
                <GraduationCap size={20} />
              </div>
              <div className="hero-float-text">
                <h5>CBE Rubrics Setup</h5>
                <p>Fully compliant with KNEC levels</p>
              </div>
            </div>
            
            <div className="hero-float-card hero-float-schools">
              <div className="hero-float-icon hero-float-icon-orange">
                <Users size={20} />
              </div>
              <div className="hero-float-text">
                <h5>Parent App connected</h5>
                <p>Direct M-Pesa statements</p>
              </div>
            </div>
          </motion.div>
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

      {/* 4. School Challenges */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">The Challenges</span>
            <h2>Where Your Traditional School Software Fails.</h2>
            <p>Traditional tools were built as simple databases, failing to solve the complex needs of modern Competency-Based Education (CBE) and finance control.</p>
          </div>

          <div className="challenges-grid">
            <motion.div className="challenge-card" {...fadeUp}>
              <div className="challenge-icon">
                <GraduationCap size={24} />
              </div>
              <h3>Academic & CBE Chaos</h3>
              <p>Manual grading and spreadsheets turn CBE assessments (rubrics, portfolios, EE/ME scores) into a bureaucratic nightmare for teachers.</p>
            </motion.div>

            <motion.div className="challenge-card" {...fadeUp} transition={{ delay: 0.1 }}>
              <div className="challenge-icon">
                <Coins size={24} />
              </div>
              <h3>Leaking Fee Revenues</h3>
              <p>Without live bank and M-Pesa automated reconciliation, school directors struggle to audit billing balances and arrears collections.</p>
            </motion.div>

            <motion.div className="challenge-card" {...fadeUp} transition={{ delay: 0.2 }}>
              <div className="challenge-icon">
                <Users size={24} />
              </div>
              <h3>Disengaged Parents</h3>
              <p>Parents are left in the dark when results are shared months late and fees statements require physical receipt pickups at school offices.</p>
            </motion.div>
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

      {/* 12. Switch Comparison */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="badge badge-teal">Direct Comparison</span>
            <h2>How TrendScore Compares</h2>
            <p>Traditional tools fall short when assessing competencies, reconciling payments, and automating parent reports.</p>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* 13. Integrations */}
      <section className="section" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge badge-orange">Integrations</span>
            <h2>Unified with the Apps You Already Use</h2>
            <p>No more copy-pasting data. TrendScore integrates with local banks, telcos, and cloud tools directly.</p>
          </div>
          
          <div className="integrations-box">
            <div className="integrations-grid">
              <div className="integration-item">
                <img src="/mpesa-icon.png" alt="M-Pesa" style={{ height: '28px', width: 'auto', objectFit: 'contain' }} />
                <div className="integration-logo-text">M-Pesa</div>
              </div>
              <div className="integration-item">
                <MessageSquare size={28} style={{ color: '#25D366' }} />
                <div className="integration-logo-text">WhatsApp</div>
              </div>
              <div className="integration-item">
                <MessageSquare size={28} style={{ color: '#F97316' }} />
                <div className="integration-logo-text">SMS Alerts</div>
              </div>
              <div className="integration-item">
                <Landmark size={28} style={{ color: '#0F4C5C' }} />
                <div className="integration-logo-text">KCB Bank</div>
              </div>
              <div className="integration-item">
                <Landmark size={28} style={{ color: '#0F4C5C' }} />
                <div className="integration-logo-text">Equity Bank</div>
              </div>
              <div className="integration-item">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.87-2.6-3.3-4.53-6.16-4.53z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="integration-logo-text">Google</div>
              </div>
              <div className="integration-item">
                <svg width="28" height="28" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h11v11H0z" fill="#F25022"/>
                  <path d="M12 0h11v11H12z" fill="#7FBA00"/>
                  <path d="M0 12h11v11H0z" fill="#00A4EF"/>
                  <path d="M12 12h11v11H12z" fill="#FFB900"/>
                </svg>
                <div className="integration-logo-text">Microsoft</div>
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
          <div className="trusted-title">Trusted by Leading & Local Schools Across Kenya</div>
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
          <h2 style={{ fontSize: '2.25rem', marginBottom: '16px', color: 'var(--color-teal)' }}>Ready to Transform Your School Operations?</h2>
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
