
    let mensajeMisterio;
    let misterioCorto;
    let ActualizarTitulo;

//CONTADORES
    let contadorGlobal=1;
    let contadorPorcentajeCuenta = 0; //1-10
    let contadorCuenta = 1;
    let contadorMisterio = 1;
    let imgMisterio;

//DEFINIR dia
    let dia; // Declaración de la variable dia 

    function DefinirDia() {
        const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
        const fecha = new Date();
        dia = diasSemana[fecha.getDay()]; // Asignación de valor a la variable dia

        // Verificar si el día obtenido es válido
        if (!diasSemana.includes(dia)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Se ha producido un error con el dia obtenido.',
                footer: error,
                confirmButtonText: 'Aceptar'
            });
            return null;
        }

        return dia;
        };


// Llamada a la función para definir el día
    DefinirDia();

//Definir misterio
        function DefinirMisterio() {
            
        switch (dia) {
            case 'lunes':
            case 'sábado':
            case 'sabado':
                mensajeMisterio= VarNombre + " hoy corresponden los misterios Gozosos 😍";
                misterio="gozosos";
                misterioCorto="gozoso";
                break;
            case 'martes':
            case 'viernes':
                mensajeMisterio= VarNombre +  " hoy corresponden los misterios Dolorosos 😢";
                misterio="dolorosos";
                misterioCorto="doloroso";
                break;
            case 'miercoles': 
            case 'miércoles':
            case 'domingo':
                mensajeMisterio= VarNombre + " hoy corresponden los misterios Gloriosos 😇";
                misterio="gloriosos";
                misterioCorto="glorioso";
                break;
            case 'jueves':
                mensajeMisterio= VarNombre +  " hoy corresponden los misterios Luminosos 🤩";
                misterio="luminosos";
                misterioCorto="luminoso";
                break;
            default:
                alert("No se reconoce el día ingresado.");
                misterio="indefinido";
                break;
                
                
        }
        }
        DefinirMisterio();  
        let VarReflexionMisterio = "";
        let ReflexionMisterioTituloCorto="";
//Funcion ReflexionMisterio
    function ReflexionMisterio() {
        switch (misterio) {
            case "gozosos":
                        if (contadorMisterio === 1) {
                            VarReflexionMisterio = '🌹Anunciación: María recibe el mensaje del Arcángel Gabriel de que será la Madre del Hijo de Dios.';
                            imgMisterio='assets/img/Gozoso-1.jpg';
                            ReflexionMisterioTituloCorto="La Anunciación a María 🌹";
                        
                        }
                        else if (contadorMisterio === 2) {
                            VarReflexionMisterio = '🤰👩‍❤️‍👩Visitación: María visita a su prima Isabel, quien está embarazada de San Juan Bautista.';
                            imgMisterio='assets/img/Gozoso-2.jpg';
                            ReflexionMisterioTituloCorto="La Visitación de María a Isabel 👩‍❤️‍👩";
                        }
                        else if (contadorMisterio === 3) {
                            VarReflexionMisterio = '👶🌟Nacimiento de Jesús: Nacimiento milagroso de Jesús en Belén, en gran humildad.';
                            imgMisterio='assets/img/Gozoso-3.jpg';
                            ReflexionMisterioTituloCorto="El Nacimiento de Jesús 👶";
                        }
                        else if (contadorMisterio === 4) {
                            VarReflexionMisterio = '🙏 Presentación en el Templo: María y José presentan a Jesús en el Templo, cumpliendo la ley judía..';
                            imgMisterio='assets/img/Gozoso-4.jpg';
                            ReflexionMisterioTituloCorto="La Presentación de Jesús en el Templo 🙏";
                        }
                        else if (contadorMisterio === 5) {
                            VarReflexionMisterio = '😲Hallazgo de Jesús en el Templo: A los 12 años, Jesús es encontrado predicando en el Templo después de estar perdido durante tres días.';
                            imgMisterio='assets/img/Gozoso-5.jpg';
                            ReflexionMisterioTituloCorto="El Hallazgo de Jesús en el Templo 😲";
                        }
                        break;
                case "luminosos":
                            if (contadorMisterio === 1) {
                                VarReflexionMisterio = '🌟Bautismo de Jesús: Jesús es bautizado por Juan en el río Jordán. Reflexión: Identificación de Jesús con la humanidad y su misión divina.';
                                imgMisterio='assets/img/luminoso-1.jpg';
                                ReflexionMisterioTituloCorto="El Bautismo de Jesús 🌟";
                            }
                            else if (contadorMisterio === 2) {
                                VarReflexionMisterio = '🌟Bodas de Caná: Jesús realiza su primer milagro al convertir agua en vino en las bodas de Caná. Reflexión: La abundancia de la gracia de Dios en nuestras vidas.';
                                imgMisterio='assets/img/luminoso-2.jpg';
                                ReflexionMisterioTituloCorto="Las Bodas de Caná 🌟";
                            }
                            else if (contadorMisterio === 3) {
                                VarReflexionMisterio = '🌟Anuncio del Reino de Dios: Jesús proclama las bienaventuranzas y enseña sobre el Reino de Dios. Reflexión: La llamada a vivir en justicia y amor.';
                                imgMisterio='assets/img/luminoso-3.jpg';
                                ReflexionMisterioTituloCorto="El Anuncio del Reino de Dios 🌟";
                            }
                            else if (contadorMisterio === 4) {
                                VarReflexionMisterio = '🌟Transfiguración: Jesús se transfigura en el monte y aparece junto a Moisés y Elías. Reflexión: Revelación de la gloria divina de Jesús.';
                                imgMisterio='assets/img/luminoso-4.jpg';
                                ReflexionMisterioTituloCorto="La Transfiguración de Jesús 🌟";
                            }
                            else if (contadorMisterio === 5) {
                                VarReflexionMisterio = '🌟Institución de la Eucaristía: Jesús instituye la Eucaristía durante la Última Cena. Reflexión: El regalo del Cuerpo y la Sangre de Cristo para nuestra salvación.';
                                imgMisterio='assets/img/luminoso-5.jpg';
                                ReflexionMisterioTituloCorto="La Institstitución de la Eucaristía 🌟";
                            }
                    break;
                    case "dolorosos":
                        if (contadorMisterio === 1) {
                            VarReflexionMisterio = '😔Oración en el Huerto: Jesús ora en Getsemaní antes de su arresto. Reflexión: Aceptación de la voluntad de Dios incluso en momentos de sufrimiento.';
                            imgMisterio='assets/img/doloroso-1.jpg';
                            ReflexionMisterioTituloCorto="La Oración en el Huerto 😔";
                        }
                        else if (contadorMisterio === 2) {
                            VarReflexionMisterio = '😔Flagelación: Jesús es azotado y maltratado antes de su crucifixión. Reflexión: El sufrimiento redentor de Cristo por la humanidad.';
                            imgMisterio='assets/img/doloroso-2.jpg';
                            ReflexionMisterioTituloCorto="La Flagelación de Jesús 😔";
                        }
                        else if (contadorMisterio === 3) {
                            VarReflexionMisterio = '😔Coronación de Espinas: Jesús es coronado de espinas por los soldados romanos. Reflexión: Jesús como Rey del Universo que sufre por amor a nosotros.';
                            imgMisterio='assets/img/doloroso-3.jpg';
                            ReflexionMisterioTituloCorto="La Corona de Espinas de Jesús 😔";
                        }
                        else if (contadorMisterio === 4) {
                            VarReflexionMisterio = '😔Camino al Calvario: Jesús carga con la cruz hacia el Calvario. Reflexión: El peso del sufrimiento humano y la compasión de Jesús.';
                            imgMisterio='assets/img/doloroso-4.jpg';
                            ReflexionMisterioTituloCorto="El Camino al Calvario de Jesús 😔";
                        }
                        else if (contadorMisterio === 5) {
                            VarReflexionMisterio = '😔Crucifixión y Muerte: Jesús es crucificado y muere en la cruz por nuestra redención. Reflexión: El sacrificio supremo de Jesús por el perdón y la salvación.';
                            imgMisterio='assets/img/doloroso-5.jpg';
                            ReflexionMisterioTituloCorto="La Crucifixión de Jesús 😔";
                        }
                    break;
                    case "gloriosos":
                        if (contadorMisterio === 1) {
                            VarReflexionMisterio = '😍Jesús resucita de entre los muertos al tercer día. Reflexión: La victoria de la vida sobre la muerte.';
                            imgMisterio='assets/img/glorioso-1.jpg';
                            ReflexionMisterioTituloCorto="La Resurrección de Jesús 😍";
                        }
                        else if (contadorMisterio === 2) {
                            VarReflexionMisterio = '👑Jesús asciende al cielo en presencia de sus discípulos. Reflexión: La promesa de Jesús de estar siempre con nosotros.';
                            imgMisterio='assets/img/glorioso-2.jpg';
                            ReflexionMisterioTituloCorto="La Ascension de Jesús 👑";
                        }
                        else if (contadorMisterio === 3) {
                            VarReflexionMisterio = '🕊️Venida del Espíritu Santo: El Espíritu Santo desciende sobre los apóstoles en Pentecostés. Reflexión: El nacimiento de la Iglesia y el poder del Espíritu Santo.';
                            imgMisterio='assets/img/glorioso-3.jpg';
                            ReflexionMisterioTituloCorto="La Venida del Espíritu Santo 🕊️";
                        }
                        else if (contadorMisterio === 4) {
                            VarReflexionMisterio = '🌟Asunción de María: María es llevada al cielo en cuerpo y alma. Reflexión: La coronación de María como Reina del Cielo.';
                            imgMisterio='assets/img/glorioso-4.jpg';
                            ReflexionMisterioTituloCorto="La Asunción de María 🌟";
                        }
                        else if (contadorMisterio === 5) {
                            VarReflexionMisterio = '👑Coronación de María: María es coronada como Reina del Cielo y de la Tierra. Reflexión: La intercesión de María por nosotros ante su Hijo.';
                            imgMisterio='assets/img/glorioso-5.jpg';
                            ReflexionMisterioTituloCorto="La Coronación de María 👑";
                        }
                    break;
        }

    }
    ReflexionMisterio();


//MENSAJE BIENVENIDA

    Swal.fire({
        html: `
                <h1 id="TituloFelicidades">¡Hola ${VarNombre}!</h1>
                <p id="pFelicidades">En el siguiente rosario Junto a la Madre de Dios, estarás intercediendo ante el Señor por las siguientes peticiones y agradecimientos:

                <table>
                    <tr>
                        <th>Peticiones</th>
                        
                    </tr>
                    <tr>
                        <td>${VarPeticion}</td>
                    </tr>
                    <tr>
                        <th>Agradecimientos</th>
                    </tr>
                    <tr>
                          <td>${VarGracias}</td>
                    </tr>
                    </table>
                `,


    //   title: '¡Hola '+VarNombre+'!',
    //   text: 'En el siguiente rosario Junto a la Madre de Dios, estarás intercediendo ante el Señor por las siguientes peticiones: '+VarPeticion+' Y agradeciendo por: '+VarGracias,
      confirmButtonText: 'Gracias'
    }).then((resultado) => {
        if (resultado.isConfirmed) {
          Swal.fire({
            title: mensajeMisterio,
            confirmButtonText: 'Aceptar'
          });
        }
      });


 //OCULTAR EL CONTADOR AL PRINCIPIO DE LOS MISTERIOS
  function ocultarContador (){
    if (contadorGlobal>=12 && contadorGlobal<=111||contadorGlobal>=123 && contadorGlobal<=222 ||contadorGlobal>=234 && contadorGlobal<=333 ||contadorGlobal>=345 && contadorGlobal<=444 ||contadorGlobal>=456 && contadorGlobal<=555) {      
        ////////
        var OcultarContador = document.getElementById('cuenta')
        OcultarContador.classList.remove('ocultar')
        var OcultarContador2 = document.getElementById('porcentajeCuenta')
        OcultarContador2.classList.remove('ocultar')
    }
    else {
        if (contadorGlobal===1){
            ///////////       
         var OcultarContador = document.getElementById('cuenta')
         OcultarContador.classList.add('ocultar')
         var OcultarContador2 = document.getElementById('porcentajeCuenta')
         OcultarContador2.classList.add('ocultar')
         var OcultarContador3 = document.getElementById('misterio')//ocultar misterio
             OcultarContador3.classList.add('ocultar')
        }
         ///////////       
         var OcultarContador = document.getElementById('cuenta')
         OcultarContador.classList.add('ocultar')
         var OcultarContador2 = document.getElementById('porcentajeCuenta')
         OcultarContador2.classList.add('ocultar')

         if (contadorGlobal!=1|| contadorGlobal===113|| contadorGlobal===224 || contadorGlobal===335 || contadorGlobal===446) {
            var OcultarContador3 = document.getElementById('misterio')//mostrar misterio
            OcultarContador3.classList.remove('ocultar')
         }
        if (contadorGlobal===112|| contadorGlobal===223 || contadorGlobal===334 || contadorGlobal===445) {
            var OcultarContador3 = document.getElementById('misterio')//ocultar misterio
             OcultarContador3.classList.add('ocultar')
         }
         
    }
  };   


//INSERTA HTMLS----------

//OCULTAR EL BOTón AL PRINCIPIO DE LOS MISTERIOS
    function ocultarBoton (){
        if (contadorGlobal===1|| contadorGlobal===555) {
            var botonOcultar = document.querySelector('.BotonOcultar')
            botonOcultar.classList.add('ocultar')
            if (contadorGlobal===555) {
                var botonOcultarFinal = document.querySelector('.BotonOcultarFinal')
            botonOcultarFinal.classList.add('ocultar')
            }
            


            }
    }
 // Definir las diferentes vistas en un array
                var vistas = [
                    contadorHTML +carruselHTML+ botonesDivHTML+HTMLPeticiones+botonSalirHTML,
                    despedidaDivHTML+botonSalirHTML,
                ];


// Función para insertar el HTML inicial
                function insertarHTMLInicial() {
                    var ingresoRosarioSection = document.getElementById('IngresoRosario');
                    ingresoRosarioSection.innerHTML = vistas[0];  
                    ocultarBoton();
                    ocultarContador();     
                }

                
                
 // Función para cambiar al siguiente HTML
                function HTMLSiguiente() {

                        var ingresoRosarioSection = document.getElementById('IngresoRosario');
                        ingresoRosarioSection.innerHTML = vistas[1];
                }

// Función para cambiar al HTML anterior
                function HTMLAnterior() {
                    if (indiceActual > 0) {
                        indiceActual--;
                        var ingresoRosarioSection = document.getElementById('IngresoRosario');
                        ingresoRosarioSection.innerHTML = vistas[indiceActual];
                    }
                }

// Función de salir 
                function HTMLSalir() {
                    window.location.href = 'index.html'; 

                }
                

 // Llama a la función para insertar el HTML inicial
                insertarHTMLInicial();


//SESSION STORAGE ------------------
                sessionStorage.setItem('cuenta', contadorCuenta);
                sessionStorage.setItem('misterioNumero', contadorMisterio);
                sessionStorage.setItem('misterio', misterio);

///AQUI INSERTO EL TEXTO HTML INICIAL DEL PRIMER MISTERIO--------------------------------------------------------
                document.getElementById('tituloMisterio').textContent = contadorMisterio+" misterio "+misterioCorto+":"+ReflexionMisterioTituloCorto;
                document.getElementById('parrafoMisterio').textContent = VarReflexionMisterio;
                document.getElementById('imgMisterio').src = imgMisterio;
                document.getElementById('peticiones').textContent = VarPeticion;
                document.getElementById('graciasPor').textContent = VarGracias;

                
                
// FUNCIONES PARA MANEJAR LAS DIAPOSITIVAS   AVEMARIA
        let diapositivaActual = 0;
        const diapositivas = document.querySelectorAll('.diapositiva');

        

        // Función para cambiar a la siguiente diapositiva
        function diapositivaSiguiente() {
            actualizarContadores(true);//ACTUALIZA CONTADOR
            ocultarContador();
            ocultarBoton();//OCULTA BOTON
            if (contadorGlobal===2||contadorGlobal===554) {
                                var botonOcultar = document.querySelector('.BotonOcultar')
                                botonOcultar.classList.remove('ocultar')
                                var botonOcultarFinal = document.querySelector('.BotonOcultarFinal')
                                 botonOcultarFinal.classList.remove('ocultar')
                            }
            else if (contadorGlobal === 22 || contadorGlobal === 32 || contadorGlobal === 42 || contadorGlobal === 52 || contadorGlobal === 62 || contadorGlobal === 72 || contadorGlobal === 82 || contadorGlobal === 92 || contadorGlobal === 102 ||  contadorGlobal === 133 || contadorGlobal === 143 || contadorGlobal === 153 || contadorGlobal === 163 || contadorGlobal === 173 || contadorGlobal === 183 || contadorGlobal === 193 || contadorGlobal === 203 || contadorGlobal === 213   || contadorGlobal === 244 || contadorGlobal === 254 || contadorGlobal === 264 || contadorGlobal === 274 || contadorGlobal === 284 || contadorGlobal === 294 || contadorGlobal === 304 || contadorGlobal === 314 || contadorGlobal === 324    || contadorGlobal === 355 || contadorGlobal === 365 || contadorGlobal === 375 || contadorGlobal === 385 || contadorGlobal === 395 || contadorGlobal === 405 || contadorGlobal === 415 || contadorGlobal === 425  || contadorGlobal === 435  || contadorGlobal === 466 || contadorGlobal === 476 || contadorGlobal === 486 || contadorGlobal === 496 || contadorGlobal === 506 || contadorGlobal === 516 || contadorGlobal === 526 || contadorGlobal === 536 || contadorGlobal === 546 ){
                diapositivaActual = (diapositivaActual + 11) % diapositivas.length;
                mostrarDiapositiva(diapositivaActual);
            }

            diapositivaActual = (diapositivaActual + 1) % diapositivas.length;
            mostrarDiapositiva(diapositivaActual);
    
        }

        // Función para cambiar a la anterior diapositiva
        function diapositivaAnterior() {
            // Si el contador global es 22, avanza 10 diapositivas hacia adelante en lugar de retroceder una
            if (contadorGlobal === 22 || contadorGlobal === 32 || contadorGlobal === 42 || contadorGlobal === 52 || contadorGlobal === 62 || contadorGlobal === 72 || contadorGlobal === 82 || contadorGlobal === 92 || contadorGlobal === 102 ||  contadorGlobal === 133 || contadorGlobal === 143 || contadorGlobal === 153 || contadorGlobal === 163 || contadorGlobal === 173 || contadorGlobal === 183 || contadorGlobal === 193 || contadorGlobal === 203 || contadorGlobal === 213   || contadorGlobal === 244 || contadorGlobal === 254 || contadorGlobal === 264 || contadorGlobal === 274 || contadorGlobal === 284 || contadorGlobal === 294 || contadorGlobal === 304 || contadorGlobal === 314 || contadorGlobal === 324    || contadorGlobal === 355 || contadorGlobal === 365 || contadorGlobal === 375 || contadorGlobal === 385 || contadorGlobal === 395 || contadorGlobal === 405 || contadorGlobal === 415 || contadorGlobal === 425  || contadorGlobal === 435  || contadorGlobal === 466 || contadorGlobal === 476 || contadorGlobal === 486 || contadorGlobal === 496 || contadorGlobal === 506 || contadorGlobal === 516 || contadorGlobal === 526 || contadorGlobal === 536 || contadorGlobal === 546) {
                diapositivaActual = (diapositivaActual + 9) % diapositivas.length;
            } 
            else if (contadorGlobal === 223 || contadorGlobal === 334 || contadorGlobal === 445){
                diapositivaActual = (diapositivaActual + 20) % diapositivas.length;

            }
            else {
                diapositivaActual = (diapositivaActual - 1 + diapositivas.length) % diapositivas.length;
            }
            
            mostrarDiapositiva(diapositivaActual);
            actualizarContadores(false); // ACTUALIZA CONTADOR
            ocultarBoton();
            ocultarContador();
        }


        function mostrarDiapositiva(indiceDiapositiva) {
                diapositivas.forEach((diapositiva, indice) => {
                if (indice === indiceDiapositiva) {
                    diapositiva.classList.add('activa');
                 } else {
                    diapositiva.classList.remove('activa');
                    }
                 });
         }
        
//CONTADOR

//FUNCION ACTUALIZAR CONTADOR
        function actualizarContadores(avanzar) {

            try {
                            if (avanzar) {
                                contadorGlobal++;
                                
                                if (contadorGlobal>=12 && contadorGlobal<=112||contadorGlobal>=123 && contadorGlobal<=223 ||contadorGlobal>=234 && contadorGlobal<=334 ||contadorGlobal>=345 && contadorGlobal<=445 ||contadorGlobal>=456 && contadorGlobal<=556){ 
                                    contadorPorcentajeCuenta++;

                                    sessionStorage.setItem('cuenta', contadorCuenta);
                                sessionStorage.setItem('misterioNumero', contadorMisterio);
                                    if (contadorPorcentajeCuenta===11){
                                    contadorPorcentajeCuenta=1; //SI CONTADOR PORCENTAJE % SUPERA EL 10 SE DEVOLVERA A 1
                                    contadorCuenta++;
                                    /////
                                    sessionStorage.setItem('cuenta', contadorCuenta);
                                sessionStorage.setItem('misterioNumero', contadorMisterio);
                                    }
                                }
                                if (contadorCuenta===11){
                                    contadorMisterio++;
                                    contadorCuenta=1; //SI CUENTA PASA A 11, PASA A UN NUEVO MISTERIO Y SE RESETEA A 1
                                    contadorPorcentajeCuenta=0;//se recetea a 0 Porcentaje
                            
                                    
                                    ReflexionMisterio();
                                    document.getElementById('tituloMisterio').textContent = contadorMisterio+" misterio "+misterioCorto+":"+ReflexionMisterioTituloCorto;
                                        document.getElementById('parrafoMisterio').textContent = VarReflexionMisterio;
                                        document.getElementById('imgMisterio').src = imgMisterio;
                                        //////
                                        sessionStorage.setItem('cuenta', contadorCuenta);
                                sessionStorage.setItem('misterioNumero', contadorMisterio);
                                }
                                
                                }
                            
                                else {
                                    contadorGlobal--;
                                    //////////////
                                    sessionStorage.setItem('cuenta', contadorCuenta);
                                    sessionStorage.setItem('misterioNumero', contadorMisterio);
                                   

                                    if (contadorCuenta === 1 && contadorPorcentajeCuenta === 0 &&(contadorGlobal === 111||contadorGlobal === 222||contadorGlobal === 333||contadorGlobal === 444) ) {
                                        contadorMisterio--;
                                        contadorCuenta = 10; // Si cuenta está al principio (1) y se retrocede, misterio retrocede y cuenta aparece en 10
                                        contadorPorcentajeCuenta = 10; //contador de porcentaje tambien tiene que aparecer en 10.
                                        ReflexionMisterio();
                                        document.getElementById('tituloMisterio').textContent = contadorMisterio+" misterio "+misterioCorto+":"+ReflexionMisterioTituloCorto;
                                        document.getElementById('parrafoMisterio').textContent = VarReflexionMisterio;
                                        document.getElementById('imgMisterio').src = imgMisterio;
                                        ////////////
                                        sessionStorage.setItem('cuenta', contadorCuenta);
                                         sessionStorage.setItem('misterioNumero', contadorMisterio);
                                    }

                                    else if (contadorPorcentajeCuenta === 1 && contadorCuenta === 1) {
                                        contadorPorcentajeCuenta = 0;
                                        //////
                                        sessionStorage.setItem('cuenta', contadorCuenta);
                                          sessionStorage.setItem('misterioNumero', contadorMisterio);
                                    }
                                    
                                    else if (contadorPorcentajeCuenta === 1 && contadorCuenta >=2 && contadorCuenta <= 10) {
                                        contadorPorcentajeCuenta = 10; // Si contadorPorcentajeCuenta está en 1 (entre cuenta 2 a 10), se devuelve a 10 
                                        contadorCuenta--;
                                        //////
                                        sessionStorage.setItem('cuenta', contadorCuenta);
                                         sessionStorage.setItem('misterioNumero', contadorMisterio);
                                    } else if (contadorPorcentajeCuenta >= 2 && contadorPorcentajeCuenta <= 10) {
                                        contadorPorcentajeCuenta--; // Si contador de porcentaje está entre 2 y 10, se disminuye //SI FUNCIONA
                                        ///////
                                        sessionStorage.setItem('cuenta', contadorCuenta);
                                        sessionStorage.setItem('misterioNumero', contadorMisterio);
                                    }
                                }
                            
                            
                            document.getElementById('misterio').textContent = contadorMisterio+" misterio "+misterioCorto+":"+ReflexionMisterioTituloCorto;
                            document.getElementById('cuenta').textContent = `Cuenta ${contadorCuenta}`;
                            document.getElementById('porcentajeCuenta').textContent = `porcentaje cuenta ${contadorPorcentajeCuenta}0%`;

                        }
                        catch (error) {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Se ha producido un error con actualizar Contadores.',
                                footer: error,
                                confirmButtonText: 'Aceptar'
                            });
                            
                        }

        };
//colocar el misterio al iniciar
document.getElementById('misterio').textContent = contadorMisterio+" misterio "+misterioCorto+":"+ReflexionMisterioTituloCorto;



