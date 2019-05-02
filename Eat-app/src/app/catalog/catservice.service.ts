import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {Observer} from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class CatserviceService {

  constructor(
    private http: HttpClient,
    private db: AngularFireDatabase
  ) {
  }

  private AlllistLength = null;

  getCartList() {
    return Observable.create((obs: Observer<any>) => {
      this.db.list('/catalog2').valueChanges().subscribe(catlist => {
        obs.next(catlist);
        this.AlllistLength = catlist.length;
      });
    });
  }

  AddReceptiforBase(recepi) {

    const postData = recepi;
    this.db.database.ref().child('/catalog2').push(postData).key;
  }

}
