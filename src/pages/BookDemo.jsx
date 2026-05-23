import React, { useState } from 'react';
import { Calendar, Phone, Mail, CheckCircle2 } from 'lucide-react';

const BookDemo = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    schoolName: '',
    contactPerson: '',
    schoolType: 'Primary School',
    learners: '',
    county: 'Nairobi',
    phone: '',
    email: '',
    date: '',
    time: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '120px 24px' }}>
        <div className="glass-panel" style={{ width: '100%', maxWidth: '520px', padding: '40px', textAlign: 'center' }}>
          <CheckCircle2 size={64} style={{ color: 'var(--color-green)', margin: '0 auto 24px auto' }} />
          <h2 style={{ color: 'var(--color-teal)', marginBottom: '16px' }}>Demo Request Received!</h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
            Thank you, <strong>{formData.contactPerson}</strong>. Our school onboarding representative will contact you at <strong>{formData.phone}</strong> or <strong>{formData.email}</strong> within 2 hours to confirm your scheduled system tour on {formData.date} at {formData.time}.
          </p>
          <div style={{ background: '#F8FAFC', padding: '16px', borderRadius: '8px', border: '1px solid #E2E8F0', textAlign: 'left', fontSize: '0.85rem', marginBottom: '24px' }}>
            <strong>Demo Details:</strong>
            <ul style={{ listStyle: 'none', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <li><strong>School:</strong> {formData.schoolName} ({formData.schoolType})</li>
              <li><strong>Population:</strong> {formData.learners} Learners</li>
              <li><strong>County:</strong> {formData.county}</li>
            </ul>
          </div>
          <a href="/" className="btn btn-primary">Return to Homepage</a>
        </div>
      </div>
    );
  }

  return (
    <div className="container form-section-container">
      {/* Sidebar Info */}
      <div className="contact-info-wrap" style={{ alignSelf: 'center' }}>
        <span className="badge badge-teal">Live Demonstration</span>
        <h1 style={{ color: 'var(--color-teal)', fontSize: '2.5rem', marginBottom: '16px' }}>See TrendScore ERP in Action</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', marginBottom: '24px' }}>
          Our education technology specialists will guide you through a screen-sharing session tailored specifically to your institution's grade levels.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="contact-item-row">
            <div className="contact-icon-box"><Calendar size={20} /></div>
            <div>
              <h4 style={{ color: 'var(--color-teal)' }}>30-Minute Custom Walkthrough</h4>
              <p style={{ fontSize: '0.85rem' }}>We focus strictly on the modules you need, from CBE markbooks to accounting ledgers.</p>
            </div>
          </div>
          <div className="contact-item-row">
            <div className="contact-icon-box"><Phone size={20} /></div>
            <div>
              <h4 style={{ color: 'var(--color-teal)' }}>Operational Q&A</h4>
              <p style={{ fontSize: '0.85rem' }}>Ask questions about database migration assistance, teacher training, and parent registration.</p>
            </div>
          </div>
          <div className="contact-item-row">
            <div className="contact-icon-box"><Mail size={20} /></div>
            <div>
              <h4 style={{ color: 'var(--color-teal)' }}>SLA & Proposal Pricing</h4>
              <p style={{ fontSize: '0.85rem' }}>Receive a customized contract proposal containing implementation timeline breakdowns.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="contact-form-box">
        <h3 style={{ color: 'var(--color-teal)', marginBottom: '20px' }}>Book Your Demo Session</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="schoolName">School Name</label>
            <input 
              type="text" 
              id="schoolName" 
              name="schoolName" 
              className="form-control" 
              placeholder="e.g. Alliance Girls High School" 
              value={formData.schoolName}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="contactPerson">Contact Person</label>
              <input 
                type="text" 
                id="contactPerson" 
                name="contactPerson" 
                className="form-control" 
                placeholder="Full Name" 
                value={formData.contactPerson}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="schoolType">School Type</label>
              <select 
                id="schoolType" 
                name="schoolType" 
                className="form-control"
                value={formData.schoolType}
                onChange={handleChange}
              >
                <option>Primary School</option>
                <option>Junior Secondary</option>
                <option>Senior Secondary</option>
                <option>TVET Institution</option>
                <option>College / University</option>
                <option>Multi-Campus Group</option>
              </select>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="learners">Learner Population</label>
              <input 
                type="number" 
                id="learners" 
                name="learners" 
                className="form-control" 
                placeholder="e.g. 450" 
                value={formData.learners}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="county">County Location</label>
              <select 
                id="county" 
                name="county" 
                className="form-control"
                value={formData.county}
                onChange={handleChange}
              >
                <option>Nairobi</option>
                <option>Mombasa</option>
                <option>Kiambu</option>
                <option>Nakuru</option>
                <option>Uasin Gishu</option>
                <option>Kisumu</option>
                <option>Machakos</option>
                <option>Nyeri</option>
                <option>Kakamega</option>
                <option>Kajiado</option>
                <option>Meru</option>
              </select>
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="form-control" 
                placeholder="e.g. 0712345678" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-control" 
                placeholder="e.g. principal@school.co.ke" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input 
                type="date" 
                id="date" 
                name="date" 
                className="form-control" 
                value={formData.date}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">Preferred Time</label>
              <input 
                type="time" 
                id="time" 
                name="time" 
                className="form-control" 
                value={formData.time}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '12px' }}>
            Book Free Demo Walkthrough
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookDemo;
