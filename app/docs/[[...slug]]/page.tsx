import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { PageLastUpdate } from 'fumadocs-ui/layouts/docs/page';
import { notFound, redirect } from 'next/navigation';
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Callout } from 'fumadocs-ui/components/callout';
import { TypeTable } from 'fumadocs-ui/components/type-table';
import { Card, Cards } from 'fumadocs-ui/components/card';
import { File, Folder, Files } from 'fumadocs-ui/components/files';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Boxes, Building2 } from 'lucide-react';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // Redirect folder index pages to their first child
  if (params.slug?.length === 1 && params.slug[0] === 'Abstraction') {
    redirect('/docs/Abstraction/ISA');
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;
  const lastModified = page.data.lastModified;

  // Custom landing page for /docs root
  if (!params.slug || params.slug.length === 0) {
    return (
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <MDXContent
          components={{
            ...defaultMdxComponents,
            Card,
            Cards,
            Boxes,
            Building2,
          }}
        />
      </main>
    );
  }

  return (
    <DocsPage
      toc={page.data.toc}
      full={page.data.full}
      tableOfContent={{
        style: 'clerk',
        single: false,
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            Tab,
            Tabs,
            Step,
            Steps,
            Callout,
            TypeTable,
            Card,
            Cards,
            File,
            Folder,
            Files,
            Accordion,
            Accordions,
          }}
        />
      </DocsBody>
      {lastModified && (
        <div className="mt-12 pt-3 border-t border-fd-border">
          <PageLastUpdate date={lastModified} />
        </div>
      )}
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // Add meta refresh for folder redirects (fallback for no-JS)
  if (params.slug?.length === 1 && params.slug[0] === 'Abstraction') {
    return {
      title: 'Abstraction',
    };
  }

  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
