import React from 'react';
import { GraduationCap } from 'lucide-react';

const levels = [
  { code: 'EE', label: 'Exceeding', pct: 28, color: '#2db37a' },
  { code: 'ME', label: 'Meeting',   pct: 48, color: '#1a5c73' },
  { code: 'AE', label: 'Approaching', pct: 20, color: '#f5a623' },
  { code: 'BE', label: 'Below',     pct: 4,  color: '#e05252' },
];

const CBECompetencyCard = () => (
  <div className="cbe-comp-card">
    {/* Header */}
    <div className="cbe-comp-header">
      <span className="cbe-comp-icon"><GraduationCap size={15} /></span>
      <span className="cbe-comp-title">Class Competency Overview</span>
      <span className="cbe-comp-grade">Grade 6</span>
    </div>

    {/* EE / ME / AE / BE row */}
    <div className="cbe-comp-levels">
      {levels.map(({ code, label, pct, color }) => (
        <div key={code} className="cbe-comp-level">
          <div className="cbe-comp-dot" style={{ background: color }} />
          <div>
            <div className="cbe-comp-code">{code}</div>
            <div className="cbe-comp-sublabel">({label})</div>
          </div>
          <div className="cbe-comp-bar-wrap">
            <div className="cbe-comp-bar" style={{ width: `${pct * 1.8}px`, background: color }} />
          </div>
          <div className="cbe-comp-pct" style={{ color }}>{pct}%</div>
        </div>
      ))}
    </div>

    {/* Footer meta */}
    <div className="cbe-comp-footer">
      <div className="cbe-comp-meta-row">
        <span className="cbe-comp-meta-label">👥 Learners Assessed</span>
        <span className="cbe-comp-meta-val">48/48</span>
      </div>
      <div className="cbe-comp-meta-row">
        <span className="cbe-comp-meta-label">Overall Completion</span>
        <span className="cbe-comp-meta-val">100%</span>
      </div>
      <div className="cbe-comp-progress">
        <div className="cbe-comp-progress-fill" />
      </div>
    </div>
  </div>
);

export default CBECompetencyCard;
