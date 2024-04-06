import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _HttpClient: HttpClient) { }

  getUsers(page:number):Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users?page=${page}`)
  }

  getUserById(id: number) : Observable<any> {
    return this._HttpClient.get(`https://reqres.in/api/users/${id}`)
  }
}
