import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './Modules/products/products.module';
import { SharedModule } from './Modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationModule } from './Modules/authentication/authentication.module';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthenticationModule,
    FormsModule,
    ProductsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
