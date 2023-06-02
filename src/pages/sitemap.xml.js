import published from "../tiddlers/published.json";

export async function get({ params, request }) {
  let isinya = "";
  for (let x of published) {
    isinya += `<url>
 <loc>https://jasaolahwebsite.github.io/${x.slug}</loc>
 <changefreq>monthly</changefreq>
 <priority>0.8</priority>
</url>`;
  }

  return {
    body: `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${isinya}
    </urlset>
    `,
  };
}
