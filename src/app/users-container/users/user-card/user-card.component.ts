import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {
  @Input() user: User | undefined = undefined;
}
