import { Observable } from "rxjs";
import { ApiResponse } from "../models/apiresponse";
import { Product } from "../models/product";

export interface ServiceContract {
    get(id: number): Observable<ApiResponse<Product>>;
    getAll(): Observable<ApiResponse<Product[]>>;
    add(p: Product): Observable<ApiResponse<Product[]>>;
    update(p: Product, id: number): Observable<ApiResponse<Product[]>>;
    delete(id: number): Observable<ApiResponse<Product[]>>;
}