import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, ChevronDown, BookOpen, GraduationCap, Coins, Users, 
  MessageSquare, BarChart3, Calendar, BookMarked, Bus, ClipboardList, 
  AlertTriangle, Laptop, Landmark, ClipboardCheck, ArrowRight
} from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveMobileSub(null);
  }, [location.pathname]);

  const toggleMobileSub = (name) => {
    if (activeMobileSub === name) {
      setActiveMobileSub(null);
    } else {
      setActiveMobileSub(name);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-link">
          <img
            src="/mainlogo.png"
            alt="TrendScore Logo"
            style={{ height: '80px', width: 'auto', objectFit: 'contain' }}
            onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
          />
          <span className="logo-text" style={{ display: 'none' }}>Trend<span style={{ color: '#F97316' }}>Score</span></span>
        </Link>

        {/* Desktop Nav Menu */}
        <nav>
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            {/* Features Mega Menu */}
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                Features <ChevronDown size={14} />
              </a>
              <div className="mega-menu">
                <div className="mega-menu-title">Core ERP Features</div>
                <Link to="/features/academics" className="mega-menu-link">
                  <BookOpen className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Academics</h4>
                    <p>Classes, subjects, timetables, and learner records.</p>
                  </div>
                </Link>
                <Link to="/features/assessment" className="mega-menu-link">
                  <GraduationCap className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>CBE Assessment</h4>
                    <p>Rubrics, competencies, assessment reports.</p>
                  </div>
                </Link>
                <Link to="/features/finance" className="mega-menu-link">
                  <Coins className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Finance & Billing</h4>
                    <p>Invoices, receipts, M-Pesa automated balances.</p>
                  </div>
                </Link>
                <Link to="/features/hr" className="mega-menu-link">
                  <Users className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>HR & Staff</h4>
                    <p>Staff details, payroll, leaves, appraisals.</p>
                  </div>
                </Link>
                <Link to="/features/admissions" className="mega-menu-link">
                  <ClipboardCheck className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Admissions</h4>
                    <p>Onboarding workflows and registration logs.</p>
                  </div>
                </Link>
                <Link to="/features/communication" className="mega-menu-link">
                  <MessageSquare className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Communication</h4>
                    <p>WhatsApp alerts, SMS notifications, and emails.</p>
                  </div>
                </Link>
                <Link to="/features/analytics" className="mega-menu-link" style={{ gridColumn: 'span 2' }}>
                  <BarChart3 className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Reports & Analytics</h4>
                    <p>Executive analytics dashboard for directors and heads to track financial and performance KPIs.</p>
                  </div>
                </Link>
              </div>
            </li>

            {/* Modules Mega Menu */}
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                Modules <ChevronDown size={14} />
              </a>
              <div className="mega-menu mega-menu-wide">
                <div className="mega-menu-title">Operational Modules</div>
                <Link to="/modules/admissions" className="mega-menu-link">
                  <ClipboardCheck className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Admissions</h4>
                    <p>Direct enrollment and paperwork tracking.</p>
                  </div>
                </Link>
                <Link to="/modules/attendance" className="mega-menu-link">
                  <Calendar className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Attendance</h4>
                    <p>Real-time attendance logs & patterns.</p>
                  </div>
                </Link>
                <Link to="/modules/timetable" className="mega-menu-link">
                  <Laptop className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Timetables</h4>
                    <p>Conflict-free calendar generators.</p>
                  </div>
                </Link>
                <Link to="/modules/library" className="mega-menu-link">
                  <BookMarked className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Library</h4>
                    <p>Book checkouts and catalog control.</p>
                  </div>
                </Link>
                <Link to="/modules/transport" className="mega-menu-link">
                  <Bus className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Transport</h4>
                    <p>Route assignments and fee balances.</p>
                  </div>
                </Link>
                <Link to="/modules/inventory" className="mega-menu-link">
                  <ClipboardList className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Inventory</h4>
                    <p>Asset management and store auditing.</p>
                  </div>
                </Link>
                <Link to="/modules/discipline" className="mega-menu-link">
                  <AlertTriangle className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Discipline</h4>
                    <p>Incident logs and parent alerts.</p>
                  </div>
                </Link>
                <Link to="/modules/finance" className="mega-menu-link">
                  <Coins className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Finance ERP</h4>
                    <p>Complete ledger controls.</p>
                  </div>
                </Link>
                <Link to="/modules/hr" className="mega-menu-link">
                  <Users className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Staff HR</h4>
                    <p>Salaries and contracts.</p>
                  </div>
                </Link>
              </div>
            </li>

            {/* Portals Menu */}
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                Portals <ChevronDown size={14} />
              </a>
              <div className="mega-menu">
                <div className="mega-menu-title">Tailored User Portals</div>
                <Link to="/portals/parent" className="mega-menu-link">
                  <Users className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Parent Portal</h4>
                    <p>Track student marks, view invoices and pay fees.</p>
                  </div>
                </Link>
                <Link to="/portals/learner" className="mega-menu-link">
                  <GraduationCap className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Learner Portal</h4>
                    <p>Timetables, assignments, and competency trackers.</p>
                  </div>
                </Link>
                <Link to="/portals/teacher" className="mega-menu-link">
                  <BookOpen className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Teacher Portal</h4>
                    <p>Grade inputs, class attendance, and rubrics.</p>
                  </div>
                </Link>
                <Link to="/portals/admin" className="mega-menu-link">
                  <Laptop className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Administrator Portal</h4>
                    <p>Full control, configurations and BI tools.</p>
                  </div>
                </Link>
              </div>
            </li>

            {/* Solutions Menu */}
            <li className="nav-item">
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                Solutions <ChevronDown size={14} />
              </a>
              <div className="mega-menu">
                <div className="mega-menu-title">Institution Types</div>
                <Link to="/solutions/primary" className="mega-menu-link">
                  <GraduationCap className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Primary Schools</h4>
                    <p>CBE assessments and early-year reports.</p>
                  </div>
                </Link>
                <Link to="/solutions/junior" className="mega-menu-link">
                  <GraduationCap className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Junior Schools</h4>
                    <p>CBE grade books, projects, and CAT scoring.</p>
                  </div>
                </Link>
                <Link to="/solutions/senior" className="mega-menu-link">
                  <Laptop className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Senior Schools</h4>
                    <p>Pathways management and career guides.</p>
                  </div>
                </Link>
                <Link to="/solutions/tvet" className="mega-menu-link">
                  <Landmark className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>TVET Institutions</h4>
                    <p>Course billing and skills evaluations.</p>
                  </div>
                </Link>
                <Link to="/solutions/college" className="mega-menu-link" style={{ gridColumn: 'span 2' }}>
                  <Landmark className="mega-menu-icon" size={18} />
                  <div className="mega-menu-info">
                    <h4>Colleges & Multi-Campus</h4>
                    <p>Multi-campus consolidation, unified finance tracking, and centralized student registries.</p>
                  </div>
                </Link>
              </div>
            </li>

            <li className="nav-item">
              <Link to="/pricing" className="nav-link">Packages</Link>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="nav-actions">
          <Link to="/register" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Register</Link>
          <Link to="/book-demo" className="btn btn-primary btn-nav-demo">
            Book Free Demo <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="mobile-menu-panel">
          <div className="mobile-menu-item">
            <Link to="/" className="mobile-submenu-link" style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0F4C5C' }}>Home</Link>
          </div>

          {/* Mobile Features */}
          <div className="mobile-menu-item">
            <button className="mobile-menu-title-btn" onClick={() => toggleMobileSub('features')}>
              Features <ChevronDown size={18} style={{ transform: activeMobileSub === 'features' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {activeMobileSub === 'features' && (
              <div className="mobile-menu-submenu">
                <Link to="/features/academics" className="mobile-submenu-link">Academics</Link>
                <Link to="/features/assessment" className="mobile-submenu-link">CBE Assessment</Link>
                <Link to="/features/finance" className="mobile-submenu-link">Finance & Billing</Link>
                <Link to="/features/hr" className="mobile-submenu-link">HR & Staff</Link>
                <Link to="/features/admissions" className="mobile-submenu-link">Admissions</Link>
                <Link to="/features/communication" className="mobile-submenu-link">Communication</Link>
                <Link to="/features/analytics" className="mobile-submenu-link">Reports & Analytics</Link>
              </div>
            )}
          </div>

          {/* Mobile Modules */}
          <div className="mobile-menu-item">
            <button className="mobile-menu-title-btn" onClick={() => toggleMobileSub('modules')}>
              Modules <ChevronDown size={18} style={{ transform: activeMobileSub === 'modules' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {activeMobileSub === 'modules' && (
              <div className="mobile-menu-submenu">
                <Link to="/modules/admissions" className="mobile-submenu-link">Admissions</Link>
                <Link to="/modules/attendance" className="mobile-submenu-link">Attendance</Link>
                <Link to="/modules/timetable" className="mobile-submenu-link">Timetables</Link>
                <Link to="/modules/library" className="mobile-submenu-link">Library</Link>
                <Link to="/modules/transport" className="mobile-submenu-link">Transport</Link>
                <Link to="/modules/inventory" className="mobile-submenu-link">Inventory</Link>
                <Link to="/modules/discipline" className="mobile-submenu-link">Discipline</Link>
                <Link to="/modules/finance" className="mobile-submenu-link">Finance ERP</Link>
                <Link to="/modules/hr" className="mobile-submenu-link">Staff HR</Link>
              </div>
            )}
          </div>

          {/* Mobile Portals */}
          <div className="mobile-menu-item">
            <button className="mobile-menu-title-btn" onClick={() => toggleMobileSub('portals')}>
              Portals <ChevronDown size={18} style={{ transform: activeMobileSub === 'portals' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {activeMobileSub === 'portals' && (
              <div className="mobile-menu-submenu">
                <Link to="/portals/parent" className="mobile-submenu-link">Parent Portal</Link>
                <Link to="/portals/learner" className="mobile-submenu-link">Learner Portal</Link>
                <Link to="/portals/teacher" className="mobile-submenu-link">Teacher Portal</Link>
                <Link to="/portals/admin" className="mobile-submenu-link">Administrator Portal</Link>
              </div>
            )}
          </div>

          {/* Mobile Solutions */}
          <div className="mobile-menu-item">
            <button className="mobile-menu-title-btn" onClick={() => toggleMobileSub('solutions')}>
              Solutions <ChevronDown size={18} style={{ transform: activeMobileSub === 'solutions' ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
            </button>
            {activeMobileSub === 'solutions' && (
              <div className="mobile-menu-submenu">
                <Link to="/solutions/primary" className="mobile-submenu-link">Primary Schools</Link>
                <Link to="/solutions/junior" className="mobile-submenu-link">Junior Schools</Link>
                <Link to="/solutions/senior" className="mobile-submenu-link">Senior Schools</Link>
                <Link to="/solutions/tvet" className="mobile-submenu-link">TVET Institutions</Link>
                <Link to="/solutions/college" className="mobile-submenu-link">Colleges & Multi-Campus</Link>
              </div>
            )}
          </div>

          <div className="mobile-menu-item">
            <Link to="/pricing" className="mobile-submenu-link" style={{ fontWeight: 600, fontSize: '1.1rem', color: '#0F4C5C' }}>Packages</Link>
          </div>

          <div className="mobile-menu-actions">
            <Link to="/register" className="btn btn-secondary">Register</Link>
            <Link to="/book-demo" className="btn btn-primary">Book Free Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
