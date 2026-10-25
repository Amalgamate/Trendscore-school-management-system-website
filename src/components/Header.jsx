import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  Calendar,
  ChevronDown,
  ClipboardCheck,
  Cloud,
  Coins,
  FileText,
  GraduationCap,
  Library,
  Menu,
  MessageCircle,
  MessageSquare,
  Phone,
  Presentation,
  Route,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Video,
  X
} from 'lucide-react';

const navItems = [
  {
    key: 'home',
    label: 'Home',
    to: '/',
    noDropdown: true
  },
  {
    key: 'about',
    label: 'About',
    to: '/about',
    noDropdown: true
  },
  {
    key: 'features',
    label: 'Features',
    menuType: 'simple',
    items: [
      { label: 'Academics Management', to: '/features/academics', icon: BookOpen },
      { label: 'CBE Assessments', to: '/features/assessment', icon: GraduationCap },
      { label: 'Fees & Finance', to: '/features/finance', icon: Coins },
      { label: 'Admissions', to: '/features/admissions', icon: ClipboardCheck },
      { label: 'Reports & Analytics', to: '/features/analytics', icon: BarChart3 },
      { label: 'Communication', to: '/features/communication', icon: MessageSquare },
      { label: 'HR & Payroll', to: '/features/hr', icon: Users },
      { label: 'Attendance', to: '/modules/attendance', icon: ClipboardCheck },
      { label: 'Timetable', to: '/modules/timetable', icon: Calendar },
      { label: 'Library', to: '/modules/library', icon: Library },
      { label: 'Transport', to: '/modules/transport', icon: Route },
      { label: 'Inventory', to: '/modules/inventory', icon: Store },
      { label: 'Discipline', to: '/modules/discipline', icon: ShieldCheck }
    ]
  },
  {
    key: 'pricing',
    label: 'Pricing',
    to: '/pricing',
    noDropdown: true
  },
  {
    key: 'become-an-agent',
    label: 'Become an Agent',
    to: '/become-an-agent',
    noDropdown: true
  },
  {
    key: 'contact',
    label: 'Contact',
    to: '/contact',
    noDropdown: true
  }
];

const renderIcon = (Icon, size = 18) => <Icon size={size} />;
const assetUrl = (path) => encodeURI(path);
const phoneHref = 'tel:0713612141';
const whatsappHref = 'https://wa.me/254713612141';

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

  useEffect(() => {
    setMobileOpen(false);
    setActiveMobileSub(null);
  }, [location.pathname]);

  const toggleMobileSub = (name) => {
    setActiveMobileSub((current) => (current === name ? null : name));
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

        <nav>
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li
                className={`nav-item ${item.to && location.pathname === item.to ? 'active' : ''} ${!item.to ? 'nav-item-has-mega' : ''} ${item.comingSoon ? 'nav-item-coming-soon' : ''}`}
                key={item.key}
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    className="nav-link"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="nav-link nav-link-button"
                    aria-disabled={item.comingSoon ? 'true' : undefined}
                  >
                    {item.label} {!item.noDropdown && <ChevronDown size={14} />}
                  </button>
                )}
                {item.comingSoon && <span className="nav-coming-soon-label">Coming soon</span>}
                {!item.to && !item.noDropdown && !item.comingSoon && item.menuType === 'simple' && (
                  <div className="simple-dropdown">
                    {item.items.map((link) => (
                      <Link to={link.to} className="simple-dropdown-link" key={link.label}>
                        <span className="simple-dropdown-icon">{renderIcon(link.icon, 17)}</span>
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
                {!item.to && !item.noDropdown && !item.comingSoon && item.menuType !== 'simple' && (
                  <div className="mega-menu ecosystem-mega-menu">
                    <div className="mega-menu-main">
                      <div className="mega-menu-intro">
                        <div className="mega-menu-kicker">
                          <span>{renderIcon(item.icon, 16)}</span>
                          Education Cloud
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>

                      <div className="mega-menu-groups">
                        {item.groups.map((group) => (
                          <div className="mega-menu-group" key={group.title}>
                            <h4>{group.title}</h4>
                            <div className="mega-menu-group-links">
                              {group.items.map((link) => (
                                <Link to={link.to} className="mega-menu-link" key={`${group.title}-${link.label}`}>
                                  <span className="mega-menu-icon">{renderIcon(link.icon)}</span>
                                  <span className="mega-menu-info">
                                    <strong>{link.label}</strong>
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <aside className="mega-menu-feature">
                      <div className="mega-menu-feature-screen">
                        <span>{item.accent}</span>
                        <div className="mega-menu-feature-image-wrap">
                          <img
                            src={assetUrl(item.image)}
                            alt={item.imageAlt}
                            className="mega-menu-feature-image"
                          />
                        </div>
                      </div>
                      <p>{item.visual}</p>
                      <Link to={item.ctaTo} className="mega-menu-cta">
                        {item.cta} <ArrowRight size={16} />
                      </Link>
                    </aside>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={whatsappHref} className="nav-contact-action nav-contact-whatsapp" aria-label="Chat on WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href={phoneHref} className="nav-contact-action" aria-label="Call 0713612141">
            <Phone size={18} />
          </a>
          <Link to="/book-demo" className="btn btn-primary btn-nav-demo">
            Book Demo <ArrowRight size={16} />
          </Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-menu-panel">
          {navItems.map((item) => (
            <div className="mobile-menu-item" key={item.key}>
              {item.to ? (
                <Link
                  to={item.to}
                  className="mobile-menu-title-btn"
                  onClick={() => setMobileOpen(false)}
                  style={{ textDecoration: 'none' }}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  className={`mobile-menu-title-btn ${item.comingSoon ? 'mobile-menu-title-disabled' : ''}`}
                  onClick={() => {
                    if (!item.comingSoon && !item.noDropdown) {
                      toggleMobileSub(item.key);
                    }
                  }}
                  aria-disabled={item.comingSoon ? 'true' : undefined}
                >
                  {item.label}
                  {item.comingSoon ? (
                    <span className="mobile-coming-soon-label">Coming soon</span>
                  ) : item.noDropdown ? null : (
                    <ChevronDown size={18} style={{ transform: activeMobileSub === item.key ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
                  )}
                </button>
              )}
              {!item.to && !item.noDropdown && !item.comingSoon && activeMobileSub === item.key && (
                <div className="mobile-menu-submenu mobile-ecosystem-submenu">
                  {item.menuType === 'simple' ? (
                    <div className="mobile-mega-group">
                      {item.items.map((link) => (
                        <Link to={link.to} className="mobile-submenu-link" key={link.label}>
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <>
                      <p>{item.description}</p>
                      {item.groups.map((group) => (
                        <div className="mobile-mega-group" key={group.title}>
                          <h4>{group.title}</h4>
                          {group.items.map((link) => (
                            <Link to={link.to} className="mobile-submenu-link" key={`${group.title}-${link.label}`}>
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <Link to={item.ctaTo} className="mobile-mega-cta">
                        {item.cta} <ArrowRight size={15} />
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          <div className="mobile-menu-actions">
            <Link
              to="/become-an-agent"
              className="btn btn-secondary mobile-contact-btn"
              onClick={() => setMobileOpen(false)}
              style={{ borderColor: 'var(--color-orange)', color: 'var(--color-orange)', fontWeight: 600 }}
            >
              <BriefcaseBusiness size={17} /> Become an Agent
            </Link>
            <a href={whatsappHref} className="btn btn-secondary mobile-contact-btn">
              <MessageCircle size={17} /> WhatsApp Chat
            </a>
            <a href={phoneHref} className="btn btn-secondary mobile-contact-btn">
              <Phone size={17} /> Call 0713612141
            </a>
            <Link to="/book-demo" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Book Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
