// Sitemap generation utilities

export interface SitemapUrl {
  loc: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

export interface SitemapConfig {
  baseUrl: string;
  urls: SitemapUrl[];
}

// Generate XML sitemap
export const generateSitemap = (config: SitemapConfig): string => {
  const { baseUrl, urls } = config;

  const urlElements = urls
    .map(url => {
      const { loc, lastmod, changefreq, priority } = url;
      const fullUrl = loc.startsWith("http") ? loc : `${baseUrl}${loc}`;

      return `
  <url>
    <loc>${fullUrl}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}
    ${changefreq ? `<changefreq>${changefreq}</changefreq>` : ""}
    ${priority ? `<priority>${priority}</priority>` : ""}
  </url>`;
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
};

// Generate robots.txt content
export const generateRobotsTxt = (
  baseUrl: string,
  sitemapUrl?: string
): string => {
  return `User-agent: *
Allow: /

# Sitemap
${sitemapUrl ? `Sitemap: ${sitemapUrl}` : `Sitemap: ${baseUrl}/sitemap.xml`}

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /*.json$
Disallow: /*.xml$

# Allow important files
Allow: /sitemap.xml
Allow: /robots.txt
Allow: /favicon.ico
Allow: /manifest.json`;
};

// Default sitemap configuration for the website
export const getDefaultSitemapConfig = (): SitemapConfig => ({
  baseUrl: "https://kriwin-consultancy.com",
  urls: [
    {
      loc: "/",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: 1.0,
    },
    {
      loc: "/about",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      loc: "/services",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: 0.9,
    },
    {
      loc: "/services/audit-assurance",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: "/services/tax-advisory",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: "/services/financial-consulting",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: "/services/risk-management",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: 0.7,
    },
    {
      loc: "/contact",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: 0.6,
    },
    {
      loc: "/privacy-policy",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "yearly",
      priority: 0.3,
    },
    {
      loc: "/terms-of-service",
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "yearly",
      priority: 0.3,
    },
  ],
});

// Generate and download sitemap (for development)
export const downloadSitemap = (config?: SitemapConfig) => {
  const sitemapConfig = config || getDefaultSitemapConfig();
  const sitemapXml = generateSitemap(sitemapConfig);

  const blob = new Blob([sitemapXml], { type: "application/xml" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "sitemap.xml";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};

// Generate and download robots.txt (for development)
export const downloadRobotsTxt = (
  baseUrl = "https://kriwin-consultancy.com"
) => {
  const robotsTxt = generateRobotsTxt(baseUrl);

  const blob = new Blob([robotsTxt], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "robots.txt";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
};
