var cat = {
  say() {
    console.log("meow~");
  },
  jump() {
    console.log("jump");
  }
};

var tiger = Object.create(cat, {
  say: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: function () {
      console.log("rora!");
    }
  }
});

var anotherCat = Object.create(cat);
// anotherCat.say();

var anotherTiger = Object.create(tiger);
// anotherTiger.say();

var o = new Object;
var n = new Number;
var s = new String;
var b = new Boolean;
var d = new Date;
var arg = function(){ return arguments }();
var r = new RegExp;
var f = new Function;
var arr = new Array;
var e = new Error;
// console.log([o, n, s, b, d, arg, r, f, arr, e].map(v => Object.prototype.toString.call(v)));

var o = { [Symbol.toStringTag]: "MyObject" }
// console.log(o + "");

function c1() {
  this.p1 = 1;
  this.p2 = function () {
    console.log(this.p1);
  }
}

var o1 = new c1;
// o1.p2();

function c2() {}
c2.prototype.p1 = 1;
c2.prototype.p2 = function () {
  console.log(this.p1);
};
var o2 = new c2;
// o2.p2();

//与es6的 Object.create 做不到一致，所以意义不大
Object.create = function (prototype) {
  var cls = function () {};
  cls.prototype = prototype;
  return new cls;
};

//es6中的类，function回归原本的函数语义
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name)
  }
  speak() {
    console.log(this.name + ' barks.');
  }
}

let dog = new Dog('Mitzie');
// dog.speak();

// console.log(new Date());  //2019-03-05T16:31:29.230Z
// console.log(Date());  //Wed Mar 06 2019 00:31:29 GMT+0800 (GMT+08:00)

// console.log(new Image);
// console.log(Image()); //抛出错误

function fun() {
  return 1;
}
// 把函数作为函数调用
var v = fun();
// 把函数作为构造器调用
var o3 = new fun();
console.log(v); // 1
console.log(o3); //fun {}

function cls() {
  this.a = 100;
  return {
    getValue: () => this.a
  }
}

var o4 = new cls();
console.log(o4.getValue());
