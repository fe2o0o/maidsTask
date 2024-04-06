import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {


  isloader: BehaviorSubject<boolean> = new BehaviorSubject(false);

  show() {
    this.isloader.next(true)
  }

  hide() {
    this.isloader.next(false)
  }

  constructor() { }


}
