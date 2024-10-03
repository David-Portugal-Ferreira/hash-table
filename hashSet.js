class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
    this.nextNode = nextNode;
  }
}

class HashSet {
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

  set(key) {
    if (this.occupied / this.capacity >= this.loadFactor) {
      this.resize();
    }

    let index = this.hash(key);

    if (this.buckets[index] === null) {
      this.buckets[index] = new Node(key);
      this.occupied++;
      return;
    } else {
      let tmp = this.buckets[index];

      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
      }
      tmp.nextNode = new Node(key);
      this.occupied++;
    }
  }

  has(key) {
    let index = this.hash(key);

    return this.buckets[index] ? true : false;
  }

  remove(key) {
    let index = this.hash(key);
    if (this.buckets[index].key === key) {
      this.buckets[index] = this.buckets[index].nextNode || null;
      this.occupied--;
      return;
    }

    let tmp = this.buckets[index].nextNode;
    let prev = this.buckets[index];

    while (tmp !== null) {
      if (tmp.key === key) {
        prev.nextNode = tmp.nextNode || null;
        this.occupied--;
        return;
      }
      prev = tmp;
      tmp = tmp.nextNode;
    }

    console.log("The given key does not exists");
  }

  length() {
    return this.occupied;
  }

  clear() {
    this.buckets = Array(16).fill(null);
  }

  keys() {
    let allKeys = [];

    this.buckets.forEach((bucket) => {
      while (bucket !== null) {
        allKeys.push(bucket.key);
        bucket = bucket.nextNode;
      }
    });
    return allKeys;
  }

  resize() {
    this.capacity *= 2;

    let oldBucket = this.buckets;
    this.buckets = Array(this.capacity).fill(null);
    this.occupied = 0;

    oldBucket.forEach((bucket) => {
      while (bucket !== null) {
        this.set(bucket.key);
        bucket = bucket.nextNode;
      }
    });
  }
}

module.exports = HashSet;
