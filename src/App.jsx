import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Coins, GraduationCap, Users } from 'lucide-react';
import PageLayout from './components/PageLayout';

// Core Pages
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import BookDemo from './pages/BookDemo';
import Register from './pages/Register';
import ProductTemplate from './pages/ProductTemplate';
import PortalTemplate from './pages/PortalTemplate';
import SolutionTemplate from './pages/SolutionTemplate';
import CompareTemplate from './pages/CompareTemplate';
import ResourcePages from './pages/ResourcePages';

// Basic Static Pages
const About = () => (
  <div style={{ paddingBottom: '80px' }}>
    {/* Hero */}
    <section style={{
      background: 'linear-gradient(135deg, #0f4c5c 0%, #073b45 100%)',
      paddingTop: '160px', paddingBottom: '80px', color: '#FFFFFF'
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <span className="badge badge-orange">Our Story</span>
        <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#FFFFFF', margin: '20px 0 24px', lineHeight: 1.2 }}>
          Built in Nairobi.<br />For Every African School.
        </h1>
        <p style={{ fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto', opacity: 0.85, lineHeight: 1.7 }}>
          TrendScore was founded by a team of educators and software engineers who experienced first-hand how
          broken school administration was in Kenya. We set out to build the ERP we always wished existed.
        </p>
      </div>
    </section>

    {/* School Challenges */}
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-teal">The Challenges</span>
          <h2>Where Your Software Fails.</h2>
          <p>Most tools were built as simple databases, failing to solve the complex needs of modern Competency-Based Education (CBE) and finance control.</p>
        </div>

        <div className="challenges-grid">
          <div className="challenge-card">
            <div className="challenge-icon">
              <GraduationCap size={24} />
            </div>
            <h3>Academic & CBE Chaos</h3>
            <p>Manual grading and spreadsheets turn CBE assessments (rubrics, portfolios, EE/ME scores) into a bureaucratic nightmare for teachers.</p>
          </div>

          <div className="challenge-card">
            <div className="challenge-icon">
              <Coins size={24} />
            </div>
            <h3>Leaking Fee Revenues</h3>
            <p>Without live M-Pesa reconciliation, school directors struggle to audit billing balances and arrears collections.</p>
          </div>

          <div className="challenge-card">
            <div className="challenge-icon">
              <Users size={24} />
            </div>
            <h3>Disengaged Parents</h3>
            <p>Parents are left in the dark when results are shared months late and fee statements require physical receipt pickups at school offices.</p>
          </div>
        </div>
      </div>
    </section>

    {/* KPIs */}
    <section className="section" style={{ background: '#FFFFFF' }}>
      <div className="container">
        <div className="grid-3" style={{ textAlign: 'center', gap: '32px' }}>
          {[
            { val: '500+', lbl: 'Schools & Campuses', sub: 'Across Kenya and East Africa' },
            { val: '150,000+', lbl: 'Learners Managed', sub: 'Active on the platform daily' },
            { val: 'KSh 1.2B+', lbl: 'Fees Processed', sub: 'Reconciled through M-Pesa & bank feeds' },
          ].map((k, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px 24px' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-orange)', marginBottom: '8px' }}>{k.val}</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-teal)', marginBottom: '4px' }}>{k.lbl}</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{k.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section">
      <div className="container grid-2" style={{ gap: '64px', alignItems: 'center' }}>
        <div>
          <span className="badge badge-teal">Our Mission</span>
          <h2 style={{ marginTop: '16px', marginBottom: '20px' }}>To make every school in Africa run like a world-class institution</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, marginBottom: '24px' }}>
            We believe school directors, teachers, and parents deserve software that works the way African education works — 
            with M-Pesa, with CBE, with SMS, and with the nuances of multi-stream institutions.
          </p>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8 }}>
            Our platform is continuously updated to reflect changes to KNEC guidelines, KRA deduction tables, and 
            Ministry of Education reporting formats.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { title: 'Kenya Data Protection Act Compliant', desc: 'Student data stays encrypted and isolated per institution.' },
            { title: 'CBE-First Engineering', desc: 'Built from the ground up for CBC — not retrofitted from legacy systems.' },
            { title: 'Local Support Team in Nairobi', desc: 'Real people who understand Kenyan school ops answer your calls.' },
            { title: 'Continuous KNEC Updates', desc: 'We monitor policy changes and push compliance updates automatically.' },
          ].map((item, i) => (
            <div key={i} className="glass-panel" style={{ padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#FFFFFF' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--color-orange)', marginTop: '6px', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, color: 'var(--color-teal)', marginBottom: '4px' }}>{item.title}</div>
                <div style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Office Info */}
    <section className="section" style={{ background: 'var(--color-teal-light)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <span className="badge badge-teal">Our Office</span>
        <h2 style={{ marginTop: '16px', marginBottom: '16px', color: 'var(--color-teal)' }}>Come Visit Us in Westlands</h2>
        <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
          Delta Corner Tower A, 4th Floor, Ring Rd Westlands, Nairobi.<br />
          <strong>support@trendscore.co.ke</strong> · +254 700 000 000
        </p>
        <a href="/book-demo" className="btn btn-primary">Book a Demo at Our Office →</a>
      </div>
    </section>
  </div>
);

const Contact = () => (
  <div className="container" style={{ padding: '160px 24px 80px 24px', minHeight: '60vh' }}>
    <span className="badge badge-orange">Contact Support</span>
    <h1 style={{ marginBottom: '24px' }}>Get in Touch</h1>
    <div className="grid-2" style={{ marginTop: '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <p style={{ fontSize: '1.1rem' }}>Have questions about setup, billing, or feature customizations? Our support officers are ready to help you.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <strong style={{ color: 'var(--color-teal)' }}>Office Address:</strong>
            <p>Delta Corner Tower A, 4th Floor, Ring Rd, Westlands, Nairobi</p>
          </div>
          <div>
            <strong style={{ color: 'var(--color-teal)' }}>Email:</strong>
            <p>support@trendscore.co.ke</p>
          </div>
          <div>
            <strong style={{ color: 'var(--color-teal)' }}>Phone Support:</strong>
            <p>+254 700 000 000 (Mon - Fri, 8:00 AM - 5:00 PM EAT)</p>
          </div>
        </div>
      </div>
      <div style={{ background: '#FFFFFF', padding: '32px', borderRadius: '18px', border: '1px solid #E2E8F0', boxShadow: 'var(--shadow-md)' }}>
        <h3 style={{ marginBottom: '20px' }}>Send Us a Message</h3>
        <form onSubmit={(e) => { e.preventDefault(); alert('Message sent successfully!'); }}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" className="form-control" placeholder="Your full name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Email address" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea className="form-control" rows="4" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
        </form>
      </div>
    </div>
  </div>
);

const Privacy = () => (
  <div className="container" style={{ padding: '160px 24px 80px 24px', minHeight: '60vh' }}>
    <h1>Privacy Policy</h1>
    <p style={{ marginTop: '24px' }}>Last Updated: May 2026</p>
    <p style={{ marginTop: '16px' }}>TrendScore is committed to securing school and student data in accordance with the Kenya Data Protection Act. Student academic and personal data is encrypted both in transit and at rest.</p>
  </div>
);

const Terms = () => (
  <div className="container" style={{ padding: '160px 24px 80px 24px', minHeight: '60vh' }}>
    <h1>Terms of Service</h1>
    <p style={{ marginTop: '24px' }}>Last Updated: May 2026</p>
    <p style={{ marginTop: '16px' }}>By deploying the TrendScore School ERP platform, the institution agrees to clear operational subscription dues in accordance with chosen plans. SLA support targets are 99.9% uptime.</p>
  </div>
);

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Navigate to="/register" replace />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Dynamic Templates */}
          <Route path="/features/:id" element={<ProductTemplate />} />
          <Route path="/modules/:id" element={<ProductTemplate />} />
          <Route path="/portals/:id" element={<PortalTemplate />} />
          <Route path="/solutions/:id" element={<SolutionTemplate />} />
          <Route path="/compare/:id" element={<CompareTemplate />} />
          <Route path="/resources/:id" element={<ResourcePages />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
