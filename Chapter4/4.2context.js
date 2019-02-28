//作用域
var color = "blue";
function changeColor() {
  if (color === "blue") {
    color = "red";
  } else {
    color = "blue"
  }
}
changeColor();
// console.log("Color is now " + color); //Color is now red

//局部作用域中定义的变量可以在局部环境中与全局变量互换使用
var color1 = "blue";
function changeColor1() {
  var anotherColor = "red";

  function swapColors() {
    var tempColor = anotherColor;
    anotherColor = color1;
    color1 = tempColor;
  }
  swapColors();
}
changeColor1();

for (var i = 0; i < 10; i++) {}
// console.log(i); //10