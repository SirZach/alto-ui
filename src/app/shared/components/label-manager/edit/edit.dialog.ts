import { Label } from './../../../../model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'edit-dialog',
  templateUrl: './edit.dialog.html',
})
export class LabelEditDialog implements OnInit {
  label = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<LabelEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Label) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.label.setValue(this.data.name);
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.label.markAsTouched();

    if (this.label.valid) {
      // new value is this.label.value
      this.dialogRef.close(this.data);
    }
  }
}