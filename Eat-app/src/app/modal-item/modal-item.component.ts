import {Component, Input, OnInit} from '@angular/core';
import {AllserviceService} from '../services/allservice.service';
import {CatserviceService} from '../services/catservice.service';
import {Recepi} from '../models/recepi.model';


@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})


export class ModalItemComponent implements OnInit {

  @Input() openModalId: any;
  public itemInfo: Recepi;

  constructor(public allService: AllserviceService,
              public catserviceService: CatserviceService) {
  }


  coloseModal() {
    this.allService.closeModal();
  }


  getItem() {
    console.log(this.openModalId);
    this.catserviceService.geiCarItem(this.openModalId).subscribe((x: Recepi) => {
      this.itemInfo = x;
      const image: string = 'url(../../assets/eatimg/' + this.itemInfo.Id + '.jpg)';
      this.itemInfo.Img = image;

      this.itemInfo.Comment = this.itemInfo.Comment.split('\\n');
      this.itemInfo.Ingredients = this.itemInfo.Ingredients.split('\\n');
      for (let d = 0; d < this.itemInfo.Ingredients.length; d++) {
        this.itemInfo.Ingredients[d] = this.itemInfo.Ingredients[d].split('--');
      }

    });
  }

  openmodal() {
    const info = {
      name: this.itemInfo.Name,
      id: this.itemInfo.Id
    };
    this.allService.addDay(info);
  }

  ngOnInit(): void {
    this.getItem();
  }

}
