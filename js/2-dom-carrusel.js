 
        //crea HTML 

                    
            var domInicial=` 
            <section id="domInicial">
            <h2 id="borrar2">¡Bienvenido al rosario online!</h2>
            </section>
            <section id="seccionRosario">
            <div id="IngresoRosario">
                <button class="boton-ingreso boton-oracion " id="btnIngresoRosario">Ingresar al Rosario</button>
            </div>

            </section>`

        var botonSalirHTML=`<div class="botonSalirRosarioDIV">
        <button class="boton-salir boton-oracion " id="btnSalirRosario" onclick="HTMLSalir()">Salir</button>
    </div>`

        var HTMLPeticiones=`
        <div class="peticionesTexto">
        <h2 class="h2Peticiones" >🙏Tus peticiones:</h2>
        <p class="pPeticiones" id="peticiones">Tus peticiones:</p>
        <h2 class="h2Peticiones" ">☀️Agradeces por:</h2>
        <p class="pPeticiones" id="graciasPor">Tus peticiones:</p>
     </div>`

        var BienvenidaDivHTML=`
        <div class="divTituloBienvenida carrusel">
            <div class="diapositiva activa">
                <h2 id="tituloBienvenida"></h2>

            <p class="pBienvenida parrafo">
                ¡Hola! en el siguiente rosario Junto a la Madre de Dios, estarás agradeciendo por: ....
                E intercediendo por las siguientes peticiones: ;
            </p>

            <h3 class="h3Bienvenida"> Juan! hoy corresponden los misterios:.....😍</h3>
            </div>       
         </div>

   
         `


         var botonesBienvenida=`<div class="botones">
         
             <button onclick="HTMLSiguiente()">Siguiente</button>
          </div>`

         var botonesDivHTML=`<div class="botones">
         <button class="BotonOcultar" onclick="diapositivaAnterior()">Anterior</button>
             <button class="BotonOcultarFinal"onclick="diapositivaSiguiente()">Siguiente</button>
          </div>`

          var botonesPadreNuestroHTML=`<div class="botones">
         <button onclick="diapositivaAnteriorPadre()">Anterior</button>
             <button onclick="diapositivaSiguientePadre()">Siguiente</button>
          </div>`

        var carruselMisteriosHTML=`

        <div class="carrusel">
            <div class="diapositiva activa">
                <h2 id="tituloMisterio"></h2>

            <p class="pMisterio parrafo">
                este es el misterio
            </p>

            <h3 class="h3Misterio"> blblabla</h3>
            </div>       
         </div>`

        var carruselPadreNuestroHTML=` <div class="carrusel">
        
        <div class="diapositiva activa">
        <img src="assets/img/img-Padre-1.jpeg" alt="ImagenPadre 1">
        <div class="descripcion"></div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-2.jpeg" alt="ImagenPadre 2">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-3.jpeg" alt="ImagenPadre 3">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-4.jpeg" alt="ImagenPadre 4">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-5.jpeg" alt="ImagenPadre 5">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-6.jpeg" alt="ImagenPadre 6">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-7.jpeg" alt="ImagenPadre 7">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-8.jpeg" alt="ImagenPadre 8">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-9.jpeg" alt="ImagenPadre 9">
            <div class="descripcion">""</div>
        </div>
        <div class="diapositiva">
            <img src="assets/img/img-Padre-10.jpeg" alt="ImagenPadre 10">
            <div class="descripcion">""</div>
        </div>

    </div>`

        var contadorHTML = `
                <div class="contador">
                <ul>
                
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
            </div>`

        var carruselHTML = `
            
                    <div class="carrusel">

                    <div class="diapositiva activa DivMisterio">
                        <h2 id="tituloMisterio"></h2>
                        <img src="assets/img/Gozoso-1.jpg" alt="ImagenPadre 1" id="imgMisterio">
                            <h3 class="h3Misterio" id="parrafoMisterio"> blblabla</h3>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-1.jpeg" alt="ImagenPadre 1">
                        <div class="descripcion"></div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-2.jpeg" alt="ImagenPadre 2">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-3.jpeg" alt="ImagenPadre 3">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-4.jpeg" alt="ImagenPadre 4">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-5.jpeg" alt="ImagenPadre 5">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-6.jpeg" alt="ImagenPadre 6">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-7.jpeg" alt="ImagenPadre 7">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-8.jpeg" alt="ImagenPadre 8">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-9.jpeg" alt="ImagenPadre 9">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva DPadre">
                        <img src="assets/img/img-Padre-10.jpeg" alt="ImagenPadre 10">
                        <div class="descripcion">""</div>
                    </div>
                    <div class="diapositiva">
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

             `;
        
        var despedidaDivHTML=`
             <div class="divTituloDespedida carrusel">
                 <div class="diapositiva activa">
                     <h2 id="tituloDespedida"> ¡Felicidades Juan!</h2>
     
                 <p class="pDespedida parrafo">
                 Con la ayuda e intercesión maternal de María, has intercedido por: \n Rezando:\n Que tus manos, unidas en oración a María, sigan esparciendo flores de bondad y coronas de amor. Y que ella siga intercediendo por ti y tus intenciones, guiándote con su ternura maternal. 
                 </p>
     
                 <h3 class="h3Despedida"> </h3>
                 </div>       
              </div>
     
        
              `
            
       

        // Carga dinámicamente el script del carrusel
            var script = document.createElement('script');
            script.src = 'js/carrusel.js';
            document.body.appendChild(script);