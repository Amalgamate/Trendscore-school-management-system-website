import React from 'react';
import { Check, X, ShieldAlert, Zap } from 'lucide-react';

const ComparisonTable = () => {
  const criteria = [
    { name: 'CBE Competency Tracking', trendscore: true, legacy: false, spreadsheets: false, multiple: 'Partial' },
    { name: 'EE/ME/AE/BE Assessments', trendscore: true, legacy: 'Requires Custom Add-on', spreadsheets: 'Manual Setup Required', multiple: 'Disconnected' },
    { name: 'Senior School Pathways Validations', trendscore: true, legacy: false, spreadsheets: false, multiple: false },
    { name: 'Automated M-Pesa Ledger Rec', trendscore: true, legacy: 'Manual Input Required', spreadsheets: 'Manual Entry Required', multiple: 'Required third party integration' },
    { name: 'Live WhatsApp & SMS Alerts', trendscore: true, legacy: 'Requires SMS Gateway addon', spreadsheets: false, multiple: 'Needs multiple API keys' },
    { name: 'Parent & Learner Mobile Apps', trendscore: true, legacy: 'Web only, or additional cost', spreadsheets: false, multiple: 'Different log-ins required' },
    { name: 'Multi-campus Realtime Audits', trendscore: true, legacy: 'Consolidation script needed', spreadsheets: 'Complex workbook references', multiple: 'No global ledger sync' },
    { name: 'Interactive Executive BI dashboard', trendscore: true, legacy: 'Static reports download', spreadsheets: 'Graph updates needed', multiple: 'Data extraction required' },
  ];

  const renderIcon = (val) => {
    if (val === true) {
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-green)', fontWeight: 600, fontSize: '0.85rem' }}>
          <Check size={16} strokeWidth={3} /> Included
        </div>
      );
    }
    if (val === false) {
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: '#EF4444', fontWeight: 500, fontSize: '0.85rem' }}>
          <X size={16} strokeWidth={2} /> Missing
        </div>
      );
    }
    return (
      <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', display: 'block', lineHeight: 1.3 }}>
        {val}
      </span>
    );
  };

  return (
    <div style={{ overflowX: 'auto', border: '1px solid var(--color-border)', borderRadius: '18px', backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-md)', marginTop: '24px' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
        <thead>
          <tr style={{ background: 'var(--color-teal)', color: '#FFFFFF' }}>
            <th style={{ padding: '20px 24px', fontWeight: 600, fontSize: '1rem', width: '280px' }}>Capabilities</th>
            <th style={{ padding: '20px 24px', fontWeight: 700, fontSize: '1.05rem', background: 'rgba(255,255,255,0.1)', borderLeft: '1px solid rgba(255,255,255,0.15)', borderRight: '1px solid rgba(255,255,255,0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Zap size={16} fill="#F97316" color="#F97316" /> TrendScore ERP
              </div>
            </th>
            <th style={{ padding: '20px 24px', fontWeight: 500, fontSize: '0.9rem' }}>Legacy Systems</th>
            <th style={{ padding: '20px 24px', fontWeight: 500, fontSize: '0.9rem' }}>Spreadsheet Files</th>
            <th style={{ padding: '20px 24px', fontWeight: 500, fontSize: '0.9rem' }}>Disconnected Apps</th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((item, idx) => (
            <tr key={idx} style={{ borderBottom: idx === criteria.length - 1 ? 'none' : '1px solid var(--color-border)', backgroundColor: idx % 2 === 0 ? 'var(--color-bg-light)' : 'var(--color-white)' }}>
              <td style={{ padding: '18px 24px', fontWeight: 600, color: 'var(--color-teal)', fontSize: '0.9rem' }}>{item.name}</td>
              
              {/* TrendScore Column */}
              <td style={{ padding: '18px 24px', background: idx % 2 === 0 ? 'rgba(249,115,22,0.02)' : 'rgba(249,115,22,0.04)', borderLeft: '1px solid rgba(249,115,22,0.1)', borderRight: '1px solid rgba(249,115,22,0.1)', textAlign: 'center', verticalAlign: 'middle' }}>
                {renderIcon(item.trendscore)}
              </td>
              
              {/* Legacy Column */}
              <td style={{ padding: '18px 24px', textAlign: 'center', verticalAlign: 'middle' }}>
                {renderIcon(item.legacy)}
              </td>
              
              {/* Spreadsheet Column */}
              <td style={{ padding: '18px 24px', textAlign: 'center', verticalAlign: 'middle' }}>
                {renderIcon(item.spreadsheets)}
              </td>
              
              {/* Multiple systems Column */}
              <td style={{ padding: '18px 24px', textAlign: 'center', verticalAlign: 'middle' }}>
                {renderIcon(item.multiple)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
