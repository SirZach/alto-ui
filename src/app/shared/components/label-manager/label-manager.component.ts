import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Label } from '../../../model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { LabelEditDialog } from './edit/edit.dialog';
import { LabelDeleteDialog } from './delete/delete.dialog';
import { LabelAddDialog } from './add/add.dialog';

@Component({
  selector: 'label-manager',
  templateUrl: './label-manager.component.html',
  styleUrls: ['./label-manager.component.scss']
})
export class LabelManagerComponent {
  labels: Label[] = [
    { id: 1, name: 'Football' },
    { id: 2, name: 'Soccer' },
    { id: 3, name: 'Tennis' },
    { id: 4, name: 'Basketball' }
  ] as Label[];

  constructor(
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  edit(label: Label) {
    const dialogRef = this.dialog.open(LabelEditDialog, {
      width: '250px',
      data: label
    });

    dialogRef.afterClosed().subscribe((updatedLabel: Label) => {
      if (updatedLabel) {
        this.snackbar.open('Label updated', 'Got It', {
          duration: 1000
        });
      }
    });
  }

  delete(label: Label) {
    const dialogRef = this.dialog.open(LabelDeleteDialog, {
      width: '250px',
      data: label
    });

    dialogRef.afterClosed().subscribe((label: Label) => {
      if (label) {
        this.snackbar.open('Label deleted', 'Got It', {
          duration: 1000
        });
      }
    });
  }

  add() {
    const dialogRef = this.dialog.open(LabelAddDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe((label: Label) => {
      if (label) {
        this.snackbar.open('Label created', 'Got It', {
          duration: 1000
        });
      }
    });
  }
}