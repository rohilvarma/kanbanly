export class UserNotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UserNotFoundError";
  }
}

export class MissingValueError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "MissingValueError";
  }
}
