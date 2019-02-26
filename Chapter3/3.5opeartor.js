var age = 29;

var num1 = 2;
var num2 = 20;
var num3 = --num1 + num2; //21
var num4 = num1 + num2; //21

++age;  // 30

var num5 = 2;
var num6 = 20;
var num7 = num5-- + num6; // 22
var num8 = num5 + num6; //21

var s1 = "2";
var s2 = "z";
var b = false;
var f = 1.1;
var o = {
  valueOf: function () {
    return -1;
  }
};

s1++; // 3
s2++; // NaN
b++;  //1
f--;  //0.1
o--;  //-2


var n = -18;
n.toString(2);


// 按位非: 返回数值的反码，本质是操作数的负值减1
var num9 = 25;
var num10 = ~num9;  // 26
// 25的二进制是11001，反码是100110，根据二进制补码的步骤，反向操作，先加一，再反码，得到-26

// 按位与：将两个数值的每一位对齐，然后根据下表中的规则，对相同位置上的两个数执行AND操作，
// 两个数值的对应位都是1时才返回1，任何一个是0，结果都是0
var num11 = 25 & 3; //1

// 按位或: 将两个数值的每一位对齐，在有一个位是1的情况下就返回1，只有两个位都是0的情况下返回0
var num12 = 25 | 3; //27

// 按位异或：在两个数值对应位上只有一个1时才返回1，如果对应的两位都是1或0，则返回0
var num13 = 25 ^ 3; // 26

// 左移
var oldValue = 2;
var newValue = oldValue << 5;  //64

// 有符号右移
var oldValue1 = -18;
var newValue1 = oldValue1 >> 5; //-1

// 无符号右移
var oldValue2 = -64;
var newValue2 = oldValue2 >>> 5;  //134217726

//加法
var result1 = 5 + "5";  //"55"

// 减法
var result2 = 5 - true; // 4
var result3 = NaN - 1;  //NaN
var result4 = 5 - ""; //5;
var result5 = 5 - "2"; //3;
var result6 = 5 - null; //5;

// 相等
var result7 = ("55" == 55); //true
var result8 = ("55" === 55); //false
var result9 = (null == undefined); //true
var result10 = (null === undefined); //false
