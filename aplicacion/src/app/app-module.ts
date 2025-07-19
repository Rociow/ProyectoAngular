import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './product-list/product-list';
import { ProductCart } from './product-cart/product-cart';
import { FormsModule } from '@angular/forms';
import { ProductAbout } from './product-about/product-about';
import { ProductProducts } from './product-products/product-products';
import { InputInteger } from './input-integer/input-integer';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    App,
    ProductList,
    ProductCart,
    ProductAbout,
    ProductProducts,
    InputInteger
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
