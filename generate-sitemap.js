const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

(async () => {
  const sitemap = new SitemapStream({ hostname: 'https://aunabags.com//' });

  const writeStream = createWriteStream(path.resolve(__dirname, 'public', 'sitemap.xml'));
  sitemap.pipe(writeStream);

  const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/Care', changefreq: 'monthly' },
    { url: '/Contact', changefreq: 'monthly' },
    { url: '/Faqs', changefreq: 'monthly' },
    { url: '/PrivacyPolicy', changefreq: 'yearly' },
    { url: '/Shipping', changefreq: 'yearly' },
    { url: '/TermsAndConditions', changefreq: 'yearly' },
    { url: '/ProductPage', changefreq: 'weekly' },
  ];

  routes.forEach(route => sitemap.write(route));

  sitemap.end();

  // ✅ FIX: streamToPromise expects the sitemap stream, not the write stream
  await streamToPromise(sitemap);

  console.log('✅ Sitemap created at /public/sitemap.xml');
})();
