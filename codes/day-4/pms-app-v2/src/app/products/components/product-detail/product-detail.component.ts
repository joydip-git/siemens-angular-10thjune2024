import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ServiceContract } from '../../services/service-contract';
import { PRODUCT_SERVICE_TOKEN } from '../../../config/constants';
import { Subscription } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  isFetchOver = false
  errorMessage = ''
  product?: Product;
  private sub?: Subscription;

  constructor(
    private currentRoute: ActivatedRoute,
    @Inject(PRODUCT_SERVICE_TOKEN) private ps: ServiceContract,
    private router: Router
  ) {

  }
  navigate(id: number) {
    this.router.navigate(['/products/edit', id])
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
  ngOnInit(): void {
    const snapshot: ActivatedRouteSnapshot = this.currentRoute.snapshot
    const id = Number(snapshot.params["id"])
    this.sub = this.ps
      .get(id)
      .subscribe({
        next: (response) => {
          if (response.data !== null) {
            this.product = response.data
            this.errorMessage = ''
            this.isFetchOver = true
          } else {
            this.product = undefined
            this.errorMessage = response.message
            this.isFetchOver = true
          }
        },
        error: (err) => {
          this.product = undefined
          this.errorMessage = err.message
          this.isFetchOver = true
        }
      })
  }
}
