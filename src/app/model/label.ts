export class Label {
  id: number;
  name: string;
  documents: number[];

  constructor(fields: Partial<Label>) {
    Object.assign(this, fields);
  }
}