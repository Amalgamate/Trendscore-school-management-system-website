import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area
} from 'recharts';
import { Coins, GraduationCap, Calendar, Users, TrendingUp, AlertTriangle } from 'lucide-react';

const InteractiveDashboard = () => {
  const [activeTab, setActiveTab] = useState('finance');

  // Sample data collections
  const revenueData = [
    { month: 'Jan', 'Collections (KES)': 820000, 'Invoiced (KES)': 900000 },
    { month: 'Feb', 'Collections (KES)': 950000, 'Invoiced (KES)': 1000000 },
    { month: 'Mar', 'Collections (KES)': 1200000, 'Invoiced (KES)': 1200000 },
    { month: 'Apr', 'Collections (KES)': 1400000, 'Invoiced (KES)': 1450000 },
    { month: 'May', 'Collections (KES)': 2150000, 'Invoiced (KES)': 2200000 },
    { month: 'Jun', 'Collections (KES)': 2450300, 'Invoiced (KES)': 2500000 },
  ];

  const academicData = [
    { grade: 'Grade 1', 'Exceeding (EE)': 18, 'Meeting (ME)': 52, 'Approaching (AE)': 25, 'Below (BE)': 5 },
    { grade: 'Grade 2', 'Exceeding (EE)': 22, 'Meeting (ME)': 48, 'Approaching (AE)': 24, 'Below (BE)': 6 },
    { grade: 'Grade 3', 'Exceeding (EE)': 25, 'Meeting (ME)': 50, 'Approaching (AE)': 20, 'Below (BE)': 5 },
    { grade: 'Grade 4', 'Exceeding (EE)': 30, 'Meeting (ME)': 45, 'Approaching (AE)': 22, 'Below (BE)': 3 },
    { grade: 'Grade 5', 'Exceeding (EE)': 28, 'Meeting (ME)': 55, 'Approaching (AE)': 15, 'Below (BE)': 2 },
    { grade: 'Grade 6', 'Exceeding (EE)': 35, 'Meeting (ME)': 48, 'Approaching (AE)': 14, 'Below (BE)': 3 },
  ];

  const attendanceData = [
    { week: 'Wk 1', 'Grade 1-3': 96, 'Grade 4-6': 97, 'Junior Sec': 95 },
    { week: 'Wk 2', 'Grade 1-3': 95, 'Grade 4-6': 98, 'Junior Sec': 96 },
    { week: 'Wk 3', 'Grade 1-3': 98, 'Grade 4-6': 96, 'Junior Sec': 94 },
    { week: 'Wk 4', 'Grade 1-3': 94, 'Grade 4-6': 95, 'Junior Sec': 97 },
    { week: 'Wk 5', 'Grade 1-3': 97, 'Grade 4-6': 97, 'Junior Sec': 98 },
    { week: 'Wk 6', 'Grade 1-3': 99, 'Grade 4-6': 98, 'Junior Sec': 99 },
  ];

  const renderChart = () => {
    switch (activeTab) {
      case 'finance':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={revenueData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorCollections" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22C55E" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorInvoiced" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F4C5C" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#0F4C5C" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="month" stroke="#64748B" />
              <YAxis stroke="#64748B" tickFormatter={(v) => `KSh ${v/1000}k`} />
              <Tooltip formatter={(value) => `KSh ${value.toLocaleString()}`} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              <Legend />
              <Area type="monotone" dataKey="Collections (KES)" stroke="#22C55E" fillOpacity={1} fill="url(#colorCollections)" strokeWidth={3} />
              <Area type="monotone" dataKey="Invoiced (KES)" stroke="#0F4C5C" fillOpacity={1} fill="url(#colorInvoiced)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'academics':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={academicData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="grade" stroke="#64748B" />
              <YAxis stroke="#64748B" unit="%" />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              <Legend />
              <Bar dataKey="Exceeding (EE)" fill="#22C55E" stackId="a" />
              <Bar dataKey="Meeting (ME)" fill="#0F4C5C" stackId="a" />
              <Bar dataKey="Approaching (AE)" fill="#F97316" stackId="a" />
              <Bar dataKey="Below (BE)" fill="#EF4444" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        );
      case 'attendance':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={attendanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="week" stroke="#64748B" />
              <YAxis stroke="#64748B" domain={[90, 100]} unit="%" />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              <Legend />
              <Line type="monotone" dataKey="Grade 1-3" stroke="#F97316" strokeWidth={3} activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Grade 4-6" stroke="#0F4C5C" strokeWidth={3} />
              <Line type="monotone" dataKey="Junior Sec" stroke="#22C55E" strokeWidth={2} strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass-panel-dark" style={{ width: '100%', padding: '32px', color: '#FFFFFF', borderRadius: '24px' }}>
      {/* Title block */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '20px' }}>
        <div>
          <span className="badge badge-orange">Analytics Command Center</span>
          <h2 style={{ color: '#FFFFFF', fontSize: '1.8rem', marginTop: '8px' }}>Real-Time School Performance KPIs</h2>
        </div>

        {/* Tab triggers */}
        <div style={{ display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.05)', padding: '6px', borderRadius: '12px' }}>
          <button 
            onClick={() => setActiveTab('finance')}
            style={{ 
              backgroundColor: activeTab === 'finance' ? '#F97316' : 'transparent',
              border: 'none', color: '#FFFFFF', padding: '8px 16px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem'
            }}
          >
            <Coins size={16} /> Finance
          </button>
          <button 
            onClick={() => setActiveTab('academics')}
            style={{ 
              backgroundColor: activeTab === 'academics' ? '#F97316' : 'transparent',
              border: 'none', color: '#FFFFFF', padding: '8px 16px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem'
            }}
          >
            <GraduationCap size={16} /> CBE Academics
          </button>
          <button 
            onClick={() => setActiveTab('attendance')}
            style={{ 
              backgroundColor: activeTab === 'attendance' ? '#F97316' : 'transparent',
              border: 'none', color: '#FFFFFF', padding: '8px 16px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem'
            }}
          >
            <Calendar size={16} /> Attendance
          </button>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
        <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>TOTAL LEARNERS</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            4,352 <span style={{ color: '#22C55E', fontSize: '0.75rem', fontWeight: 600 }}>&uarr; 12%</span>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>COLLECTION RATE</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            88.2% <span style={{ color: '#22C55E', fontSize: '0.75rem', fontWeight: 600 }}>&uarr; 4.1%</span>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem' }}>AVERAGE ATTENDANCE</div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            96.4% <span style={{ color: '#22C55E', fontSize: '0.75rem', fontWeight: 600 }}>Stable</span>
          </div>
        </div>
        <div style={{ background: 'rgba(255,255,255,0.04)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.08)', borderLeft: '3px solid #EF4444' }}>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <AlertTriangle size={12} color="#EF4444" /> SYSTEM ALERTS
          </div>
          <div style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '4px', color: '#EF4444' }}>
            3 Active
          </div>
        </div>
      </div>

      {/* Main Chart viewport */}
      <div style={{ background: 'rgba(7, 59, 69, 0.4)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
        {renderChart()}
      </div>
    </div>
  );
};

export default InteractiveDashboard;
