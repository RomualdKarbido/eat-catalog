import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable, Subject } from 'rxjs';
import { Observer } from 'firebase';




@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  public userId: any = '';
  public authUser: boolean = false;
  public userEmail: any;

  public $logoutNotifier: Observable<any>;
  private logoutSubject = new Subject<any>();

  public $logintNotifier: Observable<any>;
  private logoinSubject = new Subject<any>();


  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
    this.$logoutNotifier = this.logoutSubject.asObservable();
    this.$logintNotifier = this.logoinSubject.asObservable();

  }
  notifyAboutLogout() {
    this.logoutSubject.next();
  }
  notifyAboutLoin() {
    this.logoinSubject.next();
  }


  loadCurrentUserLight() {
    let at = localStorage.getItem('at');
    let ml = localStorage.getItem('ml');
    if (at) {
      this.authUser = true;
      this.userEmail = ml;
      this.userId = at;
      return this.authUser;
    } else {
      this.authUser = false;
      this.loadCurrentUser().subscribe(user => {
        if (user) {
          this.authUser = true;
          this.userEmail = user.email;

        } else {
          console.log('не залогинен');
          this.authUser = false;
        }
      });
      return this.authUser;
    }
  }
  //проверка залогиненного user
  loadCurrentUser() {
    return Observable.create((obs: Observer<any>) => {
      firebase.auth().onAuthStateChanged(
        currentUser => {
          obs.next(currentUser);
        }
      );
    });
  }
  setNewUser(id, email) {
    this.db.database.ref('Users/' + id).set({
      useremail: email,
      mymenu: {
        day1: [-1],
        day2: [-1],
        day3: [-1],
        day4: [-1],
        day5: [-1],
        day6: [-1],
        day7: [-1]
      }
    });
  }
  //добавление рецепта в firebase
  addItem(dayNum, id) {
    id = parseInt(id);
    this.loadCurrentUser().subscribe(user => {
      if (user) {
        this.userId = user.uid;
        var dataToSave = {};

        this.db.database.ref('/Users/' + this.userId + '/mymenu/' + dayNum).once('value').then(day => {
          let daylist = day.val();
          let searcId = daylist.indexOf(id);
          if (daylist[0] == -1) {
            dataToSave[dayNum] = [id];
            this.db.database.ref('Users/' + this.userId + '/mymenu/').update(dataToSave);
            return;
          }
          if (searcId === -1) {
            daylist.push(id);
            dataToSave[dayNum] = daylist;
            this.db.database.ref('Users/' + this.userId + '/mymenu/').update(dataToSave);
          }
        });
      } else {
        return;
      }
    });
  }
  getWeekday(user) {
    return this.db.list('/Users/' + user + /mymenu/).valueChanges();
  }

}
