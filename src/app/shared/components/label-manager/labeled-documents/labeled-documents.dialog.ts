import { Label } from '../../../../model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'labeled-documents',
  templateUrl: './labeled-documents.dialog.html'
})
export class LabeledDocumentsDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LabeledDocumentsDialog>,
    @Inject(MAT_DIALOG_DATA) public label: Label) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }
}