import { Injectable } from '@angular/core';
import { products } from 'src/app/products';
// Angularのルールとしてserviceとして使うときは@injectableをserviceの上につけてあげる
@Injectable()
export class ProductService {

  // 今はまだproduct.tsの箇条書きデータを取り込んでる状態
  getProducts() {
    return products
  }

  getProductById(productId: number) {
    return products[productId]
  }

}