import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Portfolio - Kree8 Reimagined',
    description: 'Discover the innovative projects and success stories from our work with leading brands.',
};

const projects = [
    {
        title: "Fintech Revolution",
        description: "A next-gen mobile banking app with AI-powered financial advice.",
        image: "https://placehold.co/600x400.png",
        hint: "finance app",
        tags: ["React Native", "AI", "Fintech"],
    },
    {
        title: "E-commerce Hub",
        description: "A scalable e-commerce platform for a global fashion brand.",
        image: "https://placehold.co/600x400.png",
        hint: "online store",
        tags: ["Next.js", "TypeScript", "Shopify"],
    },
    {
        title: "HealthTech Connect",
        description: "A HIPAA-compliant telehealth platform connecting patients and doctors.",
        image: "https://placehold.co/600x400.png",
        hint: "medical app",
        tags: ["Vue.js", "Cybersecurity", "Healthcare"],
    },
    {
        title: "SaaS Dashboard Pro",
        description: "An intuitive analytics dashboard for a B2B SaaS company.",
        image: "https://placehold.co/600x400.png",
        hint: "analytics dashboard",
        tags: ["React", "D3.js", "SaaS"],
    },
    {
        title: "Creative Collab",
        description: "A real-time collaborative whiteboard for creative teams.",
        image: "https://placehold.co/600x400.png",
        hint: "collaboration tool",
        tags: ["WebSockets", "Node.js", "UX Design"],
    },
    {
        title: "Logistics AI",
        description: "An AI-driven platform for optimizing supply chain logistics.",
        image: "https://placehold.co/600x400.png",
        hint: "logistics software",
        tags: ["Python", "TensorFlow", "AI"],
    },
];

export default function PortfolioPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Our Work
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We transform ambitious ideas into digital reality. Explore our case studies.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.title} className="group overflow-hidden transition-shadow hover:shadow-xl duration-300">
                        <div className="overflow-hidden">
                             <Image
                                src={project.image}
                                data-ai-hint={project.hint}
                                alt={project.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <CardContent className="p-6">
                            <h3 className="font-headline text-2xl font-bold">{project.title}</h3>
                            <p className="mt-2 text-muted-foreground">{project.description}</p>
                        </CardContent>
                        <CardFooter className="flex flex-wrap gap-2 px-6 pb-6">
                            {project.tags.map(tag => (
                                <Badge key={tag} variant="secondary">{tag}</Badge>
                            ))}
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
