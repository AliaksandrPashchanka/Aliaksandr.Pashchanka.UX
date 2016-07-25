$(document).ready(function(){
    $('.navigation-bar__icon, .navigation-bar__menutitle').click(function(){
        openMenu();
    });

    function openMenu() {
        $('.navigation-bar__menutitle, .navigation-bar__icon, .navi').toggleClass('open');
    }

});