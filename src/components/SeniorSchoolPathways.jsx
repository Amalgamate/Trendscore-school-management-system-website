import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BookOpen, CheckCircle, HardHat, Palette, Play, Plus, Trophy } from 'lucide-react';
import '../styles/pathways.css';

const careers = [
  {
    id: 'engineer',
    name: 'Engineering',
    pathway: 'STEM',
    Icon: HardHat,
    color: '#3b82f6',
    cardBg: '#eff6ff',
    cardBorder: '#bfdbfe',
    image: '/career-engineer-card-v1.png',
    description: 'Design, build and innovate. Engineers solve the world\'s biggest challenges through applied science and technology.',
    match: 96,
    subjects: ['Mathematics', 'Physics', 'Chemistry', 'Computer Studies'],
  },
  {
    id: 'designer',
    name: 'Creative Design',
    pathway: 'Arts & Sports Science',
    Icon: Palette,
    color: '#a855f7',
    cardBg: '#faf5ff',
    cardBorder: '#e9d5ff',
    image: '/career-designer-card-v1.png',
    description: 'Shape culture and experiences. Designers craft visual stories that connect brands with people across the world.',
    match: 89,
    subjects: ['Art & Design', 'Computer Studies', 'Mathematics', 'Business Studies'],
  },
  {
    id: 'teacher',
    name: 'Education',
    pathway: 'Social Sciences',
    Icon: BookOpen,
    color: '#22c55e',
    cardBg: '#f0fdf4',
    cardBorder: '#bbf7d0',
    image: '/career-teacher-card-v1.png',
    description: 'Inspire the next generation. Educators build futures one student at a time with knowledge and dedication.',
    match: 92,
    subjects: ['English', 'Mathematics', 'History', 'Religious Studies'],
  },
  {
    id: 'athlete',
    name: 'Sports Science',
    pathway: 'Arts & Sports Science',
    Icon: Trophy,
    color: '#f97316',
    cardBg: '#fff7ed',
    cardBorder: '#fed7aa',
    image: '/career-athlete-card-v1.png',
    description: 'Combine passion for sport with science. Sports scientists optimize human performance and wellbeing.',
    match: 88,
    subjects: ['Biology', 'Physical Education', 'Mathematics', 'Chemistry'],
  },
];

const SeniorSchoolPathways = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const wheelLockRef = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return undefined;

    const onWheel = (event) => {
      if (window.innerWidth <= 1024) return;
      const rect = node.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25;
      if (!inView || Math.abs(event.deltaY) < 18 || wheelLockRef.current) return;

      const goingDown = event.deltaY > 0;
      const canAdvanceDown = goingDown && activeIndex < careers.length - 1;
      const canAdvanceUp = !goingDown && activeIndex > 0;
      const shouldConsumeScroll = canAdvanceDown || canAdvanceUp;
      if (!shouldConsumeScroll) return;

      event.preventDefault();

      wheelLockRef.current = true;
      setActiveIndex((prev) => {
        if (event.deltaY > 0) return Math.min(prev + 1, careers.length - 1);
        return Math.max(prev - 1, 0);
      });

      window.setTimeout(() => {
        wheelLockRef.current = false;
      }, 320);
    };

    node.addEventListener('wheel', onWheel, { passive: false });
    return () => node.removeEventListener('wheel', onWheel);
  }, [activeIndex]);

  const activeCareer = careers[activeIndex];

  return (
    <section className="pathway-section pathway-rebuild" id="pathways" ref={sectionRef}>
      <div className="container">
        <div className="pathway-grid">
          <div className="pathway-visual-col">
            <div className="pathway-hero-stage">
              <img
                src="/pathways-student-main-v1.png"
                alt="Student exploring pathways"
                className="pathway-student-image"
              />
              {careers.map((career, index) => (
                <img
                  key={career.id}
                  src={career.image}
                  alt={career.name}
                  className={`pathway-career-overlay ${activeIndex === index ? 'is-active' : ''}`}
                />
              ))}
              <div className="pathway-card-stack" aria-label="Career cards preview">
                {careers.map((career, index) => (
                  <img
                    key={`${career.id}-stack`}
                    src={career.image}
                    alt={`${career.name} card`}
                    className={`pathway-stack-card ${activeIndex === index ? 'is-active' : ''}`}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              <div className="pathway-image-title">
                <div className="pathway-image-title-label">Recommended Pathway</div>
                <div className="pathway-image-title-main" style={{ color: activeCareer.color }}>
                  <CheckCircle size={13} />
                  <strong>{activeCareer.pathway}</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="pathway-content-col">
            <div className="pathway-header">
              <div className="badge badge-teal">Senior School Pathways</div>
              <h2>
                <span>Every Career </span>
                <span>has a </span>
                <span>Pathway.</span>
              </h2>
              <p>
                Discover which subjects unlock each career. Scroll your mouse wheel
                to move through careers.
              </p>
            </div>

            <div className="pathway-picker" role="tablist" aria-label="Career pathways">
              {careers.map((career, index) => (
                <button
                  key={career.id}
                  className={`pathway-picker-dot ${activeIndex === index ? 'is-active' : ''}`}
                  style={{ '--dot-color': career.color }}
                  onClick={() => setActiveIndex(index)}
                  aria-label={career.name}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={activeCareer.id}
                className="pathway-active-card"
                style={{
                  '--career-card-bg': activeCareer.cardBg,
                  '--career-card-border': activeCareer.cardBorder,
                }}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <div className="pathway-card-head">
                  <div className="pathway-card-icon" style={{ color: activeCareer.color }}>
                    <activeCareer.Icon size={20} />
                  </div>
                  <div>
                    <div className="pathway-card-label">Career Path</div>
                    <h3>{activeCareer.name}</h3>
                  </div>
                  <div className="pathway-card-match" style={{ color: activeCareer.color }}>
                    {activeCareer.match}%
                  </div>
                </div>

                <p>{activeCareer.description}</p>

                <div className="pathway-subjects">
                  {activeCareer.subjects.map((subject, i) => (
                    <span key={subject} className={i < 3 ? 'subject-valid' : 'subject-optional'}>
                      {i < 3 ? <CheckCircle size={12} /> : <Plus size={11} />}
                      {subject}
                    </span>
                  ))}
                </div>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>

        <div className="pathway-cta-row">
          <button className="btn btn-primary pathway-cta">
            Explore Pathways Analytics <ArrowRight size={16} className="cta-arrow" />
          </button>
          <button className="btn btn-outline pathway-video">
            <Play size={16} /> See how it works (2 min)
          </button>
        </div>

        <div className="pathway-scroll-spacer" aria-hidden="true" />
      </div>
    </section>
  );
};

export default SeniorSchoolPathways;
