import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

const footerLinks = {
  platform: [
    { label: "Services", href: "/services" },
    { label: "Mentors", href: "/mentors" },
    { label: "Pricing", href: "/pricing" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Become a Mentor", href: "/signup" },
    { label: "Resources", href: "/blog" },
  ],
  support: [
    { label: "Student Help", href: "/contact" },
    { label: "Consultation Booking", href: "/signup" },
    { label: "Sign In", href: "/login" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="container-shell py-16">
        <div className="surface-muted mb-12 grid gap-8 p-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:p-10">
          <div className="space-y-3">
            <p className="eyebrow">Start with clarity</p>
            <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Build your study abroad plan with one structured platform.
            </h3>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base">
              Compare services, talk to experienced mentors, and keep every next step in one place.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/signup">
              <Button>
                Create account
                <ArrowRight size={16} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline">Talk to our team</Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-10 xl:grid-cols-[1.7fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-border bg-white">
                <Image
                  src="/Logo HW 1.png"
                  alt="HumbleWalking"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display text-xl font-semibold text-foreground">
                HumbleWalking
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-6 text-muted">
              A production-grade guidance layer for students planning university admissions, test prep, visas, and relocation.
            </p>
            <div className="space-y-3 text-sm text-muted">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@humblewalking.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9876-543-210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Platform
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold text-foreground">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} HumbleWalking. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <Link href="/contact" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
