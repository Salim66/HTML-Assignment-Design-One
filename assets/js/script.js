$(document).ready(function(){
    $('.autoplay').slick({
        slidesToShow: 2.5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: false,
    });

    $('.hero_slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        rtl: false,
    });

    $(window).scroll(function(){
      if($(window).scrollTop()){
        $('.nav').addClass('nav__black');
        $('.nav__link').addClass('nav__link_modify');
        $('.nav__logo-brnad').addClass('nav__logo-brnad_modify');
        $('.fa-search').addClass('fa-search_modify');
        $('.sing__in').addClass('sing__in_modify');
        $('.nav__top').addClass('nav__top_modify');
      }else {
        $('.nav').removeClass('nav__black');
        $('.nav__link').removeClass('nav__link_modify');
        $('.nav__logo-brnad').removeClass('nav__logo-brnad_modify');
        $('.fa-search').removeClass('fa-search_modify');
        $('.sing__in').removeClass('sing__in_modify');
        $('.nav__top').removeClass('nav__top_modify');
      }
    });
});