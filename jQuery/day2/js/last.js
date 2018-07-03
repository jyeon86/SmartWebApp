// append(내용) : 추가할 내용 뒤에
// prepend(내용) : 추가할 내용 뒤에
// (내용).appendTo() : 추가할 내용 들고 검색해서 붙여
// (내용).appendTo() : 추가할 내용 들고 검색해서 붙여
// text() : 텍스트 컨텐츠를 가져온다. 
// after(내용) : 뒤에 추가
// before(내용) : 앞에 추가
// (내용).insertAfter : 뒤에추가
// (내용).insertBefore : 앞에 추가
// wrap() : 하나의 요소를 감싸는 부모 요소 생성
// wrapAll() : 다수의 요소를 감싸는 부모 요소 생성
// unwrap() : 부모요소를 제거
// detach() : 요소를 삭제
// remove() : 요소 및 관련 이벤트  data를 삭제
// empty() : 요소의 모든 자식을 삭제
// clone() : 복사
// replaceAll() : 입력받은 요소를 교체

$('.appleBox').click(function(){
    $('.appleBox').last().after("<div class='appleBox'> 사과 </div>");
    });

$('.del').click(function(){
    $('.appleBox').last().remove();
    });
    

