import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <Link to="/" className="logo-link" style={{ color: '#FFFFFF' }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#FFFFFF"/>
                <path d="M12 19L16 11L20 19" stroke="#F97316" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="16" cy="11" r="2" fill="#F97316"/>
              </svg>
              <span className="logo-text" style={{ color: '#FFFFFF' }}>Trend<span style={{ color: '#F97316' }}>Score</span></span>
            </Link>
            <p>The Digital Operating System for Modern Schools, bringing academics, assessment, finance, operations, communication, and intelligence into one unified platform.</p>
            <div className="footer-socials">
              <a href="#" className="footer-social-link"><Facebook size={18} /></a>
              <a href="#" className="footer-social-link"><Twitter size={18} /></a>
              <a href="#" className="footer-social-link"><Linkedin size={18} /></a>
              <a href="#" className="footer-social-link"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Column 1: Core Modules */}
          <div className="footer-column">
            <h3>Platform</h3>
            <ul className="footer-links">
              <li><Link to="/features/academics" className="footer-link">Academics</Link></li>
              <li><Link to="/features/assessment" className="footer-link">CBE Assessment</Link></li>
              <li><Link to="/features/finance" className="footer-link">Fees & Billing</Link></li>
              <li><Link to="/features/hr" className="footer-link">HR & Staff</Link></li>
              <li><Link to="/features/admissions" className="footer-link">Admissions</Link></li>
              <li><Link to="/features/communication" className="footer-link">Communication</Link></li>
              <li><Link to="/features/analytics" className="footer-link">Reports & Analytics</Link></li>
            </ul>
          </div>

          {/* Column 2: Portals & Solutions */}
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul className="footer-links">
              <li><Link to="/solutions/primary" className="footer-link">Primary Schools</Link></li>
              <li><Link to="/solutions/junior" className="footer-link">Junior Schools</Link></li>
              <li><Link to="/solutions/senior" className="footer-link">Senior Schools</Link></li>
              <li><Link to="/solutions/tvet" className="footer-link">TVET ERP</Link></li>
              <li><Link to="/solutions/college" className="footer-link">Colleges</Link></li>
              <li><Link to="/solutions/multi-campus" className="footer-link">Multi-Campus</Link></li>
            </ul>
            <h3 style={{ marginTop: '20px', marginBottom: '12px' }}>Portals</h3>
            <ul className="footer-links">
              <li><Link to="/portals/parent" className="footer-link">Parent Portal</Link></li>
              <li><Link to="/portals/learner" className="footer-link">Learner Portal</Link></li>
              <li><Link to="/portals/teacher" className="footer-link">Teacher Portal</Link></li>
              <li><Link to="/portals/admin" className="footer-link">Admin Portal</Link></li>
            </ul>
          </div>

          {/* Column 3: Comparison Pages */}
          <div className="footer-column">
            <h3>Compare</h3>
            <ul className="footer-links">
              <li><Link to="/compare/why-switch" className="footer-link">Why Switch</Link></li>
              <li><Link to="/compare/vs-manual" className="footer-link">vs Manual Processes</Link></li>
              <li><Link to="/compare/vs-legacy" className="footer-link">vs Legacy Systems</Link></li>
              <li><Link to="/compare/vs-spreadsheet" className="footer-link">vs Spreadsheets</Link></li>
              <li><Link to="/compare/vs-multiple" className="footer-link">vs Multiple Apps</Link></li>
              <li><Link to="/pricing" className="footer-link">Pricing Plans</Link></li>
              <li><Link to="/about" className="footer-link">About TrendScore</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Resources */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-links" style={{ gap: '16px', marginBottom: '24px' }}>
              <li style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                <Phone size={18} style={{ color: '#F97316', flexShrink: 0 }} />
                <span>+254 700 000 000</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                <Mail size={18} style={{ color: '#F97316', flexShrink: 0 }} />
                <span>info@trendscore.co.ke</span>
              </li>
              <li style={{ display: 'flex', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                <MapPin size={18} style={{ color: '#F97316', flexShrink: 0 }} />
                <span>Delta Corner, Westlands, Nairobi, Kenya</span>
              </li>
            </ul>
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><Link to="/resources/blog" className="footer-link">Blog Articles</Link></li>
              <li><Link to="/resources/guides" className="footer-link">E-Books & Guides</Link></li>
              <li><Link to="/resources/docs" className="footer-link">Documentation</Link></li>
              <li><Link to="/resources/faq" className="footer-link">Support & FAQ</Link></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} TrendScore School ERP. All rights reserved. Designed for Kenyan Schools.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="footer-bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="footer-bottom-link">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
