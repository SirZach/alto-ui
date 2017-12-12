import { Document } from './document';

export class Label {
  id: number;
  name: string;
  documents: Document[];
  color: string;

  constructor(fields: Partial<Label>) {
    Object.assign(this, fields);
  }
}