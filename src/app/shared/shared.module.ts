import { NgModule } from '@angular/core';

import {MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  exports: [MatToolbarModule, MatButtonModule, MatCardModule, MatTableModule, MatInputModule, MatFormFieldModule]
})
export class SharedMaterialModule {}
