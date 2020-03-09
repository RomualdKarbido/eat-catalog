import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {CatComponent} from './catalog/cat.component';
import {CatfilterComponent} from './catalog/catfilter/catfilter.component';
import {TopmenuComponent} from './header/topmenu.component';
import {OneCartComponent} from './one-cart/one-cart.component';
import {MenuComponent} from './menu/menu.component';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';

import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';

import * as firebase from 'firebase';
import {AddRecipeComponent} from './header/add-recipe/add-recipe.component';
import {ProductComponent} from './header/add-recipe/product/product.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {ModalItemComponent} from './modal-item/modal-item.component';


firebase.initializeApp(environment.firebase);

const appRoutes: Routes = [
  {path: 'cart/:id', component: OneCartComponent},
  {path: 'menu/:day', component: MenuComponent},
  {path: 'add_recipe', component: AddRecipeComponent},
  {path: '', pathMatch: 'full', component: CatComponent},

];


@NgModule({
    declarations: [
        AppComponent,
        CatComponent,
        CatfilterComponent,
        TopmenuComponent,
        OneCartComponent,
        MenuComponent,
        AddRecipeComponent,
        ProductComponent,
        ModalItemComponent
    ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'top'
    }),
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'eatCatalog'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    InfiniteScrollModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
