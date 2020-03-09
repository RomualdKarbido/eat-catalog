import {Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input} from '@angular/core';
import {ProductItem} from 'src/app/models/product-item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProductComponent implements OnInit {

  @Input() dataItem: ProductItem;
  @Output() remooveLine: EventEmitter<number> = new EventEmitter<number>();
  @Output() addLine: EventEmitter<number> = new EventEmitter<number>();

  public idElement = null;

  constructor() {
  }


  remooveitem(id) {
    if (this.remooveLine) {
      this.remooveLine.emit(id);
    }
  }

  addInem() {
    this.addLine.emit(null);
  }

  ngOnInit() {

  }

}
