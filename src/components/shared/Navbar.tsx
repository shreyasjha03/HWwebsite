"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const topLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "User Reviews", href: "/blog" },
];

const navLinks = [
  { label: "Study Abroad", href: "/services?category=Study%20Abroad" },
  { label: "Work Abroad", href: "/services?category=Career%20Guidance" },
  { label: "Language Preparation", href: "/services?category=Test%20Prep" },
  { label: "Education Financing", href: "/services?category=Scholarships" },
  { label: "Visa & Immigration", href: "/services?category=Visa%20%26%20Docs" },
  { label: "Post Landing Support", href: "/services?category=Post%20Landing" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border/60 shadow-sm">
      <div className="hidden xl:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-6">
              {topLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-3 w-1/2 rounded-full border border-border bg-slate-50 px-4 py-2">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="search"
                placeholder="Search"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
            <div className="flex items-center gap-6">
              <Link href="/mentors" className="hover:text-foreground transition-colors">
                Ask a Mentor
              </Link>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Sign In
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-white shadow-md shadow-primary/20 hover:bg-primary-dark transition-colors"
              >
                Get University Shortlist
              </Link>
            </div>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/Logo HW 1.png"
                alt="HumbleWalking"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              HumbleWalking
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-2 overflow-x-auto py-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all " +
                  (pathname === link.href
                    ? "bg-primary text-white"
                    : "text-foreground/70 hover:text-foreground hover:bg-slate-100")
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/mentors"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Ask a Mentor
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="bg-primary text-white text-sm font-medium px-5 py-2 rounded-xl hover:bg-primary-dark transition-colors shadow-md shadow-primary/20"
            >
              Get University Shortlist
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border bg-white"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-slate-100 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <Link
                  href="/mentors"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-slate-100 transition-colors"
                >
                  Ask a Mentor
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-slate-100 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-white text-center hover:bg-primary-dark transition-colors"
                >
                  Get University Shortlist
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
