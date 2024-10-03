class Node {
  constructor(key = null, value = null, nextNode = null) {
    this.key = key;
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
    if (this.occupied / this.capacity >= this.loadFactor) {
      this.resize();
    }

    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let hasKey = this.has(key);
    if (hasKey) {
      let node = this.buckets[index];

      while (node !== null) {
        if (node.key === key) {
          node.value = value;
          return
        }
        node = node.nextNode;
      }
    }

    if (this.buckets[index] === null) {
      this.buckets[index] = new Node(key, value);
      return;
    }

    let tmp = this.buckets[index];
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    tmp.nextNode = new Node(key, value);
    this.occupied++;
  }

  get(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let tmp = this.buckets[index] || null;

    while (tmp !== null) {
      if (tmp.key === key) {
        return tmp.value;
      }
      tmp = tmp.nextNode;
    }

    if (tmp === null) {
      return "No such key in the hashmap";
    }
  }

  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    return this.buckets[index] === null ? false : true;
  }

  remove(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let hasKey = this.has(key);
    if (!hasKey) {
      return "The key to be removed, does not exists";
    }

    if (this.buckets[index].nextNode === null) {
      this.buckets[index] = null;
      return;
    }

    let tmp = this.buckets[index].nextNode;
    let prevNode = this.buckets[index];
    while (tmp !== null) {
      if (tmp.key === key) {
        prevNode.nextNode = tmp.nextNode || null;
        return;
      }
      prevNode = tmp;
      tmp = tmp.nextNode;
    }
  }

  length() {}

  clear() {}

  keys() {}

  values() {}

  entries() {}

  resize() {
    this.capacity *= 2;

    let oldBucket = this.buckets;
    this.buckets = Array(this.capacity).fill(null);

    oldBucket.forEach((bucket, index) => {
      // console.log(bucket)
      if (bucket === null) {
        this.buckets[index] = null;
        return;
      } else {
        this.set(bucket.key, bucket.value);
      }

      while (bucket.nextNode !== null) {
        this.set(bucket.nextNode.key, bucket.nextNode.value);
        bucket = bucket.nextNode;
      }
    });
  }
}

module.exports = HashMap;
