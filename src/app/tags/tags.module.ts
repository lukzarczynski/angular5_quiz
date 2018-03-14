import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMaterialModule } from '../shared/shared.module';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsNewComponent } from './tags-new/tags-new.component';
import { TagsRoutingModule } from './tags-routing.module';
import {TagsDataSource} from './tags.datasource';
import {TagsService} from './tags.service';

@NgModule({
  imports: [CommonModule, TagsRoutingModule, SharedMaterialModule],
  declarations: [TagsListComponent, TagsNewComponent],
  providers: [TagsService, TagsDataSource]
})
export class TagsModule {}
