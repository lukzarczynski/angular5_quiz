import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TagsListComponent} from './tags-list/tags-list.component';
import {TagsNewComponent} from './tags-new/tags-new.component';

const routes: Routes = [
  {path: '', component: TagsListComponent},
  {path: 'new', component: TagsNewComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule {
}
