import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

const modules = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule
];

@NgModule({
  imports: modules,
  exports: modules
})
export class CustomMaterialModule { }
