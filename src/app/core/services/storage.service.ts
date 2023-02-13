import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(arg0: string, token: any) {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  get(key: string) {
    return localStorage.getItem(key);
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }
}
