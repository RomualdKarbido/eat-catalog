import { Injectable, EventEmitter } from '@angular/core';
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
  public LackybtnPush: EventEmitter<any> = new EventEmitter();
  public filterOn: EventEmitter<any> = new EventEmitter();
  public filterOff: EventEmitter<any> = new EventEmitter();
  public editCartId = new EventEmitter();
  public statefilter = false;

  resetCounterService() {
    this.count = 0;
  }



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
  lackyBtn() {
    this.LackybtnPush.emit(null);
  }

  editCartServ(id) {
    this.editCartId.emit(id);
  }

  filterVisibleActivate() {
    this.statefilter = !this.statefilter;
    this.filterOn.emit(this.statefilter);
  }
  filterDeactivate() {
    this.statefilter = false;
    this.filterOff.emit(this.statefilter);
  }
}
