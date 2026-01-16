import {
  RocketIcon,
  CodeIcon,
  CpuIcon,
  LayoutIcon,
  BookOpenIcon,
  UsersIcon,
  ChevronRightIcon,
  FlaskConicalIcon,
  MousePointerIcon,
  FileTextIcon
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/app/components/ui/button';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
const archImagePath = `${basePath}/assets/arch.svg`;
const logoImagePath = `${basePath}/assets/logo.svg`;

export default function HomePage() {
  return (
    <>
      <div className="absolute inset-x-0 top-[-7px] h-[850px] max-md:hidden grid-pattern" />
      <main className="container relative max-w-[1100px] mx-auto px-4 py-6 z-[2] lg:py-10">
        <div className="relative">
          <Hero />
          <Architecture />
          <Why />
          <Documentation />
          <Publications />
          <Footer />
        </div>
      </main>
    </>
  );
}

function Hero() {
  return (
    <div className="relative z-[2] flex flex-col border-x border-t bg-fd-card/80 px-6 pt-12 pb-16 max-md:text-center md:px-12 md:pt-16 [.uwu_&]:hidden max-lg:overflow-hidden">
      <h1 className="mb-8 text-4xl font-medium md:hidden">CIMFlow Framework</h1>
      <h1 className="mb-8 max-w-[600px] text-4xl font-medium max-md:hidden">
        Accelerating innovations in digital Compute-in-Memory research
      </h1>
      <br />
      <p className="mb-8 text-fd-muted-foreground md:max-w-[80%] md:text-xl">
        CIMFlow is an integrated, open-source framework designed to bridge the gap between
        software and hardware for DNN workloads on CIM architectures.
      </p>
      <div className="inline-flex items-center gap-3 max-md:mx-auto">
        <Link
          href="/docs/Framework"
          className={cn(
            buttonVariants({ size: 'lg', className: 'rounded-full' }),
          )}
        >
          Getting Started
        </Link>
        <Link
          href="/docs/Examples"
          className={cn(
            buttonVariants({
              size: 'lg',
              variant: 'outline',
              className: 'rounded-full bg-fd-background',
            }),
          )}
        >
          Open Demo
        </Link>
      </div>
    </div>
  );
}

function Architecture() {
  return (
    <div className="flex flex-col bg-fd-card/80 gap-4 border-x border-t px-8 py-10 pb-10 md:px-12 md:py-14 md:pb-6 md:flex-row ">
      <ArchitectureText />
      <ArchitectureImage />
    </div>
  );
}

function ArchitectureText() {
  return (
    <div className="shrink-0 flex-1 text-start">
      <p className="px-2 py-1 text-sm font-mono bg-fd-primary text-fd-primary-foreground font-bold w-fit mb-4">
        Full-Stack Infrastructure
      </p>
      <h2 className="text-2xl font-semibold mb-4">
        A unified framework for CIM architecture research.
      </h2>
      <p className="text-fd-muted-foreground mb-6">
        CIMFlow includes an Instruction Set Architecture (ISA),
        an MLIR-based compiler, and a SystemC-based simulator.
        <br />
        <br />
        Its modular design supports flexible exploration of architectural configurations, enabling users
        to easily adapt and validate their systems against diverse DNN workloads.
      </p>
      <div className="flex flex-row items-center font-mono -mx-4">
        <Link
          href="/docs/Abstraction/ISA"
          className={cn(buttonVariants({ variant: 'link' }))}
        >
          ISA
        </Link>
        <Link
          href="/docs/Compiler"
          className={cn(buttonVariants({ variant: 'link' }))}
        >
          Compiler
        </Link>
        <Link
          href="/docs/Simulator"
          className={cn(buttonVariants({ variant: 'link' }))}
        >
          Simulator
        </Link>
      </div>
    </div>
  );
}

function ArchitectureImage() {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={archImagePath}
        alt="Architecture"
        width={450}
        height={450}
        className="md:-mt-20 w-full lg:max-w-[450px] lg-md:max-w-[300px] md:max-w-[330px] invert dark:invert-0 max-md:hidden"
      />
    </div>
  );
}

function Why() {
  return (
    <div className="grid grid-cols-1 border-r sm:grid-cols-2 md:grid-cols-4 bg-fd-card/30">
      <div className="col-span-full flex flex-row items-start justify-center border-l border-t p-8 pb-4 text-center">
        <h2 className="bg-fd-primary text-fd-primary-foreground px-1 text-2xl font-semibold">
          Why CIMFlow?
        </h2>
        <MousePointerIcon className="-ml-1 mt-8" />
      </div>
      <div className="border-l border-t p-6 transition-colors hover:bg-fd-card/80">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center size-12 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
            <RocketIcon className="size-6 text-fd-primary" />
          </div>
          <h2 className="text-base font-semibold mb-2">Seamless Workflow</h2>
          <p className="text-fd-muted-foreground">
            An integrated, out-of-the-box experience for designing and evaluating DNN workloads on digital CIM architectures.
          </p>
        </div>
      </div>
      <div className="border-l border-t p-6 transition-colors hover:bg-fd-card/80">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center size-12 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
            <FlaskConicalIcon className="size-6 text-fd-primary" />
          </div>
          <h2 className="text-base font-semibold mb-2">Rapid Prototyping</h2>
          <p className="text-fd-muted-foreground">
            Equipped with intuitive tools, optimized for quickly validating new CIM design concepts and algorithmic innovations.
          </p>
        </div>
      </div>
      <div className="border-l border-t p-6 transition-colors hover:bg-fd-card/80">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center size-12 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
            <LayoutIcon className="size-6 text-fd-primary" />
          </div>
          <h2 className="text-base font-semibold mb-2">Flexible & Extensible</h2>
          <p className="text-fd-muted-foreground">
            Modular design enables easy customization, rapid prototyping, and straightforward integration of new features.
          </p>
        </div>
      </div>
      <div className="border-l border-t p-6 transition-colors hover:bg-fd-card/80">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 flex items-center justify-center size-12 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
            <UsersIcon className="size-6 text-fd-primary" />
          </div>
          <h2 className="text-base font-semibold mb-2">Open and Collaborative</h2>
          <p className="text-fd-muted-foreground">
            Open-source and community-driven, welcoming contributions and collaboration for continuous improvement.
          </p>
        </div>
      </div>
    </div>
  );
}

function Documentation() {
  return (
    <div className="border-x border-t px-8 py-16 md:py-16 md:pb-16 bg-fd-card/30">
      <h2 className="mb-8 text-center text-2xl font-semibold">Documentation and Tutorials</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
        <Link
          href="/docs/Framework"
          className="group flex flex-col rounded-lg border bg-gradient-to-b from-fd-card to-fd-card/95 p-6 shadow-md transition-all duration-300 hover:shadow-lg card-hover"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
              <BookOpenIcon className="size-5 text-fd-primary" />
            </div>
            <h3 className="text-lg font-semibold">Getting Started Guide</h3>
          </div>
          <p className="text-fd-muted-foreground mb-4 flex-1">Learn the basics of CIMFlow and set up your develop environment.</p>
          <div className="mt-auto pt-2 flex items-center text-fd-primary border-t">
            <span className="text-sm font-medium">Learn more</span>
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
        <Link
          href="/docs/Compiler"
          className="group flex flex-col rounded-lg border bg-gradient-to-b from-fd-card to-fd-card/95 p-6 shadow-md transition-all duration-300 hover:shadow-lg card-hover"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
              <CodeIcon className="size-5 text-fd-primary" />
            </div>
            <h3 className="text-lg font-semibold">Compiler</h3>
          </div>
          <p className="text-fd-muted-foreground mb-4 flex-1">MLIR-based compiler toolchain for CIM accelerators.</p>
          <div className="mt-auto pt-2 flex items-center text-fd-primary border-t">
            <span className="text-sm font-medium">Learn more</span>
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
        <Link
          href="/docs/Abstraction/ISA"
          className="group flex flex-col rounded-lg border bg-gradient-to-b from-fd-card to-fd-card/95 p-6 shadow-md transition-all duration-300 hover:shadow-lg card-hover"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
              <CpuIcon className="size-5 text-fd-primary" />
            </div>
            <h3 className="text-lg font-semibold">Architecture Guide</h3>
          </div>
          <p className="text-fd-muted-foreground mb-4 flex-1">Understand CIMFlow&apos;s architecture abstraction and ISA design.</p>
          <div className="mt-auto pt-2 flex items-center text-fd-primary border-t">
            <span className="text-sm font-medium">Learn more</span>
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
        <Link
          href="/docs/Examples"
          className="group flex flex-col rounded-lg border bg-gradient-to-b from-fd-card to-fd-card/95 p-6 shadow-md transition-all duration-300 hover:shadow-lg card-hover"
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="flex items-center justify-center size-10 rounded-full bg-fd-primary/10 dark:bg-fd-primary/20">
              <LayoutIcon className="size-5 text-fd-primary" />
            </div>
            <h3 className="text-lg font-semibold">Examples & Tutorials</h3>
          </div>
          <p className="text-fd-muted-foreground mb-4 flex-1">Step-by-step tutorials and example projects for implementation.</p>
          <div className="mt-auto pt-2 flex items-center text-fd-primary border-t">
            <span className="text-sm font-medium">Learn more</span>
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </Link>
      </div>
    </div>
  );
}

function Publications() {
  return (
    <div className="border-x border-t px-8 py-10 md:py-12 md:pb-14 bg-fd-card/30">
      <h2 className="mb-8 text-center text-2xl font-semibold">Publications</h2>
      <div className="mx-auto max-w-[800px] rounded-lg border bg-gradient-to-b from-fd-card to-fd-card/95 p-6 shadow-lg transition-all duration-300 hover:shadow-xl card-hover">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="flex-shrink-0 flex items-center justify-center size-10 md:size-20 rounded-lg bg-fd-primary/10 dark:bg-fd-primary/20 max-sm:hidden">
            <FileTextIcon className="size-8 text-fd-primary" />
          </div>
          <div className="flex-1">
            <h3 className="mb-2 text-xl font-semibold">CIMFlow: An Integrated Framework for Systematic Design and Evaluation of Digital CIM Architectures</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-fd-primary/10 dark:bg-fd-primary/20 px-2.5 py-0.5 text-xs font-medium text-fd-primary">
                DAC&apos;25
              </span>
              <span className="inline-flex items-center rounded-full bg-fd-secondary/10 dark:bg-fd-secondary/20 px-2.5 py-0.5 text-xs font-medium text-fd-primary-muted">
                Design Automation Conference
              </span>
            </div>
            <p className="mb-4 text-fd-muted-foreground">
              Authors: Yingjie Qi, Jianlei Yang, Yiou Wang, Yikun Wang, Dayu Wang, Ling Tang, Cenlin Duan, Xiaolin He and Weisheng Zhao
            </p>
            <div className="flex flex-row gap-4 border-t pt-4">
              <Link
                href="https://arxiv.org/abs/2505.01107"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({
                    className: 'group'
                  })
                )}
              >
                Read Paper
                <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-x border-t border-b px-8 py-12 bg-gradient-to-b from-fd-card to-fd-card/95">
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          <div className="max-md:hidden">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src={logoImagePath}
                alt="CIMFlow Logo"
                width={40}
                height={40}
              />
              <h3 className="text-xl font-semibold">CIMFlow</h3>
            </div>
          </div>

          {/* Section 2: Documentation */}
          <div>
            <h3 className="mb-4 font-semibold">Documentation</h3>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              <li>
                <Link href="/docs/Framework" className="hover:text-fd-foreground transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/docs/Abstraction/ISA" className="hover:text-fd-foreground transition-colors">
                  ISA Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/Compiler" className="hover:text-fd-foreground transition-colors">
                  Compiler
                </Link>
              </li>
              <li>
                <Link href="/docs/Simulator" className="hover:text-fd-foreground transition-colors">
                  Simulator
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Community */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Community</h3>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              <li>
                <Link href="https://github.com/BUAA-CI-LAB/CIMFlow" className="hover:text-fd-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://github.com/BUAA-CI-LAB/CIMFlow/blob/main/CONTRIBUTING.md" className="hover:text-fd-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  Contributing
                </Link>
              </li>
            </ul>
          </div>

          {/* Section 4: Contact */}
          <div>
            <h3 className="mb-4 text-base font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-fd-muted-foreground">
              <li>
                <Link href="https://www.ci-lab.net/" className="hover:text-fd-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                  CI-Lab
                </Link>
              </li>
              <li>Beihang University</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Credits */}
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-fd-muted-foreground text-sm">
          {/* Use text-center on mobile, text-left on md and up */}
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} CIMFlow. All rights reserved.
          </p>
          <p className="mt-2 md:mt-0 text-center md:text-right">
            Let the ideas flow.
          </p>
        </div>
      </div>
    </footer>
  );
}