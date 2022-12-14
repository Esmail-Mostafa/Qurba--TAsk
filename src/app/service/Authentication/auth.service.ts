import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ilogin } from 'src/app/InterFace/ilogin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = 'https://dummyjson.com/';
Islogin:boolean = false ;
  constructor(private HttpClient: HttpClient) {}

  login(LoginForm:any): Observable<Ilogin> {
    return this.HttpClient.post<Ilogin>(this.baseUrl + 'auth/login', LoginForm);
  }

  checkIsLogin(){
    return !!localStorage.getItem("userToken")
  }

}
