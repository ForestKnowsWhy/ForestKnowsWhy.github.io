import type { Metadata } from 'next';
import { SiteFrame } from '@/components/site-frame';

export const metadata: Metadata = {
  title: 'Teaching',
  description: 'Teaching assistant experience of Yingwen Tan.',
  alternates: { canonical: '/teaching/' },
};

export const dynamic = 'force-static';

const courses = [
  {
    name: 'Limit Theorems for Stochastic Process',
    level: 'Ph.D.',
    instructor: 'Prof. Zhiyuan Zhang',
    terms: 'AY 2022–23, 2023–24, 2024–25 · Term 2',
  },
  {
    name: 'Advanced Mathematical Statistics II',
    level: 'Ph.D.',
    instructor: 'Prof. Lyuou Zhang',
    terms: 'AY 2024–25 · Term 2',
  },
  {
    name: 'Stochastic Calculus for Finance',
    level: 'Master’s',
    instructor: 'Prof. Zhiyuan Zhang',
    terms: 'AY 2022–23 and 2023–24 · Term 1',
  },
  {
    name: 'Mathematical Statistics',
    level: 'Undergraduate',
    instructor: 'Prof. Zhiyuan Zhang',
    terms: 'AY 2021–22 · Term 2',
  },
  {
    name: 'Stochastic Process',
    level: 'Undergraduate',
    instructor: 'Prof. Zhiyuan Zhang',
    terms: 'AY 2021–22 · Term 1',
  },
];

export default function TeachingPage() {
  return (
    <SiteFrame active="teaching">
      <section className="shell page teaching-page" aria-labelledby="teaching-title">
        <h1 id="teaching-title">Teaching</h1>
        <div className="teaching-list">
          {courses.map((course) => (
            <article key={course.name}>
              <h2>{course.name}</h2>
              <p>Teaching Assistant · {course.level}</p>
              <p>Instructor: {course.instructor}</p>
              <p>{course.terms}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}
