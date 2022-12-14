import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Baseres } from 'src/app/InterFace/baseres';
import { IProdect } from 'src/app/InterFace/IProdect';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  BaseUrl = 'https://dummyjson.com/';
  constructor(private _HttpClient: HttpClient) {}

  getAllCAtegorys(): Observable<string[]> {
    return this._HttpClient.get<string[]>(this.BaseUrl + 'products/categories');
  }
  getcategoryByProdectName(prodectByName: any): Observable<Baseres<IProdect>> {

    return this._HttpClient.get<Baseres<IProdect>>(this.BaseUrl + `products/category/${prodectByName}`);
  }
}
