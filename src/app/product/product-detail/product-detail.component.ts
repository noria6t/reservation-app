import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products'
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product

  constructor(
    private route: ActivatedRoute,
    private ProductService: ProductService
  ) { }

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')]
      this.product = this.ProductService.getProductById(+params.get('productId'))
    })
  }

}
