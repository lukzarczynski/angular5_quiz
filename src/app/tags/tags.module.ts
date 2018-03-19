import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {TagTypePipe} from './tag-type.pipe';
import {TagsListComponent} from './tags-list/tags-list.component';
import {ObjectSelectedDirective} from './tags-new/object-selected.directive';
import {TagsNewComponent} from './tags-new/tags-new.component';
import {TagsRoutingModule} from './tags-routing.module';
import {TagsDataSource} from './tags.datasource';
import {TagsService} from './tags.service';

@NgModule({
  imports: [
    CommonModule,
    TagsRoutingModule,
    SharedModule,
    FormsModule,
  ],
  declarations: [TagsListComponent, TagsNewComponent, TagTypePipe, ObjectSelectedDirective],
  providers: [TagsService, TagsDataSource]
})
export class TagsModule {
}
