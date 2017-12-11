import { CustomMaterialModule } from './../material';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

// Services
import {
  LabelService
} from './services';

// Components
import {
  LabelManagerComponent,
  DocumentGroupComponent
} from './components';

// Pipes
import {
  ThemesPipe
} from './pipes';

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
    ThemesPipe
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
    ThemesPipe
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LabelService
      ]
    };
  }
}
