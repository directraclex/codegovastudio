"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/products", label: "Products" },
  { href: "/courses", label: "Courses" },
  { href: "/ai-copywriter", label: "AI Tools" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, isButton }: { href: string; label: string; isButton?: boolean }) => (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground",
        isButton ? "rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-primary" : "text-sm font-medium"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {isButton ? <span className="flex items-center gap-2">{label} <Sparkles className="size-4" /></span> : label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Logo className="h-7 w-auto text-primary" />
          <span className="font-extrabold font-headline hidden sm:inline-block text-lg tracking-tight">CodeGova</span>
        </Link>
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex flex-1">
          {navLinks.slice(0, 5).map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
             {navLinks.slice(5).map((link) => (
              <NavLink key={link.href} {...link} isButton={link.href === '/ai-copywriter'} />
            ))}
          </nav>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-card/95">
              <Link href="/" className="mr-6 flex items-center space-x-2 mb-8">
                <Logo className="h-7 w-auto text-primary" />
                <span className="font-bold font-headline text-lg">CodeGova</span>
              </Link>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
