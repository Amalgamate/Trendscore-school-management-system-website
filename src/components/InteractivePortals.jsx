import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Laptop, BookOpen, Users, GraduationCap } from 'lucide-react';
import ImagePlaceholder from './ImagePlaceholder';

const InteractivePortals = () => {
  const [activePortal, setActivePortal] = useState('parent');

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
      mockName: 'administrator-dashboard'
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
      mockName: 'teacher-portal'
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
      mockName: 'parent-portal-home'
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
      mockName: 'learner-portal-home'
    }
  };

  const portal = portalDetails[activePortal];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '48px', alignItems: 'center', marginTop: '32px' }}>
      {/* Switch selectors */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {Object.entries(portalDetails).map(([key, item]) => {
          const isSelected = activePortal === key;
          return (
            <div 
              key={key}
              onClick={() => setActivePortal(key)}
              style={{
                padding: '20px 24px',
                borderRadius: '16px',
                border: '1px solid',
                borderColor: isSelected ? 'var(--color-orange)' : 'var(--color-border)',
                background: isSelected ? 'var(--color-white)' : 'transparent',
                boxShadow: isSelected ? 'var(--shadow-md)' : 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: isSelected ? 'rgba(249, 115, 22, 0.1)' : 'var(--color-teal-light)',
                color: isSelected ? 'var(--color-orange)' : 'var(--color-teal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                alignSelf: 'center'
              }}>
                <div style={{ margin: '0 auto', display: 'flex' }}>
                  {item.icon}
                </div>
              </div>
              <div>
                <h3 style={{ 
                  fontSize: '1.1rem', 
                  color: isSelected ? 'var(--color-orange)' : 'var(--color-teal)', 
                  fontWeight: 700,
                  marginBottom: '4px'
                }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)} Portal
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{item.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Portal Display Card */}
      <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', minHeight: '440px', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'var(--color-teal)' }}>{portal.title}</h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>{portal.subtitle}</p>
          
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {portal.features.map((f, i) => (
              <li key={i} style={{ display: 'flex', gap: '12px', fontSize: '0.9rem', color: 'var(--color-text-primary)', alignItems: 'center' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', alignItems: 'center', borderTop: '1px solid var(--color-border)', paddingTop: '20px' }}>
          <div>
            <Link to={portal.link} className="btn btn-secondary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
              Explore Portal Details <ArrowRight size={14} />
            </Link>
          </div>
          <div style={{ height: '140px', overflow: 'hidden', borderRadius: '8px' }}>
            <ImagePlaceholder name={portal.mockName} type="dashboard" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePortals;
