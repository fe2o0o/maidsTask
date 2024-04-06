import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { User } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { SearchService } from 'src/app/services/search.service';
import { CashingService } from 'src/app/services/cashing.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy{
    private cacheSubscription: Subscription | undefined;
  constructor(private _CashingService:CashingService,private _UsersService: UsersService, private _SearchService: SearchService) {
    this._SearchService.searchId.subscribe({
      next: () => {
        this.searchId = this._SearchService.searchId.getValue();
        if (this.searchId !=0) {
          this._UsersService.getUserById(this.searchId).subscribe({
            next: (res) => {
              this.usersData = [res.data];
            },
            error: (err) => {
              this.getUsersDataWithPagenation(1);
            }
          })
        } else {
          this.getUsersDataWithPagenation(1);
        }
      }
    })
  }

  searchId:number=0
  total: number = 0;
  pageSize: number = 0;
  pageNumber:number=1;
  usersData: User[] = [];

  getServerData(event: PageEvent) {
    this.getUsersDataWithPagenation(event.pageIndex + 1);
  }

  ngOnInit(): void {
    this.cacheSubscription = this._CashingService.cache$.subscribe(data => this.usersData = data)
    this.getUsersDataWithPagenation(1);
  }

  getUsersDataWithPagenation(page: number) {
    const cachedData = this._CashingService.get(page.toString());
    if (!cachedData) {
      this._UsersService.getUsers(page).subscribe({
        next: (res) => {
          const { data } = res;
          this.usersData = data
          this.total = res.total;
          this.pageSize = res.per_page;
          this.pageNumber = res.page;
          try {
            this._CashingService.set(res.page.toString(),res.data)
          } catch (err) {
          }
        }
      })
    } else {
      this.usersData=cachedData
    }
  }
  ngOnDestroy(): void {
    this.cacheSubscription?.unsubscribe();
    this._CashingService.clear('1')
  }
}
