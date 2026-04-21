export default defineEventHandler(async () => {
  const { mediumUsername } = useRuntimeConfig();
  const username = mediumUsername || "@buokem";
  const feedUrl = `https://medium.com/feed/${username}`;

  try {
    const response = await $fetch<string>(feedUrl, {
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    const posts = parseRssFeed(response);
    return { posts };
  } catch (error: any) {
    console.error("Failed to fetch Medium feed:", error.message);
    throw createError({
      statusCode: 502,
      statusMessage: "Failed to fetch blog posts from Medium",
    });
  }
});

interface BlogPost {
  title: string;
  link: string;
  date: string;
  description: string;
  tags: string[];
  thumbnail: string;
}

function parseRssFeed(xml: string): BlogPost[] {
  const posts: BlogPost[] = [];

  // Extract all <item> blocks
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let itemMatch;

  while ((itemMatch = itemRegex.exec(xml)) !== null) {
    const itemXml = itemMatch[1];

    const title = extractTag(itemXml, "title");
    const link = extractTag(itemXml, "link");
    const pubDate = extractTag(itemXml, "pubDate");
    const contentEncoded =
      extractCData(itemXml, "content:encoded") ||
      extractTag(itemXml, "content:encoded");

    // Extract categories (tags)
    const tags: string[] = [];
    const catRegex = /<category><!\[CDATA\[(.*?)\]\]><\/category>/g;
    let catMatch;
    while ((catMatch = catRegex.exec(itemXml)) !== null) {
      tags.push(catMatch[1]);
    }
    // Fallback for non-CDATA categories
    if (tags.length === 0) {
      const catRegex2 = /<category>(.*?)<\/category>/g;
      let catMatch2;
      while ((catMatch2 = catRegex2.exec(itemXml)) !== null) {
        tags.push(catMatch2[1]);
      }
    }

    // Extract first image from content as thumbnail
    let thumbnail = "";
    if (contentEncoded) {
      const imgMatch = contentEncoded.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) {
        thumbnail = imgMatch[1];
      }
    }

    // Extract a plain-text description from content
    let description = "";
    if (contentEncoded) {
      // Get text from first <p> that has actual content
      const pRegex = /<p>([\s\S]*?)<\/p>/g;
      let pMatch;
      while ((pMatch = pRegex.exec(contentEncoded)) !== null) {
        const text = pMatch[1]
          .replace(/<[^>]+>/g, "") // Strip HTML tags
          .replace(/&nbsp;/g, " ")
          .replace(/&amp;/g, "&")
          .replace(/&lt;/g, "<")
          .replace(/&gt;/g, ">")
          .replace(/&#39;/g, "'")
          .replace(/&quot;/g, '"')
          .trim();
        if (text.length > 30) {
          description = text;
          break;
        }
      }
    }

    // Format date
    const formattedDate = pubDate
      ? new Date(pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      : "";

    if (title && link) {
      posts.push({
        title: decodeEntities(title),
        link,
        date: formattedDate,
        description:
          description.length > 200
            ? description.substring(0, 200) + "..."
            : description,
        tags: tags.slice(0, 3), // Limit to 3 tags
        thumbnail,
      });
    }
  }

  return posts;
}

function extractTag(xml: string, tag: string): string {
  // Try CDATA first
  const cdataRegex = new RegExp(
    `<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`
  );
  const cdataMatch = xml.match(cdataRegex);
  if (cdataMatch) return cdataMatch[1].trim();

  // Then try regular tag content
  const regex = new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`);
  const match = xml.match(regex);
  return match ? match[1].trim() : "";
}

function extractCData(xml: string, tag: string): string {
  const regex = new RegExp(
    `<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`
  );
  const match = xml.match(regex);
  return match ? match[1] : "";
}

function decodeEntities(text: string): string {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ");
}
