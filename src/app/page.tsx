import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Code, Palette, Rocket, ArrowRight, Award, LifeBuoy, Puzzle, RefreshCw, Star, Quote, MessageCircleQuestion, Sparkles, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { HeroTitle } from '@/components/hero-title';

const SectionWrapper = ({ id, children, className }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={cn("w-full py-20 md:py-28 lg:py-32", className)}>
    <div className="container relative px-4 md:px-6">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16", className)}>
        {children}
    </div>
);


export default function Home() {
  const services = [
    {
      icon: <Code className="size-8 text-primary" />,
      title: 'Powerful Scripts',
      description: 'High-performance, secure, and easy-to-integrate scripts that supercharge your applications and save you valuable development time.',
    },
    {
      icon: <Palette className="size-8 text-primary" />,
      title: 'Headless CMS',
      description: 'A developer-first, Git-based headless CMS that offers unparalleled flexibility and scalability for your content-driven projects.',
    },
    {
      icon: <Rocket className="size-8 text-primary" />,
      title: 'Full-Stack Solutions',
      description: 'Complete, ready-to-deploy web solutions, from authentication kits to e-commerce platforms, built for modern technology stacks.',
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

  const testimonials = [
    {
      quote: "CodeGova's SwiftForm API saved us weeks of development time. It's robust, easy to integrate, and the documentation is top-notch.",
      name: "Jane Doe",
      company: "Innovate Inc.",
    },
    {
      quote: "The CodeGova CMS is a game-changer for our content team. It's so intuitive and flexible, allowing us to manage our site with ease.",
      name: "John Smith",
      company: "DataCorp",
    },
    {
      quote: "I've never received such dedicated support from a software vendor. The CodeGova team is responsive and truly cares about their customers' success.",
      name: "Emily White",
      company: "Creative Solutions",
    },
    {
      quote: "AuthKit was a breeze to set up. It handled all the complexities of user authentication securely and efficiently. Highly recommended!",
      name: "Michael Brown",
      company: "SecureSoft",
    },
  ];
  
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

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-40 lg:py-56 relative overflow-hidden">
        <div className="container px-4 md:px-6 text-center">
            <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[length:2rem_2rem] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000,transparent_100%)]"></div>
            <Badge variant="secondary" className="mb-4 text-accent border-accent/20">
              <Sparkles className="mr-2 size-4" />
              Next-Gen Scripts & Solutions
            </Badge>
            <HeroTitle />
            <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
              High-quality scripts and CMS solutions designed for modern developers. Stop reinventing the wheel and start building what matters.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <SectionWrapper className="bg-card/50">
        <SectionTitle>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Build</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl">
            We craft robust digital tools and solutions that empower developers and businesses. Our products are built with precision, designed for scalability, and backed by expert support to ensure you succeed.
          </p>
        </SectionTitle>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="group relative overflow-hidden border-white/10 bg-gradient-to-b from-card to-background p-6 text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-2">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="font-headline text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)_/_0.15),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </Card>
          ))}
        </div>
      </SectionWrapper>
      
      {/* Advantages Section */}
      <SectionWrapper>
        <SectionTitle>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The CodeGova Advantage</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">We're more than just code. We're a partner in your success.</p>
        </SectionTitle>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage) => (
               <Card key={advantage.title} className="bg-card/50 p-6 flex flex-col items-center text-center">
                  {advantage.icon}
                  <h3 className="font-headline text-xl font-bold">{advantage.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm">{advantage.description}</p>
                </Card>
            ))}
        </div>
      </SectionWrapper>

      {/* Featured Product Section */}
      <SectionWrapper id="featured-product" className="bg-card/50 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <Badge variant="outline" className="border-accent text-accent">Product Spotlight</Badge>
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                CodeGova CMS: The Developer-First Headless CMS
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Experience content management like never before. CodeGova CMS is a Git-based, developer-focused headless CMS that combines the simplicity of Markdown with the power of a modern API. It's flexible, fast, and built to scale with your projects.
              </p>
              <Button asChild size="lg" variant="outline" className="border-2 hover:border-primary hover:text-primary transition-all group">
                <Link href="/products/codegova-cms">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative group p-4">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>
                <Image
                    src="https://placehold.co/600x400.png"
                    data-ai-hint="cms dashboard"
                    width={600}
                    height={400}
                    alt="Featured Product: CodeGova CMS"
                    className="relative w-full rounded-xl shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
            </div>
          </div>
      </SectionWrapper>
      
      {/* Testimonials Section */}
      <SectionWrapper
        className="bg-transparent"
      >
        <SectionTitle>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Developers</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">Our customers love the power and simplicity of CodeGova products.</p>
        </SectionTitle>
        <Carousel
            opts={{ align: "start", loop: true, }}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent>
                {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                        <div className="p-4 h-full">
                            <Card className="flex flex-col justify-between h-full p-6 md:p-8 bg-card/50 border-white/10">
                                <div>
                                    <Quote className="size-8 text-primary/50 mb-4" />
                                    <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                                </div>
                                <div className="flex items-center gap-4">
                                  <div className="flex">
                                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />)}
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
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </SectionWrapper>
      
      {/* FAQ Section */}
      <SectionWrapper id="faq" className="bg-card/50">
        <SectionTitle>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-3">
            <MessageCircleQuestion className="size-10 text-primary" />
            Frequently Asked Questions
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">Have questions? We have answers. Here are some of the most common ones.</p>
        </SectionTitle>
        <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index+1}`} className="border-white/10">
                        <AccordionTrigger className="py-6 text-lg text-left hover:text-primary">{faq.question}</AccordionTrigger>
                        <AccordionContent className="pb-6 text-base text-muted-foreground">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper>
           <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-card/50 border border-primary/20 text-center">
              <div className="absolute inset-0 -z-10 animate-aurora bg-[radial-gradient(ellipse_at_50%_50%,hsl(var(--primary)_/_0.25)_0%,transparent_50%)]"></div>
              <h2 className="font-headline text-4xl font-bold tracking-tighter md:text-5xl/tight">
                Ready to build something amazing?
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Explore our products and find the perfect solution for your next project.
              </p>
              <div className="mt-8 flex justify-center">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group">
                    <Link href="/products">Browse All Products <MoveRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></Link>
                  </Button>
              </div>
           </div>
      </SectionWrapper>
    </div>
  );
}
