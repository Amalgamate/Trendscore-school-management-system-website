import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Play, Sparkles } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const PortalTemplate = () => {
  const { id } = useParams();

  const portalDb = {
    parent: {
      title: 'Parent Portal & Mobile App',
      badge: 'Family Connectedness',
      desc: 'Give parents real-time visibility over their children\'s learning. Check fee balances, download report cards, and pay instantly via M-Pesa.',
      deviceType: 'Mobile-first layout optimized for smartphones',
      mockName: 'parent-portal-home',
      features: [
        'Instant M-Pesa Express fee payments with auto ledger posting',
        'Direct download of term-end CBE assessment reports',
        'Lesson attendance notifications & absence alerts',
        'Direct notice board and calendar tracking tools',
        'Discipline records and guidance updates'
      ],
      journey: 'Parent opens application, reviews outstanding KSh 24,000 balance, pays via integrated M-Pesa trigger, receives automated PDF invoice receipt and SMS ledger update instantly.'
    },
    learner: {
      title: 'Learner Web Portal',
      badge: 'Learner Ownership',
      desc: 'Equip students to keep track of lesson schedules, homework tasks, teacher instructions, and CBE learning area trackers.',
      deviceType: 'Optimized for tablets and computer screens',
      mockName: 'learner-portal-home',
      features: [
        'Interactive timetables and stream lesson plans',
        'Homework submission upload folders with deadline alerts',
        'CBE learning goals and competency levels logs',
        'Teacher study guides and online textbook downloads',
        'Senior school combinations validation checks'
      ],
      journey: 'Student logs in, reviews solar system homework deadline due tomorrow, downloads teacher slides library attachment, uploads homework file, marked as complete.'
    },
    teacher: {
      title: 'Teacher Digital Markbook Portal',
      badge: 'Reduced Bureaucracy',
      desc: 'Save teachers hours of manual report compiling. Grade student competencies, log class attendances, and write observations directly on any device.',
      deviceType: 'Desktop & tablet responsive dashboard',
      mockName: 'teacher-portal',
      features: [
        'KNEC-aligned rubrics grading tool (EE/ME/AE/BE)',
        'Class-stream attendance register checks',
        'Direct parent text message broadcasts',
        'Discipline incident logs submission',
        'Class-wide subject assessment stats summaries'
      ],
      journey: 'Teacher opens Markbook in classroom, selects Science subject, grades 35 students on mixtures identification criteria using EE/ME dropdown selectors, clicks Sync - immediately uploaded.'
    },
    admin: {
      title: 'Administrator Command Portal',
      badge: 'Full Operational Control',
      desc: 'The central nervous system of the school ERP. Configure academic structures, balance accounting ledgers, and manage security parameters.',
      deviceType: 'Optimized for dual-monitor desktop setups',
      mockName: 'administrator-dashboard',
      features: [
        'School structures setup (classes, streams, calendars)',
        'Full financial ledger checks (collections, arrears, budgets)',
        'Detailed teacher activity and class audit reports',
        'System user access control permissions settings',
        'Centralized student registries database control'
      ],
      journey: 'Administrator navigates to collections panel, reviews KSh 12,000,000 school fee receivables, generates term collection logs, audits manual edits logs list to prevent cash leaks.'
    }
  };

  const portal = portalDb[id] || portalDb.parent;

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Portal Hero */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.04) 0%, transparent 100%)', paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="container grid-2">
          <div style={{ alignSelf: 'center' }}>
            <span className="badge badge-teal">{portal.badge}</span>
            <h1 style={{ color: 'var(--color-teal)', marginBottom: '20px' }}>{portal.title}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '16px' }}>
              {portal.desc}
            </p>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-orange)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
              <Sparkles size={16} /> {portal.deviceType}
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <Link to="/book-demo" className="btn btn-primary">Book Demo Walkthrough</Link>
              <Link to="/register" className="btn btn-secondary">Register Institution</Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {id === 'parent' ? (
              <ImagePlaceholder name="parent-portal-home" type="dashboard" height="380px" className="mobile-app" />
            ) : (
              <ImagePlaceholder name={portal.mockName} type="dashboard" height="340px" />
            )}
          </div>
        </div>
      </section>

      {/* Feature List & Journey Walkthrough */}
      <section className="section">
        <div className="container grid-2">
          {/* Features */}
          <div>
            <h2 style={{ marginBottom: '24px', color: 'var(--color-teal)' }}>Capabilities Built-In</h2>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {portal.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', fontSize: '0.95rem', color: 'var(--color-text-primary)', alignItems: 'center' }}>
                  <CheckCircle2 size={18} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* User Journey Scenario */}
          <div className="glass-panel" style={{ padding: '32px', backgroundColor: '#FFFFFF', alignSelf: 'start' }}>
            <h3 style={{ color: 'var(--color-teal)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Play size={18} style={{ color: 'var(--color-orange)' }} /> Interactive Journey Walkthrough
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              {portal.journey}
            </p>
            <div style={{ marginTop: '24px', borderTop: '1px solid var(--color-border)', paddingTop: '16px', fontSize: '0.8rem', color: 'var(--color-text-muted)', display: 'flex', gap: '8px' }}>
              <ShieldCheck size={16} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
              <span>Full audit trailing is synced back to school ledger records automatically.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortalTemplate;
