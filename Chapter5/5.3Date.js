var now = new Date();
// console.log(now); //2019-03-01T13:47:54.074Z

var someDate = new Date(Date.parse("May 25, 2004"));
// console.log(someDate);  //2004-05-24T16:00:00.000Z

var y2k = new Date(Date.UTC(1995, 7, 20, 23, 30));
// console.log(y2k); //1995-08-20T23:30:00.000Z

var allFives = new Date(1995, 7, 20, 23, 30);
// console.log(allFives);  //1995-08-20T15:30:00.000Z

// console.log(now.toLocaleTimeString());  //21:56:31