import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import {RouterModule} from "@angular/router";
import {ProfileGalleryComponent} from "../profile-gallery/profile-gallery.component";



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ProfileGalleryComponent
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
