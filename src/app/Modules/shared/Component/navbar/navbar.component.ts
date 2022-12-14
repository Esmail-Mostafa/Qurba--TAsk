import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/Authentication/auth.service';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ProductsService } from 'src/app/service/prodects/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() cartNumber: any[] = [];
  @Output() SeacrchResalit = new EventEmitter<string>();
  constructor(
    private _ProductsService: ProductsService,
    public _AuthService: AuthService,
    private _Router: Router
  ) {}
  ngOnInit(): void {
    if (localStorage.length) {
      this._AuthService.Islogin = true;
    } else {
      this._AuthService.Islogin = false;
    }
  }

  logOut() {
    localStorage.clear();
    this._Router.navigate(['/Login']);
    this.ngOnInit();
  }
  inputSeacrch(event: any) {
    this.SeacrchResalit.emit(event.target.value);
  }
}
