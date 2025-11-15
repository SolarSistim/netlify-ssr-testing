import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../services/meta';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    // Subscribe to the metadata observable
    // Angular SSR will wait for this HTTP call to complete before rendering
    this.metaService.updateMetaTags('about').subscribe();
  }
}
