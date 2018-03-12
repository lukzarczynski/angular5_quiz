import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TemplatesRoutingModule } from "./templates-routing.module";
import { TemplatesListComponent } from "./templates-list/templates-list.component";

@NgModule({
  imports: [CommonModule, TemplatesRoutingModule],
  declarations: [TemplatesListComponent]
})
export class TemplatesModule {}
