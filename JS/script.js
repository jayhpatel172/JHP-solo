/*==================================
            PRELOADER
==================================*/

$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/*==================================
            Team
==================================*/

$(function () {
    $('#team-members').owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            },
        }
    });
});

/*==================================
            Progres bars
==================================*/
$(function () {
    $('#progress-elements').waypoint(function () {
        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 2000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});

/*==================================
         Responsive Tabs
==================================*/

$(function () {
    $('#services-tabs').responsiveTabs({
        animation: 'slide'
    });
});

/*==================================
           Portfolio
==================================*/

$(window).on('load', function () {
    //Initialize Isotope
    $('#isotope-container').isotope({});

    // filter items on button click
    $('#isotope-filters').on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio
        $('#isotope-container').isotope({
            filter: filterValue
        });
        //active button
        $('#isotope-filters').find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/*==================================
           Magnifier
==================================*/

$(function () {
    $('#portfolio-wrapper').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*==================================
           Testimonials
==================================*/

$(function () {
    $('#testimonial-slider').owlCarousel({
        items: 1,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});

/*==================================
                Stat
==================================*/

$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

/*==================================
                Clients
==================================*/

$(function () {
    $('#clients-list').owlCarousel({
        items: 6,
        autoplay: false,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            //breakpoint from 0 up
            0: {
                items: 2
            },
            //breakpoint from 480 up
            480: {
                items: 3
            },
            //breakpoint from 768 up
            768: {
                items: 6
            }
        }
    });
});

/*==================================
            Google Map    
==================================*/

$(window).on('load', function () {

    //google map variables
    var addressString = '3160 Peter Street, Windsor, ON';
    var myLatlng = {
        lat: 42.305517,
        lng: -83.070848
    };

    //1. Render map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });

    //2. add map marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Click to see Adderss'
    });

    //3. Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    //4. Show info window when user click the marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    //5. resize option
    google.maps.event.addDomListener(window, 'resize', function () {
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });
});

/*==================================
            Navigation   
==================================*/

//Show and hind navigation

$(function () {
    //show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        //show/hide nav on window scroll
        showHideNav();
    });

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            //show white nav
            $('nav').addClass('white-nav-top');
            //show dark logo
            $('.navbar-brand img').attr('src', 'img/solo-images/logo/logo-dark.png')
            //show back to top button
            $('#back-to-top').fadeIn();
        } else {
            //hide white nav
            $('nav').removeClass('white-nav-top');
            //show normal logo
            $('.navbar-brand img').attr('src', 'img/solo-images/logo/logo.png')
            //hide back to top button
            $('#back-to-top').fadeOut();
        }
    }
});

//smooth-scroll

$(function () {
    $('a.smooth-scroll').click(function () {
        event.preventDefault();

        //get section id like #services, #work, #team and etc.
        var section_id = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, 'easeInOutExpo');
    });
});

/*==================================
            Mobile-Menu    
==================================*/

$(function () {
    //show mobile button
    $('#mobile-nav-open-btn').click(function () {
        $('#mobile-nav').css('height', '100%');
    });

    //hide mobile button
    $('#mobile-nav-close-btn,#mobile-nav a').click(function () {
        $('#mobile-nav').css('height', '0%');
    });
});

/*==================================
            Animation
==================================*/

// animate on scroll
$(function () {
    new WOW().init();
});

$(window).on('load', function () {
    $('#home-heading-1').addClass("animated fadeInDown");
    $('#home-heading-2').addClass("animated fadeInLeft");
    $('#home-text').addClass("animated zoomIn");
    $('#home-btn').addClass("animated zoomIn");
    $('#arrow-down i').addClass("animated fadeInDown infinite");
});
