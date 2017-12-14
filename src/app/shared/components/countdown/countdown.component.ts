import { CountdownService, Signal } from './../../services';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html'
})
export class CountdownComponent implements OnInit {
  @Input() duration: number; // duration in minutes
  @Output() onTimeEnd = new EventEmitter<any>();
  @Output() onFiveMinutes = new EventEmitter<any>();

  formattedTime: string;

  constructor(private $countdown: CountdownService) {}

  ngOnInit() {
    this.$countdown.convertDuration(this.duration);
    this.$countdown.formatTime();
    this.$countdown.alert$.subscribe((signal: Signal) => {
      if (signal === Signal.END) {
        this.onTimeEnd.emit();
      } else if (signal === Signal.FIVE_MINUTES) {
        this.onFiveMinutes.emit();
      }
    });
  }
}