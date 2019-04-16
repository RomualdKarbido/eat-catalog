import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable, Observer } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class GetJsonService {
  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase) {

  }

  public eatMassAll: any;
  public count = 0;
  public nextcount: number;
  public allList = [];
  public idList = [];
  public ItemALLArr = null;
  public resuslt = null;

  resetCounterService() {
    this.count = 0;
  }

  // searchid(idlist) {
  //   this.allList = idlist;
  //   return this.getAllidforCat();

  // }

  // getConfigResponse() {
  //   return Observable.create((obs: Observer<any>) => {
  //     if (this.idList.length <= 0) {
  //       this.db.list('/catalog2').valueChanges().subscribe(x => {
  //         this.allList = x;
  //         this.getAllidforCat(); // получаем список id 

  //         this.db.database.ref('/catalog2').orderByChild('Id').startAt(this.idList[this.count]).limitToFirst(6).on('child_added', snap => {
  //           this.count++;
  //           let carttime = snap.val();
  //           carttime = this.upgradeCart(carttime);
  //           obs.next(carttime);
  //         });
  //         this.db.database.ref('/catalog2').orderByChild('Id').startAt(this.idList[this.count]).limitToFirst(6).once('child_added');
  //       });
  //     } else {
  //       this.db.database.ref('/catalog2').orderByChild('Id').startAt(this.idList[this.count]).limitToFirst(6).on('child_added', snap => {
  //         this.count++;
  //         let carttime = snap.val();
  //         carttime = this.upgradeCart(carttime);
  //         obs.next(carttime);
  //       });
  //       this.db.database.ref('/catalog2').orderByChild('Id').startAt(this.idList[this.count]).limitToFirst(6).once('child_added');
  //     }

  //   });
  // }
  
  // upgradeCart(cart) {
  //   cart.Ingredients = cart.Ingredients.split('\n');
  //   for (let d = 0; d < cart.Ingredients.length; d++) {
  //     cart.Ingredients[d] = cart.Ingredients[d].split('--');
  //   }
  //   cart.Img = 'url(../../assets/eatimg/' + cart.Id + '.jpg)';
  //   return cart;
  // }

  // getAllid() { //получаем id  для конпки - мне повезет
  //   this.idList = [];
  //   return Observable.create((list: Observer<any>) => {
  //     for (let i = 0; i < this.allList.length; i++) {
  //       this.idList.push(this.allList[i].Id);
  //     }
  //     list.next(this.idList);
  //   });
  // }
  // getAllidforCat() { //получаем Id для всех карточек без подписки
  //   this.idList = [];
  //   for (let i = 0; i < this.allList.length; i++) {
  //     this.idList.push(this.allList[i].Id);
  //   }
  // }

  // id для стр карты меню
  getCatItem(id): Observable<any> {
    id = parseInt(id);
    return Observable.create((obs: Observer<any>) => {
      this.db.database.ref('catalog2').orderByChild('Id').equalTo(id).on('child_added', snapshot => {
        obs.next(snapshot.val());
      });
      this.db.database.ref('catalog2').orderByChild('Id').equalTo(id).once('child_added');
    });
  }
}
