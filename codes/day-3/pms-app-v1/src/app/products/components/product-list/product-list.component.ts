import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {

  products?: Product[];
  errorMessage = '';
  isFetchOver = false;
  private sub?: Subscription;

  //private ps: ServiceContract;
  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: ServiceContract) {
    //this.ps = ps
    //this.ps = inject(ProductService)
  }
  ngOnInit(): void {
    this.sub = this.ps.getAll().subscribe({
      next: (response) => {
        if (response.data !== null) {
          this.products = response.data
          this.errorMessage = ''
          this.isFetchOver = true
        } else {
          this.products = undefined
          this.errorMessage = response.message
          this.isFetchOver = true
        }
      },
      error: (err) => {
        this.products = undefined
        this.errorMessage = err.message
        this.isFetchOver = true
      }
    })
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
