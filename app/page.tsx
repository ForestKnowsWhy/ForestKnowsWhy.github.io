import {
  ArrowDown,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const researchAreas = [
  {
    number: '01',
    title: 'High-frequency statistics',
    description:
      'Statistical methods for information observed at the finest market scales.',
  },
  {
    number: '02',
    title: 'Financial econometrics',
    description:
      'Inference for volatility, dependence, and changing market dynamics.',
  },
  {
    number: '03',
    title: 'Functional data & time series',
    description:
      'Treating intraday paths as evolving objects rather than isolated points.',
  },
  {
    number: '04',
    title: 'Market microstructure',
    description:
      'Understanding noise, periodicity, and information within the trading day.',
  },
];

const publications = [
  {
    title: 'On-line detection of changes in the shape of intraday volatility curves',
    authors: 'Torben G. Andersen, Yingwen Tan, Viktor Todorov, and Zhiyuan Zhang',
    venue: 'Journal of Econometrics · 252, 106089',
    year: '2025',
    href: 'https://doi.org/10.1016/j.jeconom.2025.106089',
  },
  {
    title: 'Testing mean stationarity of intraday volatility curves',
    authors: 'Torben G. Andersen, Yingwen Tan, Viktor Todorov, and Zhiyuan Zhang',
    venue: 'Quantitative Economics · 16(3), 1059–1091',
    year: '2025',
    href: 'https://doi.org/10.3982/QE2644',
  },
  {
    title: 'Inference for calendar effects in microstructure noise',
    authors: 'Yingwen Tan and Zhiyuan Zhang',
    venue: 'Journal of Time Series Analysis · 45(6), 931–952',
    year: '2024',
    href: 'https://doi.org/10.1111/jtsa.12744',
  },
  {
    title: 'Functional volatility forecasting',
    authors: 'Yingwen Tan, Zhensi Tan, Yinfen Tang, and Zhiyuan Zhang',
    venue: 'Journal of Forecasting · 43(8), 3009–3034',
    year: '2024',
    href: 'https://doi.org/10.1002/for.3170',
  },
];

const workingPapers = [
  {
    title: 'Temporal Dependence in Option Microstructure Noise',
    authors: 'with Torben G. Andersen, Viktor Todorov, and Zhiyuan Zhang',
  },
  {
    title: 'The Intraday Correlation Pattern',
    authors: 'with Torben G. Andersen, Zhensi Tan, Viktor Todorov, and Zhiyuan Zhang',
    href: 'https://doi.org/10.2139/ssrn.7295718',
  },
  {
    title: 'A Flexible Functional Approach to Volatility Prediction',
    authors: 'with Tao Su, Zhensi Tan, and Zhiyuan Zhang',
  },
];

const experience = [
  {
    period: 'Aug. 2025 — Present',
    place: 'Hong Kong University of Science and Technology',
    role: 'Postdoctoral Fellow, ISOM',
    detail: 'Advised by Prof. Yingying Li and Prof. Xinghua Zheng.',
  },
  {
    period: 'Nov. 2023 — Nov. 2024',
    place: 'Northwestern University',
    role: 'Visiting Scholar, Kellogg School of Management',
    detail: 'Advised by Prof. Torben G. Andersen and Prof. Viktor Todorov.',
  },
  {
    period: '2020 — 2025',
    place: 'Shanghai University of Finance and Economics',
    role: 'Ph.D. in Financial Statistics and Risk Management',
    detail: 'School of Statistics and Data Science. Advisor: Prof. Zhiyuan Zhang.',
  },
  {
    period: '2016 — 2020',
    place: 'Shanghai University of Finance and Economics',
    role: 'B.S. in Applied Statistics',
    detail: 'School of Statistics and Management.',
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#top" aria-label="Yingwen Tan, home">
            <span className="brand-name">Yingwen Tan</span>
            <span className="brand-role">Financial econometrics</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#publications">Publications</a>
            <Link className="nav-cv" href="/Yingwen-Tan-CV.pdf">
              CV <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero shell" id="top" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Hong Kong · Financial Econometrics</p>
            <h1 id="hero-heading">Seeing financial markets at their highest frequency.</h1>
            <p className="hero-intro">
              I&apos;m Yingwen Tan, a postdoctoral fellow at HKUST. I study how
              volatility, dependence, and market structure evolve within the trading day.
            </p>

            <div className="hero-actions" aria-label="Primary links">
              <Link
                className="button button-primary"
                href="/Yingwen-Tan-CV.pdf"
                download="Yingwen-Tan-CV.pdf"
              >
                Download CV <Download aria-hidden="true" size={16} strokeWidth={1.8} />
              </Link>
              <a className="button button-secondary" href="mailto:tanyingwenhaha@gmail.com">
                Email me <Mail aria-hidden="true" size={16} strokeWidth={1.8} />
              </a>
            </div>

            <a className="scroll-cue" href="#about">
              Explore my work <ArrowDown aria-hidden="true" size={15} />
            </a>
          </div>

          <figure className="portrait-wrap">
            <div className="portrait-frame">
              <Image
                src="/yingwen-tan.webp"
                width="960"
                height="1200"
                alt="Portrait of Yingwen Tan"
                priority
              />
            </div>
            <figcaption>
              <span>Yingwen Tan</span>
              <span>Hong Kong SAR</span>
            </figcaption>
          </figure>
        </section>

        <div className="shell facts" aria-label="Research at a glance">
          <div>
            <strong>4</strong>
            <span>Peer-reviewed papers</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Working papers</span>
          </div>
          <div>
            <strong>2025</strong>
            <span>Ph.D. completed</span>
          </div>
          <div>
            <strong>HKUST</strong>
            <span>Current appointment</span>
          </div>
        </div>

        <section className="section shell split-section" id="about" aria-labelledby="about-heading">
          <div className="section-marker">
            <p>About</p>
            <span aria-hidden="true">01</span>
          </div>
          <div className="about-content">
            <h2 id="about-heading">
              I develop statistical tools for complex, high-frequency financial data.
            </h2>
            <div className="prose-columns">
              <p>
                My research sits at the intersection of high-frequency statistics,
                financial econometrics, functional data analysis, and time series. I am
                especially interested in what intraday curves reveal about changing market
                behavior.
              </p>
              <p>
                At HKUST, I work in the Department of Information Systems, Business
                Statistics and Operations Management, building methods that connect rigorous
                inference with practical questions in market microstructure and financial data
                science.
              </p>
            </div>
          </div>
        </section>

        <section className="section shell" id="research" aria-labelledby="research-heading">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Research</p>
              <h2 id="research-heading">Questions I keep returning to</h2>
            </div>
            <p className="section-note">
              How can we recover stable insight from markets that change minute by minute?
            </p>
          </div>

          <div className="research-grid">
            {researchAreas.map((area) => (
              <article className="research-item" key={area.number}>
                <span>{area.number}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section publications-section"
          id="publications"
          aria-labelledby="publications-heading"
        >
          <div className="shell">
            <div className="section-heading-row publications-heading">
              <div>
                <p className="section-kicker">Publications</p>
                <h2 id="publications-heading">Selected research</h2>
              </div>
              <Link className="text-link" href="/Yingwen-Tan-CV.pdf">
                Full list in CV <ArrowUpRight aria-hidden="true" size={15} />
              </Link>
            </div>

            <div className="publication-list">
              {publications.map((paper, index) => (
                <article className="publication" key={paper.title}>
                  <span className="publication-index">{String(index + 1).padStart(2, '0')}</span>
                  <div className="publication-copy">
                    <h3>
                      <a href={paper.href} target="_blank" rel="noreferrer">
                        {paper.title}
                        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
                      </a>
                    </h3>
                    <p>{paper.authors}</p>
                    <p className="publication-venue">{paper.venue}</p>
                  </div>
                  <time>{paper.year}</time>
                </article>
              ))}
            </div>

            <div className="working-papers">
              <div className="working-papers-intro">
                <p className="section-kicker">In progress</p>
                <h3>Working papers</h3>
              </div>
              <div className="working-paper-list">
                {workingPapers.map((paper) => (
                  <article key={paper.title}>
                    <h4>
                      {paper.href ? (
                        <a href={paper.href} target="_blank" rel="noreferrer">
                          {paper.title}
                          <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
                        </a>
                      ) : (
                        paper.title
                      )}
                    </h4>
                    <p>{paper.authors}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section shell" id="experience" aria-labelledby="experience-heading">
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Experience</p>
              <h2 id="experience-heading">Academic path</h2>
            </div>
            <p className="section-note">
              From applied statistics to the measurement of fast-moving financial systems.
            </p>
          </div>

          <div className="experience-layout">
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.period}-${item.role}`}>
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.place}</h3>
                    <p className="timeline-role">{item.role}</p>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="recognition" aria-labelledby="recognition-heading">
              <p className="section-kicker">Recognition</p>
              <h3 id="recognition-heading">Funding & honors</h3>
              <ul>
                <li>
                  <span>Outstanding Graduate, SUFE</span>
                  <time>2025 · 2020</time>
                </li>
                <li>
                  <span>China Scholarship Council</span>
                  <time>2023–24</time>
                </li>
                <li>
                  <span>Graduate Innovation Fund</span>
                  <time>2023</time>
                </li>
                <li>
                  <span>Doctoral Fellowship, SUFE</span>
                  <time>2020–25</time>
                </li>
              </ul>

              <div className="teaching-note">
                <p className="section-kicker">Teaching</p>
                <p>
                  Teaching assistant for doctoral, master&apos;s, and undergraduate courses in
                  stochastic processes, mathematical statistics, and stochastic calculus for
                  finance.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="shell contact-inner">
            <div>
              <p className="contact-kicker">Let&apos;s connect</p>
              <h2 id="contact-heading">Interested in high-frequency financial data?</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:tanyingwenhaha@gmail.com">
                <Mail aria-hidden="true" size={17} />
                tanyingwenhaha@gmail.com
              </a>
              <span>
                <MapPin aria-hidden="true" size={17} />
                Hong Kong SAR
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} Yingwen Tan</p>
          <div>
            <a href="#top">Back to top</a>
            <Link href="/Yingwen-Tan-CV.pdf">CV</Link>
            <a href="mailto:tanyingwenhaha@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
