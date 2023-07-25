import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Guards/auth.guard';


const routes: Routes = [
 { path:'' , redirectTo:'login' , pathMatch:'full'},
 { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)},
 { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)},
 { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[authGuard] },
 { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), canActivate:[authGuard] },
 { path: 'tuning', loadChildren: () => import('./pages/tuning/tuning.module').then(m => m.TuningModule), canActivate:[authGuard] },
 { path:'**' , loadChildren: () => import('./pages/notfound/notfound.module').then(m => m.NotfoundModule) }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
