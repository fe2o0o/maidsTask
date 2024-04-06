import { Pipe, PipeTransform } from '@angular/core';
import { User } from './interfaces/user';
import { UsersService } from './services/users.service';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  constructor(private _UsersService:UsersService){}
  transform(users: User[], id: number):User[] {
    const userMatch: User[] = users.filter((user: User) => { return user.id === id })

    return userMatch.length == 0 ? users : userMatch;
  }

}
