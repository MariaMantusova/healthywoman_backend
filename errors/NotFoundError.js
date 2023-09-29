export class NotFoundError extends Error {
  constructor() {
    super();
    this.name = 'NotFoundError';
    this.statusCode = 404;
    this.message = 'Not found';
  }
}
