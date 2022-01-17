$(document).ready(function(){
    var winheight = $(document).innerHeight();
    $('.page-wrapper').innerHeight(winheight);
    $('.home-footer').innerHeight(winheight-150);
    $('.menu-icon').click(function(){
        $('.nav-overlay').fadeToggle();
    });
});