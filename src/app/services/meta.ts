import { Injectable, inject } from '@angular/core';
import { Title, Meta as NgMeta } from '@angular/platform-browser';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
}

interface MetadataConfig {
  [key: string]: PageMetadata;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private titleService = inject(Title);
  private metaService = inject(NgMeta);

  private metadata: MetadataConfig = {
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

  updateMetaTags(page: string): void {
    const pageData = this.metadata[page];

    if (pageData) {
      // Set page title
      this.titleService.setTitle(pageData.title);

      // Update meta description
      this.metaService.updateTag({
        name: 'description',
        content: pageData.description
      });

      // Update meta keywords
      this.metaService.updateTag({
        name: 'keywords',
        content: pageData.keywords
      });

      // Update Open Graph tags for social media
      this.metaService.updateTag({
        property: 'og:title',
        content: pageData.title
      });

      this.metaService.updateTag({
        property: 'og:description',
        content: pageData.description
      });
    }
  }
}
