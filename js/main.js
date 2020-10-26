$(document).ready(function() {
    $(".sandwitch-menu").click(function() {
        $(".backdrop").css("display","initial");
        $(".sidedrawer").css({"transform":"translateY(0)"});
    })

    $(".backdrop").click(function() {
        $(".backdrop").css("display","none")
        $(".sidedrawer").css({"transform":"translateY(-2000%)"});
    }  )

    $(".sidedrawer-close").click(function() {
        $(".backdrop").css("display","none")
        $(".sidedrawer").css({"transform":"translateY(-2000%)"});
    }  )

    
})