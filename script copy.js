//DOM INGRESO//
document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos el botón
    var btnIngresoRosario = document.getElementById("btnIngresoRosario");
    // seleccion div otras oraciones
    var OracionesYmisterios = document.getElementById("OracionesYmisterios");

    
    
    // Agregamos un event listener para detectar el clic en el botón
    btnIngresoRosario.addEventListener("click", function() {
        // Seleccionamos el contenedor del botón
        var section = document.getElementById("IngresoRosario");
        var section2 = document.getElementById("OracionesYmisterios");
        
        // Eliminamos el botón y otras oraciones
        section.removeChild(btnIngresoRosario);
        section2.remove(OracionesYmisterios);
       
       //eliminamos titulo:
       var borrar2 = document.getElementById("borrar2");
       borrar2.remove();

//DOM FORMULARIO//  
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
        nombreInput.value = "Juan Pérez";
        
        var peticionLabel = document.createElement("label");
        peticionLabel.htmlFor = "peticion";
        peticionLabel.textContent = "Ingresa tus peticiones de intercesión:";
        
        var peticionInput = document.createElement("input");
        peticionInput.type = "text";
        peticionInput.id = "peticion";
        peticionInput.value = "Por la salud de mi familia";
        
        var agradecimientosLabel = document.createElement("label");
        agradecimientosLabel.htmlFor = "agradecimientos";
        agradecimientosLabel.textContent = "Ingresa tus agradecimientos:";
        
        var agradecimientosInput = document.createElement("input");
        agradecimientosInput.type = "text";
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
        
        // Añadimos el formulario al contenedor
        formularioSection.appendChild(form);
        section.appendChild(formularioSection);
// Carga dinámicamente el script de BASE DATOS----------------------------------------------------------
var script2 = document.createElement('script');
script2.src = 'js/base-datos.js';
document.body.appendChild(script2);  



        //  listeners
          
        // Listener de eventos para el botón de ingreso del formulario
    document.getElementById('botonIngresar').addEventListener('click', function(event) {
        event.preventDefault(); // Evita el comportamiento predeterminado del formulario

      
        
        // Oculta el formulario
        var formularioSection = document.getElementById('formulario');
        formularioSection.style.display = 'none';
        
        // Crea el HTML del carrusel
        var carruselHTML = `
                <div class="contador">
                <ul>
                <li id="contglobal">
                            global 1
                        </li>
                    <li id="misterio">
                            Misterio 1
                        </li>
                    <li id="cuenta">
                        Cuenta 1
                    </li>
                    <li id="porcentajeCuenta">
                        Cuenta 10%
                    </li>
                    

                </ul>
              </div>
        
            <div class="carrusel">
            
           
                <div class="diapositiva activa">
                    <img src="assets/img/imagen1.jpeg" alt="Imagen 1">
                    <div class="descripcion">"Dios te salve María,"</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen2.jpeg" alt="Imagen 2">
                    <div class="descripcion">"llena eres de gracia,"</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen3.jpeg" alt="Imagen 3">
                    <div class="descripcion">"el Señor es contigo."</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen4.jpeg" alt="Imagen 4">
                    <div class="descripcion">"Bendita eres entre todas las mujeres,"</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen5.jpeg" alt="Imagen 5">
                    <div class="descripcion">"y bendito es el fruto de tu vientre: Jesús."</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen6.jpeg" alt="Imagen 6">
                    <div class="descripcion">"Santa Maria,"</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen7.jpeg" alt="Imagen 7">
                    <div class="descripcion">"madre de Dios,"</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen8.jpeg" alt="Imagen 8">
                    <div class="descripcion">"ruega por nosotros pecadores"</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen9.jpeg" alt="Imagen 9">
                    <div class="descripcion">"ahora...""</div>
                </div>
                <div class="diapositiva">
                    <img src="assets/img/imagen10.jpeg" alt="Imagen 10">
                    <div class="descripcion">"y en la hora de nuestra muerte, amén."</div>
                </div>
            </div>
            <div class="botones">
            <button onclick="diapositivaAnterior()">Anterior</button>
                <button onclick="diapositivaSiguiente()">Siguiente</button>
             </div>
             `;
        
            
        // Agrega el HTML del carrusel al DOM
        var ingresoRosarioSection = document.getElementById('IngresoRosario');
        ingresoRosarioSection.innerHTML = carruselHTML;

        // Carga dinámicamente el script del carrusel
            var script = document.createElement('script');
            script.src = 'js/carrusel.js';
            document.body.appendChild(script);
        
    });
    });
});


