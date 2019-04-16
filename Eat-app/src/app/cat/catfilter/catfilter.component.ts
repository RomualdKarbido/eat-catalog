import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { GetJsonService } from '../../get-json.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-catfilter',
  templateUrl: './catfilter.component.html',
  styleUrls: ['./catfilter.component.scss'],
  // outputs: ['searchEvent']
})
export class CatfilterComponent implements OnInit {


  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetSearch: EventEmitter<any> = new EventEmitter<any>();
  @Input()  listCartId: any;


  public selectedCategory: string;
  public titleFilterValue: string;
  private conunter: any;
  public rndNum: any;
  public selected: any;
  public filterblock: boolean;
 


  constructor(
    public select: MatSelectModule,
    private getJsonService: GetJsonService,
    private router: Router
  ) {

  }

  resetSearchforMenu() {
    this.resetSearch.emit(null);
    this.titleFilterValue = null;
  }
  categoryChanged(selectedItem) {
    this.selectedCategory = selectedItem;
    this.searchEvent.emit(null);
  }

  randomInteger(min, max) {
    let rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    return rand;
  }

  lackyBtn() {
    this.conunter = this.listCartId.length;
    this.rndNum = this.randomInteger(0, this.conunter);
    const linkNum: number = this.listCartId[this.rndNum];
    this.router.navigate(['cart/', linkNum]);
  }

  hasAnyFilterValue() {
    this.searchEvent.emit(null);
  }

  scrollEvent = (event: any): void => {
    if (event.srcElement.scrollingElement.scrollTop > 169) {
      this.filterblock = true;
    } else {
      this.filterblock = false;
    }
  }


  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
}
