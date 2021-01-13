export class BucketName {
  private constructor(public value: string) {}

  public static create(name: string) {
     if (!name.length) { throw new Error(); }

     return new BucketName(name);
  }
}
