import {LocalStorageService, StorageService} from '../../shared/infrastructure/storage';
import {Bucket} from '../domain/bucket';
import {BucketFacade} from '../domain/bucketFacade';

class BucketStorage implements BucketFacade {
  constructor(private storageService: StorageService = new LocalStorageService()) {}

  public create(name: string): Promise<Bucket> {
    const bucket = Bucket.create(name);
    this.storageService.setItem('bucket', bucket);
    return new Promise((resolve) => resolve(bucket));
  }
}

describe('BucketLocalStorage', () => {
  let bucketStorage: BucketStorage;

  beforeEach(() => {
    bucketStorage = new BucketStorage();
  });

  it('should store new bucket', async () => {
    await bucketStorage.create('asdwa');
    expect(JSON.parse(localStorage.getItem('bucket') || '')).toEqual({waterLevel: 0, name: {value: 'asdwa'}, light: false});
  });
});
