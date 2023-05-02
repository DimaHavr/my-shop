class Cache {
  constructor() {
    this.cache = new Map();
  }

  async getOrFetch(key, fetchFunc) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }

    const result = await fetchFunc();
    this.cache.set(key, result);

    return result;
  }

  clear() {
    this.cache.clear();
  }
}

const cache = new Cache();
export { cache };
