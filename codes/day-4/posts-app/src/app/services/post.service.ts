import { HttpClient } from "@angular/common/http";
import { Post } from "../models/post";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PostService {
    private url = 'https://jsonplaceholder.typicode.com/posts'

    constructor(private http: HttpClient) {
        console.log('object created');
    }
    getPosts(): Observable<Post[]> {
        const obs: Observable<Post[]> = this.http.get<Post[]>(this.url)
        return obs
    }
    getPost(id: number): Observable<Post> {
        return this.http.get<Post>(`${this.url}/${id}`)
    }
}