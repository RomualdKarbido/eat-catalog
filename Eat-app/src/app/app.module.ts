import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';

import { AppComponent } from './app.component';
import { CatComponent } from './cat/cat.component';
import { CatfilterComponent } from './cat/catfilter/catfilter.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { OneCartComponent } from './one-cart/one-cart.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import * as firebase from 'firebase';
import { AddRecipeComponent } from './topmenu/add-recipe/add-recipe.component';
import { ProductComponent } from './topmenu/add-recipe/product/product.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


firebase.initializeApp(environment.firebase);

const appRoutes: Routes = [
  { path: 'cart/:id', component: OneCartComponent },
  { path: 'test', component: TestComponent },
  { path: 'menu/:day', component: MenuComponent },
  { path: 'add_recipe', component: AddRecipeComponent },
  { path: '', component: CatComponent, pathMatch: 'full' }
];



@NgModule({
  declarations: [
    AppComponent,
    CatComponent,
    CatfilterComponent,
    TopmenuComponent,
    OneCartComponent,
    MenuComponent,
    TestComponent,
    AddRecipeComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, "eatCatalog"),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    InfiniteScrollModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
