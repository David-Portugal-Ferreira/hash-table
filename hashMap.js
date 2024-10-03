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
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    if (this.occupied / this.capacity >= this.loadFactor) {
      this.resize();
    }

    if (this.buckets[index] === null) {
      this.buckets[index] = new Node(key, value);
      this.occupied++;
      return;
    }

    let tmp = this.buckets[index];
    while (tmp !== null) {
      if(tmp.key === key) {
        tmp.value = value;
        return;
      }
      if(tmp.nextNode === null) {
        tmp.nextNode = new Node(key, value);
        this.occupied++;
        return
      }
      tmp = tmp.nextNode;
    }
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

    // return this.buckets[index] === null ? false : true;

    if (this.buckets[index]) {
      let tmp = this.buckets[index];

      while (tmp !== null) {
        if(tmp.key === key) return true;
        tmp = tmp.nextNode;
      }
      if(tmp === null) return false;
    } else {
      return false
    }
  }

  remove(key) {
    let index = this.hash(key);
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bound");
    }

    let tmp = this.buckets[index];
    let prev = null;
    while(tmp !== null) {
      if(prev === null && tmp.key === key) {
          this.buckets[index] = tmp.nextNode;
      } else if (tmp.key === key) {
        prev.nextNode = tmp.nextNode || null;
      }
      prev = tmp;
      tmp = tmp.nextNode;
    }
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
      if (bucket !== null) {
        while(bucket !== null) {
            allKeys.push(bucket.key);
            bucket = bucket.nextNode;
        }
      }
    });

    return allKeys;
  }

  values() {
    let allValues = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        while(bucket !== null) {
            allValues.push(bucket.value);
            bucket = bucket.nextNode;
        }
      }
    });

    return allValues;
  }

  entries() {
    let allEntries = [];

    this.buckets.forEach((bucket) => {
      if (bucket !== null) {
        while(bucket !== null) {
            allEntries.push([bucket.key, bucket.value]);
            bucket = bucket.nextNode;
        }
      }
    });

    return allEntries;
  }

  resize() {
    this.capacity *= 2;

    let oldBucket = this.buckets;
    this.buckets = Array(this.capacity).fill(null);
    this.occupied = 0;

    oldBucket.forEach((bucket, index) => {
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
