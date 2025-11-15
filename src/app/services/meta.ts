import { Injectable, inject } from '@angular/core';
import { Title, Meta as NgMeta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

interface PageMetadata {
  title: string;
  description: string;
  keywords: string;
}

@Injectable({
  providedIn: 'root',
})
export class MetaService {
  private titleService = inject(Title);
  private metaService = inject(NgMeta);
  private http = inject(HttpClient);

  updateMetaTags(page: string): Observable<PageMetadata> {
    // Fetch metadata from Netlify Function
    return this.http.get<PageMetadata>(`/.netlify/functions/page-metadata?page=${page}`).pipe(
      tap((pageData) => {
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
      })
    );
  }
}
