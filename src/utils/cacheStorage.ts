import { SickInfos } from '../types';

export class CacheStorage<D> {
  private _storage: Map<string, D>;
  constructor() {
    this._storage = new Map();
  }

  set(key: string, value: D) {
    this._storage.set(key, value);
  }

  get(key: string) {
    return this._storage.get(key);
  }
}

export const cacheStorage = new CacheStorage<SickInfos>();
