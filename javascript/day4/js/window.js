
var myWindow
function openWindow(){
    //윈도우를 하나연다=윈도우객체1생성
    //윈도우 객체를 만들어서 myWindow저장
    myWindow = window.open("#","myWindow","width=50, height=50, resizeable=yes toolbar=yes, location=yes, menubar=yes, scrollbars=yes, resizable=yes, left=550, top=50");    
}
function closeWindow(){
    //mywindow에 저장된 윈도우 객체를 닫음
    if(myWindow)
    myWindow.close();    
}
function blurWindow(){
    if(myWindow)
    myWindow.blur();    
}
function focusWindow(){
    if(myWindow)
    myWindow.focus();    
}
function checkWindow(){
    if(!myWindow){
    //mywindow==null
        alert('한번도 열린적없음')
    }
    else{
        if(myWindow.closed)
            alert('닫혀있음')
        else
            alert('열려있음')
    }
    myWindow.check();    
}

function moveByWindow(){
    myWindow.moveBy(50,50)
}
function moveToWindow(){
    myWindow.moveTo(50,50)
}
function resizeByWindow(){
    myWindow.resizeBy(50,50)
}
function resizeToWindow(){
    myWindow.resizeTo(50,50)
}
