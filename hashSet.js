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
        return;
    }

    
  }
}


module.exports = HashSet