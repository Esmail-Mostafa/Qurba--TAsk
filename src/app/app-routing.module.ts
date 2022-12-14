import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Authguard/auth.guard';
import { LoginComponent } from './Modules/authentication/Component/login/login.component';
import { ListOfProductsComponent } from './Modules/products/component/list-of-products/list-of-products.component';

const routes: Routes = [
  { path: '', redirectTo: "Login", pathMatch: "full" },
  {path:"Login" , component:LoginComponent},
  {path:"list-of-products" ,canActivate:[AuthGuard], component:ListOfProductsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
