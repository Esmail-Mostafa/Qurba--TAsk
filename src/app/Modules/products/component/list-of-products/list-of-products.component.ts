import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Baseres } from 'src/app/InterFace/baseres';
import { IProdect } from 'src/app/InterFace/IProdect';
import { CategoryService } from 'src/app/service/categorys/category.service';
import { ProductsService } from 'src/app/service/prodects/products.service';

@Component({
  selector: 'app-list-of-products',
  templateUrl: './list-of-products.component.html',
  styleUrls: ['./list-of-products.component.scss'],
})
export class ListOfProductsComponent implements OnInit {
  cart: number[] = [];
  page: number = 0;
  desplayNextBtn: boolean = false;
  desplayBAckBtn: boolean = true;
  prodectList: IProdect[] = [];
  slectedcat: any;
  discount: number = 0;
  price: number = 0;
  title: string | number = 'All Products ';
  p: number = 1;
  constructor(
    private _ProductsService: ProductsService,
    private _CategoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.getProdect();
  }

  getProdect() {
    this._ProductsService.getAllProect().subscribe({
      next: (res: Baseres<IProdect>) => {
        this.prodectList = res.products.slice(0, 10);
      },
      error: () => {},
      complete: () => {},
    });
  }
  getCategotysbyName(event: string | number) {
    if (event == 'all Products ' || event == '') {
      this.title = event;
      this._ProductsService
        .getAllProect()
        .subscribe((res: Baseres<IProdect>) => {
          this.prodectList = res.products;
        });
    } else {
      this.title = event;
      this._CategoryService
        .getcategoryByProdectName(event)
        .subscribe((res: Baseres<IProdect>) => {
          this.prodectList = res.products;
        });
    }
  }
  SeachValue(event: string) {
    if (event == '' || event == null) {
      this._ProductsService
        .getAllProect()
        .subscribe((res: Baseres<IProdect>) => {
          this.prodectList = res.products;
        });
    } else {
      this._ProductsService
        .search(event)
        .subscribe((res: Baseres<IProdect>) => {
          this.prodectList = res.products;
        });
    }
  }

  nextPage(pageNumber: any) {
    this.page += parseInt(pageNumber);
    this.desplayBAckBtn = false;
    this._ProductsService.pagination(this.page).subscribe((res: any) => {
      console.log(res);
      if (res.total == res.skip) {
        this.desplayNextBtn = true;
      } else {
        this.desplayNextBtn = false;
        this.prodectList = res.products;
      }
    });
  }
  backPage(pageNumber: any) {
    this.page -= parseInt(pageNumber);
    this.desplayNextBtn = false;
    this._ProductsService.pagination(this.page).subscribe((res: any) => {
      console.log(res);
      if (res.skip == 0) {
        this.desplayBAckBtn = true;
        console.log('good');
      } else {
        this.desplayBAckBtn = false;
        this.prodectList = res.products;

        console.log('bad');
      }
    });
  }

  addTocard(cartVAlue: any) {
    console.log(cartVAlue);
    this.cart.push(cartVAlue);
  }
}
