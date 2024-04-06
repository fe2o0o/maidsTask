import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchId:BehaviorSubject<number> = new BehaviorSubject<number>(0)
  constructor() { }
}
