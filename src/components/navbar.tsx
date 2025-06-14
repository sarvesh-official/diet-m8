import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4',
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-nobg.png"
            alt="Diet M8 Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-bold text-teal-primary">DIET M8</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            href="#features" 
            className="text-dark hover:text-teal-primary transition-colors"
          >
            Features
          </Link>
          <Link 
            href="#ai-demo" 
            className="text-dark hover:text-teal-primary transition-colors"
          >
            AI Demo
          </Link>
          <Link 
            href="#personalization" 
            className="text-dark hover:text-teal-primary transition-colors"
          >
            Personalization
          </Link>
          <Link 
            href="#testimonials" 
            className="text-dark hover:text-teal-primary transition-colors"
          >
            Testimonials
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Login
          </Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
