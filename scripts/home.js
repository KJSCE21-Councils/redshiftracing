$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

$('.owl').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
})

$(document).ready(function () {
    var my_posts = $("[rel=tooltip]");

    var size = $(window).width();
    for (i = 0; i < my_posts.length; i++) {
        the_post = $(my_posts[i]);

        if (the_post.hasClass('invert') && size >= 767) {
            the_post.tooltip({ placement: 'left' });
            the_post.css("cursor", "pointer");
        } else {
            the_post.tooltip({ placement: 'rigth' });
            the_post.css("cursor", "pointer");
        }
    }
});