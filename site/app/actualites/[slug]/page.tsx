import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Container from "@/components/ui/Container";
import { getArticle, getArticles } from "@/lib/articles";

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return { title: article.meta.titre, description: article.meta.resume };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const autres = getArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="bg-black py-20 text-white md:py-28">
        <Container className="max-w-4xl">
          <p className="eyebrow text-accent">Insight / {article.meta.date}</p>
          <h1 className="mt-5 font-display text-4xl font-black leading-tight md:text-6xl">
            {article.meta.titre}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">{article.meta.resume}</p>
        </Container>
      </section>

      <article className="bg-white py-16 text-ink md:py-20">
        <Container className="max-w-3xl">
          <div className="prose-dh">
            <MDXRemote source={article.contenu} />
          </div>
          {autres.length > 0 && (
            <div className="mt-16 border-t border-line pt-8">
              <p className="eyebrow text-accent">A lire ensuite</p>
              <div className="mt-5 grid gap-px overflow-hidden border border-line bg-line">
                {autres.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/actualites/${a.slug}`}
                    className="flex items-center justify-between bg-white p-4 text-sm font-semibold transition-colors hover:bg-black hover:text-white"
                  >
                    <span>{a.titre}</span>
                    <span className="text-accent">-&gt;</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>
    </>
  );
}
