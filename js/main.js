$(document).ready(function() {
    $(".sandwitch-menu").click(function() {
        $(".backdrop").css("display","initial");
        $(".sidedrawer").css({"transform":"translateX(0)"});
    })

    $(".backdrop").click(function() {
        $(".backdrop").css("display","none")
        $(".sidedrawer").css({"transform":"translateX(1000%)"});
    }  )

    $(".sidedrawer-close").click(function() {
        $(".backdrop").css("display","none")
        $(".sidedrawer").css({"transform":"translateX(1000%)"});
    }  )

    
})