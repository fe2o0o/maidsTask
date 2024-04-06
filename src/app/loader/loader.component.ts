import { Component } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  constructor(private _LoaderService: LoaderService) {
    this._LoaderService.isloader.subscribe({
      next: () => {
        if (this._LoaderService.isloader.getValue() == true) {
          this.isload=true
        } else {
          this.isload = false;
        }
      }
    })
  }
  
  isload: boolean = false;
}
