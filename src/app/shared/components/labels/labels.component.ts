import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Label } from '../../../model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LabelEditDialog } from './edit/edit.dialog';

@Component({
  selector: 'labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  labels: Label[] = [
    { id: 1, name: 'Football' },
    { id: 2, name: 'Soccer' },
    { id: 3, name: 'Tennis' },
    { id: 4, name: 'Basketball' }
  ] as Label[];

  constructor(
    public dialog: MatDialog
  ) {}

  edit(label: Label) {
    let dialogRef = this.dialog.open(LabelEditDialog, {
      width: '250px',
      data: label
    });
  }

  delete(label: Label) {
    debugger;
  }
}