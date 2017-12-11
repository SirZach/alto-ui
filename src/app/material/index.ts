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
  MatTooltipModule,
  MatSelectModule
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
  MatTooltipModule,
  MatSelectModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class CustomMaterialModule { }
