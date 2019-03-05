var person = new Object();
person.name = "Nicholas";
person.age = 29;

var person1 = {
  name: "Nicholas",
  age: 29
};

function displayInfo(args) {
  var output = "";
  if (typeof args.name === 'string') {
    output += "Name: " + args.name + "\n";
  }
  if (typeof args.age === "number") {
    output += "Nmae: " + args.age + "\n";
  }
  // console.log(output);
}
displayInfo({
  name: "Nicholas",
  age: 29
});
displayInfo({
  name: "Greg"
});

