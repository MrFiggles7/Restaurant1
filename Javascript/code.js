$(document).ready(
    function () {

        //event handlers
        $('#menu-options__eat').click(function () {
            $('.menu-options__page--eat').css("transform", "translateX(0)");
            $('.menu-options__page--eat').css("pointer-events", "all");
            $('.menu-options__page--eat').css("position", "relative");
            $('.header').hide();
        });

        $('#menu-options__drink').click(function () {
            $('.menu-options__page--drink').css("transform", "translateX(0)");
            $('.menu-options__page--drink').css("pointer-events", "all");
        });

        $('#menu-options__visit').click(function () {
            $('.menu-options__page--visit').css("transform", "translateX(0)");
            $('.menu-options__page--visit').css("pointer-events", "all");
        });
        //other functions
    }
);