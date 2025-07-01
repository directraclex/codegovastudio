"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const fullText = "Build Better, Faster, Smarter.";

export function HeroTitle() {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 80); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setIsTypingComplete(true), 200); // Short delay before showing cursor
    }
  }, [text]);

  return (
    <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl/none bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent min-h-[1em]">
      {text}
      {!isTypingComplete && <span className={cn("ml-1 inline-block h-[0.9em] w-2 -mb-2 bg-primary")}></span>}
       {isTypingComplete && <span className={cn("ml-1 inline-block h-[0.9em] w-2 -mb-2 bg-primary animate-pulse")}></span>}
    </h1>
  );
}
