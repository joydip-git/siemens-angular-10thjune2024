import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Product } from '../../models/product';
import { Subscription } from 'rxjs';

@Component({
  //selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit, OnDestroy {

  products?: Product[];
  errorMessage = '';
  isFetchOver = false;
  filterText = ''
  private sub?: Subscription;
  private deleteSub?: Subscription;

  //private ps: ServiceContract;
  constructor(@Inject(PRODUCT_SERVICE_TOKEN) private ps: ServiceContract) {
    //this.ps = ps
    //this.ps = inject(ProductService)
  }

  delete(id: number) {
    this.deleteSub = this.ps.delete(id).subscribe({
      next: (response) => {
        if (response.data === null) {
          window.alert(response.message)
        } else {
          this.errorMessage = ''
          this.products = response.data
          this.isFetchOver = true
        }
      },
      error: (err) => { window.alert(err.message) },
      complete: () => {

      }
    })
  }
  updateFilterText(text: string) {
    this.filterText = text
  }
  ngOnInit(): void {
    this.getData()
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }

  getData() {
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
}
