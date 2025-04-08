"use client"; // Add this at the top for App Router
import './global.css';

import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const relativeApiPath = '/api/search'; // Your specific API route
  const fullApiPath = `${basePath}${relativeApiPath}`;
  // console.log(`Using basePath from env: "${basePath}", Full API path: "${fullApiPath}"`);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <RootProvider
          search={{
            // enabled: false,
            links: [
              ['Home', '/'],
              ['Docs', '/docs'],
            ],
            options: {
              type: 'static',
              // api: "/cimflow-docs-test/api/search",
              api: fullApiPath,
            },
          }}
        >
          <Banner variant='rainbow'>The code and documentation for CIMFlow is currently under construction. Stay tuned!</Banner>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
