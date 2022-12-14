import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProdect } from 'src/app/InterFace/IProdect';
import { Baseres } from 'src/app/InterFace/baseres';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  seachresalit: any = new BehaviorSubject(null);

  baseUrl = 'https://dummyjson.com/';
  constructor(private _HttpClient: HttpClient) {}

  getAllProect(): Observable<Baseres<IProdect>> {
    return this._HttpClient.get<Baseres<IProdect>>(this.baseUrl + 'products');
  }

  search(searchInput: string): Observable<Baseres<IProdect>> {
    return this._HttpClient.get<Baseres<IProdect>>(
      this.baseUrl + `products/search?q=${searchInput}`
    );
  }

  pagination(skip: Number): Observable<Baseres<IProdect>> {
    return this._HttpClient.get<Baseres<IProdect>>(
      this.baseUrl + `products?limit=10&skip=${skip}`
    );
  }
}
