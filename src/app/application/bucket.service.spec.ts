import {anyString, instance, mock, reset, when} from 'ts-mockito';
import {Bucket} from '../core/bucket/domain/bucket';
import {BucketFacade} from '../core/bucket/domain/bucketFacade';

class BucketService {
  constructor(public bucketFacade: BucketFacade) {}

  public create(name: string): Promise<Bucket> {
    return this.bucketFacade.create(name);
  }
}

const MockBucketFacade = mock<BucketFacade>();

describe('Bucket service', () => {
  let bucketService: BucketService;
  let mockBucketFacade: BucketFacade;

  beforeEach(() => {
    mockBucketFacade = instance(MockBucketFacade);
    bucketService = new BucketService(mockBucketFacade);
  })

  afterEach(() => {
    reset(MockBucketFacade);
  })

  it('should create', async () => {
    const data = 'bucketnamew';
    when(MockBucketFacade.create(anyString())).thenResolve(Bucket.create(data));
    const newBucket = await bucketService.create(data);
    expect(newBucket).toEqual(Bucket.create(data));
  });
});
