import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background">
      <div className="container grid items-center gap-8 py-12 lg:grid-cols-3">
        <div className="flex flex-col items-center gap-4 lg:items-start">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-7 w-auto text-primary" />
            <span className="font-extrabold font-headline text-lg tracking-tight">CodeGova</span>
          </Link>
          <p className="text-center text-sm text-muted-foreground lg:text-left">
            &copy; {new Date().getFullYear()} CodeGova. All rights reserved. <br />
            Building the future of web development.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/products" className="transition-colors hover:text-primary">Products</Link>
          <Link href="/courses" className="transition-colors hover:text-primary">Courses</Link>
          <Link href="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </div>
        <div className="flex items-center justify-center space-x-4 lg:justify-end">
          <Link href="#" aria-label="Github">
            <Github className="size-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="size-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="size-5 text-muted-foreground transition-colors hover:text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
