import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export interface ArticleMeta {
  slug: string;
  titre: string;
  date: string;
  resume: string;
}

const DIR = path.join(process.cwd(), "content", "actualites");

export function getArticles(): ArticleMeta[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(DIR, f), "utf8"));
      return {
        slug: f.replace(/\.mdx$/, ""),
        titre: data.titre as string,
        date: data.date as string,
        resume: data.resume as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): { meta: ArticleMeta; contenu: string } | null {
  const file = path.join(DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    meta: {
      slug,
      titre: data.titre as string,
      date: data.date as string,
      resume: data.resume as string,
    },
    contenu: content,
  };
}
