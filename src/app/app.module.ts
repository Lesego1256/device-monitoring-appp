import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UserComponent } from './users/user-list/user/user.component';
import { AssertsComponent } from './asserts/asserts.component';
import { AssertListComponent } from './asserts/assert-list/assert-list.component';
import { AssertEditComponent } from './asserts/assert-list/assert-edit/assert-edit.component';
import { AssertItemComponent } from './asserts/assert-list/assert-item/assert-item.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaptopsComponent } from './asserts/laptops/laptops.component';
import { MonitorsComponent } from './asserts/monitors/monitors.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UsersComponent,
    UserDetailsComponent,
    UserListComponent,
    UserComponent,
    AssertsComponent,
    AssertListComponent,
    AssertEditComponent,
    AssertItemComponent,
    DashboardComponent,
    HomeComponent,
    LaptopsComponent,
    MonitorsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
