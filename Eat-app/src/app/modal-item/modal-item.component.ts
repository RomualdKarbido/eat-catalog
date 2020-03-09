import {Component, Input, OnInit} from '@angular/core';
import {AllserviceService} from '../services/allservice.service';
import {CatserviceService} from '../catalog/catservice.service';
import {Recepi} from '../models/recepi.model';

@Component({
  selector: 'app-modal-item',
  templateUrl: './modal-item.component.html',
  styleUrls: ['./modal-item.component.css']
})



export class ModalItemComponent implements OnInit {

  @Input() openModalId: any;
  public itemInfo: Recepi;
  constructor(public allService: AllserviceService, public catserviceService: CatserviceService) {
  }


  coloseModal() {
    this.allService.closeModal();
  }

  getItem() {
    console.log(this.openModalId);
    this.catserviceService.geiCarItem(this.openModalId).subscribe((x: Recepi) => {
      console.log(x);
      this.itemInfo = x;
    });
  }

  ngOnInit(): void {
    this.getItem();
  }

}
