import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Coins, GraduationCap, ShieldCheck, Sparkles, Users, MessageSquare, Video,
  UserPlus, ClipboardCheck, Bus, Route, Calendar, Clock, ChevronRight
} from 'lucide-react';
import InteractivePortals from '../components/InteractivePortals';
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

  // 8 Core Platform Modules matching slide design
  const modulesList = [
    {
      name: 'Admissions',
      icon: UserPlus,
      color: '#0284C7',
      bgColor: '#F0F9FF',
      hoverBg: '#E0F2FE',
      link: '/features/admissions'
    },
    {
      name: 'Assessment',
      icon: ClipboardCheck,
      color: '#16A34A',
      bgColor: '#F0FDF4',
      hoverBg: '#DCFCE7',
      link: '/features/assessment'
    },
    {
      name: 'Staff',
      icon: Users,
      color: '#7C3AED',
      bgColor: '#F5F3FF',
      hoverBg: '#EDE9FE',
      link: '/features/hr'
    },
    {
      name: 'Fees',
      icon: Bus,
      color: '#EA580C',
      bgColor: '#FFF7ED',
      hoverBg: '#FFEDD5',
      link: '/features/finance'
    },
    {
      name: 'Pathways',
      icon: Route,
      color: '#0D9488',
      bgColor: '#F0FDFA',
      hoverBg: '#CCFBF1',
      link: '/solutions/senior'
    },
    {
      name: 'Timetable',
      icon: Calendar,
      color: '#4F46E5',
      bgColor: '#EEF2FF',
      hoverBg: '#E0E7FF',
      link: '/modules/timetable'
    },
    {
      name: 'Communication',
      icon: MessageSquare,
      color: '#E11D48',
      bgColor: '#FFF1F2',
      hoverBg: '#FFE4E6',
      link: '/features/communication'
    },
    {
      name: 'Clock-In',
      icon: Clock,
      color: '#D97706',
      bgColor: '#FFFBEB',
      hoverBg: '#FEF3C7',
      link: '/modules/attendance'
    }
  ];

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

  return (
    <div className="home-wrapper">
      {/* 2. Hero Section - Static, Clean, Clear Single Image */}
      <section className="hero-section hero-slider-section" style={{ background: '#FFFFFF' }}>
        <div className="hero-slide-content">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="hero-slide-eyebrow">
              <span className="badge badge-orange" style={{ textTransform: 'uppercase', letterSpacing: '0.05em', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={14} /> Modular School ERP
              </span>
            </div>

            <h1 className="hero-title">
              Manage Your Entire School in One Modular Platform.
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.05rem', lineHeight: 1.65, color: 'var(--color-text-secondary)', maxWidth: '540px' }}>
              TrendScore is Kenya’s all-in-one modular school management platform built to streamline every aspect of your institution. From CBC and CBE assessment rubrics to automated M-Pesa fee collection, admissions, and timetabling, every department works together in real time. Empower your teachers, engage parents, and give school directors complete operational clarity without the paperwork chaos.
            </p>

            <div className="hero-buttons">
              <Link to="/book-demo" className="btn btn-primary" style={{ padding: '13px 28px', fontSize: '1rem', fontWeight: 600 }}>
                Book Free Demo <ArrowRight size={17} />
              </Link>
              <a href="#modules" className="btn btn-secondary hero-secondary-cta" style={{ padding: '13px 24px', fontSize: '1rem' }}>
                Explore Modules
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: '18px',
                flexWrap: 'wrap',
                marginTop: '28px',
                fontSize: '0.86rem',
                color: 'var(--color-teal)',
                fontWeight: 600
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} style={{ color: 'var(--color-green)' }} /> 100% CBC & CBE Compliant
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} style={{ color: 'var(--color-green)' }} /> Live M-Pesa Fee Sync
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Check size={16} style={{ color: 'var(--color-green)' }} /> 500+ Schools Managed
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/slider/teacher.png"
              alt="Teacher using TrendScore School Management Platform"
              className="hero-slide-image"
            />
            <div className="hero-image-fade hero-image-fade-side" />
            <div className="hero-image-fade hero-image-fade-bottom" />

            <div className="hero-floating-cards">
              <div className="hero-floating-card hero-floating-card-1">
                <span className="hero-floating-icon" style={{ background: 'rgba(249, 115, 22, 0.12)', color: 'var(--color-orange)' }}>
                  <GraduationCap size={22} />
                </span>
                <span>
                  <strong>CBE Assessments</strong>
                  <small>Rubric grading in minutes</small>
                </span>
              </div>

              <div className="hero-floating-card hero-floating-card-2">
                <span className="hero-floating-icon" style={{ background: 'rgba(34, 197, 94, 0.12)', color: '#22c55e' }}>
                  <Coins size={22} />
                </span>
                <span>
                  <strong>M-Pesa Fee Sync</strong>
                  <small>Real-time receipts & logs</small>
                </span>
              </div>

              <div className="hero-floating-card hero-floating-card-3">
                <span className="hero-floating-icon" style={{ background: 'rgba(15, 76, 92, 0.12)', color: 'var(--color-teal)' }}>
                  <Users size={22} />
                </span>
                <span>
                  <strong>Connected Portals</strong>
                  <small>Teachers, parents & learners</small>
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 8 Modules Platform Section (Directly Below Hero - 2 Column Layout with Fancy Module Pills) */}
      <section className="modules-overview-section" id="modules">
        {/* Subtle top-right organic sky-blue corner shape matching slide mockup */}
        <div className="modules-corner-top-decor" aria-hidden="true" />

        {/* Dual swoosh bottom-left wave graphic (Orange & Dark Teal) */}
        <svg
          className="modules-corner-wave"
          viewBox="0 0 320 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Deep dark teal base swoop */}
          <path
            d="M0 135 C70 148 135 158 260 180 H0 V135 Z"
            fill="#073B45"
          />
          {/* Bright brand orange swoop */}
          <path
            d="M0 90 C85 96 160 126 295 180 C260 180 195 170 135 160 C70 148 20 135 0 120 V90 Z"
            fill="#F97316"
          />
        </svg>

        <div className="container modules-container">
          <div className="modules-overview-grid">
            {/* Left Column: Pill Badge, Kicker, Heading, and Description */}
            <motion.div className="modules-text-col" {...fadeUp}>
              <div className="modules-badge-pill">
                8 MODULES | PLATFORM
              </div>

              <div className="modules-accent-bar" />

              <div className="modules-kicker">
                WHAT IS TRENDSCORE
              </div>

              <h2 className="modules-heading">
                One Learner Record.<br />
                Every Workflow <span className="modules-highlight">Connected.</span>
              </h2>

              <p className="modules-desc">
                Kenyan schools run on paper registers and disconnected spreadsheets. TrendScore ties admissions, staff, timetable, attendance, assessment, pathways, communication and fees into a single platform – so information flows instead of getting lost.
              </p>

              <div className="modules-cta-row">
                <Link to="/book-demo" className="btn btn-primary" style={{ padding: '12px 26px', fontSize: '0.98rem' }}>
                  Book Free Demo <ArrowRight size={16} />
                </Link>
                <Link to="/pricing" className="btn btn-secondary" style={{ padding: '12px 24px', fontSize: '0.98rem' }}>
                  See Pricing Plans
                </Link>
              </div>
            </motion.div>

            {/* Right Column: 8 Colorful Rounded Module Pills with Circular Icons */}
            <motion.div
              className="modules-list-col"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              {modulesList.map((mod) => {
                const IconComponent = mod.icon;
                return (
                  <Link
                    to={mod.link}
                    key={mod.name}
                    className="module-pill-item"
                    style={{
                      '--mod-color': mod.color,
                      '--mod-bg': mod.bgColor,
                      '--mod-hover-bg': mod.hoverBg
                    }}
                  >
                    <div className="module-pill-icon-wrap" style={{ backgroundColor: mod.color }}>
                      <IconComponent size={22} color="#ffffff" strokeWidth={2.3} />
                    </div>
                    <span className="module-pill-title">{mod.name}</span>
                    <span className="module-pill-arrow">
                      <ChevronRight size={18} />
                    </span>
                  </Link>
                );
              })}
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
