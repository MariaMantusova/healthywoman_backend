import NotFoundError from '../errors/NotFoundError.js';
import ValidationError from '../errors/ValidationError.js';

export default function handleError(err) {
  switch (true) {
    case err.name === 'CastError':
    case err.name === 'ValidationError': {
      return new ValidationError();
    }
    case err.name === 'NotFoundError': {
      return new NotFoundError();
    }
    default: {
      return err;
    }
  }
}
