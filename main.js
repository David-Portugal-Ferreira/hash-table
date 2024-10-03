const HashMap = require("./hashMap");
const HashSet = require("./hashSet")
/* 
const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
console.log(test.buckets)
test.set("apple", "white");
test.set("banana", "orange");
test.set("carrot", "yellow");
console.log(test.buckets)
test.set('moon', 'silver')
console.log(test.buckets)

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
console.log(test.buckets)

console.log(test.get("lion"))
console.log(test.has("lion"))
console.log(test.remove("lion"))
console.log(test.length())
console.log(test.keys())
console.log(test.values())
console.log(test.entries())
test.clear();
console.log(test.buckets);
 */

let test = new HashSet();

test.set("carro");
console.log(test.buckets)