import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { DocsLayoutWrapper } from './layout-wrapper';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayoutWrapper tree={source.pageTree}>
      {children}
    </DocsLayoutWrapper>
  );
}
