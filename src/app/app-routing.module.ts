import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tags', loadChildren: 'app/tags/tags.module#TagsModule', canActivate: [AuthGuardService] },
  {
    path: 'templates',
    loadChildren: 'app/templates/templates.module#TemplatesModule',
    canActivate: [AuthGuardService]
  },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
