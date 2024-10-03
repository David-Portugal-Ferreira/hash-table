const HashMap = require("./hashMap");
const HashSet = require("./hashSet")

/* const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");

test.set("dog", "red");
test.set("god", "yellow");
test.set("odg", "orange");

test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");
test.set('moon', 'silver')
console.log(test.buckets)

console.log(test.get("lion"))
console.log(test.has("lion"))
console.log(test.remove("lion"))
console.log(test.buckets)
console.log(test.length())
console.log(test.keys())
console.log(test.values())
console.log(test.entries())
test.clear();
console.log(test.buckets);
 */

let test = new HashSet();

test.set("apple");
test.set("banana");
test.set("carrot");
test.set("dog");
test.set("elephant");
test.set("frog");
test.set("grape");
test.set("hat");
test.set("ice cream");
test.set("jacket");
test.set("kite");
test.set("lion");
// test.set("god");
// console.log(test.keys())
console.log(test.length())
// test.set("moon");
test.remove("lion")
console.log(test.buckets)
console.log(test.length())