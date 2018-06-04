function Student() {
    this.name;
    this.grade;
    this.clas;
    this.number;
    this.toString = function(){//학년 반이름정보를 한개의 글로만드는메소드
        return " 이름: " + this.name + ", 학년: "  + this.grade + ", 반 :"+ this.clas + ", 번호:"+ this.number;}
}//이름 학년 반 번을 저장하고 있는 클래스

function Student(name,grade,clas,number) {
    this.name;
    this.grade;
    this.clas;
    this.number;
    this.toString = function(){//학년 반이름정보를 한개의 글로만드는메소드
        return " 이름: " + this.name + ", 학년: "  + this.grade + ", 반 : "+ this.clas + ", 번호: "+ this.number;}
}//이름 학년 반 번을 저장하고 있는 클래스

var std1 = new Student();
std1.name = "홍길동";
std1.grade = "1";
std1.clas = "1";
std1.number = "10";
console.log(std1.toString() );

var std2 = new Student();
std2.name = "임꺽정";
std2.grade = "1";
std2.clas = "1";
std2.number = "1";
console.log(std2.toString() );

var std3 = new Student("김지연",'1','1','1');

std2.sayHello = function(){
    return " Hello ";
}
console.log(std2.sayHello());

Student.prototype.sayHi = function(){
    return "HI!";
}
console.log(std2.sayHi());

var ts = std2.toString();
var subts = ts.split(', ');

var res = new Array();
for(var i in subts){
    var tmp = subts[i].split(': ');
    res.push(tmp[1]);
}
console.log(res.join(' and '));

