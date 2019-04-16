import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

// import functions from 'firebase';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public users: any[];
  private userinfoservice: any;
  private db: any;
  public week = [];

  constructor(db: AngularFireDatabase) {

    this.db = db;
    db.list('/Users').valueChanges().subscribe(users => {
      this.users = users;
    });

  }


  writeUserData(id, email, mymenu) {
    console.log(this.db);
    this.db.database.ref('Users/' + id).set({
      useremail: email,
      mymeny: mymenu
    });
  }




  // getWeek() {
  //   this.week = this.userinfoservice.getWeekServ();
  //   console.log(this.week);
  // }


  ngOnInit() {
  }

}
