import {NgModule} from '@angular/core';

import {
  MatAutocompleteModule,
  MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatSelectModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { KeysPipe } from './keys.pipe';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    KeysPipe,
    FlexLayoutModule,
  ],
  declarations: [KeysPipe]
})
export class SharedModule {
}
