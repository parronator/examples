import {InvalidUniqueId} from './domainError';
import {ValueObject} from './valueObject';

export class UniqueId implements ValueObject {
  private constructor(public value: string) {
  }

  public static validate(value: string): boolean {
    return !!value.length;
  }

  public static new(value: string): UniqueId {
    if (!UniqueId.validate(value)) {
      throw new InvalidUniqueId();
    }
    return new UniqueId(value);
  }
}
