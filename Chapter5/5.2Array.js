var values = [1, 2,];
var options = [,,,,,];
// console.log(values);  // [1, 2]
// console.log(options); //[ <5 empty items> ]

var colors = ["red", "green", "blue"];
// console.log(colors[0]); //red

if (Array.isArray(values)) {
  // console.log(true) //true
}

// console.log(values.toString()); //"1, 2"
// console.log(values.toString()); //[1, 2]
var person1 = {
  toLocaleString: function () {
    return "Nikolaos";
  },
  toString: function () {
    return "Nicholas";
  }
};
var person2 = {
  toLocaleString: function () {
    return "Grigorios";
  },
  toString: function () {
    return "Greg";
  }
};
var people = [person1, person2];
// alert(people);  //Nicholas,Greg
// console.log(people.toString()); //Nicholas,Greg
// console.log(people.toLocaleString()); //Nikolaos,Grigorios

// console.log(colors.join(","));  //red,green,blue
// console.log(colors.join("||")); //red||green||blue
// console.log(colors.join()); //red,green,blue
// console.log(colors.join("")); //redgreenblue

var values1 = [1, 2, 3, 4, 10];
values1.reverse();
// console.log(values1); //[ 10, 4, 3, 2, 1 ]

values1.sort();
// console.log(values1); //[ 1, 10, 2, 3, 4 ]

values1.sort(function (x, y) {
  if (x > y) {
    return -1
  } else if (x < y) {
    return 1;
  } else {
    return 0;
  }
});
// console.log(values1); //[ 10, 4, 3, 2, 1 ]

values1.sort(function (value1, value2) {
  return value1 - value2;
});
// console.log(values1); //[ 1, 2, 3, 4, 10 ]

var colors1 = ["red", "green", "blue"];
var colors2 = colors1.concat("yellow", ["black", "brown"]);
// console.log(colors1); //[ 'red', 'green', 'blue' ]
// console.log(colors2); //[ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]

var colors3 = ['red', 'green', 'blue', 'yellow', 'black', 'brown'];
var colors4 = colors3.slice(1);
var colors5 = colors3.slice(1, 4);
// console.log(colors3); //[ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]
// console.log(colors4); //[ 'green', 'blue', 'yellow', 'black', 'brown' ]
// console.log(colors5); //[ 'green', 'blue', 'yellow' ]

var remove = colors3.splice(0, 1);
// console.log(colors3); //[ 'green', 'blue', 'yellow', 'black', 'brown' ]
// console.log(remove);  //[ 'red' ]

remove = colors3.splice(1, 0, "orange");
// console.log(colors3); //[ 'green', 'orange', 'blue', 'yellow', 'black', 'brown' ]
// console.log(remove);  //[]

remove = colors3.splice(1, 1, "red", "purple");
// console.log(colors3); //[ 'green', 'red', 'purple', 'blue', 'yellow', 'black', 'brown' ]
// console.log(remove);  //[ 'orange' ]

var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
// console.log(numbers.indexOf(4));  //3
// console.log(numbers.lastIndexOf(4));  //5

var everyResult = numbers.every(function (t) {
  return t > 2;
});
// console.log(everyResult); //false

var someResult = numbers.some(function (t) {
  return t > 2;
});
// console.log(someResult);  //true

var filterResult = numbers.filter(function (item, index, array) {
  return item > 2;
});
// console.log(filterResult);  //[]3, 4, 5, 4, 3]

var mapResult = numbers.map(function (t) {
  return t * 2;
});
// console.log(mapResult); //[ 2, 4, 6, 8, 10, 8, 6, 4, 2 ]

var values2 = [1, 2, 3, 4, 5];
var sum = values2.reduce(function (p1, p2, number, ts) {
  return p1 + p2;
}, 10);
// console.log(sum); //25