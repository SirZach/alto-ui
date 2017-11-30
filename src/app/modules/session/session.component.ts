import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'session',
  templateUrl: './session.component.html'
})
export class SessionComponent {
  labels: any[] = [
    { name: 'Football', documents: 3 },
    { name: 'Soccer', documents: 2 },
    { name: 'Tennis', documents: 4 },
    { name: 'Basketball', documents: 5 }
  ];
}
