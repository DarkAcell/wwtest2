(function() {

});

$('[data-fancybox]').fancybox({
    infobar: false,
    toolbar: true,
    buttons: ['close'],
    btnTpl: {
        close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="髢峨§繧�"><i class="i-arrows-times-1"></i></button>'
    }
});
var scrollTop = new SmoothScroll('.js-return-up');
$('.js-return-up').on('click', function(e) {
    e.preventDefault();
    scrollTop.animateScroll(0, {
        speed: 500,
        offset: 0,
        easing: 'easeInOutCubic'
    });
});
$(window).scroll(function() {
    var h = $(document).scrollTop();
    if (h > 32) {
        $('header').addClass("not_top");
    } else {
        $('header').removeClass("not_top");
    }
});