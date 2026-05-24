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
    <div className="comparison-table-wrap">
      <table className="comparison-table-main">
        <thead>
          <tr className="comparison-table-head-row">
            <th className="comparison-table-cap-head">Capabilities</th>
            <th className="comparison-table-trendscore-head">
              <div className="comparison-table-head-brand">
                <Zap size={16} fill="#F97316" color="#F97316" /> TrendScore ERP
              </div>
            </th>
            <th className="comparison-table-extra-col">Legacy Systems</th>
            <th className="comparison-table-extra-col">Spreadsheet Files</th>
            <th className="comparison-table-extra-col">Disconnected Apps</th>
          </tr>
        </thead>
        <tbody>
          {criteria.map((item, idx) => (
            <tr key={idx} className={`comparison-table-row ${idx % 2 === 0 ? 'is-even' : 'is-odd'} ${idx === criteria.length - 1 ? 'is-last' : ''}`}>
              <td className="comparison-table-cap-cell">{item.name}</td>
              
              {/* TrendScore Column */}
              <td className={`comparison-table-trendscore-cell ${idx % 2 === 0 ? 'is-even' : 'is-odd'}`}>
                {renderIcon(item.trendscore)}
              </td>
              
              {/* Legacy Column */}
              <td className="comparison-table-extra-col">
                {renderIcon(item.legacy)}
              </td>
              
              {/* Spreadsheet Column */}
              <td className="comparison-table-extra-col">
                {renderIcon(item.spreadsheets)}
              </td>
              
              {/* Multiple systems Column */}
              <td className="comparison-table-extra-col">
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
