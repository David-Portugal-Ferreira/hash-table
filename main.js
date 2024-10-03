const HashMap = require("./hashMap");
const HashSet = require("./hashSet")

const testMap = new HashMap();

testMap.set("apple", "red");
testMap.set("banana", "yellow");
testMap.set("carrot", "orange");

testMap.set("dog", "red");
testMap.set("god", "yellow");
testMap.set("odg", "orange");

testMap.set("dog", "brown");
testMap.set("elephant", "gray");
testMap.set("frog", "green");
testMap.set("grape", "purple");
testMap.set("hat", "black");
testMap.set("ice cream", "white");
testMap.set("jacket", "blue");
testMap.set("kite", "pink");
testMap.set("lion", "golden");
testMap.set('moon', 'silver')
console.log(testMap.buckets)

console.log(testMap.get("lion"))
console.log(testMap.has("lion"))
console.log(testMap.remove("lion"))
console.log(testMap.buckets)
console.log(testMap.length())
console.log(testMap.keys())
console.log(testMap.values())
console.log(testMap.entries())
testMap.clear();
console.log(testMap.buckets);


let testSet = new HashSet();

testSet.set("apple");
testSet.set("banana");
testSet.set("carrot");
testSet.set("dog");
testSet.set("elephant");
testSet.set("frog");
testSet.set("grape");
testSet.set("hat");
testSet.set("ice cream");
testSet.set("jacket");
testSet.set("kite");
testSet.set("lion");
testSet.set("god");
console.log(testSet.keys())
console.log(testSet.length())
testSet.set("moon");
testSet.remove("lion")
console.log(testSet.buckets)
console.log(testSet.length())