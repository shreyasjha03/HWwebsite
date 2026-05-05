import { blogPosts } from "@/lib/data/blog";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageSection, SectionHeading } from "@/components/ui/PageSection";

export function BlogPreviewSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <PageSection className="bg-slate-50/70">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Resources"
          title="Editorial content that supports product decisions, not just SEO placeholders."
          description="The content layer is cleaner and easier to scan, with stronger hierarchy for featured and secondary reads."
          actions={
            <Link href="/blog">
              <Button variant="outline" size="sm">
                View all articles
                <ArrowRight size={14} />
              </Button>
            </Link>
          }
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card>
                <CardBody>
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="primary">{post.category}</Badge>
                    <span className="text-xs text-muted">{post.readTime} min read</span>
                  </div>

                  <h3 className="mb-2 line-clamp-2 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mb-4 line-clamp-2 text-sm leading-6 text-muted">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 border-t border-border pt-3 text-xs text-muted">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
