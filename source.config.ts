import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import lastModified from 'fumadocs-mdx/plugins/last-modified';

// Single unified docs source
export const docs = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  plugins: [lastModified()],
  mdxOptions: {
    // MDX options
  },
});
