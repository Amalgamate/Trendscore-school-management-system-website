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
  Landmark,
  Library,
  Menu,
  MessageSquare,
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
    key: 'platform',
    label: 'Platform',
    title: 'Assessment & Intelligence',
    description: 'Transform assessment data into actionable learner growth insights.',
    cta: 'Explore Assessment Platform',
    ctaTo: '/features/assessment',
    accent: 'Assessment intelligence',
    visual: 'Learner growth, CBC reports, pathways, and risk alerts in one analytics layer.',
    image: '/marketing-teacher-cbe-assessment-v1.jpg',
    imageAlt: 'Assessment intelligence dashboard preview',
    icon: Brain,
    groups: [
      {
        title: 'Assessment',
        items: [
          { label: 'CBC Assessment', to: '/features/assessment', icon: GraduationCap },
          { label: 'Junior School Assessment', to: '/solutions/junior', icon: ClipboardCheck },
          { label: 'Senior School Assessment', to: '/solutions/senior', icon: Presentation },
          { label: 'Assessment Builder', to: '/features/assessment', icon: FileText },
          { label: 'Rubric Generator', to: '/features/assessment', icon: Sparkles }
        ]
      },
      {
        title: 'Analytics',
        items: [
          { label: 'Learner Growth Tracking', to: '/features/analytics', icon: BarChart3 },
          { label: 'School Performance Analytics', to: '/features/analytics', icon: Brain },
          { label: 'Competency Dashboards', to: '/features/analytics', icon: ShieldCheck },
          { label: 'Risk Learner Detection', to: '/features/analytics', icon: ShieldCheck },
          { label: 'Intervention Tracking', to: '/features/analytics', icon: Route }
        ]
      },
      {
        title: 'Career Pathways',
        items: [
          { label: 'Senior School Pathways', to: '/solutions/senior', icon: Route },
          { label: 'Subject Combination Validation', to: '/solutions/senior', icon: ClipboardCheck },
          { label: 'Career Recommendations', to: '/solutions/senior', icon: Sparkles },
          { label: 'Pathway Analytics', to: '/features/analytics', icon: BarChart3 }
        ]
      },
      {
        title: 'Free Tools',
        items: [
          { label: 'Free CBC Reports', to: '/resources/guides', icon: FileText },
          { label: 'Free Assessment Templates', to: '/resources/guides', icon: ClipboardCheck },
          { label: 'Free Analytics Dashboard', to: '/resources/docs', icon: BarChart3 },
          { label: 'Free School Readiness Tools', to: '/resources/faq', icon: ShieldCheck }
        ]
      }
    ]
  },
  {
    key: 'solutions',
    label: 'Solutions',
    title: 'School Operations',
    description: 'Everything required to run a modern institution.',
    cta: 'Explore School ERP',
    ctaTo: '/features/finance',
    accent: 'Complete operational control',
    visual: 'Administration, finance, staff, and daily workflows connected to every portal.',
    image: '/mega menu/school operations.png',
    imageAlt: 'School operations illustration',
    icon: Landmark,
    groups: [
      {
        title: 'Administration',
        items: [
          { label: 'Admissions', to: '/modules/admissions', icon: ClipboardCheck },
          { label: 'Student Information System', to: '/features/academics', icon: Users },
          { label: 'Academic Structure', to: '/features/academics', icon: BookOpen },
          { label: 'Timetables', to: '/modules/timetable', icon: Calendar }
        ]
      },
      {
        title: 'Finance',
        items: [
          { label: 'Fee Management', to: '/features/finance', icon: Coins },
          { label: 'Billing', to: '/features/finance', icon: FileText },
          { label: 'Accounting', to: '/features/finance', icon: BarChart3 },
          { label: 'Financial Reports', to: '/features/analytics', icon: Presentation }
        ]
      },
      {
        title: 'Staff',
        items: [
          { label: 'HR Management', to: '/features/hr', icon: Users },
          { label: 'Payroll', to: '/features/hr', icon: Coins },
          { label: 'Performance Appraisals', to: '/features/hr', icon: ShieldCheck }
        ]
      },
      {
        title: 'Operations',
        items: [
          { label: 'Attendance', to: '/modules/attendance', icon: ClipboardCheck },
          { label: 'Communication', to: '/features/communication', icon: MessageSquare },
          { label: 'Discipline', to: '/modules/discipline', icon: ShieldCheck },
          { label: 'Inventory', to: '/modules/inventory', icon: Store },
          { label: 'Transport', to: '/modules/transport', icon: Route }
        ]
      }
    ]
  },
  {
    key: 'digital-campus',
    label: 'Digital Campus',
    title: 'Learning Without Limits',
    description: 'Connect learners, teachers, and parents through one digital campus.',
    cta: 'Explore Digital Campus',
    ctaTo: '/portals/learner',
    accent: 'One campus for every stakeholder',
    visual: 'Learners, teachers, parents, and school leaders share progress in real time.',
    image: '/mega menu/digital campus.png',
    imageAlt: 'Digital campus illustration',
    icon: Cloud,
    groups: [
      {
        title: 'Learning',
        items: [
          { label: 'Learner Portal', to: '/portals/learner', icon: GraduationCap },
          { label: 'Teacher Portal', to: '/portals/teacher', icon: Users },
          { label: 'Parent Portal', to: '/portals/parent', icon: Users }
        ]
      },
      {
        title: 'Classroom',
        items: [
          { label: 'Assignments', to: '/portals/learner', icon: ClipboardCheck },
          { label: 'Live Classes', to: '/portals/teacher', icon: Video },
          { label: 'Assessments', to: '/features/assessment', icon: FileText },
          { label: 'Discussions', to: '/features/communication', icon: MessageSquare }
        ]
      },
      {
        title: 'Resources',
        items: [
          { label: 'Digital Library', to: '/modules/library', icon: Library },
          { label: 'Notes', to: '/resources/guides', icon: BookOpen },
          { label: 'Lessons', to: '/resources/guides', icon: Presentation },
          { label: 'Revision Materials', to: '/resources/guides', icon: FileText }
        ]
      },
      {
        title: 'Collaboration',
        items: [
          { label: 'Messaging', to: '/features/communication', icon: MessageSquare },
          { label: 'Notifications', to: '/features/communication', icon: Sparkles },
          { label: 'Progress Tracking', to: '/features/analytics', icon: BarChart3 }
        ]
      }
    ]
  },
  {
    key: 'content-hub',
    label: 'Content Hub',
    title: 'Create • Teach • Earn',
    description: 'A marketplace where teachers create, sell, and distribute educational content.',
    cta: 'Join Content Hub',
    ctaTo: '/register',
    accent: 'Teacher creator economy',
    visual: 'Creators publish CBC resources, track earnings, and distribute content to schools.',
    image: '/mega menu/create.png',
    imageAlt: 'Content hub creator illustration',
    icon: BriefcaseBusiness,
    groups: [
      {
        title: 'Creator Hub',
        items: [
          { label: 'Become a Creator', to: '/register', icon: Sparkles },
          { label: 'Upload Resources', to: '/register', icon: FileText },
          { label: 'Manage Content', to: '/register', icon: Store }
        ]
      },
      {
        title: 'Marketplace',
        items: [
          { label: 'CBC Resources', to: '/resources/guides', icon: BookOpen },
          { label: 'Lesson Plans', to: '/resources/guides', icon: Presentation },
          { label: 'Exams', to: '/resources/guides', icon: ClipboardCheck },
          { label: 'Schemes of Work', to: '/resources/guides', icon: Calendar },
          { label: 'Revision Papers', to: '/resources/guides', icon: FileText }
        ]
      },
      {
        title: 'Earnings',
        items: [
          { label: 'Revenue Dashboard', to: '/register', icon: BarChart3 },
          { label: 'Payouts', to: '/register', icon: Coins },
          { label: 'Creator Analytics', to: '/features/analytics', icon: Brain }
        ]
      },
      {
        title: 'Community',
        items: [
          { label: 'Featured Creators', to: '/resources/blog', icon: Users },
          { label: 'Teacher Communities', to: '/resources/blog', icon: MessageSquare },
          { label: 'Webinars', to: '/resources/blog', icon: Video }
        ]
      }
    ]
  },
  {
    key: 'resources',
    label: 'Resources',
    title: 'Resources',
    description: 'Guides, tools, support, and success stories for modern schools.',
    cta: 'Explore Resources',
    ctaTo: '/resources/blog',
    accent: 'Knowledge for every school team',
    visual: 'Practical resources for school leaders, teachers, parents, and learners.',
    image: '/mega menu/resources.png',
    imageAlt: 'Resources hub illustration',
    icon: FileText,
    groups: [
      {
        title: 'Learning Resources',
        items: [
          { label: 'Blog', to: '/resources/blog', icon: FileText },
          { label: 'Guides', to: '/resources/guides', icon: BookOpen },
          { label: 'Case Studies', to: '/resources/blog', icon: Presentation },
          { label: 'School Success Stories', to: '/resources/blog', icon: Sparkles }
        ]
      },
      {
        title: 'Free Tools',
        items: [
          { label: 'CBC Report Generator', to: '/resources/guides', icon: FileText },
          { label: 'Rubric Builder', to: '/features/assessment', icon: ClipboardCheck },
          { label: 'Assessment Templates', to: '/resources/guides', icon: Sparkles }
        ]
      },
      {
        title: 'Support',
        items: [
          { label: 'Documentation', to: '/resources/docs', icon: BookOpen },
          { label: 'Help Center', to: '/resources/faq', icon: ShieldCheck },
          { label: 'Training Videos', to: '/resources/docs', icon: Video },
          { label: 'Contact Support', to: '/contact', icon: MessageSquare }
        ]
      }
    ]
  }
];

const renderIcon = (Icon, size = 18) => <Icon size={size} />;
const assetUrl = (path) => encodeURI(path);

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
              <li className="nav-item nav-item-has-mega" key={item.key}>
                <button type="button" className="nav-link nav-link-button">
                  {item.label} <ChevronDown size={14} />
                </button>
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
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <Link to="/login" className="btn btn-secondary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Login</Link>
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
              <button className="mobile-menu-title-btn" onClick={() => toggleMobileSub(item.key)}>
                {item.label}
                <ChevronDown size={18} style={{ transform: activeMobileSub === item.key ? 'rotate(180deg)' : 'none', transition: '0.2s' }} />
              </button>
              {activeMobileSub === item.key && (
                <div className="mobile-menu-submenu mobile-ecosystem-submenu">
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
                </div>
              )}
            </div>
          ))}
          <div className="mobile-menu-actions">
            <Link to="/login" className="btn btn-secondary">Login</Link>
            <Link to="/book-demo" className="btn btn-primary">Book Demo</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
