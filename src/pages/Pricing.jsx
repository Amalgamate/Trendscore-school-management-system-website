import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Info, ShieldCheck, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [students, setStudents] = useState(300);

  // Dynamic pricing calculations based on student size slider
  const getPrices = () => {
    const scaleFactor = Math.ceil(students / 100);
    const starterBase = 8000;
    const growthBase = 18000;

    let starterPrice = starterBase + (scaleFactor * 1500);
    let growthPrice = growthBase + (scaleFactor * 3000);

    // Apply 20% discount for annual billing
    if (isAnnual) {
      starterPrice = Math.round((starterPrice * 12 * 0.8) / 12);
      growthPrice = Math.round((growthPrice * 12 * 0.8) / 12);
    }

    return {
      starter: starterPrice,
      growth: growthPrice
    };
  };

  const prices = getPrices();

  return (
    <div className="pricing-wrapper" style={{ paddingBottom: '80px' }}>
      <div className="container pricing-header">
        <span className="badge badge-orange">Pricing Plans</span>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-teal)', marginBottom: '16px' }}>Transparent, Scale-Based Pricing</h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--color-text-secondary)' }}>
          Choose a plan that fits your school population. All plans include unlimited teacher and parent portal accounts.
        </p>

        {/* Toggle Billing */}
        <div className="pricing-toggle-wrap">
          <span className={`toggle-label ${!isAnnual ? 'active' : ''}`} style={{ color: !isAnnual ? 'var(--color-orange)' : 'inherit' }}>Monthly</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
            <span className="toggle-slider"></span>
          </label>
          <span className={`toggle-label ${isAnnual ? 'active' : ''}`} style={{ color: isAnnual ? 'var(--color-orange)' : 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
            Annually <span style={{ background: '#DCFCE7', color: '#166534', fontSize: '0.75rem', padding: '2px 8px', borderRadius: '12px', fontWeight: 700 }}>Save 20%</span>
          </span>
        </div>

        {/* School Size Calculator Slider */}
        <div className="pricing-slider-wrap">
          <h4>Adjust to Your School Size:</h4>
          <input 
            type="range" 
            min="50" 
            max="1500" 
            step="50"
            value={students} 
            onChange={(e) => setStudents(parseInt(e.target.value))} 
            className="slider-input" 
          />
          <div className="slider-population">
            {students.toLocaleString()} Students
          </div>
        </div>
      </div>

      <div className="container pricing-grid">
        {/* Starter Plan */}
        <div className="pricing-card">
          <div className="pricing-card-top">
            <h3>Starter Plan</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>Perfect for single-campus primary schools starting with digital systems.</p>
            <div className="pricing-price">
              KSh {prices.starter.toLocaleString()} <span>/ month</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '-16px', marginBottom: '20px' }}>
              {isAnnual ? 'Billed KSh ' + (prices.starter * 12).toLocaleString() + ' annually' : 'Billed monthly'}
            </p>
          </div>
          <div>
            <Link to="/book-demo" className="btn btn-secondary" style={{ width: '100%' }}>Choose Starter Plan</Link>
            <ul className="pricing-features-list">
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Academics & Classes Setup</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> CBE assessment levels tracking</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Invoicing & Receipts</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> SMS Notifications (Pay as you go)</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Parent App logins</li>
            </ul>
          </div>
        </div>

        {/* Growth Plan (Popular) */}
        <div className="pricing-card popular">
          <div className="popular-badge">Most Popular</div>
          <div className="pricing-card-top">
            <h3>Growth Plan</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>Designed for comprehensive primary & junior secondary schools seeking total automation.</p>
            <div className="pricing-price">
              KSh {prices.growth.toLocaleString()} <span>/ month</span>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: '-16px', marginBottom: '20px' }}>
              {isAnnual ? 'Billed KSh ' + (prices.growth * 12).toLocaleString() + ' annually' : 'Billed monthly'}
            </p>
          </div>
          <div>
            <Link to="/book-demo" className="btn btn-primary" style={{ width: '100%' }}>Choose Growth Plan</Link>
            <ul className="pricing-features-list">
              <li className="pricing-feature-li" style={{ fontWeight: 600 }}><Check size={16} color="var(--color-green)" /> Everything in Starter</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Live M-Pesa Integration</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Advanced Timetable Generator</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> WhatsApp Notification alerts</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Staff HR & Payroll ledger</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Library & Store Inventory</li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="pricing-card">
          <div className="pricing-card-top">
            <h3>Enterprise Plan</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>Built for large multi-campus institutions and senior schools requiring advanced custom workflows.</p>
            <div className="pricing-price" style={{ fontSize: '2rem' }}>
              Custom Quote
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', marginBottom: '20px' }}>Billed custom contract</p>
          </div>
          <div>
            <Link to="/book-demo" className="btn btn-secondary" style={{ width: '100%' }}>Contact Sales</Link>
            <ul className="pricing-features-list">
              <li className="pricing-feature-li" style={{ fontWeight: 600 }}><Check size={16} color="var(--color-green)" /> Everything in Growth</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Multi-campus consolidation</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Senior school pathway validator</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Dedicated server bandwidth</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> custom API custom integrations</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> 24/7 dedicated account representative</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Security note */}
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="glass-panel" style={{ display: 'flex', gap: '20px', padding: '24px', alignItems: 'center' }}>
          <ShieldCheck size={40} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
          <div>
            <h4 style={{ color: 'var(--color-teal)', marginBottom: '4px' }}>Data Protection Compliance</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>
              All database storage complies with Kenya Data Protection Act protocols. Student lists and academic scores are isolated in encrypted tenancies with strict permission rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
