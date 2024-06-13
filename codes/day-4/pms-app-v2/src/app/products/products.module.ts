import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { PRODUCT_SERVICE_CLASS, PRODUCT_SERVICE_TOKEN } from '../config/constants';
import { FilterProductPipe } from './pipes/filter-product.pipe';
import { ProductFilterComponent } from './components/product-filter/product-filter.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    FilterProductPipe,
    ProductFilterComponent,
    AddProductComponent,
    EditProductComponent
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
