    
    var section;



//DOM INGRESO//
    document.addEventListener("DOMContentLoaded", function() {
        // Seleccionamos el botón
        var btnIngresoRosario = document.getElementById("btnIngresoRosario");
        // seleccion div otras oraciones
        var OracionesYmisterios = document.getElementById("OracionesYmisterios");

        // Agregamos un event listener para detectar el clic en el botón
        btnIngresoRosario.addEventListener("click", function() {
            // Seleccionamos el contenedor del botón
            section = document.getElementById("IngresoRosario");
            var section2 = document.getElementById("OracionesYmisterios");
            
            // Eliminamos el botón y otras oraciones
            section.removeChild(btnIngresoRosario);
            section2.remove(OracionesYmisterios);
        
        //eliminamos titulo:
        var borrar2 = document.getElementById("borrar2");
        borrar2.remove();

// Carga dinámicamente el script de 1 DOM FORMULARIO----------------------------------------------------------
        var script1 = document.createElement('script');
        script1.src = 'js/1-dom-formulario.js';
        document.body.appendChild(script1);  


});
});
