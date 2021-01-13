export abstract class StorageService {
  public abstract getItem(key: string): any;
  public abstract setItem(key: string, data: any): void;
}

export class LocalStorageService implements StorageService {
  public getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '');
  }

  public setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
