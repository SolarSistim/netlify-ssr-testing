import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../services/meta';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class ServicesComponent implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    // Subscribe to the metadata observable
    // Angular SSR will wait for this HTTP call to complete before rendering
    this.metaService.updateMetaTags('services').subscribe();
  }
}
