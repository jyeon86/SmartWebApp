var number1 = 1/0;
var number2 = -1/0;
var number3 = 10;

console.log("number1 :"+number1);
console.log("number2 :"+number2);
console.log("What is number1:"+isFinite(number2));
console.log("What is number2:"+isFinite(number2));
console.log("What is number3:"+isFinite(number2));

var number4 = 10;
console.log("in NAN number4 : "+isNan(number4))