import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MemberManagementComponent } from './components/member-management/member-management.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { TeamManagementComponent } from './components/team-management/team-management.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'manage', component: SidebarComponent, children:[
    {path:'',component:HomeComponent},
    {path:'members',component:MemberManagementComponent},
    {path:'users',component:UserManagementComponent},
    {path:'teams',component:TeamManagementComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
