var num1 = 10;
var num2 = 20;
var op = '+';
var result =0;

switch(op){
case '+': 
result = num1 + num2; 
break;
case '-': 
result = num1 - num2; 
break;
case '*': 
result = num1 * num2; 
break;
case '/': 
result = num1 / num2; 
break;

default: 
console.log("연산자잘못입력"); break;
}

console.log(num1 + op + num2 + "= " +result);