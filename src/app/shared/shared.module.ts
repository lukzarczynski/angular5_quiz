import { NgModule } from '@angular/core';

import { MatButtonModule, MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule]
})
export class SharedMaterialModule {}
