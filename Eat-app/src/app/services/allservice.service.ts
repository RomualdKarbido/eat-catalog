import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  public modalClose = new BehaviorSubject(false);
  public addDayForModal = new BehaviorSubject(null);

  constructor() { }

  closeModal() {
    this.modalClose.next(true);
  }
  addDay(info) {
    this.addDayForModal.next(info);
  }

}
