import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticle, getOtherArticles } from "@/data/articles";
import { ArticleView } from "./article-view";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return {
      title: "Article Not Found | S. Kopstick & Associates",
      robots: { index: false, follow: false },
    };
  }
  const canonical = `/resources/${article.slug}`;
  const fullUrl = `https://skassociates.ca${canonical}`;
  return {
    title: `${article.title} | S. Kopstick & Associates`,
    description: article.excerpt,
    keywords: [article.category, "Spire", "Adagio", "S. Kopstick & Associates"],
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      locale: "en_CA",
      url: fullUrl,
      siteName: "S. Kopstick & Associates",
      publishedTime: article.publishedAt,
      authors: [article.author],
      images: [{ url: article.image, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    notFound();
  }
  const related = getOtherArticles(slug, 2);
  return <ArticleView article={article} related={related} />;
}
