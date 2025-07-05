import { Component } from '@angular/core';
import { Cart } from '../cart';
import { Product } from '../product-list/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-cart',
  standalone: false,
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.scss'
})
export class ProductCart {

  cartList$: Observable<Product[]> | undefined;
  constructor(private cart: Cart){
    this.cartList$=cart.cartList.asObservable();
  }

}
