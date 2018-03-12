import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TagsRoutingModule } from "./tags-routing.module";
import { TagsListComponent } from "./tags-list/tags-list.component";
import { TagsNewComponent } from "./tags-new/tags-new.component";
import { SharedMaterialModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, TagsRoutingModule, SharedMaterialModule],
  declarations: [TagsListComponent, TagsNewComponent]
})
export class TagsModule {}
