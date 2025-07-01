import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Rocket, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    icon: <Code className="size-8 text-primary" />,
    title: 'Powerful Scripts',
    description: 'High-performance scripts and utilities to supercharge your applications.',
  },
  {
    icon: <Palette className="size-8 text-primary" />,
    title: 'Headless CMS',
    description: 'Flexible and scalable content management solutions for any frontend.',
  },
  {
    icon: <Rocket className="size-8 text-primary" />,
    title: 'Full-Stack Solutions',
    description: 'Complete, ready-to-deploy solutions for complex business needs.',
  },
];

const portfolio = [
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'technology product',
    title: 'Project Innovate',
    description: 'A revolutionary platform for collaborative design.',
  },
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'data dashboard',
    title: 'DataDash',
    description: 'An analytics dashboard for a leading fintech company.',
  },
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'mobile app',
    title: 'ConnectApp',
    description: 'A social networking app focused on professional growth.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Scripts & CMS for the Modern Web
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Kree8 provides robust scripts and powerful CMS solutions to build exceptional digital products and experiences.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>
            <Image
              src="https://placehold.co/600x500.png"
              data-ai-hint="abstract technology"
              width="600"
              height="500"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Products</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">What We Build</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                From standalone scripts to full-featured CMS solutions, we have you covered.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 mt-12">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4">
                  {service.icon}
                  <CardTitle className="font-headline">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Showcase</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Implementations</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out how our products have been used to create amazing projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group">
                <Image
                  src={project.image}
                  data-ai-hint={project.hint}
                  width="600"
                  height="400"
                  alt={project.title}
                  className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"
                />
                <CardContent className="p-4">
                  <h3 className="font-headline text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button asChild variant="link" className="text-primary">
              <Link href="/portfolio">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to build something amazing?
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore our products and find the perfect solution for your next project.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
