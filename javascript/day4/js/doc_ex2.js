var isCreated = false;
function createE(tag,value){     
    if(!isCreated){
        var e =document.createElement(tag);
        //생성된 tag에 속성을 추가 id=text
        e.setAttribute('id','text')
        //텍스트노드 생성
        var t =document.createTextNode(value);
        //생성된 텍스트 노드를 tag에 붙임
        e.appendChild(t);
        //tag를 body에 붙임
        document.body.appendChild(e);
        //생성됐는지 확인하는 변수인 isCreated를 true로 설정
        isCreated = true;
        document.getElementById('btn1').value = '삭제';}
    else{
        var e = document.getElementById('text');
        document.body.removeChild(e);
        isCreated = false;
        document.getElementById('btn1').value = '생성';
    }
}




