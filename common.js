$(document).ready(function() {
    $('.slider-block__button').on('click', function() {
        if($('.blue').length !== 0) {
            $('.blue').each(function() {
                $(this).removeClass('blue').addClass('pink');
            });
            $('.beauty').attr('src', './img/beauty-pink.png');
            $('screen1__bg--shadow').hide();
            $('.img-wrapper').removeClass('active');
            $('.img-wrapper[data-color=pink]').addClass('active');
        } else if($('.pink').length !== 0) {
            $('.pink').each(function() {
                $(this).removeClass('pink').addClass('blue');
            });
            $('.beauty').attr('src', './img/beauty-blue.png');
            $('screen1__bg--shadow').show();
            $('.img-wrapper').removeClass('active');
            $('.img-wrapper[data-color=blue]').addClass('active');
        } else {
            alert('У нас тут какие-то проблемы, зайдите позже');
        }
    });

    $('.menu__item').on('click', function(e) {
        e.preventDefault();
        var src = $(this).attr('href');
        var destination = $(src).offset().top;

        $('html, body').animate({scrollTop: destination}, 500);
    });

    $('.calendar').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.services').offset().top}, 500);
    });

    $('.burger').on('click', function(e) {
        e.preventDefault();
        $('.burger-menu').addClass('visible');
        $("html").css("overflow-y","hidden");
    });
    $('.burger-menu__close-button').on('click', function(e) {
        $('.burger-menu').removeClass('visible');
        $("html").css("overflow-y","auto");
    });
    $('.burger-menu__item').on('click', function(e) {
        e.preventDefault();
        var src = $(this).attr('href');
        var destination = $(src).offset().top;

        $('.burger-menu').removeClass('visible');
        $("html").css("overflow-y","auto");
        $('html, body').animate({scrollTop: destination}, 500);
    });
    
    $('.order__master-card').on('click', function() {
        $('.order__master-card--active').removeClass('order__master-card--active');
        $(this).addClass('order__master-card--active');

        var masterID = $(this).attr('data-masterID');

        $('.order__masters-descr').removeClass('order__masters-descr--visible');
        $('.order__masters-descr[data-masterID=' + masterID + ']').addClass('order__masters-descr--visible');
    });

    $('.order__time-status').on('click', function(e) {
        e.preventDefault();
        if($(this).parent().hasClass('order__time-item--free')) {
            var masterID = $(this).parent().parent().parent().attr('data-masterID');
            var masterPhotoSrc = $('.order__master-card[data-masterID=' + masterID + '] img').attr('src');
            var masterProfLevel =  $('.order__master-card[data-masterID=' + masterID + '] span').text();
            var reservedTime = $(this).parent().text().trim().substr(0, 5);

            $('.modal__master-card img').attr('src', masterPhotoSrc);
            $('.modal__master-card span').text(masterProfLevel);
            $('.modal__order-time').text('18 Oct, 2019, ' + reservedTime);
            $('.modal').addClass('modal--active');
            $("html").css("overflow-y","hidden");
        }
    });
    
    $('.modal__close-button').on('click', function(e) {
        e.preventDefault();
        $('.modal').removeClass('modal--active');
        $("html").css("overflow-y","auto");
    });
    $('.overlay').on('click', function(e) {
        $('.modal').removeClass('modal--active');
        $("html").css("overflow-y","auto");
    });
    $('.modal__reserve-button').on('click', function(e) {
        e.preventDefault();
        if ($(this).attr('value') == "SUCCESS!") {
            $('.modal').removeClass('modal--active');
            $("html").css("overflow-y","auto");
        } else {
            $(this).attr('value', "SUCCESS!");
        }
    });

    ymaps.ready(init);
    function init(){    
        var myMap = new ymaps.Map("map", {
            center: [55.77053408298465, 37.62811187702942],
            zoom: 16,
            controls: ['zoomControl']
        });
        var myPlacemark = new ymaps.Placemark(
            [55.77053408298465, 37.62811187702942], 
            {}, 
            {
                iconLayout: 'default#image',
                iconImageHref: 'img/location-pin.png',
                iconImageSize: [30, 42],
            }
        );
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
});

