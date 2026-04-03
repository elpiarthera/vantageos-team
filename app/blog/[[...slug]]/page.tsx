import { blogSource } from "@/lib/source";
import { DocsBody, DocsTitle, DocsDescription } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { Metadata } from "next";
import { YouTubeEmbed } from "@/components/blog/youtube-embed";

// ─── Blog index page ─────────────────────────────────────────────────────────

const CATEGORY_LABELS: Record<string, string> = {
  "repo-analysis": "Repo Analysis",
  "video-analysis": "Video Analysis",
};

function BlogIndex() {
  const pages = blogSource.getPages();

  const sorted = [...pages].sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-[var(--color-fd-foreground)] mb-3">
          Blog
        </h1>
        <p className="text-lg text-[var(--color-fd-muted-foreground)] max-w-xl">
          Repo analyses, video breakdowns, and insights from our AI agent team.
          We research so you don&apos;t have to.
        </p>
      </div>

      {sorted.length === 0 ? (
        <p className="text-[var(--color-fd-muted-foreground)]">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div className="grid gap-6">
          {sorted.map((page) => {
            const category = page.data.category;
            const tags = page.data.tags;
            const date = page.data.date;

            return (
              <a
                key={page.url}
                href={page.url}
                className="block p-6 rounded-xl border border-[var(--color-fd-border)] bg-[var(--color-fd-card)] no-underline transition-colors hover:border-[var(--color-fd-primary)]"
              >
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  {category ? (
                    <span
                      className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-white"
                      style={{
                        backgroundColor:
                          category === "video-analysis"
                            ? "oklch(0.55 0.15 145)"
                            : "oklch(0.55 0.15 232)",
                      }}
                    >
                      {CATEGORY_LABELS[category] ?? category}
                    </span>
                  ) : null}
                  {date ? (
                    <time
                      dateTime={date}
                      className="text-sm text-[var(--color-fd-muted-foreground)]"
                    >
                      {new Date(date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  ) : null}
                </div>

                <h2 className="text-xl font-semibold text-[var(--color-fd-foreground)] mb-2 leading-snug">
                  {page.data.title}
                </h2>

                {page.data.description ? (
                  <p
                    className="text-[0.9375rem] text-[var(--color-fd-muted-foreground)] leading-relaxed"
                    style={{ marginBottom: tags?.length ? "1rem" : 0 }}
                  >
                    {page.data.description}
                  </p>
                ) : null}

                {tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-[var(--color-fd-muted)] text-[var(--color-fd-muted-foreground)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── Blog post page ───────────────────────────────────────────────────────────

function BlogPost({ slug }: { slug: string[] }) {
  const page = blogSource.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const date = page.data.date;
  const category = page.data.category;

  return (
    <article className="prose prose-invert max-w-none py-8">
      <DocsBody>
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {category ? (
              <span
                className="text-xs font-semibold px-2.5 py-0.5 rounded-full text-white"
                style={{
                  backgroundColor:
                    category === "video-analysis"
                      ? "oklch(0.55 0.15 145)"
                      : "oklch(0.55 0.15 232)",
                }}
              >
                {category === "video-analysis" ? "Video Analysis" : "Repo Analysis"}
              </span>
            ) : null}
            {date ? (
              <time
                dateTime={date}
                className="text-sm text-[var(--color-fd-muted-foreground)]"
              >
                {new Date(date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            ) : null}
          </div>
          <DocsTitle>{page.data.title}</DocsTitle>
          {page.data.description ? (
            <DocsDescription>{page.data.description}</DocsDescription>
          ) : null}
        </div>
        <MDX components={{ ...defaultMdxComponents, YouTubeEmbed }} />
      </DocsBody>
    </article>
  );
}

// ─── Route handler ────────────────────────────────────────────────────────────

export default async function BlogPage(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await props.params;

  if (!slug || slug.length === 0) {
    return <BlogIndex />;
  }

  return <BlogPost slug={slug} />;
}

export async function generateStaticParams() {
  const params = blogSource.generateParams();
  // Add the index route
  return [{ slug: [] }, ...params];
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  if (!slug || slug.length === 0) {
    return {
      title: "Blog — VantageTeam",
      description:
        "Insights, repo analyses, and video breakdowns from the VantageTeam AI agent team.",
    };
  }

  const page = blogSource.getPage(slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
