import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const logoImagePath = `${basePath}/assets/logo.svg`;

export function baseOptions(): BaseLayoutProps {
  return {
    githubUrl: 'https://github.com/BUAA-CI-LAB/CIMFlow',
    nav: {
      title: (
        <>
          <Image
            alt="CIMFlow Logo"
            src={logoImagePath}
            width={24}
            height={24}
            style={{ marginRight: 8, width: 24, height: 24 }}
          />
          <span className="font-medium">CIMFlow</span>
        </>
      ),
    },
  };
}
