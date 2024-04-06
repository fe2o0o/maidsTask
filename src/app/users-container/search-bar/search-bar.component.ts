import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  constructor(private _SearchService:SearchService){}

  id: number = 0;
  handleSearch(ele :HTMLInputElement) {
    this.id = Number(ele.value);
    this._SearchService.searchId.next(this.id)
  }
}
