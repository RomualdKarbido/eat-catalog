import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllserviceService {

  public modalClose = new BehaviorSubject(false);

  constructor() { }

  closeModal() {
    this.modalClose.next(true);
  }
}
