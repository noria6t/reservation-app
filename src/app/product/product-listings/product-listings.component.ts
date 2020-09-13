import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


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
  }

}
