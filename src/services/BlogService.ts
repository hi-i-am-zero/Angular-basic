import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseData } from '../app/shared/types/responseData';
import { ProductItems } from '../app/shared/types/productItem';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
    detalBlog(arg0: number) {
      throw new Error('Method not implemented.');
    }
    constructor(private http: HttpClient) {}

    getBlogs(): Observable<ResponseData<ProductItems[]>> {
        return this.http.get<any>('https://ninedev-api.vercel.app/blogs');
    }

    detailBlog(id: number): Observable<ResponseData<ProductItems>> {
        return this.http.get<any>(`https://ninedev-api.vercel.app/blogs/${id}`);
    }
}