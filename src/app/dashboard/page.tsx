import { ArrowRight, CalendarClock, CheckCircle2, Clock3, MessageSquareText } from "lucide-react";
import Link from "next/link";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody } from "@/components/ui/Card";
import { PageHero, PageSection } from "@/components/ui/PageSection";

const tasks = [
  { title: "Review revised SOP draft", owner: "Priya Sharma", status: "In review" },
  { title: "Upload bank statements for visa prep", owner: "Student", status: "Pending" },
  { title: "Finalize university shortlist", owner: "Platform team", status: "Scheduled" },
];

export default function DashboardPage() {
  return (
    <MarketingLayout>
      <PageHero
        eyebrow="Student dashboard"
        title="A much stronger product shell for the main application experience."
        description="This page introduces a credible dashboard structure with task tracking, mentor activity, and upcoming milestones."
        actions={
          <>
            <Link href="/services">
              <Button>Explore services</Button>
            </Link>
            <Link href="/mentors">
              <Button variant="outline">Find mentors</Button>
            </Link>
          </>
        }
      />

      <PageSection className="bg-slate-50/70">
        <div className="container-shell grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: "Upcoming deadlines", value: "4", icon: CalendarClock },
                { label: "Open mentor threads", value: "2", icon: MessageSquareText },
                { label: "Completed steps", value: "12", icon: CheckCircle2 },
              ].map((item) => (
                <Card key={item.label} hover={false}>
                  <CardBody>
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-primary">
                      <item.icon size={20} />
                    </div>
                    <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                    <p className="mt-1 text-sm text-muted">{item.label}</p>
                  </CardBody>
                </Card>
              ))}
            </div>

            <Card hover={false}>
              <CardBody>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="eyebrow">Current plan</p>
                    <h2 className="mt-2 text-2xl font-semibold text-foreground">Fall 2026 MBA admissions</h2>
                  </div>
                  <Badge variant="success">On track</Badge>
                </div>
                <div className="mt-6 space-y-3">
                  {tasks.map((task) => (
                    <div key={task.title} className="flex flex-col gap-3 rounded-2xl border border-border bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium text-foreground">{task.title}</p>
                        <p className="mt-1 text-sm text-muted">{task.owner}</p>
                      </div>
                      <Badge>{task.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="space-y-6">
            <Card hover={false}>
              <CardBody>
                <p className="eyebrow">Next session</p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">SOP review with Priya Sharma</h2>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted">
                  <Clock3 size={16} />
                  <span>Thursday, 5:30 PM IST</span>
                </div>
                <Button className="mt-6 w-full">Join preparation room</Button>
              </CardBody>
            </Card>

            <Card hover={false}>
              <CardBody>
                <p className="eyebrow">Recommended next action</p>
                <h2 className="mt-2 text-xl font-semibold text-foreground">Book visa documentation support</h2>
                <p className="mt-3 text-sm leading-6 text-muted">
                  Your shortlist is almost done, so the product can now guide you into the next logical service purchase.
                </p>
                <Link href="/services/complete-visa-filing-service" className="mt-6 inline-flex">
                  <Button variant="outline">
                    View service
                    <ArrowRight size={16} />
                  </Button>
                </Link>
              </CardBody>
            </Card>
          </div>
        </div>
      </PageSection>
    </MarketingLayout>
  );
}
