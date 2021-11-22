    // Nav Hamburger Button

$(".center").click(function(){
    $(".nav-ul").toggleClass("active");
    $(this).toggleClass("btn-active");
});


    // Blog.html -- read more

$("#l1").click(function(){
    if($(this).html() == "READ MORE"){
        $("#dots1").hide();
        $("#more1").show();
        $(this).html("READ LESS");
    }
    else{
        $("#dots1").show();
        $("#more1").hide();
        $(this).html("READ MORE");
    }
});

$("#l2").click(function(){
    if($(this).html() == "READ MORE"){
        $("#dots2").hide();
        $("#more2").show();
        $(this).html("READ LESS");
    }
    else{
        $("#dots2").show();
        $("#more2").hide();
        $(this).html("READ MORE");
    }
});

$("#l3").click(function(){
    if($(this).html() == "READ MORE"){
        $("#dots3").hide();
        $("#more3").show();
        $(this).html("READ LESS");
    }
    else{
        $("#dots3").show();
        $("#more3").hide();
        $(this).html("READ MORE");
    }
});