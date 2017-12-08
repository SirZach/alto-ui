import { Document } from './document';

export class DocumentGroup {
  id: number;
  documents: Document[];
  themes: string[]

  constructor(fields: Partial<DocumentGroup>) {
    Object.assign(this, fields);
  }
}