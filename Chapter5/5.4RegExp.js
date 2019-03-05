var pattern1 = /[bc]at/i;
var pattern2 = /\[bc\]at/i;
var pattern3 = /.at/gi;
var pattern4 = /\.at/gi;

var re = null,
  i;
for (i = 0; i < 10; i++) {
  re = /cat/g;
  // console.log(re.test("catastrophe"));
}

for (i = 0; i < 10; i++) {
  re = new RegExp("[bc]at", "g");
  // console.log(re.test("catastrophe"));
}

var text = "000-00-0000";
var pattern = /\d{3}-\d{2}-\d{4}/;
console.log(pattern.test(text));

