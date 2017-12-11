import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Label, DocumentGroup, Document } from '../../model';
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

  documentGroups: DocumentGroup[];

  constructor(
    private $label: LabelService,
    private $topicGroup: TopicGroupService,
    public dialog: MatDialog,
    public snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.$topicGroup.getTopicGroups()
      .then(topicGroups => this.documentGroups = topicGroups);
    this.$label.getLabels()
      .then(labels => this.labels = labels);
  }

  openDocument(document: Document) {
    const dialogRef = this.dialog.open(DocumentLabelDialog, {
      width: '450px',
      data: document
    });

    dialogRef.afterClosed().subscribe((document: Document) => {
      if (document) {
        this.snackbar.open('Document labeled', 'Got It', {
          duration: 1000
        });
      }
    });
  }
}
