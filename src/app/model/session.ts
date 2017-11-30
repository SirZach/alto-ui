export class Session {
  id: number;
  username: string;
  createdAt: Date;

  constructor(fields: Partial<Session>) {
    Object.assign(this, fields);
  }
}