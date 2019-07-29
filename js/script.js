
/* ================ Bars icon animation =================*/

window.addEventListener('DOMContentLoaded', function () {
    var burgers = document.querySelectorAll(".burger-container");
    for (var i = 0; i < burgers.length; i++) {
        toggle.apply(burgers[i]);
    }

});

function toggle() {
    var menu = this.children[0];
    this.addEventListener('click', function () {
        menu.classList.toggle(menu.id + "-open");
        $('.collapse').slideToggle(500)
    });
}


$(document).ready(function () {
    /* ================ Text typing animation =================*/

    $(window).scroll(function () {
        let win_top = $(this).scrollTop()
        $(".header-home").css({ background: 'url(images/background/Top_Bg.png) -60px 0' });
        if (win_top == 0) {
            $(".header-home").css({ background: 'none' });

        }

        if($(this).scrollTop() > 20){
            $('nav img').css('width','40%');
            $('.header-fixed').css('padding','0');
        }else{
          $('nav img').css('width','51%');
          $('.header-fixed').css('padding','0.65% 0');
        }


        let top1 = $('#about-us').length && $('#about-us').offset().top;
        let top2 = $('#our-services').length && $('#our-services').offset().top;
        let top3 = $('#things').length && $('#things').offset().top;
        let top4 = $('#ideas').length && $('#ideas').offset().top;
        let top5 = $('#contact').length && $('#contact').offset().top;
        let top6 = $('#positions').length && $('#positions').offset().top;

        if (win_top > top1 - 150) {
            $('#about-us  h2').addClass('anim');
        }
        if (win_top > top2 - 150) {
            $('#our-services  h2').addClass('anim');
        }
        if (win_top > top3 - 150) {
            $('#things  h2').addClass('anim');
        }
        if (win_top > top4 - 150) {
            $('#ideas  h2').addClass('anim');
        }
        if (win_top > top5 - 150) {
            $('#contact  h2').addClass('anim');
        }
        if (win_top > top6 - 150) {
            $('#positions  h2').addClass('anim');
        }
    });



    /* ================ Careers form validation =================*/
    $('.send').length && $('.send').click(function () {
        if ($('input').val().includes('@')) {
            $(this).parentsUntil('section').fadeOut();
            $('.success').fadeIn();
        } else {
            $('input').next().html('error')
        }

    })

    $('.location p').click(() => {
        $('.dropdown-shape').slideToggle(500)
    })

/* ========================= Careers positions ====================*/
    
    let w = $('.positions li.active').length && $('.positions li.active').width();
    let left_li_active = $('.positions li.active').length && $('.positions li.active').offset().left ;
    let left_pos = $('.positions').length && $('.positions').offset().left;
    let left =  left_li_active - left_pos;
    $('.hover_border').length && $('.hover_border').css({ 'width': w + 'px', left: left + 'px' })

    $('.positions li').length && $('.positions li').click(function () {
        $('.positions li').removeClass('active');
        $(this).addClass('active');
        let w = $(this).width();
        let left = $(this).offset().left - left_pos;

        $('.hover_border').css({ 'width': w + 'px', left: left + 'px' })
    })


    /* ================ Scroll to Services =================*/

    $('#our-services').length && $('.services').click(function () {
        let ser_top = $('#our-services').offset().top;
        var body = $("html, body");
        body.stop().animate({ scrollTop: ser_top }, 1000, 'swing', function () {

        });
    })
    $('#contact').length && $('.contact').click(function () {
        let ser_top = $('#contact').offset().top;
        var body = $("html, body");
        body.stop().animate({ scrollTop: ser_top }, 1000, 'swing', function () {

        });
    })

   


   

})
