import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FileText, Download, HelpCircle, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

const ResourcePages = () => {
  const { id } = useParams();

  // Collapsible FAQ state
  const [openFaq, setOpenFaq] = useState({});

  const toggleFaq = (idx) => {
    setOpenFaq({
      ...openFaq,
      [idx]: !openFaq[idx]
    });
  };

  const blogPosts = [
    { title: 'Ultimate Guide to CBE Formative Assessment Rubrics', date: 'May 12, 2026', readTime: '5 min read', desc: 'Understand how to set up learning area scores and compile student dossiers without physical paperwork overhead.' },
    { title: 'Preventing Cash Leaks in School Fees Auditing', date: 'April 28, 2026', readTime: '8 min read', desc: 'Learn how automated M-Pesa transactions and ledger updates can stop reconciliation errors at start-of-term.' },
    { title: 'Transitioning Your School to Senior School Pathways', date: 'March 15, 2026', readTime: '6 min read', desc: 'A checklist for principals allocating teachers and labs to STEM, social science, and arts streams.' }
  ];

  const guides = [
    { title: 'The CBE Transition Handbook for School Directors', file: 'cbe-transition-handbook.pdf', size: '4.2 MB' },
    { title: 'Automated Finance Management Checklist', file: 'fees-reconciliation-guide.pdf', size: '2.8 MB' },
    { title: 'School Timetable Configuration Guide', file: 'timetable-setup-rules.pdf', size: '1.5 MB' }
  ];

  const docs = [
    { section: 'Onboarding & Setup', topics: ['Student Roster Excel Imports', 'Creating Class Streams & Subjects', 'Configuring Grading Rubrics'] },
    { section: 'Finance Operations', topics: ['M-Pesa Express API Setup', 'Invoice Generation Schedules', 'Exporting Balance Sheets'] },
    { section: 'User Access & Portals', topics: ['Parent App Invitations', 'Teacher Account Logins Permissions', 'Student Dashboard Overview'] }
  ];

  const faqs = [
    { q: 'How long does it take to migrate our student list to TrendScore?', a: 'Standard migrations take less than 48 hours. Our onboarding technicians clean and import your student lists, sibling mappings, and historical accounts from Excel or legacy systems free of charge.' },
    { q: 'Is the parent portal compatible with low-bandwidth mobile phones?', a: 'Yes. The Parent App is designed with an extremely lightweight web-socket layout, allowing parents in low-connectivity areas to pay fees, receive WhatsApp notifications, and check results balances.' },
    { q: 'Does TrendScore comply with the Kenya Data Protection Act?', a: 'Absolutely. TrendScore is fully registered with the Office of the Data Protection Commissioner (ODPC) in Kenya. Student grades and billing records are isolated in secure tenancies with role-based access rules.' },
    { q: 'How is the scale billing calculated?', a: 'Billing is scaled based on your active student population count (e.g. KSh 15,000 to 45,000 per month). There are no hidden fees, and parent portal app accounts are completely free and unlimited.' }
  ];

  const renderResource = () => {
    switch (id) {
      case 'blog':
        return (
          <div>
            <h2 style={{ marginBottom: '32px', color: 'var(--color-teal)' }}>Latest Articles</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {blogPosts.map((post, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '8px' }}>{post.date} &bull; {post.readTime}</div>
                  <h3 style={{ marginBottom: '12px' }}>{post.title}</h3>
                  <p style={{ marginBottom: '20px' }}>{post.desc}</p>
                  <a href="#read" className="btn btn-secondary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Read Article &rarr;</a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'guides':
        return (
          <div>
            <h2 style={{ marginBottom: '32px', color: 'var(--color-teal)' }}>E-Books & Manual Downloads</h2>
            <div className="grid-3">
              {guides.map((guide, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '24px', backgroundColor: '#FFFFFF', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '220px' }}>
                  <div>
                    <Download size={32} style={{ color: 'var(--color-orange)', marginBottom: '16px', margin: '0 auto 16px auto' }} />
                    <h4 style={{ fontSize: '1rem', color: 'var(--color-teal)', marginBottom: '8px' }}>{guide.title}</h4>
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>PDF Document &bull; {guide.size}</span>
                  </div>
                  <a 
                    href="#download" 
                    onClick={(e) => { e.preventDefault(); alert('Download started for ' + guide.file); }}
                    className="btn btn-primary" 
                    style={{ padding: '8px 16px', fontSize: '0.85rem', marginTop: '16px', width: '100%' }}
                  >
                    Download Guide
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
      case 'docs':
        return (
          <div>
            <h2 style={{ marginBottom: '32px', color: 'var(--color-teal)' }}>Platform Documentation</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {docs.map((doc, idx) => (
                <div key={idx} className="glass-panel" style={{ padding: '32px', backgroundColor: '#FFFFFF' }}>
                  <h3 style={{ marginBottom: '16px', borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>{doc.section}</h3>
                  <div className="grid-3">
                    {doc.topics.map((topic, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FileText size={18} style={{ color: 'var(--color-teal)' }} />
                        <span style={{ fontSize: '0.9rem', color: 'var(--color-text-primary)', cursor: 'pointer' }}>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'faq':
      default:
        return (
          <div>
            <h2 style={{ marginBottom: '32px', color: 'var(--color-teal)', textAlign: 'center' }}>Frequently Asked Questions</h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {faqs.map((faq, idx) => {
                const isOpen = !!openFaq[idx];
                return (
                  <div 
                    key={idx} 
                    className="glass-panel" 
                    style={{ 
                      padding: '20px 24px', 
                      backgroundColor: '#FFFFFF',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => toggleFaq(idx)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h4 style={{ fontSize: '1rem', color: 'var(--color-teal)', fontWeight: 600 }}>{faq.q}</h4>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                    {isOpen && (
                      <p style={{ marginTop: '16px', fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: '1.6', borderTop: '1px solid var(--color-border)', paddingTop: '16px' }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ paddingBottom: '80px' }}>
      {/* Hero Header */}
      <section className="section" style={{ background: 'linear-gradient(180deg, rgba(15, 76, 92, 0.05) 0%, transparent 100%)', paddingTop: '160px', paddingBottom: '40px', marginBottom: '40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="badge badge-teal">Resources Hub</span>
          <h1 style={{ color: 'var(--color-teal)', fontSize: '2.5rem', marginBottom: '16px', textTransform: 'capitalize' }}>
            TrendScore {id || 'FAQ'}
          </h1>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-secondary)' }}>
            Find support materials, user templates, and curriculum guides to configure your school management system.
          </p>
        </div>
      </section>

      {/* Main View */}
      <section className="container">
        {renderResource()}
      </section>
    </div>
  );
};

export default ResourcePages;
