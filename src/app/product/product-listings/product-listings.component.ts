import { Component, OnInit } from '@angular/core';
import { products } from '../../products'


@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any 

  constructor() { }

  ngOnInit(): void {
    // this.12行目のproducts = 2行目のproducts。HTMLではthis.12行目のproductsを読み込んでいる。（product of productsの部分）
    this.products = products
  }

}
