import { Label } from './../../../../model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'delete-dialog',
  templateUrl: './delete.dialog.html',
})
export class LabelDeleteDialog implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<LabelDeleteDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Label) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close(this.data);
  }
}