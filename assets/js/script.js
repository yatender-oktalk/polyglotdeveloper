/* ============================================================
 
 Template Name: MORACO - Personal Vcard Resume HTML Template
 Author: Marwa El-Manawy -- http://elmanawy.info
 Description: MORACO - Personal Vcard Resume HTML Template.
 Version: 1.0
 
 ===============================================================
 */


/*================================================
 [  START LIST OF SCRIPTS ]
 ================================================
 
 :: Navbar and scroll down
 :: Home Intro Typing
 :: Percentage Circle 
 :: Fancy Box 
 :: Responsive Menu
 :: Contact US Form 
 
 ======================================
 [ End table content ]
 ======================================*/


/*************************
 preloader
 *************************/
$("#load").fadeOut();
$('#loading').delay(0).fadeOut('slow');

/*************************
 Navbar and scroll down
 *************************/
$(function () {
    $(document).ready(function () {

        $('.menu_area,#scroll-down').on("click", function (e) {
            if ($(e.target).is('a.page-scroll')) {
                if (location.pathname.replace(/^\//, '') == e.target.pathname.replace(/^\//, '') && location.hostname == e.target.hostname) {
                    var target = $(e.target.hash);
                    target = target.length ? target : $('[name=' + e.target.hash.slice(1) + ']');
                    if (target.length) {
                        var gap = 0;
                        $('html,body').animate({
                            scrollTop: target.offset().top - gap
                        }, 900);

                    }
                }
                return false;
            }
        });

        $('body').scrollspy({
            target: '.menu_area',
            offset: 80
        });
        $(window).scroll(function () {
            if ($(document).scrollTop() > 1) {
                $('.menu_area').addClass('shrink');
            } else {
                $('.menu_area').removeClass('shrink');
            }
        });

        /*************************
         Responsive Menu
         *************************/
        $('#menu-icon').on("click", function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $('.menu_area').animate({'margin-left': 230}, 300);
            } else {
                $(this).removeClass('active');
                $('.menu_area').animate({'margin-left': 0}, 300);
            }
            return false;
        });


        /*************************
         Home Intro Typing
         *************************/

        $("#typed").typed({
            stringsElement: $('#typed-strings'),
            typeSpeed: 20,
            backDelay: 500,
            loop: false,
            contentType: 'html',
            loopCount: false,
            callback: function () {
                foo();
            },
            resetCallback: function () {
                newTyped();
            }
        });


        $(".reset").on("click", function (e) {
            $("#typed").typed('reset');
        });



        function newTyped() {
        }

        function foo() {
            console.log("Callback");
        }

        /*************************
         Percentage Circle
         *************************/
        if ($('.percentage').length) {
            $('.percentage').easyPieChart({
                animate: 5000,
                onStep: function (value) {
                    this.$el.find('span').text(~~value);
                }
            });
        }

        /*************************
         Fancy Box
         *************************/
        $('.fancybox').fancybox();


        /*************************
         Contact US Form
         *************************/
        $("#contact_form").on("submit", function (e)
        {
            $('#show_contact_msg').html('<div class=gen>Sending Message..</div>');
            var username = $('#contact_name').val();
            var useremail = $('#contact_email').val();
            var userphone = $('#contact_phone').val();
            var commenttext = $('#contact_text').val();
            var formURL = $(this).attr("action");
            var data = {
                username: username,
                useremail: useremail,
                userphone: userphone,
                commenttext: commenttext,
            }
            $.ajax(
                    {
                        url: formURL,
                        type: "POST",
                        data: data,
                        success: function (res) {
                            if (res == '1') {
                                $('#show_contact_msg').html('<div class=gen><i class="fa fa-smile-o" aria-hidden="true"></i> Thank you very much, We will notify you when we lunch</div>');
                                $("#contact_form")[0].reset();
                            }

                            if (res == '5') {
                                $('#show_contact_msg').html('<div class=err><i class="fa fa-frown-o" aria-hidden="true"></i> Please enter a valid email address</div>');
                            }
                        }
                    });
            e.preventDefault();
        });
    });
});





	  