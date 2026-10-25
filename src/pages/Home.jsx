import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Check, Coins, GraduationCap, ShieldCheck, Users, UsersRound, MessageSquare, MessageCircle, Video,
  UserPlus, UserRoundPlus, UserRound, ClipboardCheck, Bus, Route, Calendar, CalendarDays, CalendarHeart, Clock,
  ChevronRight, School, Wallet, Laptop, CircleCheck, ReceiptText, Smartphone, Bed, Signpost, BarChart3,
  BookOpen, Store, BrainCircuit, PlugZap, LayoutGrid,
  Zap, CreditCard, Receipt, Compass, Bot, Layers, LayoutDashboard, Home as HomeIcon, HeartHandshake,
  Eye, TrendingUp
} from 'lucide-react';
import InteractivePortals from '../components/InteractivePortals';
import CBECompetencyCard from '../components/CBECompetencyCard';
import SeniorSchoolPathways from '../components/SeniorSchoolPathways';

// 5 Ecosystem Categories with Modules
const moduleCategories = [
  {
    key: 'operations',
    name: 'School Operations',
    labels: 'Admissions · Students · Staff · Timetable',
    color: '#0284C7',
    icon: School,
    modules: [
      { name: 'Admissions', desc: 'Welcome learners and manage enrolment.', icon: UserPlus, color: '#0284C7', link: '/features/admissions' },
      { name: 'Student Management', desc: 'Organise learner records and class placement.', icon: GraduationCap, color: '#2563EB', link: '/features/academics' },
      { name: 'Tutor & Staff Management', desc: 'Manage teachers and teaching duties.', icon: Users, color: '#4F46E5', link: '/features/hr' },
      { name: 'Attendance & Timetable', desc: 'Track class registers and lesson schedules.', icon: CalendarDays, color: '#0891B2', link: '/modules/timetable' },
    ]
  },
  {
    key: 'finance',
    name: 'Finance & Resources',
    labels: 'Fees · Payments · Expenses',
    color: '#EA580C',
    icon: Wallet,
    modules: [
      { name: 'Fees Management', desc: 'Manage fee structures, invoices and balances.', icon: CreditCard, color: '#EA580C', link: '/features/finance' },
      { name: 'Automated Fee Sync', desc: 'Instant M-Pesa reconciliation and receipts.', icon: Zap, color: '#16A34A', link: '/features/finance' },
      { name: 'Expenses', desc: 'Record and monitor school expenditure.', icon: Receipt, color: '#D97706', link: '/features/finance' },
      { name: 'Clockin & Timesheets', desc: 'Record staff attendance and work hours.', icon: Clock, color: '#F97316', link: '/modules/attendance' },
    ]
  },
  {
    key: 'community',
    name: 'School Community',
    labels: 'Parents · Communication · Transport',
    color: '#16A34A',
    icon: HeartHandshake,
    modules: [
      { name: 'Parent App', desc: 'Keep parents informed and connected.', icon: Smartphone, color: '#E11D48', link: 'https://play.google.com/store/search?q=TrendScore&c=apps', isExternal: true },
      { name: 'Communication', desc: 'School announcements, SMS and notices.', icon: MessageSquare, color: '#2563EB', link: '/features/communication' },
      { name: 'Transport', desc: 'Coordinate school transport operations.', icon: Bus, color: '#9333EA', link: '/modules/transport' },
      { name: 'Boarding & Events', desc: 'Manage boarding workflows, clubs and events.', icon: HomeIcon, color: '#059669', link: '/modules/attendance' },
    ]
  },
  {
    key: 'academics',
    name: 'Academic Intelligence',
    labels: 'Assessment · CBC · Pathways · Analytics',
    color: '#7C3AED',
    icon: BrainCircuit,
    modules: [
      { name: 'Assessment & Grading', desc: 'Track achievement and CBE rubrics.', icon: ClipboardCheck, color: '#7C3AED', link: '/features/assessment' },
      { name: 'CBC / CBE Pathways', desc: 'Support junior & senior school guidance.', icon: Compass, color: '#0284C7', link: '#pathways' },
      { name: 'School Reports & Analytics', desc: 'Turn data into useful insights and reports.', icon: BarChart3, color: '#0D9488', link: '/features/analytics' },
      { name: 'AI School Assistant', desc: 'Assist with workflows, learning and support.', icon: Bot, color: '#6366F1', link: '/features/academics' },
    ]
  },
  {
    key: 'digital',
    name: 'Digital Campus',
    labels: 'LMS · Content · Marketplace · AI',
    color: '#0D9488',
    icon: Laptop,
    modules: [
      { name: 'Digital Campus & LMS', desc: 'Extend learning through digital content.', icon: BookOpen, color: '#8B5CF6', link: '/features/academics' },
      { name: 'Content Marketplace', desc: 'Create · Teach · Earn educational content.', icon: Store, color: '#DB2777', link: '/features/academics' },
      { name: 'Integrations', desc: 'M-Pesa, WhatsApp, SMS and biometrics.', icon: Layers, color: '#0284C7', link: '#integrations' },
      { name: 'Dedicated Portals', desc: 'Admin, Teacher and Learner self-service.', icon: LayoutDashboard, color: '#0D9488', link: '#tour' },
    ]
  }
];

const Home = () => {
  const [mobileCategory, setMobileCategory] = React.useState('all');

  // Animation presets
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 }
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

  return (
    <div className="home-wrapper">
      {/* 2. Hero Section - Refined Split Hero with 4 Audience Cards */}
      <section className="hero-section hero-slider-section" style={{ background: '#FFFFFF' }}>
        <div className="hero-slide-content">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >


            <h1 className="hero-title" style={{ fontSize: 'clamp(2.4rem, 3.8vw, 3.8rem)', lineHeight: 1.12, color: 'var(--color-teal)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: '18px' }}>
              Your Whole School Under One Roof.
            </h1>

            <p className="hero-subtitle" style={{ fontSize: '1.08rem', lineHeight: 1.68, color: '#475569', maxWidth: '540px', marginBottom: '26px' }}>
              Run your school smarter, without stretching your budget. Trends CORE brings administrators, teachers, staff, parents, learners and transport teams together on one affordable platform — making school management simpler and school-home connections stronger.
            </p>

            <div className="hero-buttons">
              <a
                href="https://play.google.com/store/search?q=TrendScore&c=apps"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-playstore-btn"
                id="hero-playstore-cta"
                title="Download Trends CORE App on Google Play Store"
              >
                <svg viewBox="0 0 512 512" width="22" height="22" aria-hidden="true" style={{ flexShrink: 0 }}>
                  <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
                  <path fill="#34A853" d="M47 0C34 7.2 24 21.6 24 39.5v433c0 17.9 10 32.3 23 39.5l257-257L47 0z" />
                  <path fill="#EA4335" d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
                  <path fill="#FBBC04" d="M461.2 232.7L385.4 189l-60.1 45.3 60.1 45.3 75.8-43.7c9.5-5.5 15.8-15.6 15.8-26.6s-6.3-21.1-15.8-26.6z" />
                </svg>
                <div className="hero-playstore-text">
                  <span className="hero-playstore-sub">DOWNLOAD FROM</span>
                  <span className="hero-playstore-title">Play Store App</span>
                </div>
              </a>
              <a
                href="#modules"
                className="btn btn-secondary hero-secondary-cta"
                style={{ padding: '13px 24px', fontSize: '1rem', height: '52px', display: 'inline-flex', alignItems: 'center' }}
              >
                Explore Modules
              </a>
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
              alt="Teacher using Trends CORE School Management Platform"
              className="hero-slide-image"
            />
            <div className="hero-image-fade hero-image-fade-side" />
            <div className="hero-image-fade hero-image-fade-bottom" />

            {/* ── Animated Chat Bubble Notifications (Stacked column, staggered appearance, glance hold, sequential exit, loop) ── */}
            <div className="hero-floating-cards">
              {[
                { role: 'Parent',    msg: 'School fee received ✓' },
                { role: 'Teacher',   msg: 'CBE report submitted ✓' },
                { role: 'Admin',     msg: 'New student admitted ✓' },
                { role: 'Transport', msg: 'Route A trip started.\nArriving in 10 mins' },
                { role: 'Student',   msg: 'Assignment marked ✓' },
              ].map(({ role, msg }, i) => {
                const totalCycle = 11.5;
                const inStart = 0.10 + i * 0.65;
                const inEnd = inStart + 0.35;
                const outStart = 7.05 + i * 0.55;
                const outEnd = outStart + 0.40;

                const times = [
                  0,
                  inStart / totalCycle,
                  inEnd / totalCycle,
                  outStart / totalCycle,
                  outEnd / totalCycle,
                  1,
                ];

                return (
                  <motion.div
                    key={role}
                    className="hero-bubble"
                    initial={{ opacity: 0, x: 20, scale: 0.94 }}
                    animate={{
                      opacity: [0, 0, 1, 1, 0, 0],
                      x:       [20, 20, 0, 0, -8, 20],
                      scale:   [0.94, 0.94, 1, 1, 0.96, 0.94],
                    }}
                    transition={{
                      duration: totalCycle,
                      times,
                      ease: 'easeInOut',
                      repeat: Infinity,
                    }}
                  >
                    <span className="hero-bubble-tail" aria-hidden="true" />
                    <span className="hero-toast-check"><Check size={12} strokeWidth={3.5} /></span>
                    <div className="hero-toast-body">
                      <span className="hero-toast-role">{role}</span>
                      <span className="hero-toast-msg">{msg}</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── VALUE PROPOSITION BOXES ── */}
      <section className="value-boxes-section">
        <div className="container">
          <div className="value-boxes-grid">
            <div className="value-box">
              <div className="value-box-icon" style={{ backgroundColor: '#EFF6FF', color: '#2563EB' }}>
                <Layers size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="value-box-content">
                <h3>Pay Modules Used</h3>
                <p>Only pay for the modules your school actually uses. Scale up or down anytime — zero waste.</p>
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-icon" style={{ backgroundColor: '#FFF7ED', color: '#EA580C' }}>
                <Smartphone size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="value-box-content">
                <h3>Custom Branded Apps</h3>
                <p>Get your own branded mobile app with your school's logo, colours and identity on the Play Store.</p>
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-icon" style={{ backgroundColor: '#ECFDF5', color: '#059669' }}>
                <Zap size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="value-box-content">
                <h3>Offline Version</h3>
                <p>Keep working even without internet. Data syncs automatically when connectivity is restored.</p>
              </div>
            </div>
            <div className="value-box">
              <div className="value-box-icon" style={{ backgroundColor: '#F5F3FF', color: '#7C3AED' }}>
                <ShieldCheck size={24} strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="value-box-content">
                <h3>On Premise Solution</h3>
                <p>Host TrendScore on your own server for full data control, privacy, and independence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE TRENDS CORE ECOSYSTEM ── */}
      <section className="eco-modules-section" id="modules">
        <div className="container">

          {/* Section Header */}
          <div className="section-header eco-section-header">
            <h2>Experience a full school ecosystem.</h2>
            <p>Trends CORE, a complete school operating system, all processes are recorded in one software.</p>
          </div>

          {/* Mobile Category Filter Tabs (visible on mobile/tablet) */}
          <div className="eco-mobile-tabs" role="tablist" aria-label="Filter modules by category">
            <button
              type="button"
              role="tab"
              aria-selected={mobileCategory === 'all'}
              className={`eco-mobile-tab ${mobileCategory === 'all' ? 'is-active' : ''}`}
              onClick={() => setMobileCategory('all')}
            >
              <span>All Categories</span>
            </button>
            {moduleCategories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                role="tab"
                aria-selected={mobileCategory === cat.key}
                className={`eco-mobile-tab ${mobileCategory === cat.key ? 'is-active' : ''}`}
                onClick={() => setMobileCategory(cat.key)}
              >
                <span className="eco-mobile-tab-dot" style={{ backgroundColor: cat.color }} aria-hidden="true" />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Unified Ecosystem Table with Category Cards as Column Headers */}
          <div className="eco-table-wrap" role="region" aria-label="Trends CORE Modules Table">
            <div className="eco-table-columns">
              {moduleCategories.map((cat) => {
                const isHiddenOnMobile = mobileCategory !== 'all' && mobileCategory !== cat.key;
                return (
                  <div key={cat.key} className={`eco-table-column ${isHiddenOnMobile ? 'eco-mobile-hidden' : ''}`}>
                    {/* Category Card Header - Colored Background, No Icon */}
                    <div className="eco-table-col-header" style={{ backgroundColor: cat.color }}>
                      <div className="eco-cat-text">
                        <div className="eco-cat-title">{cat.name}</div>
                        <p className="eco-cat-labels">{cat.labels}</p>
                      </div>
                    </div>

                    {/* Column Module Cells */}
                    <div className="eco-col-cells">
                      {cat.modules.map((mod) => {
                        const ModIcon = mod.icon;
                        const isAnchor = mod.link.startsWith('#');
                        const isExternal = mod.isExternal;

                        const cellInner = (
                          <>
                            <div className="eco-table-cell-left">
                              <div
                                className="eco-table-icon-circle"
                                style={{ backgroundColor: mod.color, color: '#ffffff' }}
                              >
                                <ModIcon size={18} strokeWidth={2.2} aria-hidden="true" />
                              </div>
                              <div className="eco-table-text">
                                <span className="eco-table-name">{mod.name}</span>
                                <span className="eco-table-desc">{mod.desc}</span>
                              </div>
                            </div>
                            <ChevronRight size={15} strokeWidth={2} className="eco-table-chevron" aria-hidden="true" />
                          </>
                        );

                        if (isExternal) {
                          return (
                            <a
                              key={mod.name}
                              href={mod.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="eco-table-cell"
                              title={`${mod.name} — ${mod.desc}`}
                            >
                              {cellInner}
                            </a>
                          );
                        }

                        if (isAnchor) {
                          return (
                            <a
                              key={mod.name}
                              href={mod.link}
                              className="eco-table-cell"
                              title={`${mod.name} — ${mod.desc}`}
                            >
                              {cellInner}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={mod.name}
                            to={mod.link}
                            className="eco-table-cell"
                            title={`${mod.name} — ${mod.desc}`}
                          >
                            {cellInner}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="eco-bottom-bar">
            <Link to="/features/academics" className="eco-explore-btn">
              <LayoutGrid size={15} strokeWidth={2.2} aria-hidden="true" />
              <span>Explore All Modules</span>
              <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </Link>

            <div className="eco-brand-statement">
              <span className="eco-brand-line" aria-hidden="true" />
              <span><strong>Trends CORE</strong> — More than a system. It's your school's rhythm.</span>
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

      {/* 8. Senior School Pathways (Hidden) */}
      {/* <SeniorSchoolPathways /> */}

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
