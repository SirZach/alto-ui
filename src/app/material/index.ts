import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatTooltipModule
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatTooltipModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class CustomMaterialModule { }
