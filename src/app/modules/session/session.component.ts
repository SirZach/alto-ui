import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Label, TopicGroup, Document } from '../../model';
import {
  LabelService,
  TopicGroupService
} from '../../shared/services';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { DocumentLabelDialog } from './document-label/document-label.dialog';

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  labels: Label[];
  labelProgress: number = 80;
  topicGroups: TopicGroup[];
  labelingDocument: Document;

  constructor(
    private $label: LabelService,
    private $topicGroup: TopicGroupService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.$topicGroup.getTopicGroups()
      .then(topicGroups => this.topicGroups = topicGroups);
    this.$label.getLabels()
      .then(labels => this.labels = labels);
  }

  openDocument(document: Document) {
    this.labelingDocument = document;
  
    const dialogRef = this.dialog.open(DocumentLabelDialog, {
      width: '80vw',
      data: {
        document,
        labels: this.labels
      }
    });

    dialogRef.afterClosed().subscribe((label: Label) => {
      if (label) {
        if (this.labelingDocument.appliedLabel) {
          const documentIndex = this.labelingDocument.appliedLabel.documents.findIndex(d => d.id === this.labelingDocument.id);
          this.labelingDocument.appliedLabel.documents.splice(documentIndex, 1);
        }
        this.labelingDocument.appliedLabel = label;

        if (label.documents) {
          label.documents.push(this.labelingDocument);
        } else {
          label.documents = [this.labelingDocument];
        }

        this.snackbar.open('Document labeled', 'Got It', {
          duration: 1000
        });
      }
    });
  }
}
