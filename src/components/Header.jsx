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
    key: 'modules',
    label: 'Modules',
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
    key: 'public-schools',
    label: 'Public Schools',
    to: '/public-schools',
    noDropdown: true
  },
  {
    key: 'private-schools',
    label: 'Private Schools',
    to: '/private-schools',
    noDropdown: true
  },
  {
    key: 'faqs',
    label: 'FAQs',
    to: '/faqs',
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

const WhatsAppIcon = ({ size = 22 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0, display: 'inline-block' }}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
          <a href={phoneHref} className="nav-contact-action" aria-label="Call 0713612141">
            <Phone size={18} />
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-nav-whatsapp"
            aria-label="Whatsapp Us"
          >
            <WhatsAppIcon size={22} />
            <span>Whatsapp Us</span>
          </a>
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
            <a href={phoneHref} className="btn btn-secondary mobile-contact-btn">
              <Phone size={17} /> Call 0713612141
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp mobile-contact-btn"
              onClick={() => setMobileOpen(false)}
            >
              <WhatsAppIcon size={20} />
              <span>Whatsapp Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
