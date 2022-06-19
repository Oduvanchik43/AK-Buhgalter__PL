
$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

/*SLIDERS*/

$(function(){
    $('.sliders').slick({
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed:4500,
        /*fade: true,
        cssEase: 'linear'*/
    })
})

$(function(){
    $('.catal-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        autoplay: true,
        autoplaySpeed: 5500,
        speed:5500,
        /*fade: true,
        cssEase: 'linear'*/
        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                arrows:false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 4500,
                speed:6500,
                dots:false,
                arrows:false
              }
            },
            {
              breakpoint: 485,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplaySpeed: 3000,
                speed:4500,
                arrows:false,
                dots:false
              }
            }
        ]
    })
    
})



/*accordion FAQ*/
$(document).ready(function(){
    $('.accordion-items__trigger').click(function(){
        const parent = $(this).parent();

        if (parent.hasClass('accordion-items--active')){
            parent.removeClass('accordion-items--active');
        }else{
            $('.accordion-item').removeClass('accordion-items--active')
            parent.addClass('accordion-items--active');
        }
    });
});

/*ToBlock*/
/*Button*/
$(document).ready(function(){
    $("#slid").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2500);
    });
});
/*Menu*/
$(document).ready(function(){
    $("#headers_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2500);
    });
});
/*Menu-Footer*/
$(document).ready(function(){
    $("#footers-menus").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 2500);
    });
});



