import {BucketName} from './valueObjects';

export class Bucket {
  private constructor(private waterLevel: number, private name: BucketName, private light: boolean) {}

  public static create(name: string) {
    return new Bucket(0, BucketName.create(name), false);
  }

  public getWaterLevel(): number {
    return this.waterLevel;
  }

  public getName(): string {
    return this.name.value;
  }
  public getLight(): boolean {
    return this.light;
  }
  public toggleLight(): void {
    this.light = !this.light;
  }
}
