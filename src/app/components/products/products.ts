import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MetaService } from '../../services/meta';

@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    // Subscribe to the metadata observable
    // Angular SSR will wait for this HTTP call to complete before rendering
    this.metaService.updateMetaTags('products').subscribe();
  }
}
