import { CustomMaterialModule } from './../material';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// Services
import {
  // ApiService
} from './services';

// Components
import {
  LabelManagerComponent,
  DocumentGroupComponent
} from './components';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    CustomMaterialModule
  ],
  declarations: [

    // SHARED COMPONENTS
    LabelManagerComponent,
    DocumentGroupComponent,

    // Pipes

  ],
  exports: [
    // angular
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,

    // SHARED COMPONENTS
    LabelManagerComponent,
    DocumentGroupComponent,

    // pipes

  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
      ]
    };
  }
}
