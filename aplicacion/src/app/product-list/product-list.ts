import { Component } from '@angular/core';
import { Product } from './Product';
import { Cart } from '../cart';
import { ProductsData } from '../products-data';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products: Product[] = [];

  constructor(private cart: Cart,
    private productsDataService: ProductsData){
  }

  ngOnInit(){
    this.productsDataService.getAll().subscribe(products=> this.products = products);
  }

  addToCart(product: any): void{
    this.cart.addToCart(product);
    product.stock-=product.quantity;
    product.quantity=0;
  }


  maxReached(m: String){
    alert(m);
  }

}
