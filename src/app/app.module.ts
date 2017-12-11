import { LabelDeleteDialog } from './shared/components/label-manager/delete/delete.dialog';
import { LabelEditDialog } from './shared/components/label-manager/edit/edit.dialog';
import { LabelAddDialog } from './shared/components/label-manager/add/add.dialog';
import { LabeledDocumentsDialog } from './shared/components/label-manager/labeled-documents/labeled-documents.dialog';
import { DocumentLabelDialog } from './modules/session/document-label/document-label.dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
/*
 * Platform and Environment providers/directives/pipes
 */
import { environment } from 'environments/environment';
import { APP_ROUTING }   from './app.routing.module';

// App is our top level component
import { AppComponent } from './app.component';

import { CustomMaterialModule } from './material';
import { SharedModule } from './shared';

import '../styles/styles.scss';

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    LabelEditDialog,
    LabelDeleteDialog,
    LabelAddDialog,
    DocumentLabelDialog,
    LabeledDocumentsDialog
  ],
  /**
   * Import Angular's modules.
   */
  imports: [
    APP_ROUTING,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CustomMaterialModule,
    FlexLayoutModule,
    SharedModule.forRoot(),

    /**
     * This section will import the `DevModuleModule` only in certain build types.
     * When the module is not imported it will get tree shaked.
     * This is a simple example, a big app should probably implement some logic
     */
    ...environment.showDevModule ? [ ] : [],
  ],
  entryComponents: [
    LabelEditDialog,
    LabelDeleteDialog,
    LabelAddDialog,
    DocumentLabelDialog,
    LabeledDocumentsDialog
  ],
  /**
   * Expose our Services and Providers into Angular's dependency injection.
   */
  providers: [
    environment.ENV_PROVIDERS,
    []
  ]
})
export class AppModule {}
