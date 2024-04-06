import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute,private _UsersService:UsersService,private _Router:Router){}
  userData:User |undefined = undefined;
  id: number = 0;
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe({
      next: (res) => {
        this.id = Number(res['id']);
      }
    })

    this._UsersService.getUserById(this.id).subscribe({
      next: (res) => {
        this.userData = res.data
      }
    })
  }

}
