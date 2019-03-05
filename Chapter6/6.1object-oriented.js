var o1 = {a: 1};
var o2 = {a: 1};
// console.log(o1 === o2);

var o = {
  d: 1,
  f: function () {
    console.log(this.d);
  }
};
o.b = 2;
// console.log(o.d, o.b);

var person = {};
Object.defineProperty(person, "name", {
  value: "Nicholas",
  writable: true
});
// console.log(person.name);
person.name = "Greg";
// console.log(person.name);

var person1 = {};
Object.defineProperty(person1, "name", {
  configurable: false,
  value: "kaka"
});
// console.log(person1.name);
delete person1.name;
// console.log(person1.name);

Object.defineProperty(person1, "name", {
  writable: false
});
person1.name = "messi";
// console.log(person1.name);
// console.log(Object.getOwnPropertyDescriptor(person1, "name"));

var o = {a: 1};
o.b = 2;
// console.log(Object.getOwnPropertyDescriptor(o, "a"));
// console.log(Object.getOwnPropertyDescriptor(o, "b"));


var o1 = {get a() {return 1}};
// console.log(o1.a);

var mySymbol = Symbol("my symbol");
var o = new Object

o[Symbol.iterator] = function() {
  var v = 0;
  return {
    next: function() {
      return { value: v++, done: v > 10 }
    }
  }
};

for(var v of o)
  console.log(v); // 0 1 2 3 ... 9

Symbol.prototype.hello = () => console.log('hello');

var a = Symbol("a");
console.log(typeof a);
a.hello();

var symbolObject = (function(){ return this; }).call(Symbol("a"));

console.log(typeof symbolObject); //object
console.log(symbolObject instanceof Symbol); //true
console.log(symbolObject.constructor == Symbol); //true

var symbolObject = Object(Symbol("a"));

console.log(Object.prototype.toString.call(symbolObject)); //[object Symbol]
console.log(typeof Object.prototype.toString.call(symbolObject)); //string

var o = {
  valueOf : () => {console.log("valueOf"); return {}},
  toString : () => {console.log("toString"); return {}}
}

o[Symbol.toPrimitive] = () => {console.log("toPrimitive"); return "hello"}


console.log(o + "")
// toPrimitive
// hello


