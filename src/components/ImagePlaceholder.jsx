import React, { useState } from 'react';
import { 
  Users, Coins, GraduationCap, Calendar, BookOpen, Clock, 
  ArrowRight, ShieldCheck, CheckCircle2, TrendingUp, AlertCircle
} from 'lucide-react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, 
  ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie
} from 'recharts';

// Real image map — maps placeholder "name" props to actual public folder files
const REAL_IMAGE_MAP = {
  'hero-dashboard':                '/hero image layout.png',
  'hero-main':                     '/hero image.png',
  'academics-dashboard':           '/dashboard-academics-overview-v1.jpg.png',
  'parent-portal':                 '/parents portal.png',
  'parent-mobile-app':             '/parents portal 2.png',
  'parent-portal-section':         '/parents portal section.png',
  'finance-dashboard':             '/finance.png',
  'revenue-analytics':             '/finance.png',
  'senior-school-pathways-dashboard': '/pathways.png',
};

const ImagePlaceholder = ({ name, type = 'dashboard', className = '', height = '320px' }) => {
  const [imageError, setImageError] = useState(false);

  // Resolve real image path if one is mapped
  const srcPath = REAL_IMAGE_MAP[name] || null;

  // Standard student lists for mockups
  const students = [
    { id: 1, name: 'David Kiprop', class: 'Grade 6 East', attendance: '98%', feeStatus: 'Paid', behavior: 'Excellent' },
    { id: 2, name: 'Mary Wanjiku', class: 'Grade 6 West', attendance: '95%', feeStatus: 'Part Paid', behavior: 'Good' },
    { id: 3, name: 'Fatuma Hassan', class: 'Grade 5 North', attendance: '100%', feeStatus: 'Paid', behavior: 'Outstanding' },
    { id: 4, name: 'John Mwangi', class: 'Grade 6 East', attendance: '88%', feeStatus: 'Arrears', behavior: 'Needs Work' },
  ];

  // Financial charts data
  const financeData = [
    { name: 'Jan', collections: 420000, invoices: 500000 },
    { name: 'Feb', collections: 510000, invoices: 550000 },
    { name: 'Mar', collections: 680000, invoices: 700000 },
    { name: 'Apr', collections: 890000, invoices: 950000 },
    { name: 'May', collections: 1245300, invoices: 1300000 },
  ];

  // CBE Level distribution
  const cbeData = [
    { name: 'Exceeding (EE)', value: 28, color: '#22C55E' },
    { name: 'Meeting (ME)', value: 48, color: '#0F4C5C' },
    { name: 'Approaching (AE)', value: 20, color: '#F97316' },
    { name: 'Below (BE)', value: 4, color: '#EF4444' },
  ];

  // If a real image was successfully placed, render it!
  if (!imageError && name) {
    // If the image loads, we display it. Otherwise we trigger onError fallback.
    // For local dev, we will start with fallback mockups until they load.
  }

  // Render CSS Mockup Dashboards
  const renderCssMockup = () => {
    switch (name) {
      case 'hero-dashboard':
      case 'academics-dashboard':
        return (
          <div className="glass-panel" style={{ width: '100%', height: '100%', padding: '16px', fontSize: '0.85rem', color: '#1E293B', display: 'flex', flexDirection: 'column' }}>
            {/* Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#22C55E' }}></span>
                <span style={{ fontWeight: 600 }}>TrendScore Academics Core</span>
              </div>
              <div style={{ backgroundColor: '#F1F5F9', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem' }}>Term 2, 2026</div>
            </div>

            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
              <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <div style={{ color: '#64748B', fontSize: '0.75rem' }}>Total Learners</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0F4C5C' }}>4,352</div>
              </div>
              <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <div style={{ color: '#64748B', fontSize: '0.75rem' }}>Avg. Attendance</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#22C55E' }}>95.8%</div>
              </div>
              <div style={{ background: '#F8FAFC', padding: '10px', borderRadius: '8px', border: '1px solid #E2E8F0' }}>
                <div style={{ color: '#64748B', fontSize: '0.75rem' }}>Class Streams</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#F97316' }}>36</div>
              </div>
            </div>

            {/* Student Table */}
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid #E2E8F0', color: '#64748B', fontSize: '0.75rem' }}>
                    <th style={{ padding: '6px' }}>Learner Name</th>
                    <th style={{ padding: '6px' }}>Class</th>
                    <th style={{ padding: '6px' }}>Attendance</th>
                    <th style={{ padding: '6px' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map(s => (
                    <tr key={s.id} style={{ borderBottom: '1px solid #F1F5F9' }}>
                      <td style={{ padding: '8px 6px', fontWeight: 600 }}>{s.name}</td>
                      <td style={{ padding: '8px 6px', color: '#64748B' }}>{s.class}</td>
                      <td style={{ padding: '8px 6px' }}>{s.attendance}</td>
                      <td style={{ padding: '8px 6px' }}>
                        <span style={{ 
                          padding: '2px 8px', 
                          borderRadius: '12px', 
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          backgroundColor: s.feeStatus === 'Paid' ? '#DCFCE7' : s.feeStatus === 'Part Paid' ? '#FEF9C3' : '#FEE2E2',
                          color: s.feeStatus === 'Paid' ? '#166534' : s.feeStatus === 'Part Paid' ? '#854D0E' : '#991B1B'
                        }}>{s.feeStatus}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'assessment-dashboard':
      case 'competency-analytics':
      case 'report-card-preview':
        return (
          <div className="glass-panel" style={{ width: '100%', height: '100%', padding: '16px', fontSize: '0.85rem', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ fontWeight: 700, color: '#0F4C5C', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <GraduationCap size={16} /> Competency Assessment Rubric
              </div>
              <span style={{ fontSize: '0.75rem', color: '#F97316', fontWeight: 600 }}>Grade 6 Rubrics</span>
            </div>

            {/* Assessment Grid Preview */}
            <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '12px', border: '1px solid #E2E8F0', flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ borderBottom: '1px solid #E2E8F0', paddingBottom: '4px', fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                Learning Area: Science & Technology
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: '6px', borderLeft: '3px solid #22C55E' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.8rem' }}>1. Classify mixtures based on properties</div>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                    <span style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#DCFCE7', color: '#15803d', borderRadius: '4px', fontWeight: 700 }}>ME - Meeting</span>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', alignSelf: 'center' }}>Checked by: Teacher Mary</span>
                  </div>
                </div>

                <div style={{ background: '#FFFFFF', padding: '8px', borderRadius: '6px', borderLeft: '3px solid #F97316' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.8rem' }}>2. Design filtration setup for water purification</div>
                  <div style={{ display: 'flex', gap: '4px', marginTop: '4px' }}>
                    <span style={{ fontSize: '0.7rem', padding: '2px 6px', background: '#FEF9C3', color: '#a16207', borderRadius: '4px', fontWeight: 700 }}>AE - Approaching</span>
                    <span style={{ fontSize: '0.7rem', color: '#64748B', alignSelf: 'center' }}>Project Submitted</span>
                  </div>
                </div>
              </div>

              {/* CBE Levels Visual summary */}
              <div style={{ marginTop: 'auto', paddingTop: '10px', borderTop: '1px solid #E2E8F0' }}>
                <div style={{ fontSize: '0.75rem', color: '#64748B', marginBottom: '4px' }}>Class Overall Distribution:</div>
                <div style={{ display: 'flex', height: '12px', borderRadius: '6px', overflow: 'hidden' }}>
                  <div style={{ width: '28%', background: '#22C55E' }} title="Exceeding"></div>
                  <div style={{ width: '48%', background: '#0F4C5C' }} title="Meeting"></div>
                  <div style={{ width: '20%', background: '#F97316' }} title="Approaching"></div>
                  <div style={{ width: '4%', background: '#EF4444' }} title="Below"></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#64748B', marginTop: '4px' }}>
                  <span>EE: 28%</span>
                  <span>ME: 48%</span>
                  <span>AE: 20%</span>
                  <span>BE: 4%</span>
                </div>
              </div>
            </div>
          </div>
        );

      case 'finance-dashboard':
      case 'revenue-analytics':
        return (
          <div className="glass-panel" style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ fontWeight: 700, color: '#0F4C5C', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem' }}>
                <Coins size={16} /> Finance Command Center
              </div>
              <span style={{ fontSize: '0.75rem', backgroundColor: '#F0FDF4', color: '#15803D', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>M-Pesa Connected</span>
            </div>

            {/* Finance Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '12px' }}>
              <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Fee Collections</span>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#22C55E' }}>KSh 1,245,300</div>
              </div>
              <div style={{ background: '#F8FAFC', padding: '8px', borderRadius: '6px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Arrears Balances</span>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: '#EF4444' }}>KSh 320,450</div>
              </div>
            </div>

            {/* Recharts chart */}
            <div style={{ flex: 1, minHeight: '120px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={financeData} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" stroke="#94A3B8" fontSize={9} />
                  <YAxis stroke="#94A3B8" fontSize={9} />
                  <Tooltip contentStyle={{ fontSize: 10 }} />
                  <Area type="monotone" dataKey="collections" stroke="#22C55E" fill="rgba(34, 197, 94, 0.1)" strokeWidth={2} name="Collections" />
                  <Area type="monotone" dataKey="invoices" stroke="#0F4C5C" fill="rgba(15, 76, 92, 0.05)" strokeWidth={2} name="Invoiced" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        );

      case 'parent-portal-home':
      case 'parent-mobile-app':
        return (
          <div className="glass-panel" style={{ width: '240px', height: '100%', margin: '0 auto', border: '8px solid #1E293B', borderRadius: '32px', padding: '16px 8px', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', boxShadow: 'var(--shadow-lg)' }}>
            {/* Phone Screen Speaker & Notch */}
            <div style={{ width: '60px', height: '12px', background: '#1E293B', borderRadius: '6px', margin: '-10px auto 10px auto' }}></div>
            
            {/* Screen Content */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', fontSize: '0.75rem', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid #F1F5F9', paddingBottom: '4px' }}>
                <span style={{ fontWeight: 700, color: '#0F4C5C' }}>Parent Portal</span>
                <span style={{ fontSize: '0.65rem', color: '#64748B' }}>Mary Wanjiku</span>
              </div>

              {/* Fee Card */}
              <div style={{ background: 'linear-gradient(135deg, #0F4C5C, #073B45)', color: '#FFFFFF', padding: '10px', borderRadius: '8px', marginBottom: '8px' }}>
                <div style={{ fontSize: '0.6rem', opacity: 0.8 }}>FEE BALANCE</div>
                <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>KSh 23,450</div>
                <div style={{ fontSize: '0.6rem', background: '#F97316', display: 'inline-block', padding: '2px 6px', borderRadius: '4px', marginTop: '4px' }}>Pay via M-Pesa</div>
              </div>

              {/* Quick Links */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', marginBottom: '8px' }}>
                <div style={{ background: '#F8FAFC', padding: '6px', borderRadius: '6px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                  <GraduationCap size={14} style={{ color: '#F97316', margin: '0 auto 2px auto' }} />
                  <span style={{ fontSize: '0.6rem', fontWeight: 600 }}>CBE Marks</span>
                </div>
                <div style={{ background: '#F8FAFC', padding: '6px', borderRadius: '6px', textAlign: 'center', border: '1px solid #E2E8F0' }}>
                  <Calendar size={14} style={{ color: '#0F4C5C', margin: '0 auto 2px auto' }} />
                  <span style={{ fontSize: '0.6rem', fontWeight: 600 }}>Attendance</span>
                </div>
              </div>

              {/* Recent notices */}
              <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '8px', padding: '8px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#0F4C5C', display: 'block', marginBottom: '4px' }}>Latest Notice:</span>
                <p style={{ fontSize: '0.6rem', color: '#64748B', lineHeight: '1.2' }}>End-term assessments start on 12th August 2026. Please clear all fee balances.</p>
              </div>
            </div>
          </div>
        );

      case 'learner-portal-home':
        return (
          <div className="glass-panel" style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '8px' }}>
              <div style={{ fontWeight: 700, color: '#0F4C5C', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <BookOpen size={16} /> Learner Dashboard
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748B' }}>David Kiprop (Grade 6)</span>
            </div>

            {/* Timetable overview */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '16px', flex: 1 }}>
              <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '12px', border: '1px solid #E2E8F0' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#0F4C5C', display: 'block', marginBottom: '8px' }}>Today's Classes</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px', background: '#FFFFFF', borderRadius: '4px', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: 600 }}>08:30 - Mathematics</span>
                    <span style={{ color: '#64748B' }}>Room 4B</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px', background: '#FFFFFF', borderRadius: '4px', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: 600 }}>10:00 - English</span>
                    <span style={{ color: '#64748B' }}>Room 4B</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px', background: '#FFFFFF', borderRadius: '4px', fontSize: '0.75rem' }}>
                    <span style={{ fontWeight: 600 }}>11:30 - Physical Ed.</span>
                    <span style={{ color: '#64748B' }}>Field</span>
                  </div>
                </div>
              </div>

              {/* Progress indicators */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '10px', border: '1px solid #E2E8F0', flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Competency Completion</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                    <div style={{ flex: 1, height: '8px', background: '#E2E8F0', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: '75%', height: '100%', background: '#F97316' }}></div>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700 }}>75%</span>
                  </div>
                </div>
                <div style={{ background: '#F8FAFC', borderRadius: '8px', padding: '10px', border: '1px solid #E2E8F0', flex: 1 }}>
                  <span style={{ fontSize: '0.7rem', color: '#64748B' }}>Next Homework</span>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#0F4C5C', marginTop: '4px' }}>Science: Solar System</div>
                  <div style={{ fontSize: '0.65rem', color: '#EF4444', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={10} /> Due tomorrow
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'teacher-portal':
        return (
          <div className="glass-panel" style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
              <div style={{ fontWeight: 700, color: '#0F4C5C', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Users size={16} /> Teacher Markbook Command
              </div>
              <div style={{ background: '#0F4C5C', color: '#FFFFFF', padding: '2px 10px', borderRadius: '4px', fontSize: '0.75rem' }}>Grade 6 East</div>
            </div>

            {/* Markbook layout */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px', fontSize: '0.75rem', fontWeight: 600, color: '#64748B' }}>
                <span style={{ width: '120px' }}>Learner Name</span>
                <span style={{ flex: 1 }}>Assessment Criteria 1</span>
                <span style={{ width: '80px', textAlign: 'center' }}>Level Score</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#F8FAFC', padding: '6px', borderRadius: '4px' }}>
                  <span style={{ width: '120px', fontWeight: 600 }}>David Kiprop</span>
                  <span style={{ flex: 1, fontSize: '0.75rem', color: '#64748B' }}>Identifies mixtures correctly</span>
                  <select defaultValue="ME" style={{ width: '80px', padding: '2px', border: '1px solid #CBD5E1', borderRadius: '4px', fontSize: '0.75rem' }}>
                    <option value="EE">EE</option>
                    <option value="ME">ME</option>
                    <option value="AE">AE</option>
                    <option value="BE">BE</option>
                  </select>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: '#F8FAFC', padding: '6px', borderRadius: '4px' }}>
                  <span style={{ width: '120px', fontWeight: 600 }}>Mary Wanjiku</span>
                  <span style={{ flex: 1, fontSize: '0.75rem', color: '#64748B' }}>Identifies mixtures correctly</span>
                  <select defaultValue="EE" style={{ width: '80px', padding: '2px', border: '1px solid #CBD5E1', borderRadius: '4px', fontSize: '0.75rem' }}>
                    <option value="EE">EE</option>
                    <option value="ME">ME</option>
                    <option value="AE">AE</option>
                    <option value="BE">BE</option>
                  </select>
                </div>
              </div>

              {/* Action */}
              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                <button style={{ backgroundColor: '#F97316', color: '#FFFFFF', padding: '4px 12px', border: 'none', borderRadius: '4px', fontWeight: 600, fontSize: '0.75rem', cursor: 'pointer' }}>Submit Marks to Portal</button>
              </div>
            </div>
          </div>
        );

      case 'integration-illustration':
        return (
          <div className="glass-panel" style={{ width: '100%', height: '100%', padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '280px' }}>
            <div style={{ position: 'relative', width: '200px', height: '200px' }}>
              {/* Center System */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#0F4C5C', color: '#FFFFFF', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 700, fontSize: '0.75rem', zIndex: 10, boxShadow: 'var(--shadow-lg)' }}>
                ERP
              </div>
              
              {/* Outer nodes */}
              <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', padding: '4px 10px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600, color: '#22C55E' }}>M-Pesa</div>
              <div style={{ position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)', padding: '4px 10px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600, color: '#25D366' }}>WhatsApp</div>
              <div style={{ position: 'absolute', top: '50%', left: '0', transform: 'translateY(-50%)', padding: '4px 10px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600, color: '#4285F4' }}>Google</div>
              <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translateY(-50%)', padding: '4px 10px', background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '12px', fontSize: '0.7rem', fontWeight: 600, color: '#F25022' }}>Microsoft</div>

              {/* Connecting lines */}
              <svg style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 1 }} viewBox="0 0 200 200">
                <line x1="100" y1="20" x2="100" y2="100" stroke="#CBD5E1" strokeDasharray="3" strokeWidth="2" />
                <line x1="100" y1="180" x2="100" y2="100" stroke="#CBD5E1" strokeDasharray="3" strokeWidth="2" />
                <line x1="30" y1="100" x2="100" y2="100" stroke="#CBD5E1" strokeDasharray="3" strokeWidth="2" />
                <line x1="170" y1="100" x2="100" y2="100" stroke="#CBD5E1" strokeDasharray="3" strokeWidth="2" />
              </svg>
            </div>
          </div>
        );

      case 'senior-school-pathways-dashboard':
        return (
          <div className="glass-panel" style={{ width: '100%', height: '100%', padding: '16px', display: 'flex', flexDirection: 'column', fontSize: '0.85rem' }}>
            <div style={{ fontWeight: 700, color: '#0F4C5C', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <TrendingUp size={16} /> Pathways Validator
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', flex: 1 }}>
              <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#166534', display: 'block' }}>STEM Pathway</span>
                <p style={{ fontSize: '0.65rem', color: '#15803D', marginTop: '4px' }}>Physics, Chemistry, Calculus</p>
                <div style={{ marginTop: '8px', fontSize: '0.65rem', background: '#22C55E', color: '#FFFFFF', padding: '2px 4px', borderRadius: '4px' }}>Valid Combo</div>
              </div>

              <div style={{ background: '#FEF9C3', border: '1px solid #FDE047', borderRadius: '8px', padding: '8px', textAlign: 'center' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#854D0E', display: 'block' }}>Social Sciences</span>
                <p style={{ fontSize: '0.65rem', color: '#a16207', marginTop: '4px' }}>History, Geography, Literature</p>
                <div style={{ marginTop: '8px', fontSize: '0.65rem', background: '#F97316', color: '#FFFFFF', padding: '2px 4px', borderRadius: '4px' }}>Valid Combo</div>
              </div>

              <div style={{ background: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#991B1B', display: 'block' }}>Arts & Sports</span>
                  <p style={{ fontSize: '0.65rem', color: '#B91C1C', marginTop: '4px' }}>Music, Art, Calculus</p>
                </div>
                <div style={{ fontSize: '0.6rem', color: '#B91C1C', display: 'flex', alignItems: 'center', gap: '2px', fontWeight: 700 }}>
                  <AlertCircle size={10} /> Conflict Detected
                </div>
              </div>
            </div>
          </div>
        );

      default:
        // Generic representation based on type
        return (
          <div style={{ textAlign: 'center', color: '#0F4C5C' }}>
            <BookOpen size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
            <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{name ? name.replace(/-/g, ' ').toUpperCase() : 'TrendScore Showcase'}</h4>
            <p style={{ fontSize: '0.8rem', color: '#64748B', marginTop: '4px' }}>Realistic UI Screenshot will display here</p>
          </div>
        );
    }
  };

  // If a real image is mapped and hasn't errored, show it
  if (srcPath && !imageError) {
    return (
      <div
        className={`img-placeholder-container ${type === 'dark' ? 'img-placeholder-dark' : ''} ${className}`}
        style={{ height, padding: 0, overflow: 'hidden', background: 'transparent', border: 'none', boxShadow: 'var(--shadow-xl)', borderRadius: 'var(--radius-md)' }}
      >
        <img
          src={srcPath}
          alt={name ? name.replace(/-/g, ' ') : 'TrendScore dashboard'}
          onError={() => setImageError(true)}
          style={{ width: '100%', height: '100%', objectFit: name === 'hero-main' ? 'contain' : 'cover', objectPosition: 'top', display: 'block', borderRadius: 'var(--radius-md)' }}
        />
      </div>
    );
  }

  // Otherwise fall back to the rich CSS mockup
  return (
    <div 
      className={`img-placeholder-container ${type === 'dark' ? 'img-placeholder-dark' : ''} ${className}`}
      style={{ height }}
    >
      {renderCssMockup()}
    </div>
  );
};

export default ImagePlaceholder;
