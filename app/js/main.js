$(function() {
    $("#slider-item").slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        dots: false
    });

    // $(window).scroll(function() {
    //     $('.mov').each(function() {
    //         var imagePos = $(this).offset().top;
    //         var topOfWindow = $(window).scrollTop();
    //         if (imagePos < topOfWindow + 100) {
    //             $(this).addClass('rotateIn');
    //         }
    //     });
    // });


    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 120, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

});