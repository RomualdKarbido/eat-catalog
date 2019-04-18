import {Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import {ProductItem} from 'src/app/models/product-item';
import {Recepi} from 'src/app/models/recepi.model';
import {CatserviceService} from '../../catalog/catservice.service';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {
  @Output()
  onClose: EventEmitter<any> = new EventEmitter<any>();


  public recepiName: string;
  public recepiComment: string;
  public recepiCategory: string;
  public recepiTime: string;
  public recepiId: number;
  public prodictList: ProductItem[] = [];


  public convertProduct = [];

  constructor(
    public catserviceService: CatserviceService
  ) {

  }

  addItemRecepient() {
    console.log('добавляем элемент');
    let id = this.prodictList.length + 1;
    this.addEmptyItem(id);

  }

  remooveItemRecepient(id: number) {
    let targetEl = this.prodictList.findIndex(x => x.id == id);
    if (targetEl != -1) {
      this.prodictList.splice(targetEl, 1);
    }
  }

  closeModal() {
    if (this.onClose) {
      this.onClose.emit(null);
    }
  }

  addEmptyItem(id: number): void {
    this.prodictList.push({
      id: id,
      name: '',
      value: ''
    });
  }

  getNewRectpi() {

    let stringProd = null;
    let prondAll = '';

    for (let i = 0; i < this.prodictList.length; i++) {
      if (this.prodictList.length - 1 != i) {
        stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value + '\n';
      } else {
        stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value;
      }

      prondAll = prondAll + stringProd;
    }


    let recepiNew = {} as Recepi;
    recepiNew.Category = this.recepiCategory;
    recepiNew.Comment = this.recepiComment;
    recepiNew.Id = this.recepiId;
    recepiNew.Ingredients = prondAll;
    recepiNew.Name = this.recepiName;
    recepiNew.Time = String(this.recepiTime);

    this.catserviceService.AddReceptiforBase(recepiNew);
    this.closeModal();
  }

  ngOnInit() {
    this.addEmptyItem(1);
  }

}
