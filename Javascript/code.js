$(document).ready(
    function () {



        var checkboxes = ['#menu-options--checkbox__eat',
            '#menu-options--checkbox__home', '#menu-options--checkbox__drink',
            '#menu-options--checkbox__visit'];

        for(var i = 0; i < checkboxes.length-1; i++){
            $(checkboxes[i]).prop('checked', false);
        }

        for(var i = 0; i < checkboxes.length-1; i++){
            if(localStorage.getItem('checked') == checkboxes[i]){
                $(localStorage.getItem('checked')).prop('checked', true);
            }
            else{
                $(checkboxes[i]).prop('checked', false);
            }
        }

        //event handlers
        $('.menu-options__eat').click(function () {
            //$('.menu-options__page--eat').css("transform", "translateX(0)");
            //$('.menu-options__page--eat').css("pointer-events", "all");
            //$('.menu-options__page--eat').css("position", "relative");

            //$('.header').css("position", "absolute");
            //$('.header').css("width", "100%");
            //$('.header').css("top", "0");
            //$('.header').css("left", "0");

            //$('#menu-options--checkbox__eat').prop('checked', true);
            $('#menu-options--checkbox__home').prop('checked', false);
            //$('#menu-options--checkbox__drink').prop('checked', false);
            //$('#menu-options--checkbox__visit').prop('checked', false);

            localStorage.setItem('checked', '#menu-options--checkbox__eat');

            /*for(var i = 0; i < checkboxes.length-1; i++){
                if(localStorage.getItem('checked') == checkboxes[i]){
                    $(localStorage.getItem('checked')).prop('checked', true);
                }
                else{
                    $(checkboxes[i]).prop('checked', false);
                }
            }*/
        });

        $('.menu-options__drink').click(function () {
            //$('.menu-options__page--drink').css("transform", "translateX(0)");
            //$('.menu-options__page--drink').css("pointer-events", "all");
            //$('.menu-options__page--drink').css("position", "relative");

            //$('.header').css("position", "absolute");
            //$('.header').css("width", "100%");
            //$('.header').css("top", "0");
            //$('.header').css("left", "0");

            //$('#menu-options--checkbox__drink').prop('checked', true);
            $('#menu-options--checkbox__home').prop('checked', false);
            //$('#menu-options--checkbox__eat').prop('checked', false);
            //$('#menu-options--checkbox__visit').prop('checked', false);

            localStorage.setItem('checked', '#menu-options--checkbox__drink');

            /*for(var i = 0; i < checkboxes.length-1; i++){
                if(localStorage.getItem('checked') == checkboxes[i]){
                    $(localStorage.getItem('checked')).prop('checked', true);
                }
                else{
                    $(checkboxes[i]).prop('checked', false);
                }
            }*/
        });

        $('.menu-options__visit').click(function () {
            //$('.menu-options__page--visit').css("transform", "translateX(0)");
            //$('.menu-options__page--visit').css("pointer-events", "all");
            //$('.menu-options__page--visit').css("position", "relative");

            //$('.header').css("position", "absolute");
            //$('.header').css("width", "100%");
            //$('.header').css("top", "0");
            //$('.header').css("left", "0");

            //$('#menu-options--checkbox__visit').prop('checked', true);
            $('#menu-options--checkbox__home').prop('checked', false);
            //$('#menu-options--checkbox__eat').prop('checked', false);
            //$('#menu-options--checkbox__drink').prop('checked', false);

            localStorage.setItem('checked', '#menu-options--checkbox__visit');

            /*for(var i = 0; i < checkboxes.length-1; i++){
                if(localStorage.getItem('checked') == checkboxes[i]){
                    $(localStorage.getItem('checked')).prop('checked', true);
                }
                else{
                    $(checkboxes[i]).prop('checked', false);
                }
            }*/
        });


        $('.topper__logo').click(function () {
            //$('.menu-options__page').css("transform", "translateX(-225rem)");
            //$('.menu-options__page').css("pointer-events", "none");
            //$('.menu-options__page').css("position", "absolute");

            //$('.header').css("position", "relative");

            /*$('#menu-options--checkbox__home').prop('checked', true);
            $('#menu-options--checkbox__eat').prop('checked', false);
            $('#menu-options--checkbox__drink').prop('checked', false);
            $('#menu-options--checkbox__visit').prop('checked', false);*/

            localStorage.setItem('checked', '#menu-options--checkbox__home');

            for(var i = 0; i < checkboxes.length-1; i++){
                if(localStorage.getItem('checked') == checkboxes[i]){
                    $(localStorage.getItem('checked')).prop('checked', true);
                }
                else{
                    $(checkboxes[i]).prop('checked', false);
                }
            }
        });


        //other functions
    }
);