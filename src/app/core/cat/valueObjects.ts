export class CatColor {
  static list = {
    tricolor: 'tricolor',
    black: 'black',
    orange: 'orange',
    striped: 'striped'
  };

  private constructor(public readonly value: string) {
  }

  static create(value: string): CatColor {
    // @ts-ignore
    if (!CatColor.list[value]) {
      throw new Error();
    }
    return new CatColor(value);
  }
}

export class CatGender {
  static list = {
    male: 'male',
    female: 'female',
  };

  private constructor(public readonly value: string) {
  }

  static create(value: string, color: CatColor): CatGender {
    // @ts-ignore
    if (!CatGender.list[value] || CatGender.checkGenderRegardingColor(value, color)) {
      throw new Error();
    }
    return new CatGender(value);
  }

  static checkGenderRegardingColor(gender: string, color: CatColor): boolean {
    return gender === CatGender.list.male && color.value === CatColor.list.tricolor;
  }
}

export class CatName {
  static notAllowdInitials = ['a'];

  private constructor(public readonly value: string) {
  }

  static create(value: string, color: CatColor): CatName {
    if (
      CatName.notAllowdInitials.includes(value[0].toLowerCase()) && color.value === CatColor.list.black) {
      throw new Error();
    }
    return new CatName(value);
  }
}

export class CatAge {
  static minAge = 0;
  static maxAge = 25;

  private constructor(public readonly value: number) {
  }

  static create(value: number): CatAge {
    if (value < CatAge.minAge || value > CatAge.maxAge) {
      throw new Error();
    }
    return new CatAge(value);
  }
}
