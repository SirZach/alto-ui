import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new-session',
    pathMatch: 'full'
  }, {
    path: 'new-session',
    loadChildren: './modules/new-session/index#NewSessionModule'
  }, {
    path: 'session',
    loadChildren: './modules/session/index#SessionModule'
  }
];

export const APP_ROUTING: ModuleWithProviders = RouterModule.forRoot(
  routes,
  { useHash: true }
);
