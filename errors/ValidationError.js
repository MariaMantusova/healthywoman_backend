export default class ValidationError extends Error {
  constructor() {
    super();
    this.name = 'ValidationError';
    this.statusCode = 401;
    this.message = 'Validation error';
  }
}
