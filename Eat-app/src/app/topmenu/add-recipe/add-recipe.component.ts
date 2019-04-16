import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { ProductItem } from 'src/app/models/product-item';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {
  @Output()
  onClose: EventEmitter<any> = new EventEmitter<any>();

  public prodictList: ProductItem[] = [];

  public inProduct = 0;

  constructor() { }

  addItemRecepient () {
    console.log('добавляем элемент');
    let id = this.prodictList.length + 1;
    this.addEmptyItem(id);
    // this.prodictList.push([]);
    // for (let i = 0; i < this.prodictList.length; i++) {
    //   console.log(this.prodictList);
    // }
  }

  remooveItemRecepient (id: number) {
     let targetEl =  this.prodictList.findIndex(x => x.id == id);
     if (targetEl !=-1) {
      this.prodictList.splice(targetEl, 1);
     }
  }
  closeModal() {
    if (this.onClose) {
      this.onClose.emit(null);
    }
  }

  private addEmptyItem(id: number): void {
    this.prodictList.push({
      id: id,
      name: "",
      value: ""
    });
  }

  ngOnInit() {
    this.addEmptyItem(1);
  }

}
