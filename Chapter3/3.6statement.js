// for-in
for(var propName in null) {
  console.log(window[propName]);
}

//label
start: for (var i = 1; i < 10; i++) {
  // console.log(i)
}

var num = 0;
for(var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    break;
  }
  num++;
}
// console.log(num); //4

var num = 0;
for(var i = 1; i < 10; i++) {
  if (i % 5 === 0) {
    continue;
  }
  num++;
}
// console.log(num); //8

var num = 0;
outermost:
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    if (i == 5 && j == 5) {
      continue outermost; //跳出内层循环
    }
    num++;
  }
}
// console.log(num); //99

var num = 0;
outermost:
  for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
      if (i == 5 && j == 5) {
        break outermost; //要返回到的标签，跳出内外部循环
      }
      num++;
    }
  }
  // console.log(num); //55

//with
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;

with(location) {
  var qs = search.substring(1);
  var hostName = hostname;
  var url = href;
}

// switch
var i = 25;
switch(i) {
  case 25:
    console.log("25");
    break;
  case 35:
    console.log("35");
    break;
  case 45:
    console.log("45");
    break;
  default:
    console.log("Other");
}
