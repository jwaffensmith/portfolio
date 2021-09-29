/*!
* Start Bootstrap - Creative v7.0.4 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
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
            offset: 74,
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

// jQuery for Animation.css
// divider animation for about section
var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
$(function () {
    var animationName = 'animate__animated animate__rollIn'
    $('a.about.nav-link').on('click', function () {
        $('.about-divider').addClass(animationName).one(animationEnd, 
        function () {
            $(this).removeClass(animationName);
        });
    });
    $('.arrow-btn').on('click', function () {
        $('.about-divider').addClass(animationName).one(animationEnd, 
        function () {
            $(this).removeClass(animationName);
        });
    });
});

// divider animation for contact section
$(function () {
    var animationName = 'animate__animated animate__rollIn'
    $('.contact').on('click', function () {
        $('.contact-divider').addClass(animationName).one(animationEnd, 
        function () {
            $(this).removeClass(animationName);
        });
    });
});

// project animation
$(function () {
    var animationName = 'animate__animated animate__fadeInRight'
    $('.projects').on('click', function () {
        $('.right-col').addClass(animationName).one(animationEnd, 
        function () {
            $(this).removeClass(animationName);
        });
    });
});

$(function () {
    var animationName = 'animate__animated animate__fadeInLeft'
    $('.projects').on('click', function () {
        $('.left-col').addClass(animationName).one(animationEnd, 
        function () {
            $(this).removeClass(animationName);
        });
    });
});

// Activate SimpleLightbox plugin for portfolio items
new SimpleLightbox({
    elements: '#portfolio a.portfolio-box'
});
});

