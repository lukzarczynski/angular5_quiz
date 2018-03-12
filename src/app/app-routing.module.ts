import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'tags', loadChildren: 'app/tags/tags.module#TagsModule'},
  {path: 'templates', loadChildren: 'app/templates/templates.module#TemplatesModule'},
  {path: '', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
