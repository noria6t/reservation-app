import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// import { ProductModule } from './product/product.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
// import { ProductListComponent } from './product/product-listings/product-listings.component';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';

// angular httpで検索するとリクエストのhttpの送り方が公式ドキュメントである。　https://angular.jp/guide/http

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // ProductListComponent,
    // ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    // ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
