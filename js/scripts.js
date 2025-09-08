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
});

// Project landing page video slideshow
class landing_page_slideshow {
    constructor(vid_path, vids, vid_id_1, vid_id_2) {
        this.vid_path = vid_path;
        this.vids = vids;
        this.index = 0;
        this.current = 0;
        this.video_elements = [document.getElementById(vid_id_1), document.getElementById(vid_id_2)];

        this.video_elements[this.current].src = this.vid_path + this.vids[this.index];
        this.video_elements[this.current].classList.add("active");
        this.video_elements[this.current].play();
    }

    // Play next video
    play_next_video() {
        const next = (this.current + 1) % 2;
        this.index = (this.index + 1) % this.vids.length;

        this.video_elements[next].src = this.vid_path + this.vids[this.index];

        this.video_elements[next].onloadeddata = () => {
            this.video_elements[next].play();

            this.video_elements[this.current].classList.remove("active");
            this.video_elements[next].classList.add("active");

            this.current = next;
        };
    }
}

// Project overview photo slideshow 
class photo_slideshow {
    constructor(id) {
        this.slide_index = 1;
        this.element_id = id;

        this.show_slides(this.slideIndex)
    }

    // Advance slides
    plus_slides(n) {
        this.show_slides(this.slide_index += n);
    }

    // Set current slide
    current_slide(n) {
        this.show_slides(this.slide_index = n);
    }
    
    // Display current slide
    show_slides(n) {
        let i;
        let slides = document.getElementsByClassName(this.element_id);
        if (n > slides.length) {this.slide_index = 1}
        if (n < 1) {this.slide_index = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[this.slide_index - 1].style.display = "block";
    }
}

// Landing page objects
const plane_3d_printed_lp = new landing_page_slideshow("../assets/vid/3d_printed_plane/", ["mayden.mp4", "ground_cam_1.mp4", "plane_cam_1.mp4", "landing_1.mp4"], "plane_3d_printed_vid_1", "plane_3d_printed_vid_2");

// Slide show objects
const plane_3d_printed_overview_ss = new photo_slideshow("plane_3d_printed_ss")
