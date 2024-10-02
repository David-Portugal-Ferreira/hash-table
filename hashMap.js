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
    if(this.occupied / this.capacity >= this.loadFactor) {
        this.resize();
    }

    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let bucketsIndex = this.get(key);

    if (!bucketsIndex) {
      let node = new Node(key, value);
      this.buckets[index] = node;
      this.occupied++;
      return;
    } else {
      while (bucketsIndex !== null) {
        if (bucketsIndex.key === key) {
          bucketsIndex.value = value;
          return
        }
        bucketsIndex = bucketsIndex.nextNode;
      }
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

    return this.buckets[index] || null;
  }

  has(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    return this.buckets[index] === null ? false : true;
  }

  remove(key) {}

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
        if(bucket === null) {
            this.buckets[index] = null;
            return
        } else {
            this.set(bucket.key, bucket.value);
        }

        while (bucket.nextNode !== null) {
            this.set(bucket.nextNode.key, bucket.nextNode.value);
            bucket = bucket.nextNode;
        }
    })
  }
}

module.exports = HashMap;
