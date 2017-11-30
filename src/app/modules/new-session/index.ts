import { CustomMaterialModule } from './../../material';
import { NewSessionComponent } from './new-session.component';
import { NgModule } from '@angular/core';
import { routing } from './new-session.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FlexLayoutModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    routing
  ],
  declarations: [
    NewSessionComponent
  ],
  providers: [
  ]
})
export class NewSessionModule {}
