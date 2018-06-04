var str = new String('Hello world');
console.log(str);
console.log("str length : " + str.length );

//한글자 확인
console.log("str[0] : " + str[0]);
console.log("str.charAt(0) : " + str.charAt(0));

//모두 대문자로
console.log("str.toUpperCase() : " + str.toUpperCase());

//모두 소문자로
console.log("str.toLowerCase() : " + str.toLowerCase());

//문자열 찾기
console.log("str.indexof(\'wo\') : " + str.indexOf('wo'));
console.log("str.indexof(\'ab\') : " + str.indexOf('ab'));
console.log("str.indexof(\'wo\',7) : " + str.indexOf('wo',7));

var str2 = new String("abcdefgabcdefgabcdefg");
//ab가 들어가있는 모든 위치를 찍어보세요.

var str3 = new String("ab");

function indexOfs(str2,str3){
    var index = 0;
    var arr = new Array();

    while(true){
        index = str2.indexOf(str3,index);
        if(index==-1){break}

        arr.push(index);

        console.log(index);
        index = index + str3.length;
    }
    return arr;
}

var res = indexOfs(str2,str3);
console.log(res.join(", "));

//lastindexof거꾸로
console.log("str2.lastIndexOf(str3): " +- str.lastIndexOf(str3));

//search:0번지부터 쭉 다 찾음. index는 원하는부분만찾을수있음.
console.log("str2.search(str3) : " + str2.search(str3));

//substr
console.log("str2.subStr(0,5) :" + str2.substr(1,5));//0부터시작 갯수 5개

//substring
console.log("str2.substring(0,5) :" + str2.substring(1,5));//0부터시작 (5-1)번지까지


//slice:시작부터 
console.log("str2.substring(1,-1) :" + str2.substring(1,-1));//정상동작안함
console.log("str2.substring(1,-1) :" + str2.slice(1,-1));//음수입력시 전체다출력

//splitEx1
var str4 = "123/456/789";
var str5 = str4.split('/');
console.log(str5.join(', '));

//splitEx2
var str5 = "2018.06.04";
var str6 = str5.split('.');
var year = str6[0];
var month = str6[1];
var day = str6[2];
console.log(str5+": "+year+"년 " +month+"월 "+ day+"일 ");