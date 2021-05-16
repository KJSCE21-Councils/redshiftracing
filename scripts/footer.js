document.getElementById("footer").innerHTML =
    '<footer class="d-flex flex-column">' +
    '<div class="text-center my-1" id="go-top"><i class="fa fa-arrow-up" onclick="topFunction()"></i></div>' +
    '<div class="text-center my-1">Follow us</div>' +
    '<div class="d-flex justify-content-center my-1">' +
    '<a href="https://www.facebook.com/redshiftracing.kjsce" target="_blank"><i class="fa fa-facebook-official fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://in.linkedin.com/company/redshift-racing-india" target="_blank"><i class="fa fa-linkedin fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://twitter.com/redshiftracing" target="_blank"><i class="fa fa-twitter fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://www.youtube.com/user/redshiftracing" target="_blank"><i class="fa fa-youtube-play fa-lg fa-2x mx-2"></i></a>' +
    '<a href="https://www.instagram.com/redshift_racing/" target="_blank"><i class="fa fa-instagram fa-lg fa-2x mx-2"></i></a>' +
    '</div>' +
    '<div class="text-center my-1"><img src="./media/images/rsr-logo.jpg" style="max-height:45px;"></div>' +
    '<div class="text-center mt-1 mb-3">&copy; Redshift Racing Racing</div>' +
    '</footer>';


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}