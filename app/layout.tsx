"use client"; // Add this at the top for App Router
import './global.css';

import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
// import { Banner } from 'fumadocs-ui/components/banner';
import { usePathname } from 'next/navigation';

const inter = Inter({
  subsets: ['latin'],
});

function getSection(pathname: string): string | undefined {
  if (pathname.startsWith('/docs/Abstraction')) return 'abstraction';
  if (pathname.startsWith('/docs/Compiler')) return 'compiler';
  if (pathname.startsWith('/docs/Simulator')) return 'simulator';
  if (pathname.startsWith('/docs/Examples')) return 'examples';
  if (pathname.startsWith('/docs')) return 'overview';
  return undefined;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const section = getSection(pathname);

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const relativeApiPath = '/api/search'; // Your specific API route
  const fullApiPath = `${basePath}${relativeApiPath}`;
  // console.log(`Using basePath from env: "${basePath}", Full API path: "${fullApiPath}"`);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="CIMFlow" />
        <link rel="icon" href="/favicon.ico"></link>
      </head>
      <body className={`${inter.className} ${section ?? ''}`} suppressHydrationWarning>
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
          {/* <Banner id="wip-notice" variant='rainbow'>The code and documentation for CIMFlow is currently under construction. Stay tuned!</Banner> */}
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
