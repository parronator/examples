import {Bucket} from "./domain/bucket";

describe('Bucket', () => {
  const bucket = Bucket.create('i');

  it('should be valid', () => {
    expect(bucket).toBeTruthy();
    expect(bucket.getWaterLevel()).toEqual(0);
    expect(bucket.getName()).toEqual('i');
  });

  it('should throw an error when something is wrong', () => {
    expect(() => Bucket.create('')).toThrow();
  });

  it('should toggle light',() => {
    expect(bucket.getLight()).toBeFalse();
    bucket.toggleLight();
    expect(bucket.getLight()).toBeTrue();
    bucket.toggleLight();
    expect(bucket.getLight()).toBeFalse();
  })
});
