export abstract class DomainError extends Error {
  protected constructor(error: any) {
    super(`*** DOMAIN ERROR --> ${error} ***`);
  }
}

export class InvalidUniqueId extends DomainError {
  constructor() {
    super('Invalid UniqueId');
  }
}

export class InvalidEmail extends DomainError {
  constructor() {
    super('Invalid Email');
  }
}

export class InvalidUserName extends DomainError {
  constructor() {
    super('Invalid UserName');
  }
}
