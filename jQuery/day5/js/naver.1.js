$(function() {
    var count = $('#rank-list li').length;
    var height = $('#rank-list li').height();

    function step(index) {
        if(index !=0){
        $('#rank-list ol').delay(2000).animate({top: -height * index,}, 500, function() {
            step((index + 1) % count);
        });}
        else{
        $('#rank-list ol').delay(2000).animate({
                top: -height * index,
            }, 0, function() {
                step((index + 1) % count);
            });

        }
    }

    step(1);
});

$('#realSearch').con('hover', function(){
    $('#rank-list ol').toggleClass('search-hover');
    alert('test');
});

$(document).ready(function(){
    $("#rank-list a").hover(function(){
        $(".search-hover").toggleClass('display-block');
    });
    $("#autoSearch").hover(function(){
        $(".search-hidden").toggleClass('display-block');
    })
});

$(document).ready(function(){
    $('naverJunior').hover(function(){
        $('#red').toggleClass('red');
        $('#blue').toggleClass('blue');
        $('#greengreen').toggleClass('greengreen');
        $('#green').toggleClass('green');
    })
})
$(document).ready(function(){
    $("#rank-list a").hover(function(){
        $(".search-hover").toggleClass('display-block');
    });
    $("#autoSearch").hover(function(){
        $(".search-hidden").toggleClass('display-block');
        $(".up").toggleClass('display-none')
        $(".down").toggleClass('display-none')
    })
});