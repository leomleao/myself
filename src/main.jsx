import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const copy = {
  en: {
    nav: ['About', 'Experience', 'Services', 'Skills', 'Work', 'Contact'],
    eyebrow: 'System Analyst & Web Developer',
    title: 'Leo Leao',
    subtitle: 'I build things for the web — and fix them when they break.',
    intro:
      'Practical web experiences, internal tools, and support workflows built with a mix of development, design, and IT operations experience.',
    location: 'From Brazil, open to remote work',
    ctaPrimary: 'View experience',
    ctaSecondary: 'See work',
    aboutTitle: 'About',
    aboutBody:
      'I started learning IT early and kept going through college, support roles, and self-directed web projects. I like communication-heavy work: understanding what people need, turning messy processes into usable systems, and making technical ideas easier to act on.',
    facts: [
      ['2015–2016', 'IT analyst intern experience'],
      ['Web', 'Design and development projects'],
      ['Remote', 'Interested in distributed teams'],
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        period: '2015–2016',
        title: 'Support / IT Analyst Intern',
        org: 'WAGO Kontakttechnik',
        points: [
          'Identified internal client needs and developed custom technical solutions.',
          'Maintained systems for data warehouse and business intelligence initiatives.',
          'Processed data with Excel, Access, and SQL.',
          'Provided first-line technical support and coordinated with external specialists.',
        ],
      },
      {
        period: '2014–2017',
        title: 'Systems Analysis and Development',
        org: 'University studies',
        points: [
          'Focused on programming fundamentals, Java, systems analysis, and applied development.',
          'Built self-directed web and design projects alongside coursework.',
        ],
      },
    ],
    servicesTitle: 'Services',
    services: [
      ['Web Design', 'Responsive websites and polished visual interfaces.'],
      ['Development', 'Practical front-end implementation and maintainable UI code.'],
      ['Photo Editing', 'Lightroom and Photoshop work for stronger visual presentation.'],
    ],
    skillsTitle: 'Skills',
    skills: [
      ['HTML / CSS', 80],
      ['JavaScript', 65],
      ['React', 60],
      ['Java', 50],
      ['Photoshop', 75],
      ['Lightroom', 80],
    ],
    workTitle: 'Selected Work',
    contactTitle: 'Contact',
    contactBody: 'Available for remote web and IT projects.',
  },
  pt: {
    nav: ['Sobre', 'Experiencia', 'Servicos', 'Skills', 'Trabalho', 'Contato'],
    eyebrow: 'Analista de Sistemas & Desenvolvedor Web',
    title: 'Leo Leao',
    subtitle: 'Construo coisas para a web — e conserto quando quebram.',
    intro:
      'Experiencias web, ferramentas internas e fluxos de suporte criados com desenvolvimento, design e operacoes de TI.',
    location: 'Do Brasil, aberto a trabalho remoto',
    ctaPrimary: 'Ver experiencia',
    ctaSecondary: 'Ver trabalhos',
    aboutTitle: 'Sobre',
    aboutBody:
      'Comecei a aprender TI cedo e continuei na faculdade, em funcoes de suporte e em projetos web proprios. Gosto de trabalhos com comunicacao: entender necessidades, transformar processos confusos em sistemas usaveis e tornar ideias tecnicas mais claras.',
    facts: [
      ['2015–2016', 'Experiencia como analista de TI'],
      ['Web', 'Projetos de design e desenvolvimento'],
      ['Remoto', 'Interesse em times distribuidos'],
    ],
    experienceTitle: 'Experiencia',
    experience: [
      {
        period: '2015–2016',
        title: 'Estagiario de Suporte / Analista de TI',
        org: 'WAGO Kontakttechnik',
        points: [
          'Identifiquei necessidades internas e desenvolvi solucoes tecnicas customizadas.',
          'Mantive sistemas para data warehouse e iniciativas de business intelligence.',
          'Processei dados com Excel, Access e SQL.',
          'Prestei suporte tecnico de primeiro nivel e coordenei com especialistas externos.',
        ],
      },
      {
        period: '2014–2017',
        title: 'Analise e Desenvolvimento de Sistemas',
        org: 'Faculdade',
        points: [
          'Foco em fundamentos de programacao, Java, analise de sistemas e desenvolvimento aplicado.',
          'Projetos proprios de web e design em paralelo aos estudos.',
        ],
      },
    ],
    servicesTitle: 'Servicos',
    services: [
      ['Web Design', 'Sites responsivos e interfaces visuais bem cuidadas.'],
      ['Desenvolvimento', 'Implementacao front-end pratica e codigo de UI facil de manter.'],
      ['Edicao de Foto', 'Lightroom e Photoshop para melhorar apresentacao visual.'],
    ],
    skillsTitle: 'Skills',
    skills: [
      ['HTML / CSS', 80],
      ['JavaScript', 65],
      ['React', 60],
      ['Java', 50],
      ['Photoshop', 75],
      ['Lightroom', 80],
    ],
    workTitle: 'Trabalhos',
    contactTitle: 'Contato',
    contactBody: 'Disponivel para projetos remotos de web e TI.',
  },
};

const portfolio = [
  ['Web design', '/img/home.jpg'],
  ['Photography', '/img/ny.jpg'],
  ['Photography', '/img/reflectingpool.jpg'],
  ['Photo edit', '/img/watch.jpg'],
  ['Photography', '/img/centralpark.jpg'],
  ['Photography', '/img/waterfall.jpg'],
];

// ── Plum canvas — ported from stevehoang.com/assets/js/dist/plum.min.js ─────
//
// Algorithm:
//   • Queue-based growth: each frame, every pending branch has 50% chance to
//     execute or be deferred — creates the organic, staggered spread
//   • Frame throttle: ≥25ms between frames (≈40fps cap)
//   • Micro-steps: 6 * random() px per step (not long segments)
//   • 4 starting edges: top / bottom / left / right
//   • Branch spread: ±PI/6 per child
//   • Branching probability: 80% when counter ≤ 30, else 50%
//   • Stroke: ultra-faint (#88888825 equivalent)
//   • CSS mask: radial-gradient(transparent center → opaque edges) — key to subtlety

function PlumCanvas({ darkMode }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    let W = window.innerWidth;
    let H = window.innerHeight;

    function initCanvas() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineWidth   = 1;
      ctx.strokeStyle = darkMode ? '#ffffff18' : '#88888825';
    }

    const ctx = canvas.getContext('2d');
    initCanvas();

    const SPREAD    = Math.PI / 6;   // max angle deviation per child branch
    const FRAME_MS  = 25;            // throttle: ms between frames

    let queueCurrent = [];
    let queueNext    = [];
    let running      = false;
    let raf;
    let lastTime     = 0;

    function branch(x, y, angle, counter) {
      counter.n += 1;
      const len = 6 * Math.random();
      const x2  = x + len * Math.cos(angle);
      const y2  = y + len * Math.sin(angle);

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      const a1 = angle + Math.random() * SPREAD;
      const a2 = angle - Math.random() * SPREAD;

      // stop branches that have left the viewport
      if (x2 < -100 || x2 > W + 100 || y2 < -100 || y2 > H + 100) return;

      const prob = counter.n <= 30 ? 0.8 : 0.5;
      if (Math.random() < prob) queueNext.push(() => branch(x2, y2, a1, counter));
      if (Math.random() < prob) queueNext.push(() => branch(x2, y2, a2, counter));
    }

    function randomEdgePos() { return Math.random() * 0.6 + 0.2; }

    function start() {
      ctx.clearRect(0, 0, W, H);
      queueCurrent = [];
      queueNext = [
        () => branch(randomEdgePos() * W, -5,      Math.PI / 2,  { n: 0 }), // top → down
        () => branch(randomEdgePos() * W, H + 5,  -Math.PI / 2,  { n: 0 }), // bottom → up
        () => branch(-5,      randomEdgePos() * H, 0,             { n: 0 }), // left → right
        () => branch(W + 5,   randomEdgePos() * H, Math.PI,       { n: 0 }), // right → left
      ];
      if (W < 500) queueNext = queueNext.slice(0, 2); // mobile: top + bottom only
      running  = true;
      lastTime = 0;
      raf = requestAnimationFrame(frame);
    }

    function frame(now) {
      if (!running) return;
      raf = requestAnimationFrame(frame);
      if (now - lastTime < FRAME_MS) return;  // throttle
      lastTime = now;

      queueCurrent = queueNext;
      queueNext    = [];

      if (!queueCurrent.length) { running = false; return; }

      queueCurrent.forEach(fn => {
        // 50% chance: execute this frame; 50%: defer to next frame
        Math.random() < 0.5 ? queueNext.push(fn) : fn();
      });
    }

    start();

    function onResize() {
      running = false;
      cancelAnimationFrame(raf);
      initCanvas();
      start();
    }
    window.addEventListener('resize', onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, [darkMode]);

  return <canvas ref={canvasRef} className="plum-canvas" aria-hidden="true" />;
}

// ── Name signature ───────────────────────────────────────────────────────────

function NameSignature() {
  return (
    <svg
      className="name-signature"
      viewBox="20 150 810 280"
      aria-label="Leonardo M. Leão"
      role="img"
    >
      {/* i-dots */}
      <g style={{ transformOrigin: '814px 210.24px' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, 8.058029, 83.461327)">
        <path className="sig-dot" d="M816.87,210.14c0.11,3.78-5.35,3.78-5.74,0.2C811.02,206.57,816.51,206.55,816.87,210.14L816.87,210.14z" />
      </g>
      <g style={{ transformOrigin: '473.508px 274.224px' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, 2.195575, 11.27085)">
        <path className="sig-dot" d="M476.67,273.74c0.58,4.27-5.32,4.92-6.32,0.98C469.73,270.51,475.76,269.72,476.67,273.74L476.67,273.74z" />
      </g>

      {/* stroke paths */}
      <path className="sig-path" d="M 770.765 287.385 C 770.765 287.385 764.655 298.765 788.145 291.805 C 811.635 284.855 812.065 287.805 812.585 289.805" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, -0.000001, -0.000008)" />
      <path className="sig-path" d="M 647.863 256.463 C 647.863 256.463 643.383 263.663 653.573 260.163 C 663.763 256.663 664.083 258.673 664.733 260.613" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, 0, 0)" />
      <path className="sig-path" d="M 520.353 253.928 C 520.353 253.928 550.373 261.168 577.053 212.678 C 577.053 212.678 551.993 284.148 533.893 303.868 C 515.793 323.588 497.693 310.598 502.103 296.438 C 506.513 282.288 525.073 270.218 554.083 288.088 C 582.003 305.288 605.333 290.778 615.043 281.378 C 616.023 280.438 616.883 279.378 617.543 278.198 C 618.533 276.428 619.273 274.108 616.773 273.488 C 612.153 272.348 606.173 280.468 607.993 284.788 C 609.693 288.828 614.853 290.838 634.493 276.178 C 634.493 276.178 645.783 267.458 650.123 267.458 C 650.123 267.458 641.173 273.658 642.323 278.268 C 643.473 282.878 652.423 280.398 656.593 272.778 C 656.593 272.778 662.863 282.418 683.173 262.438 C 683.173 262.438 679.553 272.978 686.353 271.878 C 693.163 270.778 696.013 261.888 693.823 258.808 C 693.823 258.808 704.083 261.498 731.603 250.168 C 759.123 238.838 773.693 244.178 774.173 247.578" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, 0, 0)" />
      <path className="sig-path" d="M 406.499 296.969 C 406.499 296.969 434.139 236.049 460.29 199.489 C 460.29 199.489 421.919 274.459 438.79 272.699 C 455.66 270.939 482.92 228.169 482.92 228.169 C 482.92 228.169 424.009 316.359 492.14 354.149 C 560.27 391.939 717.74 352.499 717.14 322.619 C 716.76 303.569 640.98 297.349 538.44 310.199 C 447.77 321.569 359.089 345.319 274.538 379.999 C 245.978 391.709 215.238 405.059 195.248 415.849 C 195.248 415.849 287.718 381.309 380.809 372.779 C 394.409 371.529 408.109 371.549 421.679 373.069 C 442.67 375.409 465.41 381.749 447.96 398.799" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, 0.000002, 0.000004)" />
      <path className="sig-path" d="M 150.395 314.79 C 150.395 314.79 163.315 313.61 175.015 304.49 C 176.905 303.02 178.465 301.13 179.485 298.97 C 180.395 297.04 180.885 294.91 179.235 294.13 C 175.935 292.56 168.115 296.83 168.495 304.46 C 168.705 308.66 177.025 322.05 202.035 292.76 C 202.035 292.76 197.165 304.74 203.355 304.32 C 209.555 303.91 216.485 294.16 212.605 289.7 C 212.605 289.7 221.365 294.41 233.915 284.08 C 233.915 284.08 227.635 298.45 229.705 298.29 C 231.775 298.12 246.805 284.08 246.805 284.08 C 246.805 284.08 243.175 297.96 252.425 290.85 C 261.675 283.75 273.245 274.74 276.625 274.99 C 276.625 274.99 268.525 277.88 268.615 285.15 C 268.695 292.42 283.075 283.74 286.625 274.98 C 286.625 274.98 281.635 296.09 304.205 268.58 C 304.205 268.58 304.835 278.24 319.535 265.75 C 319.535 265.75 309.145 284.44 321.845 275.62 C 334.545 266.8 341.375 260.19 343.895 259.35 C 343.895 259.35 334.135 266.7 335.915 271.63 C 337.705 276.56 352.825 270.84 375.225 239.39 C 397.625 207.94 388.725 195.33 367.655 231.23 C 346.585 267.13 363.055 274.99 381.305 254.97 C 381.305 254.97 377.055 264.08 384.595 263.36 C 392.125 262.64 394.635 252.51 391.595 250.27" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, -0.000003, -0.000001)" />
      <path className="sig-path" d="M 29.394 244.223 C 29.394 244.223 37.954 204.373 77.534 180.053 C 80.494 178.233 83.784 176.933 87.224 176.463 C 96.284 175.223 110.484 178.483 104.414 214.013 C 95.744 264.773 53.094 304.483 41.764 298.703 C 30.504 292.963 39.534 249.923 90.304 207.083 C 141.074 164.243 168.554 220.703 134.874 273.693 C 101.194 326.683 70.754 327.923 70.254 313.313 C 69.754 298.703 94.524 280.873 139.834 295.733 C 185.154 310.593 236.404 298.213 247.054 289.543" style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }} transform="matrix(0.978147, 0.207913, -0.207913, 0.978147, 0.000003, -0.000001)" />
    </svg>
  );
}

// ── Icons ─────────────────────────────────────────────────────────────────────

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

function App() {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(true);
  const t = copy[language];
  const navIds = ['about', 'experience', 'services', 'skills', 'work', 'contact'];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <>
      <PlumCanvas darkMode={darkMode} />

      {/* Floating controls — top right */}
      <div className="top-controls">
        <button
          className="icon-btn"
          type="button"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className="language" type="button" onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}>
          <img src={language === 'en' ? '/img/brazilFlag.png' : '/img/usFlag.png'} alt="" />
          {language === 'en' ? 'PT' : 'EN'}
        </button>
      </div>

      <main id="top">

        {/* ── Profile / hero ── */}
        <section className="profile-section">
          <a className="avatar-link" href="#top" aria-label="Leo Leao home">
            <img className="avatar" src="/img/mySelf.jpg" alt="Leo Leao" width="112" height="112" />
          </a>
          <NameSignature />
          <p className="profile-eyebrow">{t.eyebrow}</p>
          <p className="profile-subtitle">{t.subtitle}</p>
          <p className="profile-location">{t.location}</p>
          <div className="actions">
            <a className="button primary" href="#experience">{t.ctaPrimary}</a>
            <a className="button secondary" href="#work">{t.ctaSecondary}</a>
          </div>
          <nav className="profile-nav" aria-label="Main navigation">
            {t.nav.map((item, index) => (
              <a key={item} href={`#${navIds[index]}`}>{item}</a>
            ))}
          </nav>
        </section>

        {/* ── About ── */}
        <section id="about" className="section two-column">
          <div>
            <p className="section-label">01</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutBody}</p>
          </div>
          <div className="portrait-wrap">
            <img src="/img/mySelf.jpg" alt="Leo Leao" />
          </div>
        </section>

        <section className="facts" aria-label="Quick facts">
          {t.facts.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="section">
          <p className="section-label">02</p>
          <h2>{t.experienceTitle}</h2>
          <div className="timeline">
            {t.experience.map((item) => (
              <article key={item.title} className="timeline-item">
                <time>{item.period}</time>
                <div>
                  <h3>{item.title}</h3>
                  <p className="org">{item.org}</p>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Services ── */}
        <section id="services" className="section muted">
          <p className="section-label">03</p>
          <h2>{t.servicesTitle}</h2>
          <div className="service-grid">
            {t.services.map(([title, body]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="section">
          <p className="section-label">04</p>
          <h2>{t.skillsTitle}</h2>
          <div className="skills">
            {t.skills.map(([skill, value]) => (
              <div key={skill} className="skill">
                <div>
                  <span>{skill}</span>
                  <strong>{value}%</strong>
                </div>
                <meter min="0" max="100" value={value}>{value}%</meter>
              </div>
            ))}
          </div>
        </section>

        {/* ── Work ── */}
        <section id="work" className="section muted">
          <p className="section-label">05</p>
          <h2>{t.workTitle}</h2>
          <div className="portfolio">
            {portfolio.map(([label, src]) => (
              <figure key={src}>
                <img src={src} alt="" />
                <figcaption>{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="section contact">
          <p className="section-label">06</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactBody}</p>
          <div className="contact-links">
            <a href="mailto:leomleao@gmail.com">leomleao@gmail.com</a>
            <a href="https://www.linkedin.com/in/leaoleo">LinkedIn</a>
            <a href="https://github.com/leomleao">GitHub</a>
          </div>
        </section>

      </main>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
