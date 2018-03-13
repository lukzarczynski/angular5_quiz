import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TemplatesListComponent } from './templates-list/templates-list.component';
import { TemplatesRoutingModule } from './templates-routing.module';

@NgModule({
  imports: [CommonModule, TemplatesRoutingModule],
  declarations: [TemplatesListComponent]
})
export class TemplatesModule {}
