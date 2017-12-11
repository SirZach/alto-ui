import { Label, Document } from '../../../model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'document-label',
  templateUrl: './document-label.dialog.html',
})
export class DocumentLabelDialog implements OnInit {
  label = new FormControl('', [Validators.required]);

  constructor(
    public dialogRef: MatDialogRef<DocumentLabelDialog>,
    @Inject(MAT_DIALOG_DATA) public document: Document) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    // this.label.setValue();
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.label.markAsTouched();

    if (this.label.valid) {
      // new value is this.label.value
      this.dialogRef.close(this.document);
    }
  }
}