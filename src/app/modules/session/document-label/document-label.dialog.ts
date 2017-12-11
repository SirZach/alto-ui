import { Label, Document } from '../../../model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'document-label',
  templateUrl: './document-label.dialog.html',
  styleUrls: ['./document-label.dialog.scss']
})
export class DocumentLabelDialog implements OnInit {
  label = new FormControl('', []);
  document: Document;
  labels: Label[];
  selectLabel: Label;

  constructor(
    public dialogRef: MatDialogRef<DocumentLabelDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.document = data.document;
    this.labels = data.labels;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    if (this.document.appliedLabel) {
      this.selectLabel = this.document.appliedLabel;
    }
  }

  cancel() {
    this.dialogRef.close();
  }

  save(selectLabel: Label) {
    let label: Label;

    if (selectLabel) {
      label = selectLabel;
    } else {
      label = this.labels.find(l => this.label.value === l.name);
    }

    if (label) {
      this.dialogRef.close(label);
    }
  }
}