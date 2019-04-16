import { Component, OnInit, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { GetJsonService } from '../get-json.service';
import { UserinfoService } from '../userinfo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})


export class MenuComponent implements OnInit, OnDestroy {
  private dayMass: any = [
    { name: 'Понедельник', nameshort: 'Пн', value: 'day1' },
    { name: 'Вторник', nameshort: 'Вт', value: 'day2' },
    { name: 'Среда', nameshort: 'Ср', value: 'day3' },
    { name: 'Четверг', nameshort: 'Чт', value: 'day4' },
    { name: 'Пятница', nameshort: 'Пт', value: 'day5' },
    { name: 'Суббота', nameshort: 'Сб', value: 'day6' },
    { name: 'Воскресенье', nameshort: 'Вс', value: 'day7' }
  ];

  private eatMassAll: any = [];
  private massForWeek = [];
  public roureday: string;
  public cartparams: any;
  public newArrDay: any[];
  public printver: boolean = false;
  public userId: string;
  public week: any;
  public modal = false;
  public addId: any;

  public auth = false;
  public modaldays = [
    { name: 'Пн', value: 'day1' },
    { name: 'Вт', value: 'day2' },
    { name: 'Ср', value: 'day3' },
    { name: 'Чт', value: 'day4' },
    { name: 'Пт', value: 'day5' },
    { name: 'Сб', value: 'day6' },
    { name: 'Вс', value: 'day7' }
  ];
  activeweekday: any;
  weekOn: boolean;

  public lastVisible: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userinfoservice: UserinfoService,
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private getJsonService: GetJsonService
  ) {
  }


  getcarentday() {
    const carentday = (new Date().toLocaleString('ru-ru', { weekday: 'long' }));
    for (let i = 0; i < this.dayMass.length; i++) {
      if (this.dayMass[i].name.toLowerCase() === carentday) {
        this.activeweekday = this.dayMass[i].value;
      }
    }
  }



  showConfigResponse() {
    this.userinfoservice.getWeekday(this.userId).subscribe(week => {
      this.massForWeek = [];
      this.eatMassAll = week;
      for (let b = 0; b < this.dayMass.length; b++) {
        let deyObj: {} = {
          day: this.dayMass[b].name,
          dayshort: this.dayMass[b].nameshort,
          dayvalue: this.dayMass[b].value,
          idcart: []
        };
        for (let f = 0; f < this.eatMassAll[b].length; f++) {
          if (this.eatMassAll[b] != -1) {
            let id = this.eatMassAll[b][f];
            this.getJsonService.getCatItem(id).subscribe(cart => {

              cart.Img = 'url(../../assets/eatimg/' + id + '.jpg)';
              cart.Comment = cart.Comment.split('\n');
              cart.Ingredients = cart.Ingredients.split('\n');
              for (let d = 0; d < cart.Ingredients.length; d++) {
                cart.Ingredients[d] = cart.Ingredients[d].split('--');
              }
              // @ts-ignore
              deyObj.idcart.push(cart);
              // this.ref.detectChanges();
            });

          }
        }
        this.massForWeek.push(deyObj);
      }
    });
  }


  logindetected() {
    this.userId = localStorage.getItem('at');
    if (this.userId) {
      this.showConfigResponse();
      this.auth = true;
    } else {
      this.auth = false;
      this.eatMassAll = [];
      this.massForWeek = [];
    }
  }
  clearUserMenu() {
    this.eatMassAll = [];
    this.massForWeek = [];
    this.auth = false;
  }

  removeCart(id, dayNum) {
    this.userinfoservice.loadCurrentUser().subscribe(user => {
      if (user) {
        this.userId = user.uid;
        var dataToSave = {};
        this.db.database.ref('/Users/' + this.userId + '/mymenu/' + dayNum).once('value').then(day => {
          let daylist = day.val();
          let targetday = daylist.indexOf(id);
          if (daylist.length == 1) {
            daylist[0] = -1;
            dataToSave[dayNum] = daylist
            this.db.database.ref('Users/' + this.userId + '/mymenu/').update(dataToSave);
          }
          else {
            daylist.splice(targetday, 1);
            dataToSave[dayNum] = daylist;
            this.db.database.ref('Users/' + this.userId + '/mymenu/').update(dataToSave);
          }
        });
      }
    });
  }


  tabsweek(daynum) {
    if (daynum === 'day0') {
      let d = 'days';
      this.activeweekday = daynum;
      this.router.navigate(['menu/', d]);
    } else {
      this.activeweekday = daynum;
      this.weekOn = false;
      this.router.navigate(['menu/', daynum]);
    }
  }

  ptintversion() {
    this.printver = !this.printver;
  }
  //модалка
  addItemForDifferentrDay(dayNum) {
    this.userinfoservice.addItem(dayNum, this.addId);
    this.closemodal();
    this.activeweekday = dayNum;

  }

  openmodal(id) {
    this.addId = id;
    this.modal = true;
  }

  closemodal() {
    this.addId = null;
    this.modal = false;
  }


  ngOnInit() {
    this.cartparams = this.route.params;
    this.roureday = this.cartparams.value.day;
    if (this.roureday === 'days') {
      this.getcarentday();
      // this.showConfigResponse();
    } else {
      this.activeweekday = this.roureday;
    }
    this.logindetected();

    this.userinfoservice.$logoutNotifier.subscribe(() => {
      this.clearUserMenu();
      this.auth = false;
    });
    this.userinfoservice.$logintNotifier.subscribe(() => {
      this.showConfigResponse();
      this.auth = true;
    });
  }

  ngOnDestroy() {
    // this.ref.detach();
  }

}
