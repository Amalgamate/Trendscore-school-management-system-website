import React from 'react';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Coins,
  Download,
  ExternalLink,
  GraduationCap,
  LayoutDashboard,
  Phone,
  Mail,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  Users
} from 'lucide-react';

const ADMIN_PORTAL_URL = 'https://admin.trendscore.co.ke/';
const PLAY_STORE_URL = 'https://play.google.com/store/search?q=TrendScore&c=apps';

const GooglePlayBadge = () => (
  <a
    href={PLAY_STORE_URL}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: '#000000',
      color: '#FFFFFF',
      padding: '10px 22px',
      borderRadius: '10px',
      textDecoration: 'none',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)';
    }}
  >
    <svg viewBox="0 0 512 512" width="26" height="26">
      <path fill="#4285F4" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
      <path fill="#34A853" d="M47 0C34 7.2 24 21.6 24 39.5v433c0 17.9 10 32.3 23 39.5l257-257L47 0z" />
      <path fill="#EA4335" d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z" />
      <path fill="#FBBC04" d="M461.2 232.7L385.4 189l-60.1 45.3 60.1 45.3 75.8-43.7c9.5-5.5 15.8-15.6 15.8-26.6s-6.3-21.1-15.8-26.6z" />
    </svg>
    <div style={{ textAlign: 'left', lineHeight: 1.15 }}>
      <div style={{ fontSize: '0.68rem', letterSpacing: '0.04em', textTransform: 'uppercase', opacity: 0.85 }}>
        GET IT ON
      </div>
      <div style={{ fontSize: '1.05rem', fontWeight: 700, fontFamily: 'var(--font-headings)' }}>
        Google Play
      </div>
    </div>
  </a>
);

const BecomeAnAgent = () => {
  return (
    <div style={{ background: '#FFFFFF', minHeight: '100vh', paddingBottom: '90px' }}>
      {/* Hero Header - White Background, Straight to the Point */}
      <section
        style={{
          background: '#FFFFFF',
          paddingTop: '140px',
          paddingBottom: '50px',
          borderBottom: '1px solid #E2E8F0'
        }}
      >
        <div className="container" style={{ textAlign: 'center', maxWidth: '820px' }}>
          <span
            className="badge badge-orange"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '16px',
              fontSize: '0.8rem',
              padding: '6px 14px'
            }}
          >
            <Sparkles size={14} /> Trends CORE Sales Agent Network
          </span>

          <h1
            style={{
              fontSize: '2.8rem',
              fontWeight: 800,
              color: 'var(--color-teal)',
              lineHeight: 1.2,
              marginBottom: '16px'
            }}
          >
            Become a Trends CORE Agent
          </h1>

          <p
            style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.65,
              marginBottom: '28px'
            }}
          >
            Introduce schools to Kenya’s premier CBE-ready School ERP. Build relationships with school principals,
            close software subscriptions, and earn commissions on every school you onboard.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}
          >
            <a
              href={ADMIN_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '13px 28px',
                fontSize: '1rem',
                textDecoration: 'none',
                fontWeight: 600
              }}
            >
              Apply to Join (Admin Portal) <ArrowRight size={17} />
            </a>
            <GooglePlayBadge />
          </div>
        </div>
      </section>

      <div className="container" style={{ maxWidth: '1000px', paddingTop: '50px' }}>
        {/* SECTION 1: What is the Agents Thing */}
        <section
          style={{
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(15, 76, 92, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-teal)'
              }}
            >
              <BriefcaseBusiness size={20} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-teal)', margin: 0 }}>
              1. What is the Trends CORE Agent Program?
            </h2>
          </div>

          <p style={{ fontSize: '1.02rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
            Trends CORE is the unified school management system (ERP) built in Nairobi for Kenyan schools. It automates
            <strong> CBC & CBE assessment rubrics, real-time M-Pesa fee collections, attendance, report cards, and parent communications</strong>.
          </p>

          <p style={{ fontSize: '1.02rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
            As an <strong>independent sales agent</strong>, you are our on-the-ground partner:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '14px'
            }}
          >
            {[
              'Connect with primary, junior, and senior school directors in your region.',
              'Demo the Trends CORE platform and show how it cuts administrative paperwork.',
              'Register new school accounts and earn verified commissions on active subscriptions.'
            ].map((text, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '12px 14px',
                  backgroundColor: 'var(--color-bg-light)',
                  borderRadius: '10px',
                  fontSize: '0.92rem',
                  color: 'var(--color-text-primary)'
                }}
              >
                <CheckCircle2 size={18} style={{ color: 'var(--color-green)', flexShrink: 0, marginTop: '2px' }} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2: How to Join */}
        <section
          style={{
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-orange)'
              }}
            >
              <Users size={20} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-teal)', margin: 0 }}>
              2. How to Join (3 Quick Steps)
            </h2>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '22px' }}>
            Getting started takes less than 5 minutes. No prior tech background required—just active connections with schools.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginBottom: '26px'
            }}
          >
            {[
              {
                step: 'Step 1',
                title: 'Apply Online',
                desc: 'Open the Trends CORE Admin Portal and submit your profile and county coverage.'
              },
              {
                step: 'Step 2',
                title: 'Get Verified & Trained',
                desc: 'Our Nairobi team vets your application and provides official demo accounts and sales decks.'
              },
              {
                step: 'Step 3',
                title: 'Introduce Schools & Earn',
                desc: 'Pitch to schools, submit onboardings, and receive approved commission payouts.'
              }
            ].map((s, idx) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #E2E8F0',
                  borderRadius: '12px',
                  padding: '20px',
                  backgroundColor: '#FFFFFF',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'var(--color-orange)',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}
                >
                  {s.step}
                </span>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-teal)', marginBottom: '6px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 20px',
              backgroundColor: 'var(--color-bg-light)',
              borderRadius: '12px',
              flexWrap: 'wrap',
              gap: '14px'
            }}
          >
            <div>
              <div style={{ fontWeight: 700, color: 'var(--color-teal)', fontSize: '0.98rem' }}>
                Ready to register as an agent?
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
                Applications are managed securely via <strong>admin.trendscore.co.ke</strong>
              </div>
            </div>
            <a
              href={ADMIN_PORTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '0.92rem',
                textDecoration: 'none'
              }}
            >
              Open Admin Portal & Apply <ExternalLink size={15} />
            </a>
          </div>
        </section>

        {/* SECTION 3: What to Gain */}
        <section
          style={{
            padding: '36px',
            borderRadius: '16px',
            border: '1px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '32px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-green)'
              }}
            >
              <Coins size={20} />
            </div>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--color-teal)', margin: 0 }}>
              3. What You Gain
            </h2>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
            Here is what you earn and receive as an authorized Trends CORE sales agent:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
              marginBottom: '16px'
            }}
          >
            {[
              {
                icon: Coins,
                title: 'Direct Commissions',
                desc: 'Earn competitive commissions for every eligible school that subscribes to Trends CORE.',
                color: 'var(--color-orange)'
              },
              {
                icon: TrendingUp,
                title: 'High Conversion Rate',
                desc: 'Schools actively seek CBC/CBE and M-Pesa automated software, making pitches easy to close.',
                color: 'var(--color-teal)'
              },
              {
                icon: LayoutDashboard,
                title: 'Agent Toolkit & Training',
                desc: 'Free product demo credentials, slide decks, printable flyers, and direct staff support.',
                color: 'var(--color-green)'
              },
              {
                icon: ShieldCheck,
                title: 'Live Referral Tracking',
                desc: 'Transparent pipeline monitoring via the Trends CORE portal to track each referral.',
                color: 'var(--color-teal)'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    backgroundColor: 'var(--color-bg-light)',
                    border: '1px solid #E2E8F0'
                  }}
                >
                  <div style={{ color: item.color, marginBottom: '10px' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.05rem', color: 'var(--color-teal)', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', margin: 0, fontStyle: 'italic' }}>
            * Note: Commission rates and eligibility are governed by the Trends CORE Sales Agent Programme Agreement. Payouts are made upon verified subscription settlement.
          </p>
        </section>

        {/* SECTION 4: The App on Playstore */}
        <section
          style={{
            padding: '36px',
            borderRadius: '16px',
            border: '2px solid rgba(15, 76, 92, 0.15)',
            backgroundColor: '#F8FAFC',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: '40px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ maxWidth: '580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Smartphone size={22} style={{ color: 'var(--color-teal)' }} />
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    color: 'var(--color-orange)',
                    letterSpacing: '0.05em'
                  }}
                >
                  Mobile Access
                </span>
              </div>
              <h2 style={{ fontSize: '1.5rem', color: 'var(--color-teal)', marginBottom: '8px' }}>
                4. Download the App on Google Play Store
              </h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '14px' }}>
                Show prospective schools how Trends CORE works on smartphones. School directors, teachers, and parents
                use the Android app for instant CBE grading rubrics, live fee balances, and school announcements.
              </p>
              <div style={{ display: 'flex', gap: '18px', fontSize: '0.88rem', color: 'var(--color-text-primary)' }}>
                <span>✓ Live demo on phone</span>
                <span>✓ M-Pesa fee receipts</span>
                <span>✓ CBE rubrics viewer</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
              <GooglePlayBadge />
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>
                Available for Android smartphones
              </span>
            </div>
          </div>
        </section>

        {/* Quick Contact & Bottom CTA */}
        <div
          style={{
            textAlign: 'center',
            padding: '30px 20px',
            borderTop: '1px solid #E2E8F0',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-teal)' }}>
            Questions about the agent program?
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', fontSize: '0.92rem', color: 'var(--color-text-secondary)' }}>
            <a href="tel:0713612141" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'inherit' }}>
              <Phone size={16} style={{ color: 'var(--color-orange)' }} /> Call: 0713612141
            </a>
            <a href="mailto:info@trendscore.co.ke" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'inherit' }}>
              <Mail size={16} style={{ color: 'var(--color-orange)' }} /> info@trendscore.co.ke
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnAgent;
