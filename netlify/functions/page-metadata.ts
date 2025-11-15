import type { Context } from "@netlify/functions";

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
}

interface MetadataConfig {
  [key: string]: PageMetadata;
}

const metadata: MetadataConfig = {
  products: {
    title: 'Products - Netlify SSR Testing',
    description: 'Explore our comprehensive range of products designed to meet your needs. Server-side rendered for optimal SEO performance.',
    keywords: 'products, catalog, SSR, server-side rendering, Angular, Netlify'
  },
  services: {
    title: 'Services - Netlify SSR Testing',
    description: 'Discover our professional services tailored to deliver exceptional results. Fully server-side rendered for search engine optimization.',
    keywords: 'services, professional services, SSR, Angular services, Netlify deployment'
  },
  about: {
    title: 'About Us - Netlify SSR Testing',
    description: 'Learn more about our mission and values. This page demonstrates Angular SSR capabilities on Netlify platform.',
    keywords: 'about, company info, SSR testing, Angular SSR, Netlify platform'
  }
};

export default async (req: Request, context: Context) => {
  // Get the page parameter from the query string
  const url = new URL(req.url);
  const page = url.searchParams.get('page');

  // If no page specified or page not found, return error
  if (!page || !metadata[page]) {
    return new Response(JSON.stringify({ error: 'Page not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  // Return the metadata for the requested page
  return new Response(JSON.stringify(metadata[page]), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
