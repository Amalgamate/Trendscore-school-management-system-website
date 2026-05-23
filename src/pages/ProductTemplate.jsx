import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const ProductTemplate = () => {
  const { id } = useParams();

  // Rich copy dictionary for all 16 features/modules
  const productDb = {
    academics: {
      title: 'Academics Management',
      badge: 'Core ERP Feature',
      desc: 'Set up class streams, subject allocations, and lesson planning schedules with total consistency across the institution.',
      features: [
        'Dynamic subject allocation per class level',
        'Teacher-class stream correlation setups',
        'Automatic lesson plan template generators',
        'Complete student dossier registries',
        'Class representative assignments'
      ],
      kpiVal: '4.8k+', kpiLbl: 'Classrooms Managed',
      mockName: 'academics-dashboard'
    },
    assessment: {
      title: 'Competency-Based Education (CBE) Assessments',
      badge: 'Curriculum Excellence',
      desc: 'Eliminate paperwork from Kenya\'s CBE curriculum. Track learner achievements, scores, and rubrics according to KNEC guidelines.',
      features: [
        'Formative and Summative scoring rubrics',
        'EE, ME, AE, BE competency assessment level maps',
        'School-Based Assessment (SBA) report formats',
        'Learning Area progress tracking charts',
        'Direct parent progress reports export'
      ],
      kpiVal: '100%', kpiLbl: 'KNEC CBE Compliant',
      mockName: 'assessment-dashboard'
    },
    finance: {
      title: 'Fees Billing & Financial Ledger Control',
      badge: 'Operations & Accounting',
      desc: 'Manage school invoices, parent billing, receipt generations, and general ledgers with bank-grade security.',
      features: [
        'Automated term-start billing invoices',
        'Direct automated M-Pesa ledger updates',
        'Installment plan configuration rules',
        'Arrears warnings and billing statements export',
        'Balance sheets and expense ledger tools'
      ],
      kpiVal: 'KSh 1.2B', kpiLbl: 'Annual Collections Audited',
      mockName: 'finance-dashboard'
    },
    hr: {
      title: 'Staff HR & Payroll Management',
      badge: 'Operational ERP',
      desc: 'Administer teacher profiles, employment contracts, monthly payroll ledger processing, and leave tracking.',
      features: [
        'Staff details and credential document storage',
        'Automated payslip compilations with local KRA deductions',
        'NHIF, NSSF, and housing levy validation checks',
        'Teacher classroom assignment analytics',
        'Leave requests and substitution tracking'
      ],
      kpiVal: '20k+', kpiLbl: 'Teachers Administered',
      mockName: 'teacher-portal'
    },
    admissions: {
      title: 'Admissions & Learner Dossiers',
      badge: 'Core Operations',
      desc: 'Streamline the onboarding of new students. Capture birth certificate details, medical files, and parent contacts.',
      features: [
        'Custom digital admission forms',
        'Sibling registration mapping tools',
        'Document scanning & file storage integrations',
        'NEMIS registration tracking fields',
        'Student profile history logs'
      ],
      kpiVal: '99%', kpiLbl: 'Data Capture Accuracy',
      mockName: 'administrator-dashboard'
    },
    communication: {
      title: 'Parent & Staff Communication Channels',
      badge: 'School Engagement',
      desc: 'Send transaction receipt confirmations, grade summaries, and urgent announcements directly to parents via WhatsApp and SMS.',
      features: [
        'Instant automated M-Pesa payment receipts',
        'Emergency SMS broadcasts to parent registers',
        'WhatsApp PDF report cards delivery',
        'Teacher-parent chat channels',
        'Notice board announcement schedules'
      ],
      kpiVal: '5M+', kpiLbl: 'Alerts Delivered Annually',
      mockName: 'parent-mobile-app'
    },
    analytics: {
      title: 'Executive Reports & Analytics Command Center',
      badge: 'Business Intelligence',
      desc: 'Equip directors, principals, and financial officers with high-level visual charts to make decisions.',
      features: [
        'Real-time collection vs invoicing trends',
        'Class-by-class academic growth heatmaps',
        'Attendance deficit early warnings',
        'Pathway registration demographics',
        'Custom report builders and CSV exports'
      ],
      kpiVal: 'Realtime', kpiLbl: 'Decision Insights',
      mockName: 'revenue-analytics'
    },
    // Modules
    attendance: {
      title: 'Student & Staff Attendance Tracking',
      badge: 'Operational Module',
      desc: 'Monitor daily attendance patterns, generate automatic warnings for chronic absences, and notify parents instantly.',
      features: [
        'Instant roll-call entry on mobile portals',
        'Biometric check-in logs integration',
        'Automatic absence notifications to parents',
        'Term-wide attendance analysis reporting',
        'Staff sign-in trackers and time auditing'
      ],
      kpiVal: '98%', kpiLbl: 'Attendance Log Reliability',
      mockName: 'academics-dashboard'
    },
    timetable: {
      title: 'Conflict-Free Timetable Generator',
      badge: 'Operational Module',
      desc: 'Generate lesson timetables automatically based on class streams, teacher subject assignments, and lab capacities.',
      features: [
        'Smart constraint-based scheduling algorithms',
        'Teacher double-booking prevention safeguards',
        'Specialist lab (Science, Art) resource scheduling',
        'Sub-in scheduler for absent staff members',
        'Exportable formats for student portals'
      ],
      kpiVal: 'Zero', kpiLbl: 'Scheduling Overlaps',
      mockName: 'learner-portal-home'
    },
    library: {
      title: 'Library Cataloguing & Lending Controls',
      badge: 'Support Module',
      desc: 'Organize library textbooks, track borrows and returns, and bill late fee fines to parent invoices automatically.',
      features: [
        'ISBN cataloging scanner tools',
        'Student barcode lending checks',
        'Due-date warning email notifications',
        'Overdue fines automated billing ledger',
        'Inventory audit counters'
      ],
      kpiVal: '12k+', kpiLbl: 'Books Catalogued',
      mockName: 'learner-portal-home'
    },
    transport: {
      title: 'School Transport & Bus Route Mapping',
      badge: 'Support Module',
      desc: 'Manage school bus routes, assign students to zones, and track transport fees billing status.',
      features: [
        'Route zoning definitions and driver logins',
        'Student bus manifest registries',
        'Term billing allocations by route zone',
        'Vehicle service and fuel log audit fields',
        'Direct notifications to parents on delay alerts'
      ],
      kpiVal: '80+', kpiLbl: 'Bus Routes Streamlined',
      mockName: 'finance-dashboard'
    },
    inventory: {
      title: 'Store Inventory & Asset Audits',
      badge: 'Support Module',
      desc: 'Log school supplies, trace textbook distributions to classes, and review departmental budgets.',
      features: [
        'Textbook allocation and recovery tracking',
        'Supplier quote records and order forms',
        'Stationery stock count audit tools',
        'Departmental resource request approvals',
        'Depreciation ledger for school assets'
      ],
      kpiVal: '99.9%', kpiLbl: 'Inventory Audit Precision',
      mockName: 'administrator-dashboard'
    },
    discipline: {
      title: 'Discipline Incident Logs & Portals',
      badge: 'Learner Welfare',
      desc: 'Record and monitor behavioral logs. Keep parents, guidance counselors, and class teachers informed.',
      features: [
        'Standardized incident reporting templates',
        'Parent warning alerts via SMS and portals',
        'Guidance counseling booking records',
        'Behavior trend analytics over term ranges',
        'Discipline committee approval workflows'
      ],
      kpiVal: 'Active', kpiLbl: 'Counseling Integrations',
      mockName: 'teacher-portal'
    }
  };

  // Fallback if route parameter doesn't match any known feature
  const product = productDb[id] || productDb.academics;

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Product Hero */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(15, 76, 92, 0.05) 0%, transparent 100%)', paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="container grid-2">
          <div style={{ alignSelf: 'center' }}>
            <span className="badge badge-orange">{product.badge}</span>
            <h1 style={{ color: 'var(--color-teal)', marginBottom: '20px' }}>{product.title}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
              {product.desc}
            </p>
            
            <div style={{ display: 'flex', gap: '24px', borderLeft: '3px solid var(--color-orange)', paddingLeft: '20px' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-teal)' }}>{product.kpiVal}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{product.kpiLbl}</div>
              </div>
              <div style={{ borderLeft: '1px solid var(--color-border)' }}></div>
              <div style={{ alignSelf: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-green)', fontWeight: 600 }}>Active Cloud Module</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Continuous Updates Included</div>
              </div>
            </div>
          </div>
          
          <div>
            <ImagePlaceholder name={product.mockName} type="dashboard" height="340px" />
          </div>
        </div>
      </section>

      {/* Feature Checklist Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Detailed Capabilities Checklist</h2>
            <p>Every module is designed to eliminate physical paperwork and manual data double-entry.</p>
          </div>

          <div className="grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {product.features.map((feat, idx) => (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  gap: '16px', 
                  alignItems: 'center',
                  background: '#FFFFFF' 
                }}
              >
                <CheckCircle2 size={24} style={{ color: 'var(--color-green)', flexShrink: 0 }} />
                <div style={{ fontWeight: 600, color: 'var(--color-teal)', fontSize: '0.95rem' }}>{feat}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SLA Note / Call to Action */}
      <section className="container">
        <div className="glass-panel-dark" style={{ padding: '48px', color: '#FFFFFF', textAlign: 'center' }}>
          <span className="badge badge-orange">Request Demo</span>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginTop: '12px', marginBottom: '16px' }}>
            Want to see how {product.title} works in your school?
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 32px auto', color: 'var(--color-text-muted)' }}>
            We will load your school's class streams and student roster count during a screen share to show you how easy setup is.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link to="/book-demo" className="btn btn-primary">
              Book Walkthrough <ArrowRight size={16} />
            </Link>
            <Link to="/pricing" className="btn btn-white" style={{ background: 'transparent', color: '#FFFFFF', border: '1px solid #FFFFFF' }}>
              View Scale Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplate;
