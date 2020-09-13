import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any 

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.12行目のproducts = 2行目のproducts。HTMLではthis.12行目のproductsを読み込んでいる。（product of productsの部分）
    // productServiceを経由してデータを読み込む
    this.products = this.productService.getProducts()

    // const observable で観測対象を作る。で、next(1)2,3..と読んでいくobsavableを作る。データを放出するためにnextというのを使う。errorかcompleteがきた時はその後をsubscriveが読無のを諦める。
    const observable = new Observable(subscriber => {
      subscriber.next(1);
      subscriber.error();
      subscriber.complete();
      setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
      }, 1000);
    });

    // obsavableがどんな動きをすか
    console.log('just before subscribe');
    observable.subscribe({
      next(data) { console.log('次のデータが出力されました' + data); },
      error(err) { console.error('something wrong occurred: ' + err); },
      complete() { console.log('done'); }
    });
    console.log('just after subscribe');
    
  }

}
