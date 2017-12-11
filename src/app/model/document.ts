export class Document {
  id: number;
  title: string;
  html: string;

  constructor(fields: Partial<Document>) {
    Object.assign(this, fields);
  }
}