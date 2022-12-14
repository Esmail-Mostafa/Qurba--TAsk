import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ilogin } from 'src/app/InterFace/ilogin';
import { AuthService } from 'src/app/service/Authentication/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });
  errors: string = '';

  constructor(private _AuthService: AuthService, private _Router: Router) {}

  Form() {
    this._AuthService.login(this.loginForm.value).subscribe({
      next: (res: Ilogin) => {
        console.log(res.id);
        localStorage.setItem('userToken', res.token);
        this._AuthService.Islogin = true;
        this._Router.navigate(['/list-of-products']);
      },
      error: (e) => {
        if (e.message != null) {
          this.errors = e.error.message;
          this._AuthService.Islogin = false;
          console.log(e);
        }
      },
      complete: () => {},
    });
  }
}
