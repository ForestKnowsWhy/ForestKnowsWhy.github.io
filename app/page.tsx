import type { Metadata } from 'next';
import Image from 'next/image';
import { Mail } from 'lucide-react';
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
          <p className="page-label">About</p>
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

          <a className="email-link" href="mailto:tanyingwenhaha@gmail.com">
            <Mail aria-hidden="true" size={16} strokeWidth={1.7} />
            tanyingwenhaha@gmail.com
          </a>
        </div>
      </section>
    </SiteFrame>
  );
}
