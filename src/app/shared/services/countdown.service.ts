import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export enum Signal {
  END,
  FIVE_MINUTES
}

@Injectable()
export class CountdownService {
  private seconds: number;
  private intervalId: number;
  formattedTime: string;
  alert$ = new BehaviorSubject<Signal>(null);

  convertDuration(duration: number) {
    this.seconds = duration * 60;
  }

  startTimer() {
    if (!this.intervalId) {
      this.intervalId = window.setInterval(this.formatTime.bind(this), 1000);
    }
  }

  clearTimer() {
    window.clearInterval(this.intervalId);
  }

  tick() {
    this.seconds--;

    if (this.seconds < 0) {
      this.alert$.next(Signal.END);
      this.clearTimer();
    } else if (this.seconds === 300) {
      this.alert$.next(Signal.FIVE_MINUTES);
    }
  }

  pad(str: number): string {
    return (`0${str}`).slice(-2);
  }

  formatTime() {
    let secs = this.seconds;
    let minutes = Math.floor(secs / 60);
    secs = secs % 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    this.formattedTime = `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(secs)}`;

    this.tick();
  }
}