import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendEmailComponent } from './auth/send-email/send-email.component';
import { SearchComponent } from './search/search.component'
import { ProfileComponent } from './profile/profile.component';
import { CategoriesComponent } from  './categories/categories.component';
import { PlaceComponent } from './place/place.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full'},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, 
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) }, 
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'verification-email', component: SendEmailComponent },
  { path: 'forgot-password', loadChildren: () => import('./auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
  { path: 'results', component: SearchComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'place', component: PlaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
