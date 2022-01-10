import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {ProfileGalleryComponent} from "../profile-gallery/profile-gallery.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule { }
