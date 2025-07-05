import { Component } from '@angular/core';
import { Product } from './Product';
import { Cart } from '../cart';


@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {

  constructor(private cart: Cart){
  }


  products: Product[] = [
    {
    name:"Roma",
    type:"Sweater",
    stock:6,
    price:40000,
    image:"assets/img/sweater.jpeg",
    clearance: false,
    quantity: 0,
    },
    {
    name:"Sicilia",
    type:"Sweater",
    stock:0,
    price:60000,
    image:"assets/img/sweater.jpeg",
    clearance: true,
    quantity: 0,
    },
    {
    name:"Milán",
    type:"Sweater",
    stock:9,
    price:30000,
    image:"assets/img/sweater.jpeg",
    clearance: false,
    quantity: 0,
    }
  ];

  addToCart(product: any): void{
    this.cart.addToCart(product);
    product.stock-=product.quantity;
    product.quantity=0;
  }


  maxReached(m: String){
    alert(m);
  }

}
