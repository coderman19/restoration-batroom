$(function() {
    // burger-menu
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger__active');
    });


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

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>реставрация ванн</small>';
            }
        }
    });


    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 120, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();

});