import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Laptop, BookOpen, Users, GraduationCap } from 'lucide-react';

const InteractivePortals = () => {
  const [activePortal, setActivePortal] = useState('parent');
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const portalDetails = {
    admin: {
      title: 'Administrator Command Portal',
      subtitle: 'Complete institutional visibility and operational control.',
      icon: <Laptop size={20} />,
      features: [
        'Multi-campus analytics consolidation',
        'Academic setups & class stream assignments',
        'Comprehensive user access level administration',
        'Direct ledger audit logging controls',
        'Automated report card compilation rules'
      ],
      link: '/portals/admin',
      imageSrc: '/Admin-Portal2.png'
    },
    teacher: {
      title: 'Teacher Portal & Digital Markbook',
      subtitle: 'Reduce grading overhead and track student progress.',
      icon: <BookOpen size={20} />,
      features: [
        'Fast classroom attendance register entry',
        'CBE assessment rubrics (EE/ME/AE/BE) grading',
        'Direct parent communication threads',
        'Incident recording & behavior reports',
        'Learner performance charts'
      ],
      link: '/portals/teacher',
      imageSrc: '/parents portal.png'
    },
    parent: {
      title: 'Parent Portal & Mobile App',
      subtitle: 'Keep families connected to their child\'s progress.',
      icon: <Users size={20} />,
      features: [
        'Instant automated M-Pesa fee payments',
        'Instant receipt generation & ledger records',
        'CBE rubrics score breakdowns',
        'Real-time student attendance alerts',
        'Direct notices & messaging boards'
      ],
      link: '/portals/parent',
      imageSrc: '/parents portal 2.png'
    },
    learner: {
      title: 'Learner Portal',
      subtitle: 'Equip students to take control of their learning goals.',
      icon: <GraduationCap size={20} />,
      features: [
        'Interactive timetables & lesson calendars',
        'Direct homework submission portals',
        'Learning material access repositories',
        'Competency progress trackers',
        'Senior school subject combination planners'
      ],
      link: '/portals/learner',
      imageSrc: '/parents portal 2.png'
    }
  };

  const portal = portalDetails[activePortal];

  return (
    <div className="interactive-portals-wrap">
      {/* Switch selectors */}
      <div className="interactive-portals-tabs" role="tablist" aria-label="Portal types">
        {Object.entries(portalDetails).map(([key, item]) => {
          const isSelected = activePortal === key;
          return (
            <button
              type="button"
              key={key}
              onClick={() => setActivePortal(key)}
              className={`interactive-portals-tab ${isSelected ? 'is-active' : ''}`}
              aria-selected={isSelected}
              role="tab"
            >
              <div className="interactive-portals-tab-icon">
                {item.icon}
              </div>
              <div className="interactive-portals-tab-text">
                <h3>
                  {key.charAt(0).toUpperCase() + key.slice(1)} Portal
                </h3>
                <p>{item.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Portal Display Card */}
      <div className="glass-panel interactive-portals-panel">
        <div className="interactive-portals-content">
          <h2>{portal.title}</h2>
          <p className="interactive-portals-subtitle">{portal.subtitle}</p>
          
          <ul className="interactive-portals-features">
            {portal.features.map((f, i) => (
              <li key={i}>
                <CheckCircle2 size={16} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="interactive-portals-footer">
          <Link to={portal.link} className="btn btn-secondary interactive-portals-link-btn">
            Explore Portal Details <ArrowRight size={14} />
          </Link>
        </div>

        <div
          className={`interactive-portals-image-overlay portal-${activePortal}`}
          onMouseEnter={() => setIsImageZoomed(true)}
          onMouseLeave={() => setIsImageZoomed(false)}
          aria-hidden="true"
        >
          <img src={portal.imageSrc} alt={`${portal.title} preview`} />
        </div>

        {isImageZoomed ? (
          <div className="interactive-portals-lightbox" aria-hidden="true">
            <img src={portal.imageSrc} alt={`${portal.title} enlarged preview`} />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default InteractivePortals;
