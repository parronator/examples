import {Bucket} from './bucket';

export abstract class BucketFacade {
  public abstract create(name: string): Promise<Bucket>;
}
