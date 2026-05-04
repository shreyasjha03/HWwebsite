"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Button } from "@/components/ui/Button";
import { Input, Textarea } from "@/components/ui/Input";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "support@humblewalking.com",
      description: "We reply within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9876-543-210",
      description: "Mon-Fri, 10am-6pm IST",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "India",
      description: "Serving students globally",
    },
  ];

  if (submitted) {
    return (
      <>
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1">
          <section className="py-20 lg:py-28">
            <div className="max-w-lg mx-auto px-4 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} />
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-4">
                Message sent!
              </h1>
              <p className="text-lg text-muted mb-8">
                Thank you for reaching out. Our team will get back to you within
                24 hours.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    interest: "",
                    message: "",
                  });
                }}
              >
                Send another message
              </Button>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge variant="primary" className="mb-4">
              Contact
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Get in touch
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              Have questions about our services? Want to book a free
              consultation? We'd love to hear from you.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <Card hover={false}>
                  <CardBody className="py-8 lg:py-10">
                    <h2 className="text-xl font-bold text-foreground mb-6">
                      Send us a message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Input
                          label="Full name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                        />
                        <Input
                          label="Email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <Input
                          label="Phone (optional)"
                          type="tel"
                          placeholder="+91 98765-43210"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                        <div className="w-full">
                          <label className="block text-sm font-medium text-foreground mb-1.5">
                            I'm interested in
                          </label>
                          <select
                            value={formData.interest}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                interest: e.target.value,
                              })
                            }
                            className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                          >
                            <option value="">Select a service</option>
                            <option value="study-abroad">
                              Study Abroad
                            </option>
                            <option value="test-prep">Test Prep</option>
                            <option value="visa">Visa & Docs</option>
                            <option value="scholarships">Scholarships</option>
                            <option value="career">Career Guidance</option>
                            <option value="post-landing">Post Landing</option>
                            <option value="mentor">
                              Mentor Consultation
                            </option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <Textarea
                        label="Message"
                        placeholder="Tell us about your goals and how we can help..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        required
                      />

                      <Button type="submit" variant="primary" size="lg">
                        <Send size={18} className="mr-2" />
                        Send message
                      </Button>
                    </form>
                  </CardBody>
                </Card>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <Card key={info.title} hover={false}>
                    <CardBody>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                          <info.icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium text-foreground mb-0.5">
                            {info.title}
                          </h3>
                          <p className="text-sm font-medium text-foreground mb-0.5">
                            {info.value}
                          </p>
                          <p className="text-xs text-muted">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                ))}

                <Card hover={false}>
                  <CardBody>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
                        <MessageSquare size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground mb-0.5">
                          Free Consultation
                        </h3>
                        <p className="text-sm text-muted">
                          Book a 15-minute call with our team to discuss your
                          study abroad goals.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
