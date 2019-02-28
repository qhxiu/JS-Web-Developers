function sayHi(name, message) {
  console.log("Hello " + name + "," + message);
}
// sayHi("Nicholas", "how are you today?");

function sum (num1, num2) {
  return num1 + num2;
}
var result = sum(5, 10);

//理解参数
function sayHi(name, message) {
  console.log("Hello " + arguments[0] + "," + arguments[1]);
}
// sayHi("Nicholas", "how are you today?");

function doAdd(num1, num2) {
  arguments[1] = 10;
  console.log(arguments[0] + num2);
}
doAdd(10, 5);