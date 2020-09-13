import { Injectable } from '@angular/core';
import { products } from 'src/app/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Angularのルールとしてserviceとして使うときは@injectableをserviceの上につけてあげる。
@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  // Observable<any> で型をanyにしている。
  getProducts(): Observable<any> {
    // return products
    return this.http.get('http://localhost:3001/api/v1/products')
  }

  getProductById(productId: number) {
    return products[productId]
  }

}