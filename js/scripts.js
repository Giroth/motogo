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

// Función para mostrar y ocultar el formulario de inicio de sesión (desde el reservar sin login)
function toggleLoginFormReserve(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    var loginForm = document.getElementById('login');
    if (loginForm.style.display === 'none' || loginForm.style.display === '') {
        loginForm.style.display = 'block'; // Mostrar el formulario
    } else {
        loginForm.style.display = 'none'; // Ocultar el formulario
    }
}

// Mostrar u ocultar el formulario al hacer clic en el botón "Reservar"
var reserveButtons = document.querySelectorAll('.boton-reservaN');
for (var i = 0; i < reserveButtons.length; i++) {
    reserveButtons[i].addEventListener('click', toggleLoginFormReserve);
}

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


document.getElementById('busquedalocal').addEventListener('focus', function() {
    document.getElementById('custom-dropdown-content').style.display = 'block';
});


let clicks = 0;
let timer = null;

// Función para manejar los clics rápidos
function handleClicks() {
    clicks++;
    if (clicks === 1) {
        // Iniciar el temporizador para reiniciar los clics
        timer = setTimeout(() => {
            clicks = 0;
        }, 650); // Establecer el tiempo límite entre clics rápidos
    } else if (clicks === 3) {
        // Si se alcanzan los tres clics rápidos, ocultar el menú desplegable
        document.getElementById('custom-dropdown-content').style.display = 'none';
        clicks = 0;
        clearTimeout(timer); // Limpiar el temporizador
    }
}

// Manejar los clics en el documento
document.addEventListener('click', function(event) {
    // Verificar si el clic no ocurrió dentro del menú desplegable
    if (!document.getElementById('custom-dropdown-content').contains(event.target)) {
        // Manejar los clics rápidos fuera del menú desplegable
        handleClicks();
    }
});

/*SCRIPT MOSTRAR INFO TARJETA VEHICULO*/
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones de información
    var informacionBotones = document.querySelectorAll(".informacion-vehiculo");

    // Agrega un event listener a cada botón de información
    informacionBotones.forEach(function(informacionBoton) {
        // Guarda el valor original de display de .visibilidad-frente-vehiculo
        var frenteVehiculo = informacionBoton.closest('.card-vehiculo').querySelector(".visibilidad-frente-vehiculo");
        var displayOriginal = frenteVehiculo.style.display;

        informacionBoton.addEventListener("click", function(event) {
            // Evita que el formulario se envíe
            event.preventDefault();

            // Selecciona los elementos dentro de la tarjeta actual
            var tarjeta = informacionBoton.closest('.card-vehiculo');
            var infoVehiculo = tarjeta.querySelector(".visibilidad-info-vehiculo");
            var botonReserva = tarjeta.querySelector(".boton-reserva"); // Selecciona el botón de reserva

            // Verifica si la información ya está mostrada
            var infoMostrada = frenteVehiculo.style.display === "none";

            // Si la información está mostrada, ocúltala
            if (infoMostrada) {
                frenteVehiculo.style.display = displayOriginal; // Restaura el valor original de display
                infoVehiculo.style.display = "none"; // Oculta la información del vehículo
                botonReserva.style.display = "block"; // Muestra el botón de reserva
                informacionBoton.textContent = "Informacion"; // Cambia el texto del botón a "Informacion"
                
            } else {
                // Si la información no está mostrada, muéstrala
                frenteVehiculo.style.display = "none"; // Oculta el frente del vehículo
                infoVehiculo.style.display = "flex"; // Muestra la información del vehículo
                botonReserva.style.display = "none"; // Oculta el botón de reserva
                informacionBoton.textContent = "Girar"; // Cambia el texto del botón a "Girar"
               
            }
        });
    });
});





/*SCRIPT MOSTRAR INFO TARJETA VEHICULO*/



document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el botón de información
    var informacionBoton = document.querySelector(".informacion-vehiculo");
    // Selecciona los contenedores de visibilidad
    var frenteVehiculo = document.querySelector(".visibilidad-frente-vehiculoR");
    var infoVehiculo = document.querySelector(".visibilidad-info-vehiculoR");

    // Define una variable de estado para rastrear si la información está mostrada o no
    var infoMostrada = false;

    // Agrega un event listener al botón de información
    informacionBoton.addEventListener("click", function(event) {
        // Evita que el formulario se envíe
        event.preventDefault();

        // Si la información está mostrada, ocúltala
        if (infoMostrada) {
            frenteVehiculo.style.display = "block"; // Restaura el valor original de display
            infoVehiculo.style.display = "none"; // Oculta la información del vehículo
            informacionBoton.textContent = "Informacion"; // Cambia el texto del botón a "Informacion"
            // Actualiza el estado
            infoMostrada = false;
        } else {
            // Si la información no está mostrada, muéstrala
            frenteVehiculo.style.display = "none"; // Oculta el frente del vehículo
            infoVehiculo.style.display = "block"; // Muestra la información del vehículo
            informacionBoton.textContent = "Girar"; // Cambia el texto del botón a "Girar"
            // Actualiza el estado
            infoMostrada = true;
        }
    });
});


 // Abrir/cerrar resumen
document.querySelector('.boton-reservaR').addEventListener('click', function() {
    document.querySelector('.background-container2').style.display = 'flex';
});
document.querySelector('.cerrarResumen').addEventListener('click', function() {
    document.querySelector('.background-container2').style.display = 'none';
});
// Abrir/cerrar resumen