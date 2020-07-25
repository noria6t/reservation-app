import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductDetailComponent } from './product-detail/product-detail.component';
import {ProductListComponent } from './product-list/product-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'detail', component: ProductDetailComponent },
];


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    // # Rootはすでにつクァれており使えないためChildにする
    [RouterModule.forChild(routes)],
    // CommonModuleはifやforを使うために必要
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
