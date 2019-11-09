document.getElementById("navigation").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" style="z-index:99;">' +
    '<div class="container">' +
    '<a class="navbar-brand" href="index.html" style="max-width:180px;">' +
    '<img src="media/images/rsr-logo.jpg" alt="Redshift Racing Logo" style="width:100%; height:auto;">' +
    '</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse" id="navbarResponsive">' +
    '<ul class="navbar-nav ml-auto">' +
    '<li id="indexNav" class="nav-item"><a class="nav-link" href="index.html">Home</a></li>' +
    '<li id="sponsorsNav" class="nav-item"><a class="nav-link" href="sponsors.html">Sponsors</a></li>' +
    '<li id="galleryNav" class="nav-item"><a class="nav-link" href="gallery.html">Gallery</a></li>' +
    '<li id="teamNav" class="nav-item"><a class="nav-link" href="team.html">Team</a></li>' +
    '<li id="contactNav" class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>' +
    '<br>' +
    '</ul>' +
    '</div>' +
    '</div>' +
    '</nav>' +
    '<hr class="bg-secondary" />';

var rootWebsite = "http://127.0.0.1:5501/";
var loc = window.location.href;
if (loc == (rootWebsite + 'index.html')) {
    var element = document.getElementById("indexNav");
    element.classList.add("active");
}
else if (loc == (rootWebsite + 'sponsors.html')) {
    var element = document.getElementById("sponsorsNav");
    element.classList.add("active");
}
else if (loc == (rootWebsite + 'gallery.html')) {
    var element = document.getElementById("galleryNav");
    element.classList.add("active");
}
else if (loc == (rootWebsite + 'team.html')) {
    var element = document.getElementById("teamNav");
    element.classList.add("active");
}
else if (loc == (rootWebsite + 'contact.html')) {
    var element = document.getElementById("contactNav");
    element.classList.add("active");
}