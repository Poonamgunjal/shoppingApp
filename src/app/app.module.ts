import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatIconModule,
  MatFormFieldModule } from "@angular/material";

import { AppRoutingModule } from './app-routing.module';
import { AuthenticateService } from './authenticate.service';
import {DataCollectionService} from './data-collection.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import {NgxPaginationModule} from 'ngx-pagination';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { CollectionsComponent } from './dashboard/collections/collections.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CategoriesComponent,
    CollectionsComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxCarouselModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [AuthenticateService,DataCollectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
