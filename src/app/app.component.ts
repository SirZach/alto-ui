/**
 * Angular 2 decorators and services
 */
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { environment } from 'environments/environment';
import { MatSnackBar } from '@angular/material';

/**
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ngOnInit() {}

  constructor(public snackbar: MatSnackBar) {}

  timesUp() {
    // TODO end the process
  }

  fiveMinutesLeft() {
    this.snackbar.open('5 minutes left', 'Got It', {
      duration: 5000
    });
  }
}