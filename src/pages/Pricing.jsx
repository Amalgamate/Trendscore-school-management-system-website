import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, ShieldCheck, Sparkles, Calculator } from 'lucide-react';

const BASIC_SETUP_FEE = 10000;
const BASIC_PER_USER_MONTHLY_FEE = 15;
const BASIC_PER_USER_TERM_FEE = 45;

const Pricing = () => {
  const [users, setUsers] = useState(300);

  const basicMonthlyTotal = useMemo(() => users * BASIC_PER_USER_MONTHLY_FEE, [users]);
  const basicTermTotal = useMemo(() => users * BASIC_PER_USER_TERM_FEE, [users]);

  return (
    <div className="pricing-wrapper" style={{ paddingBottom: '80px' }}>
      <div className="container pricing-header">
        <span className="badge badge-orange">Pricing</span>
        <h1 style={{ fontSize: '2.5rem', color: 'var(--color-teal)', marginBottom: '16px' }}>
          Simple Pricing for Every School Stage
        </h1>
        <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.05rem', color: 'var(--color-text-secondary)' }}>
          Start with a clear base plan, then scale into enterprise modules as your institution grows.
        </p>
      </div>

      <div className="container pricing-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div className="pricing-card popular" style={{ transform: 'none' }}>
          <div className="popular-badge">Core Plan</div>
          <div className="pricing-card-top">
            <h3>Basic Plan</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
              Ideal for schools getting started with a full digital operating system.
            </p>
            <div className="pricing-price">KSh {basicMonthlyTotal.toLocaleString()} <span>/ month</span></div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginTop: '-12px', marginBottom: '6px' }}>
              KSh {BASIC_PER_USER_MONTHLY_FEE} x {users.toLocaleString()} users / month
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '8px' }}>
              KSh {BASIC_PER_USER_TERM_FEE} x {users.toLocaleString()} users / term = <strong style={{ color: 'var(--color-teal)' }}>KSh {basicTermTotal.toLocaleString()}</strong>
            </p>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
              One-off setup fee: <strong style={{ color: 'var(--color-teal)' }}>KSh {BASIC_SETUP_FEE.toLocaleString()}</strong>
            </p>
            <div className="pricing-slider-wrap" style={{ marginTop: '22px', marginBottom: '10px', maxWidth: '100%' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Calculator size={18} /> School User Population
              </h4>
              <input
                type="range"
                min="50"
                max="5000"
                step="10"
                value={users}
                onChange={(e) => setUsers(parseInt(e.target.value, 10))}
                className="slider-input"
              />
              <div className="slider-population">{users.toLocaleString()} Users</div>
            </div>
          </div>
          <div>
            <Link to="/register" className="btn btn-primary" style={{ width: '100%' }}>
              Start Free
            </Link>
            <ul className="pricing-features-list">
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> First month free</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Free online training</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> One physical training session</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Academics and assessment workflows</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Fees, billing, and receipts</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Parent, teacher, and learner portals</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> School onboarding and go-live support</li>
            </ul>
          </div>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-top">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} color="var(--color-orange)" /> Enterprise Plan
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
              Starts with advanced modules and tailored enterprise rollout.
            </p>
            <div className="pricing-price" style={{ fontSize: '2rem' }}>Custom Quote</div>
            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', marginBottom: '20px' }}>
              Based on modules, campuses, transport routes, and operational complexity.
            </p>
            <div style={{ marginTop: '6px' }}>
              <h4 style={{ color: 'var(--color-teal)', fontSize: '1rem', marginBottom: '12px' }}>
                Customizations Available
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--color-bg-light)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '10px 14px' }}>
                  <img
                    src="/odoo-logo.svg"
                    alt="Odoo"
                    style={{ height: '26px', width: 'auto', display: 'block' }}
                  />
                  <span style={{ fontWeight: 700, color: 'var(--color-teal)', fontSize: '0.95rem' }}>
                    Odoo Module Available
                  </span>
                </div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', background: 'var(--color-bg-light)', border: '1px solid var(--color-border)', borderRadius: '12px', padding: '10px 14px' }}>
                  <img
                    src="/wordpress-logo.png"
                    alt="WordPress"
                    style={{ height: '26px', width: 'auto', display: 'block' }}
                  />
                  <span style={{ fontWeight: 700, color: 'var(--color-teal)', fontSize: '0.95rem' }}>
                    WordPress Module Available
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Link to="/register" className="btn btn-secondary" style={{ width: '100%' }}>
              Request Enterprise Proposal
            </Link>
            <ul className="pricing-features-list">
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Biometrics module</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> GPRS Transport module</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Facility Management module</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> School POS for uniform disbursement</li>
              <li className="pricing-feature-li"><Check size={16} color="var(--color-green)" /> Dedicated onboarding and integration team</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '980px', marginTop: '24px' }}>
        <div className="glass-panel" style={{ display: 'flex', gap: '20px', padding: '24px', alignItems: 'center' }}>
          <ShieldCheck size={38} style={{ color: 'var(--color-teal)', flexShrink: 0 }} />
          <div>
            <h4 style={{ color: 'var(--color-teal)', marginBottom: '8px' }}>
              We Help You Set Up the Right Billing Channels
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>
              Our team assists your school to acquire a <strong>Paybill</strong> and <strong>Sender ID</strong>, then links them into your fee and communication workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
