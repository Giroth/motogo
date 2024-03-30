/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
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

    $(document).ready(function(){
        $('.carrusel').slick();
      });
      
      $(document).ready(function(){
        $("#register-link").click(function(){
            $("#register-option").toggle();
        });
    });

    function toggleLoginForm(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        var loginForm = document.getElementById('login');
        if (loginForm.style.display === 'none' || loginForm.style.display === '') {
            loginForm.style.display = 'block'; // Mostrar el formulario
        } else {
            loginForm.style.display = 'none'; // Ocultar el formulario
        }
    } 

    function hideLoginFormOnClickOutside(event) {
        var loginForm = document.getElementById('login');
        if (event.target !== loginForm && !loginForm.contains(event.target)) {
            loginForm.style.display = 'none'; // Ocultar el formulario
        }
    }

    
    
    document.getElementById('login-link').addEventListener('click', function(event) {
        toggleLoginForm(event);
        setTimeout(function() {
            document.addEventListener('click', closeLoginFormOnClickOverlay);
        }, 0);
    });

    // Evento para cerrar el formulario al hacer clic en el overlay transparente
    document.addEventListener('click', closeLoginFormOnClickOverlay);
    document.getElementById('login-link').addEventListener('click', toggleLoginForm);

});
