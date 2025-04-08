import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'CIMFlow - Integrated Framework for CIM Design',
  description: 'CIMFlow is an integrated framework for the systematic design, compilation, and simulation of SRAM-based digital compute-in-memory (CIM) architectures. It supports ISA abstraction, compiler mapping, and cycle-accurate SystemC simulation.',
}

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}>{children}</HomeLayout>;
}
