import type { Metadata } from 'next';
import Image from 'next/image';
import { Contact, FileText, GraduationCap, Mail } from 'lucide-react';
import { SiteFrame } from '@/components/site-frame';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Yingwen Tan, a postdoctoral fellow at HKUST working in financial econometrics and high-frequency statistics.',
};

export default function AboutPage() {
  return (
    <SiteFrame active="about">
      <section className="shell page about-page" aria-labelledby="about-title">
        <div className="portrait-column">
          <Image
            className="portrait"
            src="/yingwen-tan.webp"
            width={960}
            height={1200}
            alt="Portrait of Yingwen Tan"
            priority
          />
        </div>

        <div className="about-copy">
          <h1 id="about-title">Yingwen Tan</h1>
          <p className="role">Postdoctoral Fellow · HKUST</p>

          <div className="plain-prose">
            <p>
              I am a postdoctoral fellow in the Department of Information Systems,
              Business Statistics and Operations Management at the Hong Kong University of
              Science and Technology.
            </p>
          </div>

          <div className="interests" aria-labelledby="interests-title">
            <h2 id="interests-title">Research interests</h2>
            <p>
              High-frequency statistics · Financial econometrics · Functional data and time
              series · Market microstructure
            </p>
          </div>

          <div className="social-links" aria-label="Academic and professional profiles">
            <a href="mailto:tanyingwen@ust.hk" aria-label="Email" title="Email">
              <Mail aria-hidden="true" size={18} strokeWidth={1.7} />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=6036299"
              target="_blank"
              rel="noreferrer"
              aria-label="SSRN"
              title="SSRN"
            >
              <FileText aria-hidden="true" size={18} strokeWidth={1.7} />
              <span className="sr-only">SSRN</span>
            </a>
            <a
              href="https://scholar.google.com/citations?user=cmVNw5UAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Scholar"
              title="Google Scholar"
            >
              <GraduationCap aria-hidden="true" size={19} strokeWidth={1.7} />
              <span className="sr-only">Google Scholar</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ying-wen-tan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Contact aria-hidden="true" size={18} strokeWidth={1.7} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
