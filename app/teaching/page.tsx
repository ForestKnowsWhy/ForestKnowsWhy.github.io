import type { Metadata } from 'next';
import { SiteFrame } from '@/components/site-frame';

export const metadata: Metadata = {
  title: 'Teaching',
  alternates: { canonical: '/teaching/' },
};

export const dynamic = 'force-static';

export default function TeachingPage() {
  return (
    <SiteFrame active="teaching">
      <section className="shell page teaching-page" aria-labelledby="teaching-title">
        <h1 id="teaching-title">Teaching</h1>
        <p className="teaching-note">Teaching information will be added soon.</p>
      </section>
    </SiteFrame>
  );
}
