import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { Logo } from "./icons";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-background">
      <div className="container flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-2 md:text-left">
          <Link href="/">
            <Logo className="h-7 w-auto text-primary" />
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CodeGova. All rights reserved.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          <Link href="/services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/products" className="transition-colors hover:text-primary">Products</Link>
          <Link href="/courses" className="transition-colors hover:text-primary">Courses</Link>
          <Link href="/portfolio" className="transition-colors hover:text-primary">Portfolio</Link>
          <Link href="/contact" className="transition-colors hover:text-primary">Contact</Link>
        </div>
        <div className="flex items-center justify-center space-x-4">
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
