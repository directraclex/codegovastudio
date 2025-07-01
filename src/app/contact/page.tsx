import { Mail, Phone, MapPin } from "lucide-react";
import { ContactForm } from "./contact-form";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us - Kree8 Reimagined',
    description: 'Get in touch with Kree8. We are here to answer your questions and start your next project.',
};

const contactInfo = [
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email Us",
    content: "hello@kree8.agency",
    href: "mailto:hello@kree8.agency",
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: "Call Us",
    content: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Visit Us",
    content: "123 Innovation Drive, Tech City, 12345",
  },
];

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="text-center mb-16">
                <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Let's Create Together
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Have a project in mind or just want to say hello? We'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="bg-card p-8 sm:p-12 rounded-lg shadow-lg">
                    <h2 className="font-headline text-3xl font-bold mb-8">Get in Touch</h2>
                    <ContactForm />
                </div>

                <div className="space-y-8">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="flex items-start gap-6">
                            <div className="flex-shrink-0">{item.icon}</div>
                            <div>
                                <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                                {item.href ? (
                                    <a href={item.href} className="text-lg text-muted-foreground hover:text-primary transition-colors">
                                        {item.content}
                                    </a>
                                ) : (
                                    <p className="text-lg text-muted-foreground">{item.content}</p>
                                )}
                            </div>
                        </div>
                    ))}
                     <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mt-8">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225575382949!2d-122.4194154846813!3d37.7749295797585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1b7f4f6b%3A0x8f7c9e9b0b4a45a0!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1622557813291!5m2!1sen!2s"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            title="Office Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
