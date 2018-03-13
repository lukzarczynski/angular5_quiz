import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedMaterialModule } from '../shared/shared.module';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsNewComponent } from './tags-new/tags-new.component';
import { TagsRoutingModule } from './tags-routing.module';

@NgModule({
  imports: [CommonModule, TagsRoutingModule, SharedMaterialModule],
  declarations: [TagsListComponent, TagsNewComponent]
})
export class TagsModule {}
