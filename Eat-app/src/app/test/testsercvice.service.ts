import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';
import {Observer} from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class TestsercviceService {

  public testCat = [];


  constructor(public db: AngularFireDatabase) {


  }

  getCart() {
    return Observable.create((obs: Observer<any>) => {
      let cautn = 1;
      this.db.database.ref('catalog2').limitToFirst(6).on('child_added', (snap) => {
        // console.log(snap.val().Id);
        // console.log(cautn);
        // cautn = cautn + 1;
        this.testCat.push(snap.val().Id);
        // console.log(this.testCat);
        obs.next(this.testCat);

      });

    });

  }
}
