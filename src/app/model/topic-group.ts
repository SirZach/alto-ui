import { Document } from './document';

export class TopicGroup {
  id: number;
  documents: Document[];
  themes: string[]

  constructor(fields: Partial<TopicGroup>) {
    Object.assign(this, fields);
  }
}