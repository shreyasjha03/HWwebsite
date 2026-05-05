"use client";

import { useState } from "react";
import { CheckCircle, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { Input, Textarea } from "@/components/ui/Input";
import { PageHero, PageSection } from "@/components/ui/PageSection";
import { Select } from "@/components/ui/Select";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <MarketingLayout>
        <PageSection>
          <div className="container-shell">
            <div className="mx-auto max-w-lg text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <CheckCircle size={32} />
              </div>
              <h1 className="text-3xl font-semibold text-foreground">Message received</h1>
              <p className="mt-3 text-base leading-7 text-muted">
                Thanks for reaching out. A member of the team will reply within one business day.
              </p>
              <Button className="mt-8" variant="outline" onClick={() => setSubmitted(false)}>
                Send another message
              </Button>
            </div>
          </div>
        </PageSection>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Contact"
        title="Talk to the team behind your planning workflow."
        description="The contact experience is now tighter, easier to scan, and structured more like a real product inquiry flow instead of a generic form dump."
      />

      <PageSection className="bg-slate-50/70">
        <div className="container-shell grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card hover={false}>
            <CardBody className="p-8 lg:p-10">
              <h2 className="text-2xl font-semibold text-foreground">Start a conversation</h2>
              <p className="mt-2 text-sm text-muted">Tell us what stage you are at and what kind of support you need.</p>
              <form
                className="mt-8 grid gap-5 sm:grid-cols-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <Input label="Full name" placeholder="John Doe" />
                <Input label="Email address" type="email" placeholder="john@example.com" />
                <Input label="Phone number" type="tel" placeholder="+91 98765 43210" />
                <Select label="Primary interest" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>University shortlisting</option>
                  <option>Test preparation</option>
                  <option>Visa support</option>
                  <option>Scholarships and loans</option>
                  <option>Mentor consultation</option>
                </Select>
                <Textarea
                  label="Message"
                  rows={6}
                  placeholder="Tell us about your goals, deadlines, and where you need help."
                  className="sm:col-span-2"
                />
                <Button className="sm:col-span-2" size="lg" type="submit">
                  <Send size={16} />
                  Send message
                </Button>
              </form>
            </CardBody>
          </Card>

          <div className="space-y-6">
            {[
              {
                icon: Mail,
                title: "Email",
                value: "support@humblewalking.com",
                description: "Best for planning questions and service guidance.",
              },
              {
                icon: Phone,
                title: "Phone",
                value: "+91 9876-543-210",
                description: "Available Monday through Friday, 10 AM to 6 PM IST.",
              },
              {
                icon: MapPin,
                title: "Location",
                value: "India",
                description: "Serving students globally with remote-first support.",
              },
            ].map((info) => (
              <Card key={info.title} hover={false}>
                <CardBody>
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                      <info.icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{info.title}</p>
                      <p className="mt-1 text-base font-semibold text-foreground">{info.value}</p>
                      <p className="mt-2 text-sm leading-6 text-muted">{info.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            ))}

            <Card hover={false}>
              <CardBody>
                <Badge variant="primary">Consultation</Badge>
                <div className="mt-4 flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Free 15-minute planning call</p>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      A better entry point for new students than the previous catch-all call to action.
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </PageSection>
    </MarketingLayout>
  );
}
