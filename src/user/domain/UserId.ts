import { InvalidArgument } from '../../shared/domain/exceptions/InvalidArgument';

export class UserId {
  constructor(readonly value: string) {
    this.ensureIdIsValid(value);
  }

  private ensureIdIsValid(value: string): void {
    if (!value) {
      throw new InvalidArgument(`${this.constructor.name} is required`);
    }
  }
}
