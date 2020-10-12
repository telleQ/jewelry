$(document).ready(function () {
    let width = $(document).width();
    $('.wrapper').css('width', width);

    // Адаптивное меню
    $('.icon-menu').click(function (event) {
        $(this).toggleClass('active');
        $('.menu__body').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // Адаптивное изображение на первой секции
    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }

    ibg();

    // Кнопка вверх
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.btnup').addClass("show");
        } else {
            $('.btnup').removeClass("show");
        }
    });

    $('.btnup').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // подсвечивает активный пункт меню
    $('.menu__link a').each(function () {
        let location = window.location.href;
        let link = this.href;
        if (location == link) {
            $(this).addClass('link__active');
        }
    });

    $('.sliderbg').slick({
        dots: true,
        arrows: false,
        customPaging: function () {
            return ''
        }
    });
    $(".modal-btn").on('click', function (e) {
        e.preventDefault()
        $(".overlay").addClass("active");
        $(".modal").addClass("active");
        // $('body').toggleClass('lock');
    });

    $(".modal").find(".close").click(function () {
        $(".modal").removeClass("active");
        $(".overlay").removeClass("active");
    });

    $(".overlay").click(function () {
        $(".modal").removeClass("active");
        $(".overlay").removeClass("active");
    });

    // Проверка правильности заполнения поля email - формы заказа
    $(function () {
        function validateEmail(email) {
            var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return reg.test(email);
        }

        $(document).on('click', '#buy_btn', function () {
            var name = $('#name__lastname').val();
            var email = $('#email').val();


            if (name == '') {
                $('span#valid').html('You have to fill out all input boxes').css('color', 'red');
                return false;
            } else if (email == '') {
                $('span#valid').html('You have to fill out all input boxes').css('color', 'red');
                return false;
            } else if (!validateEmail(email)) {
                $('span#valid').html('Email address you entered is not valid').css('color', 'red');
                return false;
            }
        });
    });
});