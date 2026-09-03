import type { ReactNode } from 'react';

type PageName = 'about' | 'research' | 'cv';

const navItems: Array<{ label: string; href: string; page: PageName }> = [
  { label: 'About', href: '/', page: 'about' },
  { label: 'Research', href: '/research/', page: 'research' },
  { label: 'CV', href: '/cv/', page: 'cv' },
];

export function SiteFrame({ active, children }: { active: PageName; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="/">
            Yingwen Tan
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.page}
                href={item.href}
                aria-current={active === item.page ? 'page' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© {new Date().getFullYear()} Yingwen Tan</span>
        </div>
      </footer>
    </>
  );
}
