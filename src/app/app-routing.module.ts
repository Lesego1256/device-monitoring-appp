import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssertsComponent } from './asserts/asserts.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LaptopsComponent } from './asserts/laptops/laptops.component';
import { MonitorsComponent } from './asserts/monitors/monitors.component';
import { UserComponent } from './users/user-list/user/user.component';
import { NotificationsComponent } from './notifications/notifications.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'asserts', component: AssertsComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'view-user', component: UserComponent
  },
  {
    path: 'monitors', component: MonitorsComponent
  },
  {
    path: 'laptops', component: LaptopsComponent
  },
  {
    path: 'notifications', component: NotificationsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
