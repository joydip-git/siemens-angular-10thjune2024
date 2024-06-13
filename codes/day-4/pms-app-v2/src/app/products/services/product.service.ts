import { Injectable } from '@angular/core';
import { ServiceContract } from './service-contract';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/apiresponse';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_BASE_URL } from '../../config/constants';

@Injectable()
export class ProductService implements ServiceContract {
  constructor(private http: HttpClient) {

  }

  get(id: number): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(
      `${PRODUCT_BASE_URL}/${id}`
    );
  }
  getAll(): Observable<ApiResponse<Product[]>> {
    return this.http.get<ApiResponse<Product[]>>(PRODUCT_BASE_URL);
  }
  add(p: Product): Observable<ApiResponse<Product[]>> {
    return this.http.post<ApiResponse<Product[]>>(PRODUCT_BASE_URL, p)
  }
  update(p: Product, id: number): Observable<ApiResponse<Product[]>> {
    return this.http.put<ApiResponse<Product[]>>(`${PRODUCT_BASE_URL}/${id}`, p)
  }
  delete(id: number): Observable<ApiResponse<Product[]>> {
    return this.http.delete<ApiResponse<Product[]>>(`${PRODUCT_BASE_URL}/${id}`)
  }
}
