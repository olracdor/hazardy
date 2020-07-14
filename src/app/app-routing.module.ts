import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'home', canActivate: [AppGuard], loadChildren: 
    () => import('./modules/home/home.module').then(module => module.HomeModule)
},
{
  path: 'login', loadChildren: 
    () => import('./modules/login/login.module').then(module => module.LoginModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
