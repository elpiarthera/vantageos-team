import type { MetadataRoute } from "next";

const BASE_URL = "https://vantageteam.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: Array<{
    enPath: string;
    frPath: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    {
      enPath: "",
      frPath: "/fr",
      priority: 1.0,
      changeFrequency: "weekly",
    },
    {
      enPath: "/build",
      frPath: "/fr/build",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      enPath: "/dev",
      frPath: "/fr/dev",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      enPath: "/teams",
      frPath: "/fr/teams",
      priority: 0.9,
      changeFrequency: "weekly",
    },
    {
      enPath: "/privacy",
      frPath: "/fr/privacy",
      priority: 0.3,
      changeFrequency: "monthly",
    },
    {
      enPath: "/legal",
      frPath: "/fr/legal",
      priority: 0.3,
      changeFrequency: "monthly",
    },
  ];

  return staticPages.flatMap(({ enPath, frPath, priority, changeFrequency }) => [
    {
      url: `${BASE_URL}${enPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
      alternates: {
        languages: {
          en: `${BASE_URL}${enPath}`,
          fr: `${BASE_URL}${frPath}`,
        },
      },
    },
    {
      url: `${BASE_URL}${frPath}`,
      lastModified: new Date(),
      changeFrequency,
      priority: priority - 0.1,
      alternates: {
        languages: {
          en: `${BASE_URL}${enPath}`,
          fr: `${BASE_URL}${frPath}`,
        },
      },
    },
  ]);
}
