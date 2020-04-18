document.getElementById("navigation").innerHTML =
    '<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top font-weight-normal text-uppercase" style="z-index:99;">' +
    '<div class="container">' +
    '<a class="navbar-brand" href="index.html" style="max-width:180px;">' +
    '<img src="media/images/rsr-logo.jpg" id="rsr-logo" alt="Redshift Racing Logo" style="">' +
    '</a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    '</button>' +
    '<div class="collapse navbar-collapse justify-content-center" id="navbarResponsive">' +
    '<div class="nav-ul-list" style="">' +
    '<ul class="navbar-nav mx-auto justify-content-center text-center">' +
    '<li id="indexNav" class="nav-item"><a class="nav-link text-left" href="index.html">Home</a></li>' +
    '<li id="sponsorsNav" class="nav-item"><a class="nav-link text-left" href="sponsors.html">Sponsors</a></li>' +
    '<li id="galleryNav" class="nav-item"><a class="nav-link text-left" href="gallery.html">Gallery</a></li>' +
    '<li id="teamNav" class="nav-item"><a class="nav-link text-left" href="team.html">Team</a></li>' +
    '<li id="contactNav" class="nav-item"><a class="nav-link text-left" href="contact.html">Contact</a></li>' +
    '</ul>' +
    '</div>' +
    '<div class="justify-content-center text-center" id="somaiya-logo">' +
    '<a class="navbar-brand px-2" href="https://kjsce.somaiya.edu/en" id="kjsce-logo" target="_blank">' +
    '<img src="media/images/logos/kjsce-svu.svg" alt="KJSCE-SVU" style="width:100%; height:auto;">' +
    '</a>' +
    '<a class="navbar-brand px-2" href="https://svv.somaiya.edu/en" id="somaiyatrust-logo" style="max-width:90px;">' +
    '<img src="media/images/logos/SomaiyaTrust_Logo.jpg" alt="Somaiya Trust" style="width:100%; height:auto;">' +
    '</a>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</nav>' +
    '<hr class="bg-secondary" />';

var rootWebsite = "http://baijudodhia.github.io/redshiftracing/";
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