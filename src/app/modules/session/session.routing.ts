import { SessionComponent } from './session.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: SessionComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
