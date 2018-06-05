/*
function cbl(){
    var str = document.getElementsByClassName('ex');
    for(var i =0; i<str.length; i++ )
        str[i].style.color='blue';
}
function cbk(){
    var str = document.getElementsByClassName('ex');
    for(var i =0; i<str.length; i++ )
        str[i].style.color='black';    
}
function cye(){
    var str = document.getElementsByClassName('ex');
    for(var i =0; i<str.length; i++ )
        str[i].style.color='yellow';    
}
*/

function cblu(){
    var str1 = document.getElementById('no1');
    str1.style.color='blue';
}
function cbku(){
    var str1 = document.getElementById('no1');
    str1.style.color='black';    
}
function cyeu(){
    document.getElementById('no1').style.color='yellow';    
}
function setColorById(id,color){
    document.getElementById(id).style.color = color;    
}
function setColorByClassName(className, color){
    var str = document.getElementsByClassName(className);
    for(var i =0; i<str.length; i++ )
        str[i].style.color=color;  
}
function setButtonColor(className,color){
    var allTitle = document.getElementsByClassName(className);
    for(var i=0; i<allTitle.length; i++){
        allTitle[i].style.border = 'none';
        allTitle[i].style.backgroundColor = 'color';
        allTitle[i].style.color = color;
        allTitle[i].style.fontWeight ='700';
    }
}
function setBtn(className){
    
    var buttons = document.getElementsByClassName(className);
    for(var i=0; i<buttons.length; i++){
        buttons[i].style.border = 'none';
        buttons[i].style.color = 'white';
        buttons[i].style.fontWeight ='700';
    }
}
function setBtnColor(className,color){
    setBtn('btn1');
    var buttons = document.getElementsByClassName(className);
    for(var i=0; i<buttons.length; i++)
    buttons[i].style.backgroundColor = color;
}



