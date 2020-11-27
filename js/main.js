$(function() {
    const sideDrawerOn = () => {
        $(".backdrop").css("display","initial");
        $(".sidedrawer").css({"transform":"translateX(0)"});
    }

    const sideDrawerOff = () => {
        $(".backdrop").css("display","none")
        $(".sidedrawer").css({"transform":"translateX(1000%)"}); 
    }

    $(".sandwitch-menu").click(sideDrawerOn)

    $(".backdrop").click(sideDrawerOff)

    $(".sidedrawer-close").click(sideDrawerOff)
    
})