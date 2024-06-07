let VarNombre="";
let VarPeticion="";
let VarGracias="";
let misterio;
 


//DOM FORMULARIO//  

        try {
        // Creamos los elementos del formulario
        var formularioSection = document.createElement("section");
        formularioSection.id = "formulario";
        
        var form = document.createElement("form");
        form.classList.add("formulario");
        form.action = "";
        
        var nombreLabel = document.createElement("label");
        nombreLabel.htmlFor = "nombre";
        nombreLabel.textContent = "Ingresa tu nombre:";
        
        var nombreInput = document.createElement("input");
        nombreInput.type = "text";
        nombreInput.id = "nombre";
        nombreInput.value = "Juan";
        
        var peticionLabel = document.createElement("label");
        peticionLabel.htmlFor = "peticion";
        peticionLabel.textContent = "Ingresa tus peticiones de intercesión:";
        
        var peticionInput = document.createElement("textarea");
        peticionInput.rows = 4; // Número de filas visibles
        peticionInput.cols = 5; // Número de columnas visibles
        peticionInput.id = "peticion";
        peticionInput.value = "Por la salud de mi familia";
        
        var agradecimientosLabel = document.createElement("label");
        agradecimientosLabel.htmlFor = "agradecimientos";
        agradecimientosLabel.textContent = "Ingresa tus agradecimientos:";
        
        var agradecimientosInput = document.createElement("textarea");
        agradecimientosInput.rows = 4; // Número de filas visibles
        agradecimientosInput.cols = 5; // Número de columnas visibles
        agradecimientosInput.id = "agradecimientos";
        agradecimientosInput.value = "Por el nuevo trabajo";
        
        var botonIngresar = document.createElement("button");
        botonIngresar.id = "botonIngresar";
        botonIngresar.textContent = "Ingresar";
        
        // Añadimos los elementos al formulario
        form.appendChild(nombreLabel);
        form.appendChild(nombreInput);
        form.appendChild(peticionLabel);
        form.appendChild(peticionInput);
        form.appendChild(agradecimientosLabel);
        form.appendChild(agradecimientosInput);
        form.appendChild(botonIngresar);
        
//-----------------------------------------// Añadimos el formulario al contenedor---------------------------------
        formularioSection.appendChild(form);
        section.appendChild(formularioSection);

 

//-------------------//  listeners

                    // Añadir  listener al boton


                    botonIngresar.addEventListener("click", function(event) {
                        event.preventDefault(); // Para evitar un envío del formulario

                        try {

                        if (nombreInput.value === null || nombreInput.value.trim() === "") {
                            Swal.fire({
                                icon: 'warning',
                                title: '¡Atención!',
                                text: 'Por favor, ingresa tu nombre antes de continuar'
                              });
                        }
                        else {
                             // Guardar  datos  formulario en  variables globales
                        VarNombre = nombreInput.value;
                        VarPeticion = peticionInput.value;
                        VarGracias= agradecimientosInput.value;
//---------------------//guardar en sessionStorage
                        sessionStorage.setItem('nombre', VarNombre);
                        sessionStorage.setItem('peticion', VarPeticion);
                        sessionStorage.setItem('gracias', VarGracias);

                       

   //------------------ // Oculta el formulario
                        var formularioSection = document.getElementById('formulario');
                        formularioSection.style.display = 'none';


//---------------------------------// Carga dinámicamente el script de DOM CARRUSEL----------------------------------------------------------
                    var script3 = document.createElement('script');
                    script3.src = 'js/2-dom-carrusel.js';
                    document.body.appendChild(script3);  
                        }

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


                } 
                catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Se ha producido un error con el Formulario.',
                        footer: error,
                        confirmButtonText: 'Aceptar'
                      });
                }

                   



          