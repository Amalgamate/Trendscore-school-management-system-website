import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShieldAlert, Zap, ArrowRight, CheckCircle2, ShieldClose } from 'lucide-react';
import ComparisonTable from '../components/ComparisonTable';

const CompareTemplate = () => {
  const { id } = useParams();

  const compareDb = {
    'why-switch': {
      title: 'Why Modern Kenyan Schools Switch to TrendScore',
      badge: 'ERP Transition Guide',
      desc: 'With the transition from 8-4-4 to CBE, schools need a Curriclum-ready platform. Legacy software is rigid; manual files are slow. TrendScore integrates grading, billing, and noticeboards under one smart system.',
      bulletTitle: 'Key Reasons to Transition:',
      bullets: [
        'Built specifically for CBE (EE/ME/AE/BE levels & rubrics)',
        'Automated M-Pesa statements matching invoices to prevent ledger cash leaks',
        'Direct PDF marks card broadcasts to parent portal apps',
        'Multi-campus consolidated director BI dashboards'
      ]
    },
    'vs-manual': {
      title: 'TrendScore vs Physical Manual Processes',
      badge: 'Process Automation',
      desc: 'Ditch physical files and ledger logs. Physical student dossier folders take up cabinet space, birth certificate papers get lost, and parent fee queues block bank offices during start-of-term.',
      bulletTitle: 'Eliminate Physical Friction:',
      bullets: [
        'No more physical ledger records for fee reconciliation',
        'Stop printing paper rubrics scorecards for teacher markbooks',
        'Avoid parent queue blockages in school admin offices',
        'Direct biometric attendance rolls backup to secure cloud databases'
      ]
    },
    'vs-legacy': {
      title: 'TrendScore vs Legacy School Software',
      badge: 'Legacy Software Migration',
      desc: 'Traditional school software platforms were built years ago for the 8-4-4 system. They rely on rigid databases that do not support CBE rubric structures without expensive developer add-ons.',
      bulletTitle: 'Switch from rigid legacy tools:',
      bullets: [
        'CBE competency levels are native, not patched patches',
        'Modern responsive web UI vs old database screens',
        'Direct automated WhatsApp and bank APIs integrations',
        'Encrypted database storage complies with Kenya Data Protection Act rules'
      ]
    },
    'vs-spreadsheet': {
      title: 'TrendScore vs Spreadsheet Chaos',
      badge: 'Error Protection',
      desc: 'Spreadsheets are highly flexible but lack audit trails, database constraints, and user access levels. One incorrect Excel cell formula can ruin student averages and balance sheets.',
      bulletTitle: 'Solve Spreadsheet Risks:',
      bullets: [
        'Lock marks entry formulas to prevent manual override edits',
        'Consolidated database prevents sibling record duplicates',
        'Audit logs trace every single edit back to the logged-in staff member',
        'Automated calculation updates term invoices instantly'
      ]
    },
    'vs-multiple': {
      title: 'TrendScore vs Multiple Disconnected Apps',
      badge: 'System Integration',
      desc: 'Using separate software programs for grade entry, fee collections, biometric attendance, and bulk SMS messaging causes data duplicate errors and doubles software subscription costs.',
      bulletTitle: 'Unify Your School Operations:',
      bullets: [
        'One single login for Academics, Finance, HR and parents',
        'Direct data flow between marks entries and parent reports',
        'Single consolidated invoice ledger reconciling M-Pesa receipts',
        'Reduce overall IT budget by eliminating multiple app contracts'
      ]
    }
  };

  const comp = compareDb[id] || compareDb['why-switch'];

  return (
    <div style={{ paddingBottom: '80px' }}>
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(249, 115, 22, 0.04) 0%, transparent 100%)', paddingTop: '160px', paddingBottom: '40px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="badge badge-orange">{comp.badge}</span>
            <h1 style={{ color: 'var(--color-teal)', fontSize: '2.5rem', marginBottom: '20px' }}>{comp.title}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
              {comp.desc}
            </p>
          </div>
        </div>
      </section>

      {/* Checklist grid */}
      <section className="section" style={{ padding: '40px 0' }}>
        <div className="container grid-2" style={{ maxWidth: '1000px', margin: '0 auto', alignItems: 'center' }}>
          <div>
            <h3 style={{ color: 'var(--color-teal)', marginBottom: '20px' }}>{comp.bulletTitle}</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {comp.bullets.map((bullet, idx) => (
                <li key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '0.95rem' }}>
                  <CheckCircle2 size={20} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                  <strong>{bullet}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-panel" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
            <h3 style={{ color: 'var(--color-teal)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Zap size={18} style={{ color: 'var(--color-orange)' }} /> Data Migration Assistance
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.5' }}>
              Switching from Excel files, paper binders, or an old database system? Our onboarding technicians in Nairobi will clean and import your student lists, teacher portfolios, and historic accounts free of charge.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/book-demo" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Request Migration Audit &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Evaluation Matrix */}
      <section className="section" style={{ padding: '40px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '40px' }}>
            <h2>Detailed Evaluation Grid</h2>
            <p>Compare standard capabilities across different deployment approaches.</p>
          </div>
          <ComparisonTable />
        </div>
      </section>
    </div>
  );
};

export default CompareTemplate;
