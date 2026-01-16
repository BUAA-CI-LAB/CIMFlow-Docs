'use client';

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { baseOptions } from '@/lib/layout.shared';
import { Boxes, Building2, Workflow, Play, BookOpen } from 'lucide-react';
import { usePathname } from 'next/navigation';

// Section accent colors (matching global.css variables)
const sectionColors: Record<string, string> = {
  Framework: 'var(--framework-color)',
  Abstraction: 'var(--abstraction-color)',
  Compiler: 'var(--compiler-color)',
  Simulator: 'var(--simulator-color)',
  Examples: 'var(--examples-color)',
};

const sectionIcons: Record<string, React.ReactNode> = {
  Framework: <Boxes />,
  Abstraction: <Building2 />,
  Compiler: <Workflow />,
  Simulator: <Play />,
  Examples: <BookOpen />,
};

export function DocsLayoutWrapper({
  children,
  tree,
}: {
  children: ReactNode;
  tree: any;
}) {
  const pathname = usePathname();
  const isLanding = pathname === '/docs';

  if (isLanding) {
    return (
      <HomeLayout {...baseOptions()}>
        {children}
      </HomeLayout>
    );
  }

  // Determine current section from pathname
  const getColorForPath = (path: string) => {
    if (path.startsWith('/docs/Abstraction')) return 'var(--abstraction-color)';
    if (path.startsWith('/docs/Compiler')) return 'var(--compiler-color)';
    if (path.startsWith('/docs/Simulator')) return 'var(--simulator-color)';
    if (path.startsWith('/docs/Examples')) return 'var(--examples-color)';
    return 'var(--framework-color)';
  };
  const primaryColor = getColorForPath(pathname);

  return (
    <div style={{ '--color-fd-primary': primaryColor } as React.CSSProperties}>
      <DocsLayout
        {...baseOptions()}
        tree={tree}
        sidebar={{
          tabs: {
            transform: (option, node) => {
              const title = String(option.title);
              const color = sectionColors[title] ?? 'var(--color-fd-foreground)';
              const icon = sectionIcons[title] ?? node.icon;

              return {
                ...option,
                icon: (
                  <div
                    className="[&_svg]:size-full rounded-lg size-full max-md:bg-fd-primary/10 max-md:border max-md:p-1.5"
                    style={{ color }}
                  >
                    {icon}
                  </div>
                ),
              };
            },
          }
        }}
      >
        {children}
      </DocsLayout>
    </div>
  );
}
