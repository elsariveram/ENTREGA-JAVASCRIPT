    
    var section;

    //recoge datos de sessionStorage
        var storageNombre = sessionStorage.getItem('nombre');
        var storagePeticion = sessionStorage.getItem('peticion');
        var storageGracias = sessionStorage.getItem('gracias');
        var storageCuenta = sessionStorage.getItem('cuenta');
        var storagemisterioNumero = sessionStorage.getItem('misterioNumero');
        var storageMisterio = sessionStorage.getItem('misterio');
    
    //mensaje sweet alert

        if (storageNombre!=null) {

            Swal.fire({
            
                html: `
                <h1 id="TituloFelicidades">¡Paz y bien ${storageNombre}!</h1>
                <p id="pFelicidades">Con la ayuda e intercesión maternal de María, has intercedido por:

                <table>
                    <tr>
                        <th>Peticiones</th>
                        
                    </tr>
                    <tr>
                        <td>${storagePeticion}</td>
                    </tr>
                    <tr>
                        <th>Agradecimientos</th>
                    </tr>
                    <tr>
                          <td>${storageGracias}</td>
                    </tr>
                    </table>


                <p>Rezando:</p>
                
                <table>
                    <tr>
                        <th>Número</th>
                        <th>Misterio</th>
                    </tr>
                    <tr>
                        <td id="tdNumeroMisterio">${storagemisterioNumero}</td>
                        <td id="tdMisterio">Misterios ${storageMisterio}</td>
                    </tr>
                    <tr>
                        <td id="tdNumeroCuenta">${storageCuenta}</td>
                        <td id="tdCuenta">Cuentas</td>
                    </tr>
                </table>
                
                <p>Que tus manos, unidas en oración a María, sigan esparciendo flores de bondad y coronas de amor. Y que ella siga intercediendo por ti y los tuyos, guiándolos con su ternura maternal.</p>
    
    
                `,
                showCloseButton: true,
                
                focusConfirm: false,
                confirmButtonText: `
                <i class="fa fa-thumbs-up"></i> ¡Gracias!
                `,
                confirmButtonAriaLabel: "Thumbs up, great!",
                
            });
        };
           

    //limpia sessionStorage
        sessionStorage.clear();


//DOM INGRESO//
    document.addEventListener("DOMContentLoaded", function() {

        try {
           // Seleccionamos el botón
        var btnIngresoRosario = document.getElementById("btnIngresoRosario");
        // seleccion div otras oraciones
        // var OracionesYmisterios = document.getElementById("OracionesYmisterios");

        // Agregamos un event listener para detectar el clic en el botón
        btnIngresoRosario.addEventListener("click", function() {
            // Seleccionamos el contenedor del botón
            section = document.getElementById("IngresoRosario");
            // var section2 = document.getElementById("OracionesYmisterios");
            
            // Eliminamos el botón y otras oraciones
            section.removeChild(btnIngresoRosario);
            // section2.remove(OracionesYmisterios);
        
             //eliminamos titulo:
             var borrar2 = document.getElementById("borrar2");
            borrar2.remove();

            // Carga dinámicamente el script de 1 DOM FORMULARIO----------------------------------------------------------
                            var script1 = document.createElement('script');
                            script1.src = 'js/1-dom-formulario.js';
                            document.body.appendChild(script1);  

                    });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se ha producido un error con el Botón de Ingreso.',
                footer: error,
                confirmButtonText: 'Aceptar'
              });
           
                            }
        
});

 