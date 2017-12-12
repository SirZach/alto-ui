import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Label, Document } from '../../../model';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { LabelEditDialog } from './edit/edit.dialog';
import { LabelDeleteDialog } from './delete/delete.dialog';
import { LabelAddDialog } from './add/add.dialog';
import { LabeledDocumentsDialog } from './labeled-documents/labeled-documents.dialog';

@Component({
  selector: 'label-manager',
  templateUrl: './label-manager.component.html',
  styleUrls: ['./label-manager.component.scss']
})
export class LabelManagerComponent {
  @Input() labels: Label[];
  @Output() onAdd = new EventEmitter<Label>();
  @Output() onDelete = new EventEmitter<Label>();
  @Output() onEdit = new EventEmitter<Label>();

  constructor(
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  edit(label: Label) {
    const dialogRef = this.dialog.open(LabelEditDialog, {
      width: '450px',
      data: label
    });

    dialogRef.afterClosed().subscribe((updatedLabel: Label) => {
      if (updatedLabel) {
        this.onEdit.emit(updatedLabel);
      }
    });
  }

  delete(label: Label) {
    const dialogRef = this.dialog.open(LabelDeleteDialog, {
      width: '450px',
      data: label
    });

    dialogRef.afterClosed().subscribe((label: Label) => {
      if (label) {
        this.onDelete.emit(label);
      }
    });
  }

  add() {
    const dialogRef = this.dialog.open(LabelAddDialog, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((label: Label) => {
      if (label) {
        this.onAdd.emit(label);
        this.snackbar.open('Label created', 'Got It', {
          duration: 1000
        });
      }
    });
  }

  openLabeledDocuments(label: Label) {
    const dialogRef = this.dialog.open(LabeledDocumentsDialog, {
      width: '450px',
      data: label
    });
  }
}