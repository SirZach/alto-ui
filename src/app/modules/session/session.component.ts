import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Label, DocumentGroup, Document } from '../../model';

let counter = 1;
function getDocuments(): Document[] {
  return [
    new Document({id: 1, title: 'a document title' }),
    new Document({id: 2, title: 'a document title' }),
    new Document({id: 3, title: 'a document title' }),
    new Document({id: 4, title: 'a document title' }),
    new Document({id: 5, title: 'a document title' })
  ];
}
function getDocumentGroup(): DocumentGroup {
  return new DocumentGroup({
    id: counter++,
    themes: ['cat', 'dog', 'mouse'],
    documents: getDocuments()
  });
}
function getDocumentGroups(): DocumentGroup[] {
  return [
    getDocumentGroup(),
    getDocumentGroup(),
    getDocumentGroup(),
    getDocumentGroup(),
    getDocumentGroup(),
    getDocumentGroup()
  ];
}

@Component({
  selector: 'session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  labels: Label[] = [
    { id: 1, name: 'Football' },
    { id: 2, name: 'Soccer' },
    { id: 3, name: 'Tennis' },
    { id: 4, name: 'Basketballs' }
  ] as Label[];

  labelProgress: number = 80;

  documentGroups: DocumentGroup[];

  ngOnInit() {
    this.documentGroups = getDocumentGroups();
  }
}
