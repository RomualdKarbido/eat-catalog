import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserinfoService} from '../userinfo.service';
import {GetJsonService} from '../get-json.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.scss']
})

export class TopmenuComponent implements OnInit {
  authform = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  regisration = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });


  public menuactive: boolean = false;
  public modal: boolean = false;
  public reg = false;
  public auth = true;
  public authUser: boolean;
  public emailuser;
  public errorMessage = '';
  public successMessage = '';
  public redactor = false;
  public addrecepi = false;
  public exact = false;
  public menuOpen = false;
  public filterOn = true;
  public finterActive: boolean;

  constructor(
    public afAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    public userinfo: UserinfoService,
    private getJsonService: GetJsonService,
    private router: Router
  ) {

    this.authUser = userinfo.loadCurrentUserLight();

    if (this.authUser) {
      let at = localStorage.getItem('at');
      let ml = localStorage.getItem('ml');
      this.authUser = true;
      this.emailuser = ml;
      if (ml == 'robindranat@gmail.com' || ml == '2@2.ru') {
        this.redactor = true;
      } else {
        this.redactor = false;
      }
    } else {
      localStorage.removeItem('at');
      localStorage.removeItem('ml');
      this.authUser, this.redactor = false;
      this.emailuser = null;
    }




    this.getJsonService.filterOn.subscribe(y => {
      this.finterActive = y;      
    });
    this.getJsonService.filterOff.subscribe(d => {
      this.finterActive = d;
    });
  }

  filterVisible() {
    this.getJsonService.filterVisibleActivate();
  }





  setlackyBtn() {
    this.getJsonService.lackyBtn();
  }

  clearMenuUser() {
    this.userinfo.notifyAboutLogout();
  }

  scrollEvent = (event: any): void => {
    if (event.srcElement.scrollingElement.scrollTop > 169) {
      this.menuactive = true;
    } else {
      this.menuactive = false;
    }
  };

  

  reseCounterCat() {
    this.getJsonService.resetCounterService();
  }

  modalAuth() {
    this.modal = true;
  }

  modalAuthClose() {
    this.modal = false;
  }

  modalChenge() {
    this.reg = !this.reg;
    this.auth = !this.auth;
  }


  tryRegister(value) {
    this.doRegister(value)
      .then(res => {
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.userinfo.setNewUser(res.user.uid, res.user.email);
        this.modal = false;
      }, err => {
        this.errorMessage = err.message; 
        this.successMessage = '';
      });
  }

  doRegister(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  trylogin(value) {
    this.login(value)
      .then(res => {
        this.emailuser = res.user.email;
        this.errorMessage = '';
        this.authUser = true;
        this.modal = false;
        if (res.user.email == 'bis@mail.ru') {
          this.redactor = true;
        } else {
          this.redactor = false;
        }
        localStorage.setItem('at', res.user.uid);
        localStorage.setItem('ml', res.user.email);
        this.userinfo.notifyAboutLoin();
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
      });

  }

  login(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  exitLogin() {
    firebase.auth().signOut().then(() => {
      localStorage.removeItem('at');
      localStorage.removeItem('ml');
      this.emailuser = '';
      this.authUser = false;
      this.redactor = false;

      this.userinfo.notifyAboutLogout();
    }).catch((error) => {
      console.log(error);
    });
  }

  openModalRecepient() {
    this.addrecepi = true;
    window.removeEventListener('scroll', this.scrollEvent, true);
  }

  closeModalRecepient() {
    this.addrecepi = false;
    window.addEventListener('scroll', this.scrollEvent, true);
  }

  openCloseTopMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeTopMenu() {
    this.menuOpen = false;
  }

  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);

    // this.router.events.subscribe((val) => {
    //   console.log(val.url);
    //   let xx = val.url;
    //   let ww = xx.filter(dd => {
    //     'menu' = dd
    //   });
    //   if (ww) {
    //     console.log(ww);
    //     this.exact = true;
    //   }

    // })

  }
}
