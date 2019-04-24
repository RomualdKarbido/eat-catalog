import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {TestsercviceService} from './testsercvice.service';
import {Observable} from 'rxjs';
import {Observer} from 'firebase';

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
  // public testCat = new Observable<any>;

  constructor(db: AngularFireDatabase, public testService: TestsercviceService) {


  }

  ngOnInit(): void {
  }


  // getWeek() {
  //   this.week = this.userinfoservice.getWeekServ();
  //   console.log(this.week);
  // }


  // ngOnInit() {
  //   this.testService.getCart().subscribe(x => {
  //    console.log(x);
  //    this.testCat = x;
  //   });
  //
  // }

}
