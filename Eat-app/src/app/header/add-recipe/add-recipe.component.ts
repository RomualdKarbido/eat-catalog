import {Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input} from '@angular/core';
import {ProductItem} from 'src/app/models/product-item';
import {Recepi} from 'src/app/models/recepi.model';
import {CatserviceService} from '../../catalog/catservice.service';
import {Import} from '@angular/compiler-cli/src/ngtsc/host';


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddRecipeComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();


  public recepiName: string;
  public recepiComment: string;
  public recepiCategory: string;
  public recepiTime: string;
  public recepiId: number;
  public prodictList: ProductItem[] = [];
  @Input() CartEdit = {};
  public edit = false;

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
      if (this.prodictList.length - 1 !== i) {
        stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value + '\\n';
      } else {
        stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value;
      }

      prondAll = prondAll + stringProd;
    }


    const recepiNew = {} as Recepi;
    recepiNew.Category = this.recepiCategory;
    recepiNew.Comment = this.recepiComment;
    recepiNew.Id = this.recepiId;
    recepiNew.Ingredients = prondAll;
    recepiNew.Name = this.recepiName;
    recepiNew.Time = String(this.recepiTime);

    this.catserviceService.AddReceptiforBase(recepiNew);
    this.closeModal();
  }

  editCart() {
    this.recepiName = this.CartEdit.Name;
    this.recepiComment = this.CartEdit.Comment;
    this.recepiId = this.CartEdit.Id;
    this.recepiCategory = this.CartEdit.Category;
    this.recepiTime = this.CartEdit.Time;
    const Ing = this.CartEdit.Ingredients.split('\\n');
    for (let i = 0; i < Ing.length; i++) {
      const IngSplit = Ing[i].split('--');
      if (i > 0) {
        this.addEmptyItem(i);
      }
      this.prodictList[i].name = IngSplit[0];
      this.prodictList[i].value = IngSplit[1];
    }
  }
  saveRecepi() {

    let stringProd = null;
    let prondAll = '';
    for (let i = 0; i < this.prodictList.length; i++) {
      if (this.prodictList.length - 1 !== i) {
        stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value + '\\n';
      } else {
        stringProd = this.prodictList[i].name + ' --' + this.prodictList[i].value;
      }

      prondAll = prondAll + stringProd;
    }


    const recepiNew = {} as Recepi;
    recepiNew.Category = this.recepiCategory;
    recepiNew.Comment = this.recepiComment;
    recepiNew.Id = this.recepiId;
    recepiNew.Ingredients = prondAll;
    recepiNew.Name = this.recepiName;
    recepiNew.Time = String(this.recepiTime);
    this.catserviceService.saveEditRecepi(recepiNew);
    this.closeModal();
  }

  ngOnInit() {
    this.addEmptyItem(1);
    if (this.CartEdit.Id) {
      this.edit = true;
      this.editCart();
    }
  }

}
