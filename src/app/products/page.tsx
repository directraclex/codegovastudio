import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Products - Kree8 Reimagined',
    description: 'Explore our collection of powerful scripts and CMS solutions.',
};

const products = [
    {
        title: "SwiftForm API",
        description: "A backend script for processing form submissions with validation and email notifications.",
        image: "https://placehold.co/600x400.png",
        hint: "code api",
        tags: ["Node.js", "API", "Forms"],
        price: "$49",
    },
    {
        title: "Kree8 CMS",
        description: "A flexible, Git-based headless CMS for developers who love Markdown.",
        image: "https://placehold.co/600x400.png",
        hint: "content management",
        tags: ["CMS", "Headless", "React"],
        price: "$199",
    },
    {
        title: "AuthKit",
        description: "A complete user authentication solution with social logins and passwordless options.",
        image: "https://placehold.co/600x400.png",
        hint: "security shield",
        tags: ["Auth", "Security", "SaaS"],
        price: "$99",
    },
    {
        title: "MediaPress",
        description: "An image and video processing script for optimizing and transforming media on the fly.",
        image: "https://placehold.co/600x400.png",
        hint: "image gallery",
        tags: ["Media", "Optimization", "Images"],
        price: "$79",
    },
    {
        title: "DataSync",
        description: "A script to synchronize data between different databases and external APIs.",
        image: "https://placehold.co/600x400.png",
        hint: "database connection",
        tags: ["Data", "API", "ETL"],
        price: "$129",
    },
    {
        title: "NotifyFlow",
        description: "A robust notification service script for email, SMS, and push notifications.",
        image: "https://placehold.co/600x400.png",
        hint: "notification bell",
        tags: ["Notifications", "Service", "Node.js"],
        price: "$69",
    },
];

export default function ProductsPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Our Products
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Powerful, developer-focused scripts and solutions to accelerate your projects.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.title} className="group flex flex-col overflow-hidden transition-shadow hover:shadow-xl duration-300">
                        <div className="overflow-hidden">
                             <Image
                                src={product.image}
                                data-ai-hint={product.hint}
                                alt={product.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover aspect-video transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{product.title}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <div className="flex flex-wrap gap-2">
                                {product.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-primary">{product.price}</p>
                            <Button className="bg-accent hover:bg-accent/90">
                                Learn More
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
