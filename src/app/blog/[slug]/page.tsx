import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { blogPosts } from "@/lib/data/blog";
import { Badge } from "@/components/ui/Badge";
import { PageSection } from "@/components/ui/PageSection";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <MarketingLayout>
      <PageSection className="bg-white">
        <article>
          <div className="container-shell max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to blog
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <Badge variant="primary">{post.category}</Badge>
              <span className="text-sm text-muted">
                {post.readTime} min read
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted mb-10 pb-10 border-b border-border">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
              <span>by {post.author}</span>
            </div>

            <div className="mb-12 flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-slate-100 lg:h-80">
              <span className="text-7xl">📚</span>
            </div>

            <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:font-semibold prose-headings:text-foreground prose-p:text-foreground/80 prose-p:leading-relaxed prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              {post.content.split("\n").map((line, index) => {
                if (line.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-foreground mt-12 mb-4"
                    >
                      {line.replace("## ", "")}
                    </h2>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li
                      key={index}
                      className="ml-4 text-foreground/80 leading-relaxed list-disc"
                    >
                      {line.replace("- ", "")}
                    </li>
                  );
                }
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <p
                      key={index}
                      className="font-semibold text-foreground mt-6 mb-2"
                    >
                      {line.replace(/\*\*/g, "")}
                    </p>
                  );
                }
                if (line.trim() === "") {
                  return <div key={index} className="h-4" />;
                }
                return (
                  <p key={index} className="text-foreground/80 leading-relaxed">
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </article>
      </PageSection>
    </MarketingLayout>
  );
}
