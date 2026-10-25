import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Check, 
  ShieldCheck, 
  Zap, 
  Smartphone, 
  Coins, 
  GraduationCap, 
  Headphones, 
  Sparkles, 
  ArrowRight,
  Clock,
  Layers,
  Lock,
  FileText,
  HelpCircle
} from 'lucide-react';
import ComparisonTable from '../components/ComparisonTable';

const PLAY_STORE_URL = 'https://play.google.com/store/search?q=TrendScore&c=apps';

const WhyChooseUs = () => {
  const pillars = [
    {
      icon: GraduationCap,
      color: '#0284C7',
      bg: '#F0F9FF',
      title: 'Built From The Ground Up for CBE',
      desc: 'Not a retrofitted 8-4-4 database. Formative rubrics (EE/ME/AE/BE), continuous assessment logs, SBA term scores, and one-click KNEC report cards designed specifically for Kenyan curriculum standards.'
    },
    {
      icon: Coins,
      color: '#16A34A',
      bg: '#F0FDF4',
      title: 'Instant Automated M-Pesa Sync',
      desc: 'Eliminate fake bank slips and manual ledger reconciliation. Parents pay directly via M-Pesa STK push or Paybill, and student fee balances update in real-time with automatic WhatsApp/SMS receipts.'
    },
    {
      icon: Smartphone,
      color: '#F97316',
      bg: '#FFF7ED',
      title: 'Native Android App on Google Play',
      desc: 'Empower everyone on their smartphone. Directors monitor live fee collections, teachers enter rubrics during class, parents track attendance and grades, and transport drivers log arrival times.'
    },
    {
      icon: ShieldCheck,
      color: '#0F766E',
      bg: '#F0FDFA',
      title: 'Kenya Data Protection Act (ODPC) Compliant',
      desc: 'Your school’s student data is fully encrypted, backed up daily, and strictly isolated in secure tenancies compliant with Kenya’s Office of the Data Protection Commissioner regulations.'
    },
    {
      icon: Zap,
      color: '#7C3AED',
      bg: '#F5F3FF',
      title: 'Affordable & Transparent Pricing',
      desc: 'Tailored for Kenyan private, community, and public institutions. Transparent, budget-friendly subscriptions with zero hidden per-parent charges, zero onboarding fees, and free system updates.'
    },
    {
      icon: Headphones,
      color: '#EA580C',
      bg: '#FFF7ED',
      title: 'Local Support Team in Nairobi',
      desc: 'Get fast support from people who understand Kenyan school term schedules, CBE directives, and local billing workflows. Available via direct phone, WhatsApp chat, and on-site visits.'
    }
  ];

  const differentiators = [
    { label: '500+', desc: 'Campuses & Schools' },
    { label: '150,000+', desc: 'Active Learners' },
    { label: '99.9%', desc: 'Platform Uptime' },
    { label: '< 48 Hours', desc: 'Seamless Data Onboarding' }
  ];

  return (
    <div className="why-choose-us-page" style={{ paddingBottom: '90px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #0f4c5c 0%, #073b45 100%)',
        paddingTop: '160px',
        paddingBottom: '80px',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '860px', position: 'relative', zIndex: 2 }}>
          <span className="badge badge-orange" style={{ marginBottom: '16px' }}>
            The Kenyan School ERP Choice
          </span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 4vw, 3.5rem)', fontWeight: 800, color: '#FFFFFF', lineHeight: 1.15, marginBottom: '20px' }}>
            Why Leading Kenyan Schools Choose Trends CORE
          </h1>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.7, opacity: 0.9, maxWidth: '720px', margin: '0 auto 32px' }}>
            From Nairobi to Mombasa and Eldoret, schools are replacing paper chaos and rigid legacy software with Trends CORE — the all-in-one platform built for CBE rubrics, automated M-Pesa fees, and mobile school communities.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ padding: '14px 28px', fontSize: '1rem', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Smartphone size={18} /> Download Play Store App
            </a>
            <Link
              to="/book-demo"
              className="btn btn-secondary"
              style={{ padding: '14px 28px', fontSize: '1rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.3)' }}
            >
              Book a Free Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* KPI Stats Bar */}
      <section style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E8F0', padding: '36px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}>
            {differentiators.map((item, i) => (
              <div key={i} style={{ padding: '10px 16px' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--color-teal)', lineHeight: 1.1, marginBottom: '6px' }}>
                  {item.label}
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', fontWeight: 600 }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 Key Pillars */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '740px', margin: '0 auto 54px' }}>
            <span className="badge badge-teal">Our Competitive Edge</span>
            <h2 style={{ fontSize: '2.4rem', color: 'var(--color-teal)', margin: '14px 0 16px' }}>
              6 Reasons Schools Trust Trends CORE Over Alternative Tools
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.08rem', lineHeight: 1.6 }}>
              We engineered Trends CORE directly alongside Kenyan headteachers, bursars, and ICT directors to solve the real everyday frustrations of school management.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px'
          }}>
            {pillars.map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '32px 28px',
                    border: '1px solid #E2E8F0',
                    boxShadow: '0 4px 16px rgba(15, 23, 42, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: pillar.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: pillar.color
                  }}>
                    <IconComp size={26} strokeWidth={2.2} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-teal)', fontWeight: 700, margin: 0 }}>
                    {pillar.title}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="section" style={{ backgroundColor: '#F8FAFC', padding: '70px 0' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px' }}>
            <span className="badge badge-orange">Side-by-Side Comparison</span>
            <h2 style={{ fontSize: '2.3rem', color: 'var(--color-teal)', margin: '14px 0 16px' }}>
              How Does Trends CORE Compare?
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.6 }}>
              See why switching from physical paper files or generic legacy databases saves hundreds of administrative hours every school term.
            </p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* FAQs and Documentation Teaser Row */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '36px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '10px', backgroundColor: '#F0FDFA', color: 'var(--color-teal)', marginBottom: '16px' }}>
                  <HelpCircle size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-teal)', marginBottom: '10px' }}>
                  Frequently Asked Questions
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Got questions about data migration, M-Pesa API integration, or student count scaling? Browse our straightforward answers.
                </p>
              </div>
              <Link to="/faqs" className="btn btn-secondary" style={{ width: 'fit-content' }}>
                View All FAQs &rarr;
              </Link>
            </div>

            <div style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              padding: '36px 32px',
              border: '1px solid #E2E8F0',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'inline-flex', padding: '10px', borderRadius: '10px', backgroundColor: '#FFF7ED', color: 'var(--color-orange)', marginBottom: '16px' }}>
                  <FileText size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--color-teal)', marginBottom: '10px' }}>
                  Platform Documentation
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  Step-by-step setup guides for CBE assessment templates, student Excel bulk imports, teacher permissions, and parent portal invitations.
                </p>
              </div>
              <Link to="/docs" className="btn btn-secondary" style={{ width: 'fit-content' }}>
                Explore Docs &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section style={{ backgroundColor: 'var(--color-teal)', padding: '70px 0', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 style={{ fontSize: '2.4rem', color: '#FFFFFF', marginBottom: '16px' }}>
            Ready to Upgrade Your School Administration?
          </h2>
          <p style={{ fontSize: '1.1rem', opacity: 0.9, lineHeight: 1.7, marginBottom: '32px' }}>
            Join hundreds of progressive Kenyan schools already streamlining CBE reports and fee operations with Trends CORE.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ backgroundColor: 'var(--color-orange)', padding: '14px 32px', fontSize: '1.05rem' }}
            >
              Get Android App on Play Store
            </a>
            <Link
              to="/book-demo"
              className="btn btn-secondary"
              style={{ backgroundColor: 'transparent', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)', padding: '14px 28px' }}
            >
              Schedule a Free Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
