"use strict";

// When the user clicks on the navbar section, go to anchor section
function scrollToSection(section) {
	var ancre = document.getElementById(section);
  var ancreY = ancre.offsetTop;
  var navbarHeight = document.getElementById('navbar').offsetHeight;
  window.scrollTo(0, ancreY - navbarHeight);
 };

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("go-top").style.display = "block";
    } else {
        document.getElementById("go-top").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
