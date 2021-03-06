import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent} from './auth/login/login.component';
import {HomeComponent} from './home/home.component';
import {CreateProjectComponent} from './project/create-project/create-project.component';
import {AuthGuard} from './auth/auth.guard';



const routes: Routes = [
  { path: 'sign-up', component: SignupComponent },
  { path: '', component: HomeComponent },
  { path: 'create-project', component: CreateProjectComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
