import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { ButtonComponent } from './button.component';
import { CardComponent } from './card.component';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  exports: [
    ButtonComponent,
    CardComponent,
    CapitalizePipe,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
  ],
  imports: [
    ButtonComponent,
    CardComponent,
    CapitalizePipe,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
  ],
})
export class SharedModule {}
