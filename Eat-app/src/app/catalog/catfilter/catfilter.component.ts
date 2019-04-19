import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { GetJsonService } from '../../get-json.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-catfilter',
  templateUrl: './catfilter.component.html',
  styleUrls: ['./catfilter.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CatfilterComponent implements OnInit, OnDestroy {


  @Output() searchEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() resetSearch: EventEmitter<any> = new EventEmitter<any>();
  @Input()  listCartId: any;


  public selectedCategory: string;
  public titleFilterValue: string;
  private conunter: any;
  public rndNum: any;
  public selected: any;
  public filterblock: boolean;
 
 
  private _filterSubscrpt: Subscription;

  constructor(
    public select: MatSelectModule,
    private getJsonService: GetJsonService,
    private router: Router
  ) {
    this.getJsonService.LackybtnPush.subscribe(x => this.lackyBtn());

    this._filterSubscrpt = this.getJsonService.filterOn.subscribe(y => {
      console.log(y)
        this.filterblock = y;
    });
  }

  scrollEvent = (event: any): void => {
    if (event.srcElement.scrollingElement.scrollTop <= 170 && this.filterblock) {
      this.getJsonService.filterDeactivate();
      this.filterblock = false;
    }
  };

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
  
 


 
  


  ngOnInit() {
    window.addEventListener('scroll', this.scrollEvent, true);
  }
  
 
  ngOnDestroy() {
    if(this._filterSubscrpt)
      this._filterSubscrpt.unsubscribe();
  }
}
