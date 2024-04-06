import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: "", redirectTo: 'users', pathMatch: 'full' },
  { path: "users", component: UsersContainerComponent },
  {path:"user/:id" , component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
