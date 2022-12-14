import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    SidebarComponent
  ]

})
export class SharedModule { }
