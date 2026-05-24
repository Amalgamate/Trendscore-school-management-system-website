import React, { useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line, AreaChart, Area
} from 'recharts';
import { Coins, GraduationCap, Calendar, AlertTriangle } from 'lucide-react';

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
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const chartMargin = isMobile ? { top: 10, right: 8, left: 0, bottom: 2 } : { top: 20, right: 30, left: 20, bottom: 5 };

    switch (activeTab) {
      case 'finance':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={revenueData} margin={chartMargin}>
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
              <XAxis dataKey="month" stroke="#64748B" tick={{ fontSize: isMobile ? 10 : 12 }} />
              <YAxis hide={isMobile} stroke="#64748B" tickFormatter={(v) => `KSh ${v/1000}k`} />
              <Tooltip formatter={(value) => `KSh ${value.toLocaleString()}`} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              {!isMobile && <Legend />}
              <Area type="monotone" dataKey="Collections (KES)" stroke="#22C55E" fillOpacity={1} fill="url(#colorCollections)" strokeWidth={3} />
              <Area type="monotone" dataKey="Invoiced (KES)" stroke="#0F4C5C" fillOpacity={1} fill="url(#colorInvoiced)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        );
      case 'academics':
        return (
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={academicData} margin={chartMargin}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="grade" stroke="#64748B" tick={{ fontSize: isMobile ? 10 : 12 }} />
              <YAxis hide={isMobile} stroke="#64748B" unit="%" />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              {!isMobile && <Legend />}
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
            <LineChart data={attendanceData} margin={chartMargin}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
              <XAxis dataKey="week" stroke="#64748B" tick={{ fontSize: isMobile ? 10 : 12 }} />
              <YAxis hide={isMobile} stroke="#64748B" domain={[90, 100]} unit="%" />
              <Tooltip formatter={(v) => `${v}%`} contentStyle={{ borderRadius: '8px', border: '1px solid #E2E8F0' }} />
              {!isMobile && <Legend />}
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
    <div className="glass-panel-dark interactive-dashboard-panel">
      {/* Title block */}
      <div className="interactive-dashboard-head">
        <div>
          <span className="badge badge-orange">Analytics Command Center</span>
          <h2>Real-Time School Performance KPIs</h2>
        </div>

        {/* Tab triggers */}
        <div className="interactive-dashboard-tabs" role="tablist" aria-label="Analytics views">
          <button 
            onClick={() => setActiveTab('finance')}
            className={`interactive-dashboard-tab ${activeTab === 'finance' ? 'is-active' : ''}`}
          >
            <Coins size={16} /> Finance
          </button>
          <button 
            onClick={() => setActiveTab('academics')}
            className={`interactive-dashboard-tab ${activeTab === 'academics' ? 'is-active' : ''}`}
          >
            <GraduationCap size={16} /> CBE Academics
          </button>
          <button 
            onClick={() => setActiveTab('attendance')}
            className={`interactive-dashboard-tab ${activeTab === 'attendance' ? 'is-active' : ''}`}
          >
            <Calendar size={16} /> Attendance
          </button>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="interactive-dashboard-kpis">
        <div className="interactive-dashboard-kpi">
          <div className="interactive-dashboard-kpi-label">TOTAL LEARNERS</div>
          <div className="interactive-dashboard-kpi-value">
            1,230 <span>&uarr; 12%</span>
          </div>
        </div>
        <div className="interactive-dashboard-kpi">
          <div className="interactive-dashboard-kpi-label">COLLECTION RATE</div>
          <div className="interactive-dashboard-kpi-value">
            88.2% <span>&uarr; 4.1%</span>
          </div>
        </div>
        <div className="interactive-dashboard-kpi">
          <div className="interactive-dashboard-kpi-label">AVERAGE ATTENDANCE</div>
          <div className="interactive-dashboard-kpi-value">
            96.4% <span>Stable</span>
          </div>
        </div>
        <div className="interactive-dashboard-kpi interactive-dashboard-kpi-alert">
          <div className="interactive-dashboard-kpi-label interactive-dashboard-alert-label">
            <AlertTriangle size={12} /> SYSTEM ALERTS
          </div>
          <div className="interactive-dashboard-alert-value">
            3 Active
          </div>
        </div>
      </div>

      {/* Main Chart viewport */}
      <div className="interactive-dashboard-chart">
        {renderChart()}
      </div>
    </div>
  );
};

export default InteractiveDashboard;
