import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCT_SERVICE_CLASS, PRODUCT_SERVICE_TOKEN } from '../config/constants';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [
    //ProductService
    // {
    //   provide: ProductService,
    //   useClass:ProductService
    // },
    {
      provide: PRODUCT_SERVICE_TOKEN,
      useClass: PRODUCT_SERVICE_CLASS
    }
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
