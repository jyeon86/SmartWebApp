//소수인지 판별하는 예제
var num= 197;
var cnt= 0;
for ( i = 1; i<=num ; i++){
    if(num%i==0){
        cnt++;
    }
}
if  (cnt>=3)
console.log("num은 소수가 아님");
else
console.log("num은 소수");







///////////////////////////////////////////////////

var arr = [100,200,300];
var sum = 0;
for(items in arr){
    sum += arr[items];
}
console.log(arr.join("+")+"="+sum);


//////////////////////////////////////////////////
var arr2 = {A:10, B:20, C:30};
for(items in arr2){
    console.log("key : " + items + ", value : " + arr2[items]);
}


/////////////////////최대공약수//////////////////// 

var a=8,b=12;
var G1=0;
console.log("a = " + a + "\nb = " + b)

for(i=1 ; i<=a ; i++)
    if(a%i == 0 && b%i == 0)
        G=i;

console.log("최대공약수는 : " + G)


/////////////////////최소공배수/////////////////////

var c=10, d=15;
var G1=0, L1=0;

for(i=1 ; i<=a ; i++)
    if(c%i == 0 && d%i == 0)
        G1=i;
    
L1=(c*d)/G1;

console.log("최소공배수는 : " + L1);

//////////////////////////////////////////////////////
var num2=10, num1=15;
var lcm=1;
for(i=num1; i<= num1 * num2; i += num1){
    if(i%num2==0){
        lcm= i;
        break;}
    }

console.log("최소공배수는 : " + lcm);

//////////////////////////////////////////////////////
 cnt1= prompt("트리의 세로를 입력하세요");
 cnt1= 1*cnt1;
var tmp = "";
for(i=1; i<=cnt1; i++ ){
    for (j=1;cnt1-i;j++){
       tmp += " ";
    }

    for (j=1; j<=2*i-1; j++){
       tmp += "*"
    }
       console.log("tmp")
       tmp="";
}
