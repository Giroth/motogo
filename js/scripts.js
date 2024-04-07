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
        $('.carrusel').slick({
autoplay: true,
autoplaySpeed: 2000,
isFinite: true
        });
      });
      
      $(document).ready(function(){
        $("#register-link").click(function(){
            $("#register-option").toggle();
        });
    });


    // Función para mostrar y ocultar el formulario de inicio de sesión
    function toggleLoginForm(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        var loginForm = document.getElementById('login');
        if (loginForm.style.display === 'none' || loginForm.style.display === '') {
            loginForm.style.display = 'block'; // Mostrar el formulario
        } else {
            loginForm.style.display = 'none'; // Ocultar el formulario
        }
    }

    function ocultarLoginForm(event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del botón
        var loginForm = document.getElementById('login');
        loginForm.style.display = 'none'; // Ocultar el formulario
    }

    // Mostrar u ocultar el formulario al hacer clic en el enlace "Iniciar Sesión"
    document.getElementById('login-link').addEventListener('click', toggleLoginForm);

    document.querySelector('.cerrarLogin').addEventListener('click', ocultarLoginForm);

});

// MiInformacion

document.addEventListener("DOMContentLoaded", function() {
    var botonEditar = document.querySelector(".editarInfo");
    var botonCancelar = document.querySelector(".editarInfoCancelar");
    var etiquetasInfo2 = document.querySelectorAll(".etiquetasInfo2");
    var editarMiInfoInputs = document.querySelectorAll(".editarMiInfo");

    // Guardar estilos originales de etiquetasInfo2
    var estilosOriginalesEtiquetasInfo2 = [];
    etiquetasInfo2.forEach(function(etiqueta) {
        estilosOriginalesEtiquetasInfo2.push(etiqueta.style.display);
    });

    // Guardar estilos originales de editarMiInfoInputs
    var estilosOriginalesEditarMiInfoInputs = [];
    editarMiInfoInputs.forEach(function(input) {
        estilosOriginalesEditarMiInfoInputs.push(input.style.display);
    });

    botonEditar.addEventListener("click", function() {
        // Ocultar etiquetasInfo2 y mostrar inputs editarMiInfo
        etiquetasInfo2.forEach(function(etiqueta) {
            etiqueta.style.display = "none";
        });
        editarMiInfoInputs.forEach(function(input) {
            input.style.display = "block";
        });

        // Mostrar botón Cancelar
        botonCancelar.style.display = "inline-block";

        // Ocultar botón Editar
        botonEditar.style.display = "none";
    });

    botonCancelar.addEventListener("click", function() {
        // Restaurar estilos originales de etiquetasInfo2
        etiquetasInfo2.forEach(function(etiqueta, index) {
            etiqueta.style.display = estilosOriginalesEtiquetasInfo2[index];
        });

        // Ocultar inputs editarMiInfo y mostrar etiquetasInfo2
        editarMiInfoInputs.forEach(function(input, index) {
            input.style.display = estilosOriginalesEditarMiInfoInputs[index];
        });

        // Ocultar botón Cancelar
        botonCancelar.style.display = "none";

        // Mostrar botón Editar
        botonEditar.style.display = "inline-block";
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const informacionVyS = document.querySelector('.informacionVyS');
    const backgroundContainer = document.querySelector('.background-container');
    const card2 = document.querySelector('.card2');

    informacionVyS.addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del enlace
        backgroundContainer.style.display = 'flex';
        card2.style.display = 'block';
    });

    // Agrega un listener al contenedor de fondo para cerrar la tarjeta cuando se hace clic fuera de ella
    backgroundContainer.addEventListener('click', function(event) {
        if (event.target === backgroundContainer) {
            backgroundContainer.style.display = 'none';
            card2.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Mostrar background-container2 cuando se hace clic en el enlace .botonCancelar
    document.querySelector('.botonCancelar').addEventListener('click', function() {
        document.querySelector('.background-container2').style.display = 'flex';
    });

    // Ocultar background-container2 cuando se hace clic en el enlace .labelCancelar
    document.querySelector('.labelCancelar').addEventListener('click', function() {
        document.querySelector('.background-container2').style.display = 'none';
    });
});




