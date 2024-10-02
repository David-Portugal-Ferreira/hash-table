class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class HashMap {
  constructor() {
    this.buckets = new Array(16).fill(null);
    this.loadFactor = 0.75;
    this.capacity = this.buckets.length;
    this.occupied = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  set(key, value) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.buckets[index] === null) {
      let node = new Node({ key, value });
      this.buckets[index] = node;
    } else {
      let tmp = this.buckets[index];
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node({ key, value });
    }
  }

  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    return this.buckets[index] || null;
  }

  has(key) {}

  remove(key) {}

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}
}

// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }

module.exports = HashMap;
