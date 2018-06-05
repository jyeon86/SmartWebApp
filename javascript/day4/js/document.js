
//id를 이용해 element를 검색, 스타일변경
var h1 = document.getElementById('hid');
h1.style.color = 'red';
h1.style.fontSize = '80px';
h1.style.fontWeight = '100px';



function fontColorBlue(){
  //class를 이용해 element를 검색, 스타일변경
var h2 = document.getElementsByClassName('hclass');
h2[0].style.color = 'blue';  
}

 // .hclass 셀렉터를 가진 객체를 찾음
var h3 = document.querySelectorAll('.hclass');
for(var i=0; i< h3.length; i++){
    h3[i].style.fontSize = '100px';
}

document.write('hha');
//꾸 ㄹ 잼;


//DOM트리를 기억해야함.
//h1태그 생성: header
var header = document.createElement('H1')
//택스트 노드 생성
var text = document.createTextNode('생성');
//텍스트 노드를 H1 태그에 붙임
header.appendChild(text);
//h1태그를 body태그에 붙임
document.body.appendChild(header);



header.setAttribute('value','생성');//setAttribute는 속성을 추가하는 함수




