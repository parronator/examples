import {InvalidEmail} from './domainError';
import {ValueObject} from './valueObject';

export class Email implements ValueObject {
  private constructor(public value: string) {
  }

  public static validate(value: string): boolean {
    const regexp = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,253}[a-zA-Z0-9])?)*$/);
    return regexp.test(value);
  }

  public static new(value: string): Email {
    if (!Email.validate(value)) {
      throw new InvalidEmail();
    }
    return new Email(value);
  }
}
