import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DocumentGroup, Document } from '../../model';

let counter = 1;
function getDocuments(): Document[] {
  return [
    new Document({ id: 1, title: 'a document title', html: `<p> south east south south north </p>` }),
    new Document({ id: 1, title: 'a document title', html: `<p> south east south south north </p>` }),    
    new Document({ id: 1, title: 'a document title', html: `<p> south east south south north </p>` }),    
    new Document({ id: 1, title: 'a document title', html: `<p> south east south south north </p>` }),    
    new Document({ id: 1, title: 'a document title', html: `<p> south east south south north </p>` })    
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

@Injectable()
export class TopicGroupService {
  private URL = `${process.env.API_URL}`;

  constructor(private http: HttpClient) {}

  getTopicGroups(): Promise<DocumentGroup[]> {
    return Promise.resolve(getDocumentGroups());
  }
}