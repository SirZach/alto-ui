import { SessionComponent } from './session.component';
import { NgModule } from '@angular/core';
import { routing } from './session.routing';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    SharedModule,
    routing
  ],
  declarations: [
    SessionComponent
  ],
  providers: [
  ]
})
export class SessionModule {}
