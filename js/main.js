$(document).ready(function(){ 
    $('#header').load('header.html');
    $('#footer').load('footer.html');
});

//event poster
$(document).ready(function(){
    var e_temp = "Event ";
    for(var i=1;i<10;i++){
        var e_name = e_temp+i;
        var e_code = "<div class=\"col-md-3 col-sm-4 col-xs6\"><div class=\"event-poster\"><img class=\"poster-img\" src=\"images/1.jpg\"><div class=\"event-name\">"+e_name+"</div></div></div>";
        $('.events').append(e_code);
    }
});
//poster over

//circle
$(document).ready(function(){
    var t_temp = "<div class=\"col-md-3 col-sm-4 col-xs-12\"><div><div class=\"container circle\"></div><div class=\"container circle-overlay\"></div><p class=\"text-center\">Keval Navadiya</p></div></div>";
    for(var i=1;i<10;i++){
        $('.team').append(t_temp);
    }
    $('.circle-overlay').hide();
    $('.circle').mouseover(function(){
        $('.circle').hide();
        $('.circle-overlay').show();
    });
    $('.circle-overlay').mouseout(function(){
        $('.circle').show();
        $('.circle-overlay').hide();
    });
});
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
