import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfProductsComponent } from './component/list-of-products/list-of-products.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ListOfProductsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    FormsModule,

    RouterModule,
  ],
})
export class ProductsModule {}
