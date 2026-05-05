"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Mentors", href: "/mentors" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/92 backdrop-blur-xl">
      <nav className="container-shell">
        <div className="flex h-18 items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-border bg-white">
              <Image
                src="/Logo HW 1.png"
                alt="HumbleWalking"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <span className="block font-display text-lg font-semibold text-foreground">
                HumbleWalking
              </span>
              <span className="hidden text-xs text-muted md:block">
                Global education planning
              </span>
            </div>
          </Link>

          <div className="hidden items-center rounded-full border border-border bg-slate-50/80 p-1 lg:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "rounded-full px-4 py-2 text-sm font-medium " +
                    (active
                      ? "bg-white text-foreground shadow-sm"
                      : "text-muted hover:text-foreground")
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link href="/dashboard" className="text-sm font-medium text-muted hover:text-foreground">
              Dashboard
            </Link>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Sign in
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get started</Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-2xl border border-border p-2.5 text-muted hover:bg-slate-50 lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18 }}
            className="border-t border-border bg-white lg:hidden"
          >
            <div className="container-shell space-y-2 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-slate-50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="space-y-2 border-t border-border pt-4">
                <Link
                  href="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-slate-50"
                >
                  Dashboard
                </Link>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-medium text-foreground hover:bg-slate-50"
                >
                  Sign in
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)} className="block">
                  <Button className="w-full">Get started</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
