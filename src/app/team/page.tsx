import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team - Kree8 Reimagined',
    description: 'Meet the talented individuals behind Kree8. Our team is our greatest asset.',
};

const teamMembers = [
    {
        name: "Alex Johnson",
        role: "Founder & CEO",
        bio: "Visionary leader with a passion for innovation and a knack for turning great ideas into reality.",
        image: "https://placehold.co/400x400.png",
        hint: "professional portrait",
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "Samantha Chen",
        role: "Lead Designer",
        bio: "Creative mind behind our award-winning designs, focusing on user-centric and beautiful experiences.",
        image: "https://placehold.co/400x400.png",
        hint: "designer portrait",
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "David Lee",
        role: "Head of Engineering",
        bio: "Architect of our robust and scalable systems, ensuring technical excellence in every project.",
        image: "https://placehold.co/400x400.png",
        hint: "developer portrait",
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "Maria Rodriguez",
        role: "Project Manager",
        bio: "The organizational powerhouse who ensures projects are delivered on time and exceed expectations.",
        image: "https://placehold.co/400x400.png",
        hint: "manager portrait",
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
     {
        name: "Chris Evans",
        role: "Senior Frontend Developer",
        bio: "Expert in crafting pixel-perfect, interactive user interfaces with modern frameworks.",
        image: "https://placehold.co/400x400.png",
        hint: "tech professional",
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
    {
        name: "Jessica White",
        role: "AI Specialist",
        bio: "Driving innovation by integrating cutting-edge AI and machine learning solutions.",
        image: "https://placehold.co/400x400.png",
        hint: "AI expert",
        social: {
            linkedin: "#",
            twitter: "#",
        },
    },
];

export default function TeamPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Meet the Innovators
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We are a collective of designers, developers, and strategists passionate about building what's next.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member) => (
                    <Card key={member.name} className="text-center group overflow-hidden">
                        <div className="bg-muted aspect-square overflow-hidden">
                            <Image
                                src={member.image}
                                data-ai-hint={member.hint}
                                alt={`Portrait of ${member.name}`}
                                width={400}
                                height={400}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{member.name}</CardTitle>
                            <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{member.bio}</p>
                            <div className="flex justify-center space-x-4 mt-4">
                                <Link href={member.social.linkedin} aria-label={`${member.name}'s LinkedIn`}>
                                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                                </Link>
                                <Link href={member.social.twitter} aria-label={`${member.name}'s Twitter`}>
                                    <Twitter className="h-6 w-6 text-muted-foreground hover:text-accent transition-colors" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
