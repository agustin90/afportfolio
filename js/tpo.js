(function(){

    var contador = 0;
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');

    var validarNombre = function(e){
        if (formulario.nombres.value == 0){
            alert("Complete el campo Nombre y apellido");
            e.preventDefault();
        }
        else {
            contador = contador + 1;
        }
    };

    var validarCorreo = function(e){
        if (formulario.correo.value == 0){
            alert("Complete el campo Correo electrónico");
            e.preventDefault();
        }
        else {
            contador = contador + 1;
        }
    };

    var validarCelular = function(e){
        if (formulario.celular.value == 0){
            alert("Complete el campo Número de celular");
            e.preventDefault();
        }
        else {
            contador = contador + 1;
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarCorreo(e);
        validarCelular(e);
        if (contador == 3){
            alert("¡Muchas gracias por enviar el formulario, me contactaré a la brevedad!");
        }
        contador = 0;
    };

    formulario.addEventListener("submit", validar);

}())