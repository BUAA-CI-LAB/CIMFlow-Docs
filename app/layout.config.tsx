import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const logoImagePath = `${basePath}/assets/logo.svg`;

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  githubUrl: 'https://github.com/BUAA-CI-LAB/CIMFlow',
  nav: {
    title: (
      <>
        <Image
          // src="/cimflow-docs-test/assets/logo.svg"
          src={logoImagePath}
          width={36}
          height={36}
          alt="CIMFlow Logo"
          className="mr-2"
        />
        <span className="font-medium">CIMFlow</span>
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
