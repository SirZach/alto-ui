import { Label } from './../../../../model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'add-dialog',
  templateUrl: './add.dialog.html',
})
export class LabelAddDialog implements OnInit {
  label = new FormControl('', [Validators.required]);
  data: Label = new Label({});

  constructor(
    public dialogRef: MatDialogRef<LabelAddDialog>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.label.markAsTouched();

    if (this.label.valid) {
      this.data.name = this.label.value;
      this.dialogRef.close(this.data);
    }
  }
}