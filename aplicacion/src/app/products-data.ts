import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Product } from './product-list/Product';

const URL = 'https://68692c642af1d945cea123cc.mockapi.io/Products';

@Injectable({
  providedIn: 'root'
})
export class ProductsData {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL).pipe(tap( (products: Product[]) => products.forEach(product=>product.quantity=0)));
  }

}
