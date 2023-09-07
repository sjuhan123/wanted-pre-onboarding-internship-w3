class PesistentStorage {
  get(key: string) {
    const rawValue = window.localStorage.getItem(key);
    if (!rawValue) {
      return null;
    }
    return JSON.parse(rawValue);
  }

  set<V>(key: string, value: V) {
    const stringifiedValue = JSON.stringify(value);
    window.localStorage.setItem(key, stringifiedValue);
  }
}

export const persistentStorage = new PesistentStorage();
