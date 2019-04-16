import { Component, Injectable, OnInit, ViewChild, ChangeDetectorRef, Input } from '@angular/core';

import { CatfilterComponent } from './catfilter/catfilter.component';
import { UserinfoService } from '../userinfo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { CatserviceService } from './catservice.service';


// import {CatItem} from './cartlist.model';


@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html'
})

export class CatComponent implements OnInit {


  public activeItem: string;
  public modaldays = [
    { name: 'Пн', value: 'day1' },
    { name: 'Вт', value: 'day2' },
    { name: 'Ср', value: 'day3' },
    { name: 'Чт', value: 'day4' },
    { name: 'Пт', value: 'day5' },
    { name: 'Сб', value: 'day6' },
    { name: 'Вс', value: 'day7' }
  ];
  public modal = false;
  public modalName;
  public modalId;
  public localtimeArr: any = [];
  public preloader: boolean;
  public bigcart: number;
  public bigcartMarkerOn = false;
  public bigcartMarkerOff = true;
  public stopinterscroll = false;
  public result = [];
  public resultIng = []; 

  //refactoring
  private CatList = [];
  private CatListId = [];
  public viewCartList = [];
  private countVievCart: number = 0;
  public alMasNew = [];



  @ViewChild(CatfilterComponent)
  public catFilterComponent: CatfilterComponent;


  constructor(

    public userinfo: UserinfoService,
    public catservice: CatserviceService,
    private activatedRoute: ActivatedRoute,
    private db: AngularFireDatabase
  ) { }


  //получаем все карточки и преобразуем их
  parseCatList() {
    this.CatList = [];
    this.preloader = true;
      this.catservice.getCartList().subscribe(catlist => {
        for (let i = 0; i < catlist.length; i++) {
          let oneCart = this.upgradeListCatalog(catlist[i]);
          this.CatListId.push(catlist[i].Id);
          this.CatList.push(oneCart);
        }
        this.nextCart();
      });
  }
  // получение следующих 6 карточек
  nextCart() {
    let nextCart = this.CatList.slice(this.countVievCart, this.countVievCart + 6);
    for (let i = 0; i < nextCart.length; i++) {
      this.viewCartList.push(nextCart[i]);
    }
    this.preloader = false;
    this.countVievCart = this.countVievCart + 6;
  }

  //изменяем все карточки
  upgradeListCatalog(cart) {
    cart.Ingredients = cart.Ingredients.split('\n');
    for (let d = 0; d < cart.Ingredients.length; d++) {
      cart.Ingredients[d] = cart.Ingredients[d].split('--');
    }
    cart.Img = 'url(../../assets/eatimg/' + cart.Id + '.jpg)';
    return cart;
  }

  onScroll() { // при скроле грузим новый 6 карт
    this.nextCart();
  }


  public FilteredData() {
    //поиск по названию и ингредиентам
    if (this.catFilterComponent.titleFilterValue || this.catFilterComponent.selectedCategory) {
      this.viewCartList = [];
      this.result = [];
      this.resultIng = [];
      this.alMasNew = this.CatList; //массив всех элементов
      //поиск
      if (this.catFilterComponent.titleFilterValue && this.catFilterComponent.titleFilterValue.length > 2) {
        this.result = this.alMasNew.filter(x => x.Name.toLowerCase().indexOf(this.catFilterComponent.titleFilterValue.toLocaleLowerCase()) != -1);
        if (this.result.length != 0) {
          for (let i = 0; i < this.result.length; i++) {
            this.viewCartList.push(this.result[i]);
          }
        }
        for (let f = 0; f < this.alMasNew.length; f++) {
          for (let d = 0; d < this.alMasNew[f].Ingredients.length; d++) {
            let targetIlem = this.alMasNew[f].Ingredients[d][0];
            let searchItem = targetIlem.toLowerCase().indexOf(this.catFilterComponent.titleFilterValue.toLocaleLowerCase());
            if (searchItem != -1) {
              this.result.push(this.alMasNew[f]);
              this.viewCartList.push(this.alMasNew[f]);
            }
          }
        }
      }
      if (this.catFilterComponent.selectedCategory && this.result.length > 0) {
        // console.log("Поиск - 1, категория 1")
        this.viewCartList = [];
        this.result = this.result.filter(x => x.Category == this.catFilterComponent.selectedCategory);
        for (let i = 0; i < this.result.length; i++) {
          this.viewCartList.push(this.result[i]);
        }
      }
      if (this.catFilterComponent.selectedCategory && this.result.length == 0) {
        // console.log("Поиск - 0, категория 1")
        this.viewCartList = [];
        this.result = this.alMasNew.filter(x => x.Category == this.catFilterComponent.selectedCategory);
        for (let i = 0; i < this.result.length; i++) {
          this.viewCartList.push(this.result[i]);
        }
      }
      this.viewCartList = this.getUnique(this.viewCartList, "Id");
      this.stopinterscroll = true;
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
    else {
      this.resetSearchAll();
      document.body.scrollTop = document.documentElement.scrollTop = 0;
      // console.log("Поиск - 0, категория 0")
    }
    this.result = [];
    this.resultIng = [];
  }

  getUnique(arr, comp) {
    const unique = arr.map(e => e[comp]).
      map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e]).map(e => arr[e]);
    return unique
  }

  resetSearch() {
    // console.log('очистка поиска');
    this.viewCartList = [];
    this.result = [];
    this.resultIng = [];
    this.catFilterComponent.titleFilterValue = null;
    this.countVievCart = 0;
    this.FilteredData();
  }
  resetSearchAll() {
    this.viewCartList = [];
    this.nextCart();
    this.result = [];
    this.resultIng = [];
    this.countVievCart = 0;
    this.catFilterComponent.titleFilterValue = null;
    this.catFilterComponent.selectedCategory = null;
    this.stopinterscroll = false;
  }

  resizecart(id) {
    if (this.bigcart == id) {
      this.bigcart = null;
      this.bigcartMarkerOn = false;
      this.bigcartMarkerOff = true;
      this.enebleItem();

    } else {
      this.bigcart = id;
      this.bigcartMarkerOn = true;
      this.bigcartMarkerOff = false;
      this.disabledItev(id);
    }
  }

  disabledItev(id) {
    this.enebleItem();
    let ArrallDom = document.getElementsByClassName('cat__item');
    let countEl = 1;
    for (let i = 0; i < ArrallDom.length; i++) {
      if (ArrallDom[i].id == id) {
        if (countEl == 1) {
          ArrallDom[i + 1].classList.add('disabled');
          ArrallDom[i + 2].classList.add('disabled');
        }
        if (countEl == 2) {
          ArrallDom[i - 1].classList.add('disabled');
          ArrallDom[i + 1].classList.add('disabled');
        }
        if (countEl == 3) {
          ArrallDom[i - 1].classList.add('disabled');
          ArrallDom[i - 2].classList.add('disabled');
        }
      }
      countEl++;
      if (countEl == 4) countEl = 1;
    }
  }

  enebleItem() {
    let ArrallDom = document.getElementsByClassName('cat__item');
    for (let i = 0; i < ArrallDom.length; i++) {
      ArrallDom[i].classList.remove('disabled');
    }
  }

  switchtabs(id: string): void {
    if (this.activeItem == id) {
      this.activeItem = null;
    } else {
      this.activeItem = id;
    }
  }

  openmodal(name: any, id: any) {
    this.modal = true;
    this.modalName = name;
    this.modalId = id;
  }

  closemodal() {
    this.modal = false;
  }

  addMineMenu(dayNum) {
    this.userinfo.addItem(dayNum, this.modalId);
    this.modal = false;
    let localtime = localStorage.getItem(dayNum);
    if (localtime) {
      this.localtimeArr = localtime.split(',');
      const finedid = this.localtimeArr.indexOf(this.modalId);
      if (finedid === -1) {
        this.localtimeArr.push(this.modalId);
        localtime = this.localtimeArr.join();
        localStorage.setItem(dayNum, localtime);
      }
    } else {
      localStorage.setItem(dayNum, this.modalId);
    }
  }



  ngOnInit() {
    this.parseCatList();
    this.preloader = true;
  }
}
