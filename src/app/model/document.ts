export class Document {
  id: number;
  title: string;

  constructor(fields: Partial<Document>) {
    Object.assign(this, fields);
  }
}