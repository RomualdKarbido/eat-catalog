import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetJsonService } from '../get-json.service';
import { UserinfoService } from '../userinfo.service';
import { Location } from '@angular/common';





// import {AngularFireDatabase} from 'angularfire2/database';


@Component({
  selector: 'app-one-cart',
  templateUrl: './one-cart.component.html',
  styleUrls: ['./one-cart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OneCartComponent implements OnInit {



  private idCart: any;
  private idCartparams: any;
  public localtimeArr: any = [];
  public modal = false;
  public sortresult: any[];
  public eatMassAll: any;
  public modaldays = [
    { name: 'Пн', value: 'day1' },
    { name: 'Вт', value: 'day2' },
    { name: 'Ср', value: 'day3' },
    { name: 'Чт', value: 'day4' },
    { name: 'Пт', value: 'day5' },
    { name: 'Сб', value: 'day6' },
    { name: 'Вс', value: 'day7' }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private getJsonService: GetJsonService,
    public userinfoservice: UserinfoService,
    private location: Location,
  ) {

    this.idCartparams = this.route.params;
    this.idCart = this.idCartparams.value.id;
    this.showConfigResponse();
  }
  showConfigResponse() {
    this.getJsonService.getCatItem(this.idCart)
      .subscribe(resp1 => {

        this.eatMassAll = resp1;
        const image: string = 'url(../../assets/eatimg/' + this.eatMassAll.Id + '.jpg)';
        this.eatMassAll.Img = image;

        this.eatMassAll.Comment = this.eatMassAll.Comment.split('\\n');
        this.eatMassAll.Ingredients = this.eatMassAll.Ingredients.split('\\n');
        for (let d = 0; d < this.eatMassAll.Ingredients.length; d++) {
          this.eatMassAll.Ingredients[d] = this.eatMassAll.Ingredients[d].split('--');
        }
        this.sortresult = this.eatMassAll;
      });
  }
  backClicked() {
    this.location.back();
  }
  addMineMenu(dayNum) {
    this.userinfoservice.addItem(dayNum, this.idCart);
  }
  openmodal() {
    this.modal = true;
  }

  closemodal() {
    this.modal = false;
  }
  editCart(id) {
     this.getJsonService.editCartServ(id);
  }


  ngOnInit() {
  }

}
