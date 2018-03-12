import { NgModule } from "@angular/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule, MatTableModule } from "@angular/material";

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule]
})
export class SharedMaterialModule {}
