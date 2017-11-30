import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'new-session',
  templateUrl: './new-session.component.html'
})
export class NewSessionComponent {
  username = new FormControl('', [Validators.required]);

  constructor(
    private router: Router
  ) {}

  createNewSession() {
    this.username.markAsTouched();

    if (this.username.valid) {
      this.router.navigate(['session']);
    }
  }
}
