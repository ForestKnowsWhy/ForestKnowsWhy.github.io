import type { Metadata } from 'next';
import { ArrowUpRight, Download } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';

export const metadata: Metadata = {
  title: 'CV',
  description: 'Academic trajectory and curriculum vitae of Yingwen Tan.',
};

export const dynamic = 'force-static';

const trajectory = [
  {
    period: '2025 — Present',
    institution: 'Hong Kong University of Science and Technology',
    position: 'Postdoctoral Fellow, ISOM',
  },
  {
    period: '2023 — 2024',
    institution: 'Northwestern University',
    position: 'Visiting Scholar, Kellogg School of Management',
  },
  {
    period: '2020 — 2025',
    institution: 'Shanghai University of Finance and Economics',
    position: 'Ph.D. in Financial Statistics and Risk Management',
  },
  {
    period: '2016 — 2020',
    institution: 'Shanghai University of Finance and Economics',
    position: 'B.S. in Applied Statistics',
  },
];

export default function CvPage() {
  return (
    <SiteFrame active="cv">
      <div className="shell page cv-page">
        <header className="page-heading cv-heading">
          <div>
            <p className="page-label">Curriculum vitae</p>
            <h1>Academic trajectory</h1>
          </div>
          <div className="cv-actions">
            <a className="primary-link" href="/Yingwen-Tan-CV.pdf" target="_blank">
              View PDF CV
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
            <a className="secondary-link" href="/Yingwen-Tan-CV.pdf" download>
              <Download aria-hidden="true" size={15} strokeWidth={1.8} />
              Download
            </a>
          </div>
        </header>

        <section className="trajectory" aria-label="Academic trajectory">
          {trajectory.map((item) => (
            <article key={`${item.period}-${item.position}`}>
              <time>{item.period}</time>
              <div>
                <h2>{item.institution}</h2>
                <p>{item.position}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </SiteFrame>
  );
}
