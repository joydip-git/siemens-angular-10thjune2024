import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AUTH_BASE_URL } from '../../config/constants';
import { ApiResponse } from '../../products/models/apiresponse';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

    constructor(private httpClient: HttpClient) { }

    register(user: User): Observable<ApiResponse<User>> {
        return this.httpClient.post<ApiResponse<User>>(`${AUTH_BASE_URL}/register`, user)
    }

    login(user: User): Observable<ApiResponse<string>> {
        return this.httpClient.post<ApiResponse<string>>(`${AUTH_BASE_URL}/authenticate`, user)
    }
}