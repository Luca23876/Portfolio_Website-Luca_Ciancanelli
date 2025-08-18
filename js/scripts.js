/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

  const videoPath = "../assets/vid/";  // adjust if needed
  const videos = ["mayden.mp4", "ground_cam_1.mp4", "plane_cam_1.mp4", "landing_1.mp4"];

  let index = 0;
  let current = 0; // which video element is active

  const videoElements = [
    document.getElementById("video1"),
    document.getElementById("video2")
  ];

  // --- Play first video ---
  videoElements[current].src = videoPath + videos[index];
  videoElements[current].classList.add("active");
  videoElements[current].play();

  function playNextVideo() {
    const next = (current + 1) % 2;         // the hidden video element
    index = (index + 1) % videos.length;    // next clip

    videoElements[next].src = videoPath + videos[index];

    videoElements[next].onloadeddata = () => {
      videoElements[next].play();

      // Crossfade: hide current, show next
      videoElements[current].classList.remove("active");
      videoElements[next].classList.add("active");

      current = next; // update pointer

      // When this video ends, call again
      videoElements[current].onended = playNextVideo;
    };
  }

  // Start loop
  videoElements[current].onended = playNextVideo;

});