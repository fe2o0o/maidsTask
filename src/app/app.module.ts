import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { SearchBarComponent } from './users-container/search-bar/search-bar.component';
import { UsersComponent } from './users-container/users/users.component';
import { UserCardComponent } from './users-container/users/user-card/user-card.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HoverDirective } from './hover.directive';
import { LoaderComponent } from './loader/loader.component';
import { SearchPipe } from './search.pipe';
import { LoaderInterceptor } from './loader.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersContainerComponent,
    SearchBarComponent,
    UsersComponent,
    UserCardComponent,
    UserDetailsComponent,
    HoverDirective,
    LoaderComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
