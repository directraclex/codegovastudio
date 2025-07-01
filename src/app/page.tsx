import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, Palette, Rocket, ArrowRight, Award, LifeBuoy, Puzzle, RefreshCw, Star, Search, Lock, Download, Quote, MessageCircleQuestion } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

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

const portfolio = [
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'technology product',
    title: 'Project Innovate',
    description: 'A revolutionary platform for collaborative design.',
    tags: ['Next.js', 'AI', 'SaaS']
  },
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'data dashboard',
    title: 'DataDash',
    description: 'An analytics dashboard for a leading fintech company.',
    tags: ['React', 'Fintech']
  },
  {
    image: 'https://placehold.co/600x400.png',
    hint: 'mobile app',
    title: 'ConnectApp',
    description: 'A social networking app focused on professional growth.',
    tags: ['React Native', 'Mobile']
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
    {
    quote: "AuthKit was a breeze to set up. It handled all the complexities of user authentication securely and efficiently. Highly recommended!",
    name: "Michael Brown",
    company: "SecureSoft",
  },
];

const techStack = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Genkit", "Firebase"];

const faqs = [
    {
        question: "What kind of support do you offer?",
        answer: "We offer comprehensive support for all our products, including detailed documentation, email support, and dedicated support channels for enterprise clients. Our goal is to ensure you have a smooth integration and a great experience."
    },
    {
        question: "Can I customize the scripts and CMS solutions?",
        answer: "Absolutely. Our products are built with developers in mind. The code is clean, well-structured, and easy to extend. You have full control to customize the solutions to fit your specific project requirements."
    },
    {
        question: "Do you offer refunds?",
        answer: "Due to the digital nature of our products, we generally do not offer refunds once a product has been downloaded. However, we are committed to customer satisfaction. If you encounter any issues, please contact our support team, and we will do our best to resolve them."
    },
    {
        question: "Are there any recurring fees?",
        answer: "Most of our products are sold with a one-time payment for a lifetime license. Some specific solutions or premium support packages may have recurring fees, which will be clearly stated on the product page."
    }
];

const SectionWrapper = ({ id, title, subtitle, children, className }: { id?: string; title: React.ReactNode; subtitle: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={cn("w-full py-16 md:py-24 lg:py-32", className)}>
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <div className="space-y-2">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {subtitle}
          </p>
        </div>
      </div>
      {children}
    </div>
  </section>
);


export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 lg:py-40">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer">
                  Build Better, Faster, Smarter.
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  High-quality scripts and CMS solutions designed for modern developers. Stop reinventing the wheel and start building what matters.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                  <Link href="/products">Explore Products</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500 animate-slow-glow"></div>
              <Image
                src="https://placehold.co/600x500.png"
                data-ai-hint="abstract technology"
                width="600"
                height="500"
                alt="Hero"
                className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper
        title="What We Build"
        subtitle="From standalone scripts to full-featured CMS solutions, we have you covered."
        className="bg-card/30"
      >
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="relative group overflow-hidden rounded-xl p-px bg-gradient-to-b from-border to-transparent">
              <div className="rounded-xl bg-card h-full p-6 flex flex-col items-center text-center transition-all duration-300 group-hover:bg-background">
                <div className="rounded-full p-4 bg-secondary mb-4 border border-border group-hover:border-primary transition-colors duration-300">
                    {service.icon}
                </div>
                <h3 className="font-headline text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Advantages Section */}
      <SectionWrapper
        title="The Kree8 Advantage"
        subtitle="We're more than just code. We're a partner in your success."
        className="bg-transparent bg-[radial-gradient(ellipse_at_center,hsl(var(--secondary)_/_0.5),transparent_60%)]"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
              <div key={advantage.title} className="relative group overflow-hidden rounded-lg p-px bg-gradient-to-b from-white/10 to-transparent transition-all duration-300 hover:bg-white/20">
                <div className="rounded-lg bg-background p-6 h-full flex flex-col items-center text-center transition-all duration-300 group-hover:bg-card">
                  {advantage.icon}
                  <h3 className="font-headline text-xl font-bold">{advantage.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{advantage.description}</p>
                </div>
              </div>
            ))}
        </div>
      </SectionWrapper>

      {/* Featured Product Section */}
      <section id="featured-product" className="w-full py-12 md:py-24 lg:py-32 bg-card/30 overflow-hidden">
        <div className="container px-4 md:px-6 relative">
           <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_500px_at_50%_50%,hsl(var(--primary)_/_0.15),transparent)]"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-4">
              <Badge variant="secondary" className="border-accent text-accent font-bold">Product Spotlight</Badge>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-slate-200 via-slate-400 to-slate-200 bg-clip-text text-transparent bg-[size:200%_auto] animate-text-shimmer">
                Kree8 CMS: The Developer-First Headless CMS
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Experience content management like never before. Kree8 CMS is a Git-based, developer-focused headless CMS that combines the simplicity of Markdown with the power of a modern API. It's flexible, fast, and built to scale with your projects.
              </p>
              <Button asChild size="lg" variant="outline" className="border-2 hover:border-primary hover:text-primary transition-all">
                <Link href="/products/kree8-cms">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative group p-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 animate-slow-glow"></div>
                <div className="absolute inset-0 rounded-full animate-border-spin [animation-duration:10s] bg-[conic-gradient(from_0deg,transparent_0_60deg,hsl(var(--primary))_80deg,transparent_100deg,hsl(var(--accent))_150deg,transparent_180deg)]"></div>
                <Image
                    src="https://placehold.co/600x400.png"
                    data-ai-hint="cms dashboard"
                    width={600}
                    height={400}
                    alt="Featured Product: Kree8 CMS"
                    className="relative w-full rounded-xl shadow-2xl"
                />
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <SectionWrapper
        title="Get Started in Minutes"
        subtitle="A simple, straightforward process to get you up and running."
      >
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-accent to-primary animate-pulse -translate-y-1/2 hidden md:block" aria-hidden="true"></div>
          <div className="relative grid gap-10 md:grid-cols-3">
             {processSteps.map((step) => (
                <div key={step.title} className="relative flex flex-col items-center text-center space-y-4 p-6 rounded-xl transition-all duration-300 hover:bg-card/50">
                    <div className="flex items-center justify-center size-20 rounded-full bg-background border-2 border-accent mb-4 z-10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-110">
                        {step.icon}
                    </div>
                    <h3 className="font-headline text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
             ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Portfolio Section */}
      <SectionWrapper
        title="Featured Implementations"
        subtitle="Check out how our products have been used to create amazing projects."
        className="bg-card/30"
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => (
            <Card key={project.title} className="overflow-hidden group relative transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
              <div className="overflow-hidden">
                <Image
                  src={project.image}
                  data-ai-hint={project.hint}
                  width="600"
                  height="400"
                  alt={project.title}
                  className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="font-headline text-xl font-bold">{project.title}</h3>
                <p className="text-sm opacity-80">{project.description}</p>
                 <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-white/20 text-white border-none">{tag}</Badge>
                    ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild variant="link" className="text-primary text-lg">
            <Link href="/portfolio">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Tech Stack Section */}
      <SectionWrapper
        title="Built With Modern Technologies"
        subtitle="We use the best tools to build robust and scalable solutions for you."
      >
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {techStack.map(tech => (
            <div key={tech} className="relative group overflow-hidden rounded-lg p-px bg-gradient-to-b from-border to-transparent">
              <div className="flex items-center justify-center gap-2 rounded-lg bg-card px-4 py-2 transition-all duration-300 group-hover:bg-background">
                <span className="font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300">{tech}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Testimonials Section */}
      <SectionWrapper
        title="Trusted by Developers"
        subtitle="Our customers love the power and simplicity of Kree8 products."
        className="bg-card/30"
      >
        <Carousel
            opts={{ align: "start", loop: true, }}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-2 h-full">
                            <Card className="flex flex-col justify-between h-full p-6 bg-background border-border/50">
                                <div>
                                    <Quote className="size-8 text-primary/50 mb-4" />
                                    <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex">
                                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-primary fill-primary" />)}
                                  </div>
                                  <div>
                                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                  </div>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </SectionWrapper>
      
      {/* FAQ Section */}
      <SectionWrapper
        id="faq"
        title={
          <span className="flex items-center justify-center gap-3">
            <MessageCircleQuestion className="size-10 text-primary" />
            FAQs
          </span>
        }
        subtitle="Have questions? We have answers. Here are some of the most common ones."
      >
        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index+1}`}>
                        <AccordionTrigger className="text-lg text-left hover:text-primary">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24">
        <div className="container">
           <div className="relative rounded-2xl p-8 md:p-12 overflow-hidden bg-card/50">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 blur-3xl"></div>
            <div className="relative grid items-center justify-center gap-4 text-center">
                <div className="space-y-3">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Ready to build something amazing?
                    </h2>
                    <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Explore our products and find the perfect solution for your next project.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-sm">
                    <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20">
                    <Link href="/products">Browse All Products</Link>
                    </Button>
                </div>
            </div>
           </div>
        </div>
      </section>
    </div>
  );
}
