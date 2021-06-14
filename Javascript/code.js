$(document).ready(
    function () {

        //event handlers
        $('#menu-options__eat').click(function () {
            $('.menu-options__page--eat').css("transform", "translateX(0)");
            $('.menu-options__page--eat').css("pointer-events", "all");
            $('.menu-options__page--eat').css("position", "relative");

            $('.header').css("position", "absolute");
            $('.header').css("width", "100%");
            $('.header').css("top", "0");
            $('.header').css("left", "0");
        });

        $('#menu-options__drink').click(function () {
            $('.menu-options__page--drink').css("transform", "translateX(0)");
            $('.menu-options__page--drink').css("pointer-events", "all");
            $('.menu-options__page--drink').css("position", "relative");

            $('.header').css("position", "absolute");
            $('.header').css("width", "100%");
            $('.header').css("top", "0");
            $('.header').css("left", "0");
        });

        $('#menu-options__visit').click(function () {
            $('.menu-options__page--visit').css("transform", "translateX(0)");
            $('.menu-options__page--visit').css("pointer-events", "all");
            $('.menu-options__page--visit').css("position", "relative");

            $('.header').css("position", "absolute");
            $('.header').css("width", "100%");
            $('.header').css("top", "0");
            $('.header').css("left", "0");
        });

        $('.topper__logo').click(function () {
            $('.menu-options__page').css("transform", "translateX(-225rem)");
            $('.menu-options__page').css("pointer-events", "none");
            $('.menu-options__page').css("position", "absolute");

            $('.header').css("position", "relative");
        });
        //other functions
    }
);