import { blogPosts } from "@/lib/data/blog";
import { Card, CardBody } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogPreviewSection() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <Badge variant="primary" className="mb-4">
              Blog
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Latest insights & guides
            </h2>
          </div>
          <Link href="/blog">
            <Button variant="outline" size="sm">
              View all articles
              <ArrowRight size={14} className="ml-1" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {recentPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card>
                <CardBody>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="primary">{post.category}</Badge>
                    <span className="text-xs text-muted">{post.readTime} min read</span>
                  </div>

                  <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 text-xs text-muted pt-3 border-t border-border">
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
    </section>
  );
}
