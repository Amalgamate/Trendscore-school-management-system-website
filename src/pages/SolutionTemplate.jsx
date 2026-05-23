import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, HelpCircle } from 'lucide-react';
import ImagePlaceholder from '../components/ImagePlaceholder';

const SolutionTemplate = () => {
  const { id } = useParams();

  const solutionDb = {
    primary: {
      title: 'Primary School ERP & CBE System',
      badge: 'Early Years & Primary Education',
      desc: 'Seamless CBE assessments scoring rubrics built specifically for early years and primary school grade structures. Track child growth across subject strands.',
      features: [
        'Formative and Summative scorecards alignment',
        'EE/ME/AE/BE learning area checklist reports',
        'Sibling account linkage for parent portals',
        'Direct parent SMS updates on attendance warnings',
        'Textbook distribution tracking logs'
      ],
      kpiVal: '300+', kpiLbl: 'Primary Schools Coordinated',
      mockName: 'assessment-dashboard'
    },
    junior: {
      title: 'Junior Secondary School ERP',
      badge: 'Junior Secondary Curriculum',
      desc: 'Score school-based assessments (SBAs), manage projects and practical assignments, and align with KNEC assessment criteria seamlessly.',
      features: [
        'SBA scoring grids with direct export formats',
        'Class project groups setup and rubric tracking',
        'Specialist lab usage timetabling allocation',
        'Grade 7-9 lesson planning schedule logs',
        'Term-start fee installment configuration rules'
      ],
      kpiVal: '99.4%', kpiLbl: 'Grade Compilation Accuracy',
      mockName: 'assessment-dashboard'
    },
    senior: {
      title: 'Senior Secondary School ERP',
      badge: 'Senior Pathways Validation',
      desc: 'Ensure compliance with Senior School Pathways requirements. Track subject combinations, career streams, and university entry checklists.',
      features: [
        'STEM, Social Sciences, Arts/Sports science combinations check',
        'Advanced chemistry/physics lab timetabling logs',
        'Career stream planning and combination checkers',
        'University requirements compliance validation rules',
        'Student profile history records for career advisor logs'
      ],
      kpiVal: '100%', kpiLbl: 'Pathway Compliance Guaranteed',
      mockName: 'senior-school-pathways-dashboard'
    },
    tvet: {
      title: 'TVET Institution ERP & Billing',
      badge: 'Vocational Training Operations',
      desc: 'Manage skill-based certifications, module grading tracks, course registrations, and semester billing structures.',
      features: [
        'Skills-competency checklists by course module',
        'Dynamic course registration setups',
        'Tool & equipment loan checks tracker',
        'Industrial attachment placement log records',
        'Semester installment ledger allocations'
      ],
      kpiVal: '40+', kpiLbl: 'TVET Centers Powered',
      mockName: 'finance-dashboard'
    },
    college: {
      title: 'Colleges & Higher Education Management',
      badge: 'Tertiary ERP',
      desc: 'Support semester billing configurations, student hostels allocations, faculty course planning, and exam center audits.',
      features: [
        'Semester tuition fees automated billing structures',
        'Student hostel room allocation mapping tools',
        'Faculty course timetable generators',
        'Continuous assessment test (CAT) marks uploads',
        'Transcript compilation exports'
      ],
      kpiVal: '15k+', kpiLbl: 'Higher Ed Learners Registered',
      mockName: 'administrator-dashboard'
    },
    'multi-campus': {
      title: 'Multi-Campus Institution ERP',
      badge: 'Consolidated Operations',
      desc: 'Unify disparate school campuses under a single management command. Reconcile global fee revenues and audit operational ledger reports.',
      features: [
        'Global collections vs local campus accounting logs',
        'Inter-campus teacher scheduling controls',
        'Unified student registry archives database',
        'Central administrator audit trails monitoring',
        'Consolidated performance heatmaps'
      ],
      kpiVal: 'Realtime', kpiLbl: 'Global Campus Consolidation',
      mockName: 'revenue-analytics'
    }
  };

  const sol = solutionDb[id] || solutionDb.primary;

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Solution Hero */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(15, 76, 92, 0.05) 0%, transparent 100%)', paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="container grid-2">
          <div style={{ alignSelf: 'center' }}>
            <span className="badge badge-orange">{sol.badge}</span>
            <h1 style={{ color: 'var(--color-teal)', marginBottom: '20px' }}>{sol.title}</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '32px' }}>
              {sol.desc}
            </p>
            
            <div style={{ display: 'flex', gap: '24px', borderLeft: '3px solid var(--color-orange)', paddingLeft: '20px' }}>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-teal)' }}>{sol.kpiVal}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{sol.kpiLbl}</div>
              </div>
              <div style={{ borderLeft: '1px solid var(--color-border)' }}></div>
              <div style={{ alignSelf: 'center' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-green)', fontWeight: 600 }}>Curriculum Aligned</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Fully compliant with local education guidelines</div>
              </div>
            </div>
          </div>
          
          <div>
            <ImagePlaceholder name={sol.mockName} type="dashboard" height="340px" />
          </div>
        </div>
      </section>

      {/* Feature Checklist Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Designed for Your Curriculum</h2>
            <p>Every school level requires specific configuration rules. TrendScore unifies operations without complicating setups.</p>
          </div>

          <div className="grid-2" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {sol.features.map((feat, idx) => (
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
          <span className="badge badge-orange">Request Custom Walkthrough</span>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginTop: '12px', marginBottom: '16px' }}>
            Ready to configure TrendScore for your school?
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 32px auto', color: 'var(--color-text-muted)' }}>
            Speak with an education ERP onboarding architect in Nairobi. We assist with data migrations from old software or spreadsheets.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <Link to="/book-demo" className="btn btn-primary">
              Book Walkthrough <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn btn-white" style={{ background: 'transparent', color: '#FFFFFF', border: '1px solid #FFFFFF' }}>
              Contact Nairobi Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionTemplate;
