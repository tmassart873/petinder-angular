import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./layout/layout.module";
import {HttpClientModule} from "@angular/common/http";
import { NameFilterPipe } from './name-filter.pipe';
import {ProfileGalleryComponent} from "./profile-gallery/profile-gallery.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddPetFormComponent } from './add-pet-form/add-pet-form.component';
import { SetupDateComponent } from './date/setup-date/setup-date.component';

@NgModule({
  declarations: [
    AppComponent,
    NameFilterPipe,
    ProfileGalleryComponent,
    AddPetFormComponent,
    SetupDateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  exports: [
    NameFilterPipe,
    ProfileGalleryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
