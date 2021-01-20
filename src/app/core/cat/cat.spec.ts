import {CatAge, CatColor, CatGender, CatName} from './valueObjects';
import {Cat} from './cat';

describe('cat', () => {
  const cat = Cat.create('Kali', CatColor.list.orange, 3, CatGender.list.male);

  it('should be a valid entity', () => {
    expect(cat).toBeTruthy();
  });

  describe('CatName', () => {
    it('should be valud', () => {
      expect(cat.name.value).toEqual('Kali');
    });

    it('cannot start with A when black cat', () => {
      expect(Cat.create('Kali', CatColor.list.black, CatAge.minAge, CatGender.list.male)).toBeTruthy();
      expect(() => Cat.create('Albert', CatColor.list.black, CatAge.minAge, CatGender.list.male)).toThrow();
    });
  });

  it('should have a valid color', () => {
    expect(cat.color.value).toEqual('orange');
    expect(() => Cat.create('Kali', 'orangeeee', CatAge.minAge, CatGender.list.male)).toThrow();
  });

  it('age should be valid age', () => {
    expect(cat.age.value).toEqual(3);
    expect(() => Cat.create('Kali', CatColor.list.black, CatAge.minAge - 1, CatGender.list.male)).toThrow();
    expect(() => Cat.create('Kali', CatColor.list.black, CatAge.maxAge + 1, CatGender.list.male)).toThrow();
  });

  it('gender should be valid', () => {
    expect(cat.gender.value).toEqual(CatGender.list.male);
  });
  it('gender cannot be male when tricolor', () => {
    expect(() => Cat.create('Kali', CatColor.list.tricolor, 3, CatGender.list.male)).toThrow();
  });
});
