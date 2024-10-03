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
    let index = this.hash(key);

    if(this.buckets[index] === null) {
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
    let hasKey = this.has(key);
    if(!hasKey) {
        console.log("No such key inside the hashSet");
        return
    }

    let index = this.hash(key)
    if(this.buckets[index].key === key) {
        this.buckets[index] = this.buckets[index].nextNode || null;
        return;
    }

    let tmp = this.buckets[index].nextNode;
    let prev = this.buckets[index];

    while (tmp !== null) {
        if (tmp.key === key) {
            prev.nextNode = tmp.nextNode || null;
            return;
        }
        prev = tmp;
        tmp = tmp.nextNode;
    }  
  }

  length() {
    return this.occupied;
  }
}


module.exports = HashSet