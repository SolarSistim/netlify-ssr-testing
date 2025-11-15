import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products';
import { ServicesComponent } from './components/services/services';
import { AboutComponent } from './components/about/about';

export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' }
];
