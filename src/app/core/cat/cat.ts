import {CatAge, CatColor, CatGender, CatName} from './valueObjects';

export class Cat {
  private constructor(
    public readonly name: CatName,
    public readonly color: CatColor,
    public readonly age: CatAge,
    public readonly gender: CatGender
  ) {
  }

  static create(name: string, color: string, age: number, gender: string): Cat {
    const newColor = CatColor.create(color);
    return new Cat(CatName.create(name, newColor), newColor, CatAge.create(age), CatGender.create(gender, newColor));
  }
}
