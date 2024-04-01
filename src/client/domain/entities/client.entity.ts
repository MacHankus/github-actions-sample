import { randomUUID } from 'crypto';
import { ValidationError } from 'src/common/errors/validation.error';
import { ZodError, z } from 'zod';

export class Client {
  id: string;
  name: string;
  surname: string;

  constructor(name: string, surname: string, id?: string) {
    this.validateName(name);
    this.validateSurname(surname);
    if (!!id) {
      this.id = id;
    } else {
      this.id = randomUUID();
    }
    this.name = name;
    this.surname = surname;
  }

  validateName(name: string): void {
    try {
      z.string().max(20).parse(name);
    } catch (err) {
      if (err instanceof ZodError) {
        throw new ValidationError('Name parameter is incorrect');
      }
    }
  }
  validateSurname(surname: string): void {
    try {
      z.string().max(20).parse(surname);
    } catch (err) {
      if (err instanceof ZodError) {
        throw new ValidationError('Surname parameter is incorrect');
      }
    }
  }
}
