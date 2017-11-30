import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'new-session',
  templateUrl: './new-session.component.html'
})
export class NewSessionComponent {
  username = new FormControl('', [Validators.required]);

  usernameIsEmpty: boolean = false;

  getErrorMessage() {
    return this.username.hasError('required') ? 'You must enter a value' : '';
  }

  createNewSession() {
    this.username.markAsTouched();

    if (this.username.valid) {
      console.log('valid');
    } else {
      console.log('invalid');
    }
  }
}
