import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  services: [
    { label: "University Applications", href: "/services#study-abroad" },
    { label: "Test Preparation", href: "/services#test-prep" },
    { label: "Visa Services", href: "/services#visa" },
    { label: "Scholarships", href: "/services#scholarships" },
    { label: "Career Guidance", href: "/services#career" },
    { label: "Post Landing", href: "/services#post-landing" },
  ],
  destinations: [
    { label: "United States", href: "/services?country=usa" },
    { label: "United Kingdom", href: "/services?country=uk" },
    { label: "Canada", href: "/services?country=canada" },
    { label: "Australia", href: "/services?country=australia" },
    { label: "Germany", href: "/services?country=germany" },
    { label: "France", href: "/services?country=france" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/contact" },
    { label: "Terms of Service", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-display font-bold text-sm">E</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                HumbleWalking
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Your trusted partner for global education. From university selection
              to post-landing support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Mail size={16} />
                <span>hello@humblewalking.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <Phone size={16} />
                <span>+1 (555) 000-0000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin size={16} />
                <span>Global, Remote-first</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Destinations
            </h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Newsletter
            </h4>
            <p className="text-sm text-muted mb-4">
              Get weekly study abroad tips and scholarship alerts.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg border border-border bg-white text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} HumbleWalking. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-muted">
            <span>Made with</span>
            <GraduationCap size={16} />
            <span>for students worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
