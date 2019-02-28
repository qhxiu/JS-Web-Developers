// 为引用类型添加属性
var person = new Object();
person.name = "Nicholas";
// console.log(person.name); //Nicholas

// 为基本类型添加属性
var name = "Nicholas";
name.age = 27;
// console.log(name.age);  //undefined

// 复制变量值
var num1 = 5;
var num2 = num1;
num1 = 10;
// console.log(num1, num2);  //10, 5

// 复制引用类型值
var obj1 = new Object();
var obj2 = obj1;
obj1.name = "Nicholas";
// console.log(obj2.name); //Nicholas

function addTen(num) {
  num += 10;
  return num;
}
var count = 20;
var result = addTen(count);
// console.log(count); //20
// console.log(result);  //30

function setName1(obj) {
  obj.name = "Nicholas";
}
var person1 = new Object();
setName1(person);
// console.log(person.name); //Nicholas

function setName2(obj) {
  obj.name = 'Nicholas';
  obj = new Object();
  obj.name = "Greg";
}
var person2 = new Object();
setName2(person2);
// console.log(person2.name);  //Nicholas

//检测类型
var s = "Nicholas";
var b = true;
var i = 22;
var u;
var n = null;
var o = new Object();
// console.log(typeof s);  //string
// console.log(typeof i);  //number
// console.log(typeof b);  //boolean
// console.log(typeof u);  //undefined
// console.log(typeof n);  //object
// console.log(typeof o);  //object

//检测引用类型
// console.log(person2 instanceof Object); //true
// console.log(null instanceof Object); //false

