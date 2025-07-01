import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Rocket, ArrowRight, Award, LifeBuoy, Puzzle, RefreshCw, Star, Search, Lock, Download } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Badge } from '@/components/ui/badge';

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

const testimonials = [
  {
    quote: "Kree8's SwiftForm API saved us weeks of development time. It's robust, easy to integrate, and the documentation is top-notch.",
    name: "Jane Doe",
    company: "Innovate Inc.",
  },
  {
    quote: "The Kree8 CMS is a game-changer for our content team. It's so intuitive and flexible, allowing us to manage our site with ease.",
    name: "John Smith",
    company: "DataCorp",
  },
  {
    quote: "I've never received such dedicated support from a software vendor. The Kree8 team is responsive and truly cares about their customers' success.",
    name: "Emily White",
    company: "Creative Solutions",
  },
];

const advantages = [
    {
      icon: <Award className="size-10 text-primary mb-4" />,
      title: 'Quality Code',
      description: 'Clean, documented, and performant code that you can trust and build upon.',
    },
    {
      icon: <LifeBuoy className="size-10 text-primary mb-4" />,
      title: 'Expert Support',
      description: 'Dedicated and friendly support to help you with integration and customization.',
    },
    {
      icon: <Puzzle className="size-10 text-primary mb-4" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate our solutions into your new or existing projects.',
    },
    {
      icon: <RefreshCw className="size-10 text-primary mb-4" />,
      title: 'Continuous Updates',
      description: 'We constantly improve our products with new features and security patches.',
    },
];

const processSteps = [
    {
        icon: <Search className="size-10 text-accent" />,
        title: "1. Browse & Select",
        description: "Explore our curated collection and find the perfect solution for your project.",
    },
    {
        icon: <Lock className="size-10 text-accent" />,
        title: "2. Secure Purchase",
        description: "Complete your purchase through our fast and secure checkout process.",
    },
    {
        icon: <Download className="size-10 text-accent" />,
        title: "3. Download & Deploy",
        description: "Get instant access to your files and integrate them into your workflow in minutes.",
    },
];

const TechIcon = ({ name }: { name: string }) => (
    <div className="flex items-center justify-center gap-2 rounded-lg bg-card p-4 border border-border transition-transform hover:-translate-y-1">
        <span className="font-semibold text-muted-foreground">{name}</span>
    </div>
);


export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="w-full py-20 md:py-32 lg:py-40 bg-card/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer">
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
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
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
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
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

      <section id="featured-product" className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-slow-glow"></div>
                <Image
                    src="https://placehold.co/600x400.png"
                    data-ai-hint="cms dashboard"
                    width={600}
                    height={400}
                    alt="Featured Product: Kree8 CMS"
                    className="relative w-full rounded-xl shadow-2xl"
                />
            </div>
            <div className="space-y-4">
              <Badge variant="secondary">Product Spotlight</Badge>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer">
                Kree8 CMS: The Developer-First Headless CMS
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Experience content management like never before. Kree8 CMS is a Git-based, developer-focused headless CMS that combines the simplicity of Markdown with the power of a modern API. It's flexible, fast, and built to scale with your projects.
              </p>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="why-us" className="w-full py-12 md:py-24 lg:py-32 bg-transparent bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)),transparent_60%)]">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">The Kree8 Advantage</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We're more than just code. We're a partner in your success.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {advantages.map((advantage) => (
                    <Card key={advantage.title} className="flex flex-col text-center items-center p-8 transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300 bg-card/50">
                        {advantage.icon}
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-xl">{advantage.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <p className="text-base text-muted-foreground">{advantage.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      <section id="portfolio" className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Showcase</div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Featured Implementations</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Check out how our products have been used to create amazing projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary">
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

      <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Developers</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Our customers love the power and simplicity of Kree8 products.
                </p>
            </div>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-4xl mx-auto"
            >
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1 h-full">
                                <Card className="flex flex-col justify-between h-full p-6 bg-card/50">
                                    <CardContent className="p-0">
                                        <div className="flex mb-4">
                                            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-primary" />)}
                                        </div>
                                        <p className="text-muted-foreground">"{testimonial.quote}"</p>
                                    </CardContent>
                                    <div className="mt-4">
                                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
            </Carousel>
        </div>
      </section>

      <section id="tech-stack" className="w-full py-12 md:py-24 lg:py-32 bg-card/50 bg-[radial-gradient(ellipse_at_top,hsl(var(--secondary)),transparent_70%)]">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Built With Modern Technologies</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We use the best tools to build robust and scalable solutions for you.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            <TechIcon name="Next.js" />
            <TechIcon name="React" />
            <TechIcon name="TypeScript" />
            <TechIcon name="Node.js" />
            <TechIcon name="Tailwind CSS" />
            <TechIcon name="PostgreSQL" />
          </div>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-transparent">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">Get Started in Minutes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A simple, straightforward process to get you up and running.
            </p>
          </div>
          <div className="relative grid gap-10 md:grid-cols-3">
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block"></div>
             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent hidden md:block animate-pulse -translate-y-1/2"></div>
             {processSteps.map((step, index) => (
                <div key={index} className="relative flex flex-col items-center text-center space-y-4">
                    <div className="flex items-center justify-center size-20 rounded-full bg-card border-2 border-accent mb-4 z-10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-110">
                        {step.icon}
                    </div>
                    <h3 className="font-headline text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                </div>
             ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-card/50">
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
