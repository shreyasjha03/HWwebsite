import { AnnouncementBar } from "@/components/shared/AnnouncementBar";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { blogPosts } from "@/lib/data/blog";
import { Badge } from "@/components/ui/Badge";
import { Card, CardBody } from "@/components/ui/Card";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Study Abroad Insights & Guides",
  description:
    "Expert articles, guides, and tips for students planning to study abroad.",
};

const categories = [
  "All",
  "Study Abroad",
  "Test Prep",
  "Visa & Docs",
  "Scholarships",
  "Career Guidance",
  "Post Landing",
];

export default function BlogPage() {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary-light/50 to-white py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge variant="primary" className="mb-4">
              Blog
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Insights & Guides
            </h1>
            <p className="text-lg text-muted max-w-2xl">
              Expert advice, step-by-step guides, and the latest updates on
              studying abroad.
            </p>
          </div>
        </section>

        <section className="py-8 lg:py-12 border-b border-border bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-xl text-sm font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href={`/blog/${featuredPost.slug}`} className="block mb-12">
              <Card hover={false}>
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 min-h-[200px] md:min-h-[300px] flex items-center justify-center">
                    <span className="text-6xl">📚</span>
                  </div>
                  <CardBody className="flex flex-col justify-center py-10 lg:py-14">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="primary">
                        {featuredPost.category}
                      </Badge>
                      <span className="text-xs text-muted">
                        {featuredPost.readTime} min read
                      </span>
                    </div>
                    <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-3">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-4">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>
                          {new Date(featuredPost.date).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </span>
                      </div>
                      <span>by {featuredPost.author}</span>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Link>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {otherPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.slug}`}>
                  <Card>
                    <CardBody>
                      <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl h-40 mb-4 flex items-center justify-center">
                        <span className="text-4xl">📝</span>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="primary">{post.category}</Badge>
                        <span className="text-xs text-muted">
                          {post.readTime} min read
                        </span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <div className="flex items-center gap-1 text-xs text-muted">
                          <Calendar size={12} />
                          <span>
                            {new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                        <span className="text-sm text-primary font-medium flex items-center gap-1">
                          Read more
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </CardBody>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
