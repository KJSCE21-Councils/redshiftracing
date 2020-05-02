document.getElementById("footer").innerHTML = '<footer class="py-2 border-secondary">' +
    '<div class="wrapper">' +
    '<div id="go-top"><i class="fa fa-arrow-up" onclick="topFunction()"></i></div>' +
    '<div class="py-2">' +
    '<div class="justify-content-center text-center">' +
    '<p class="my-0">Follow Us</p>' +
    '</div>' +
    '<div class="justify-content-center text-center"' +
    '<div class="social-media text-center">' +
    '<a href="https://www.facebook.com/redshiftracing.kjsce ">' +
    '<i class="fa fa-facebook-square fa-lg fa-2x px-4 py-2 "></i></a>' +
    '<a href="https://twitter.com/redshiftracing ">' +
    '<i class="fa fa-twitter fa-lg fa-2x px-4 py-2 "></i></a>' +
    '<a href="https://www.youtube.com/user/redshiftracing ">' +
    '<i class="fa fa-youtube-play fa-lg fa-2x px-4 py-2 "></i></a>' +
    '<a href="https://www.instagram.com/redshift_racing/ ">' +
    '<i class="fa fa-instagram fa-lg fa-2x px-4 py-2 "></i></a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '<div class="container">' +
    '<hr class="my-1">' +
    '</div>' +
    '<div class="justify-content-center text-center align-items-center py-2">' +
    '<img src="media/images/rsr-logo.jpg" style="max-height:50px;"/>' +
    '</div>' +
    '<div class="footer-copyright text-center py-1">&copy; Copyright: Redshift Racing India 2019-20</a>' +
    '</div>' +
    '</div>' +
    '</footer>';

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         document.getElementById("go-top").style.display = "block";
//     } else {
//         document.getElementById("go-top").style.display = "none";
//     }
// }

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}