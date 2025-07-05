import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductProducts } from './product-products/product-products';
import { ProductAbout } from './product-about/product-about';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'products',
    pathMatch: 'full'
  },
  {
    path : 'products',
    component : ProductProducts
  },
  {
    path : 'about',
    component : ProductAbout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
