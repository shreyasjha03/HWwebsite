import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  categories: [
    { label: "Study Abroad", href: "/services?category=Study%20Abroad" },
    { label: "Work Abroad", href: "/services?category=Career%20Guidance" },
    { label: "Language Preparation", href: "/services?category=Test%20Prep" },
    { label: "Education Financing", href: "/services?category=Scholarships" },
    { label: "Visa & Immigration", href: "/services?category=Visa%20%26%20Docs" },
    { label: "Post Landing Support", href: "/services?category=Post%20Landing" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/contact" },
    { label: "Become a Mentor", href: "/mentors" },
    { label: "Terms & Conditions", href: "/contact" },
    { label: "Cancellation Policy", href: "/contact" },
  ],
  support: [
    { label: "Help & Support", href: "/contact" },
    { label: "Community Guidelines", href: "/blog" },
    { label: "Pricing Guidelines", href: "/pricing" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 xl:grid-cols-[1.8fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4">
              <div className="relative h-10 w-10">
                <Image
                  src="/Logo HW 1.png"
                  alt="HumbleWalking"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl text-foreground">
                HumbleWalking
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Your edtech + study abroad partner for university shortlisting,
              mentorship, visas and settling in abroad.
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
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Categories
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
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
            <ul className="space-y-3 text-sm text-muted">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm text-muted">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-10 border-t border-border flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} HumbleWalking. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span>Made with</span>
            <GraduationCap size={16} />
            <span>for learners and mentors worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
