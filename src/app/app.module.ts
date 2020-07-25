import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ProductModule } from './product/product.module';
import { NavbarComponent } from './common/navbar/navbar.component';
// import { ProductListComponent } from './product/product-list/product-list.component';
// import { ProductDetailComponent } from './product/product-detail/product-detail.component';
// import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // ProductListComponent,
    // ProductDetailComponent,
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
