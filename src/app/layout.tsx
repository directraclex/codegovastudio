import type { Metadata } from 'next';
import { Lato, Syne } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-syne',
});


export const metadata: Metadata = {
  title: 'Kree8 Reimagined - Scripts & CMS Solutions',
  description: 'High-quality scripts and CMS solutions for the modern web.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background font-body antialiased', lato.variable, syne.variable)}>
        <div className="relative flex min-h-dvh flex-col bg-background bg-[linear-gradient(-45deg,hsl(var(--background)),hsl(var(--card)),hsl(var(--background)),hsl(var(--secondary)))] bg-[size:400%_400%] animate-gradient-bg">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
