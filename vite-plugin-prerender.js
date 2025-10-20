import { readFileSync } from 'fs';
import { resolve } from 'path';

/**
 * Simple Vite plugin to generate prerendered HTML files for blog posts
 * This ensures search engines can see unique meta tags for each blog post
 */
export default function prerenderPlugin() {
  return {
    name: 'vite-plugin-prerender',
    apply: 'build',
    enforce: 'post',
    
    async closeBundle() {
      // Import required modules dynamically
      const { readFileSync, writeFileSync, mkdirSync, existsSync } = await import('fs');
      const { resolve, dirname } = await import('path');
      
      try {
        // Read the blog posts data
        const newsArticlesPath = resolve(process.cwd(), 'src/data/newsArticles.json');
        const newsArticles = JSON.parse(readFileSync(newsArticlesPath, 'utf-8'));
        
        // Read the built index.html
        const distIndexPath = resolve(process.cwd(), 'dist/index.html');
        if (!existsSync(distIndexPath)) {
          console.log('❌ index.html not found in dist folder');
          return;
        }
        
        const baseHtml = readFileSync(distIndexPath, 'utf-8');
        
        // Create blogs/news directory
        const blogsDir = resolve(process.cwd(), 'dist/blogs/news');
        mkdirSync(blogsDir, { recursive: true });
        
        // Generate HTML for each blog post
        let successCount = 0;
        newsArticles.forEach(article => {
          try {
            const slug = article.slug;
            const title = `${article.title} | Nurse Assist International`;
            const description = article.excerpt || article.seoDescription || '';
            const keywords = article.seoKeywords || article.keywords?.join(', ') || '';
            const url = `https://nurseassistinternational.com/blogs/news/${slug}`;
            const image = article.image ? `https://nurseassistinternational.com${article.image}` : 'https://nurseassistinternational.com/og-image.png';
            
            // Replace meta tags in the HTML
            let blogHtml = baseHtml
              // Title
              .replace(
                /<title>.*?<\/title>/,
                `<title>${escapeHtml(title)}</title>`
              )
              // Meta description
              .replace(
                /<meta name="description" content=".*?"( \/)?>/,
                `<meta name="description" content="${escapeHtml(description)}">`
              )
              // Meta keywords (add if not exists)
              .replace(
                /<meta name="keywords" content=".*?"( \/)?>/,
                `<meta name="keywords" content="${escapeHtml(keywords)}">`
              );
            
            // If keywords meta doesn't exist, add it after description
            if (!blogHtml.includes('<meta name="keywords"')) {
              blogHtml = blogHtml.replace(
                /(<meta name="description" content=".*?">)/,
                `$1\n    <meta name="keywords" content="${escapeHtml(keywords)}">`
              );
            }
            
            // Update Open Graph tags
            blogHtml = blogHtml
              .replace(
                /<meta property="og:title" content=".*?"( \/)?>/,
                `<meta property="og:title" content="${escapeHtml(title)}">`
              )
              .replace(
                /<meta property="og:description" content=".*?"( \/)?>/,
                `<meta property="og:description" content="${escapeHtml(description)}">`
              )
              .replace(
                /<meta property="og:url" content=".*?"( \/)?>/,
                `<meta property="og:url" content="${escapeHtml(url)}">`
              )
              .replace(
                /<meta property="og:image" content=".*?"( \/)?>/g,
                `<meta property="og:image" content="${escapeHtml(image)}">`
              )
              .replace(
                /<meta property="og:type" content=".*?"( \/)?>/,
                `<meta property="og:type" content="article">`
              );
            
            // Update Twitter tags
            blogHtml = blogHtml
              .replace(
                /<meta name="twitter:title" content=".*?"( \/)?>/,
                `<meta name="twitter:title" content="${escapeHtml(title)}">`
              )
              .replace(
                /<meta name="twitter:description" content=".*?"( \/)?>/,
                `<meta name="twitter:description" content="${escapeHtml(description)}">`
              )
              .replace(
                /<meta name="twitter:url" content=".*?"( \/)?>/,
                `<meta name="twitter:url" content="${escapeHtml(url)}">`
              )
              .replace(
                /<meta name="twitter:image" content=".*?"( \/)?>/g,
                `<meta name="twitter:image" content="${escapeHtml(image)}">`
              );
            
            // Add JSON-LD structured data before </head>
            const jsonLd = {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": article.title,
              "description": description,
              "image": image,
              "author": {
                "@type": "Organization",
                "name": article.author || "NAI Editorial Team",
                "url": "https://nurseassistinternational.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Nurse Assist International",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://nurseassistinternational.com/Images/NAI-LOGO.webp"
                }
              },
              "datePublished": article.date,
              "dateModified": article.date,
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": url
              },
              "keywords": keywords,
              "articleSection": article.category || "Nursing Education"
            };
            
            blogHtml = blogHtml.replace(
              '</head>',
              `  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>\n  </head>`
            );
            
            // Write the blog post HTML file
            const fileName = resolve(blogsDir, `${slug}.html`);
            writeFileSync(fileName, blogHtml, 'utf-8');
            successCount++;
          } catch (err) {
            console.error(`❌ Error generating HTML for ${article.slug}:`, err.message);
          }
        });
        
        console.log(`\n✅ Prerendered ${successCount}/${newsArticles.length} blog post HTML files\n`);
      } catch (error) {
        console.error('❌ Prerender plugin error:', error);
      }
    }
  };
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
