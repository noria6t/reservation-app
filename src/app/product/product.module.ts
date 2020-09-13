import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';

const routes: Routes = [
  { 
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent }
    ]
  },
];


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    // # Rootはすでにつクァれており使えないためChildにする
    [RouterModule.forChild(routes)],
    // CommonModuleはifやforを使うために必要
    CommonModule
  ],
  providers: [
    ProductService
  ],
  bootstrap: []
})
export class ProductModule { }
