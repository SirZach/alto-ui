import { Label } from './label';

export class Document {
  id: number;
  title: string;
  html: string;
  appliedLabel: Label;

  constructor(fields: Partial<Document>) {
    Object.assign(this, fields);
  }
}