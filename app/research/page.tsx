import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Publications and working papers by Yingwen Tan.',
};

export const dynamic = 'force-static';

const publications = [
  {
    title: 'On-line detection of changes in the shape of intraday volatility curves',
    authors: 'Torben G. Andersen, Yingwen Tan, Viktor Todorov, and Zhiyuan Zhang',
    venue: 'Journal of Econometrics, 252, 106089',
    year: '2025',
    href: 'https://doi.org/10.1016/j.jeconom.2025.106089',
  },
  {
    title: 'Testing mean stationarity of intraday volatility curves',
    authors: 'Torben G. Andersen, Yingwen Tan, Viktor Todorov, and Zhiyuan Zhang',
    venue: 'Quantitative Economics, 16(3), 1059–1091',
    year: '2025',
    href: 'https://doi.org/10.3982/QE2644',
  },
  {
    title: 'Inference for calendar effects in microstructure noise',
    authors: 'Yingwen Tan and Zhiyuan Zhang',
    venue: 'Journal of Time Series Analysis, 45(6), 931–952',
    year: '2024',
    href: 'https://doi.org/10.1111/jtsa.12744',
  },
  {
    title: 'Functional volatility forecasting',
    authors: 'Yingwen Tan, Zhensi Tan, Yinfen Tang, and Zhiyuan Zhang',
    venue: 'Journal of Forecasting, 43(8), 3009–3034',
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

export default function ResearchPage() {
  return (
    <SiteFrame active="research">
      <div className="shell page research-page">
        <section className="paper-section" aria-labelledby="publications-title">
          <h2 id="publications-title">Publications</h2>
          <div className="paper-list">
            {publications.map((paper, index) => (
              <article className="paper" key={paper.title}>
                <span className="paper-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.title}
                      <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
                    </a>
                  </h3>
                  <p>{paper.authors}</p>
                  <p className="venue">{paper.venue}</p>
                </div>
                <time>{paper.year}</time>
              </article>
            ))}
          </div>
        </section>

        <section className="paper-section working-section" aria-labelledby="working-title">
          <h2 id="working-title">Working papers</h2>
          <div className="working-list">
            {workingPapers.map((paper) => (
              <article key={paper.title}>
                <h3>
                  {paper.href ? (
                    <a href={paper.href} target="_blank" rel="noreferrer">
                      {paper.title}
                      <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.8} />
                    </a>
                  ) : (
                    paper.title
                  )}
                </h3>
                <p>{paper.authors}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </SiteFrame>
  );
}
