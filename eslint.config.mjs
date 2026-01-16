import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [
      ".next/**",
      ".source/**",
      "out/**",
      "node_modules/**",
      "app/(home)/page.bk.tsx",
      "app/(home)/page.client.bk.tsx",
    ],
  },
];

export default eslintConfig;
