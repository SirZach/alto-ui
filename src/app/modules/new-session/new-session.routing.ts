import { NewSessionComponent } from './new-session.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: NewSessionComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);