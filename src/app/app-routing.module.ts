import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './core/app.guard';
import { ErrorComponent } from './shared/pages/error/error.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'home', canActivate: [AppGuard], loadChildren: () => import('./modules/home/home.component').then(m => m.HomeComponent)
},
{
  path: 'login', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
},
{
  path: 'register', loadChildren: () => import('./modules/register/register.module').then(m => m.RegisterModule)
},
{
  path: 'error', component: ErrorComponent
},
{
  path: '**', component: ErrorComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
