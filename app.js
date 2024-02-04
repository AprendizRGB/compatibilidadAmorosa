let numerosJugados = [];
let numeroMaximo = 0;

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

/*function asignarNumeroMaximo() {
    if (numeroMaximo == 0) {
        let nombreUsuario =prompt(`Hola Usuario, Bienvenido a mi juego. \n¿Puedes darme tu nombre?`);
        let numeroUsuario = prompt(`¡Perfecto ${nombreUsuario}! \nAhora dime del 1 al 1000 ¿Cuánto me amas?`)
        if (9 < numeroUsuario && numeroUsuario < 1001) {
            alert(`Oh, \nPense que dirias infinito pero bueno... aceptaré tus ${numeroUsuario}`);
            console.log(`se definio como número maximo a ${numeroUsuario}`);
            alert(`Ahora te toca Adivinar el número que estoy pensando que está entre el 1 y el ${numeroUsuario}`);
            return numeroUsuario;
             
        } else {
            //El susario no acerto
            if (1000 < numeroUsuario) {
                alert(`¡${nombreUsuario}!, estoy seguro que puse 1000 como máximo...\nGracias por amarme tanto <3 \nPero sólo te puedo aceptar 1000 como mucho.`)
                alert(`Ahora te toca Adivinar el número que estoy pensando que está entre el 1 y el 1000`);
                return 1000;
            } else {
                alert(`Oye como que ${numeroUsuario}!!! \nEso no se hace... mira para mantener mi salud emocional vamos a decir que escogiste al 10`)
                alert(`Ahora te toca Adivinar el número que estoy pensando que está entre el 1 y el 10`);
                return 10;
            }
        };
        //return asignarNumeroMaximo();
    } else {
        return;
    };
};*/

function asignarNumeroMaximo() {
    if (numeroMaximo == 0) {
        let nombreUsuario =prompt(`Hola Usuario, Bienvenido a mi juego. \n¿Puedes darme tu nombre?`);
        let numeroUsuario = prompt(`¡Perfecto ${nombreUsuario}! \nAhora dime del 1 al 1000 ¿Cuánto me amas?`)
        switch (numeroUsuario) {
            case (9 < numeroUsuario && numeroUsuario < 1001):
            alert(`Oh, \nPense que dirias infinito pero bueno... aceptaré tus ${numeroUsuario}`);
            console.log(`se definio como número maximo a ${numeroUsuario}`);
            alert(`Ahora te toca Adivinar el número que estoy pensando que está entre el 1 y el ${numeroUsuario}`);
            return numeroUsuario;
            //El usuario no acerto
            case (1000 < numeroUsuario):
                alert(`¡${nombreUsuario}!, estoy seguro que puse 1000 como máximo...\nGracias por amarme tanto <3 \nPero sólo te puedo aceptar 1000 como mucho.`)
                alert(`Ahora te toca Adivinar el número que estoy pensando que está entre el 1 y el 1000`);
                return 1000;
            case (10 > numeroUsuario):
                alert(`Oye como que ${numeroUsuario}!!! \nEso no se hace... mira para mantener mi salud emocional vamos a decir que escogiste al 10`)
                alert(`Ahora te toca Adivinar el número que estoy pensando que está entre el 1 y el 10`);
                return 10;
            };
        //return asignarNumeroMaximo();
    } else {
        return;
    };
};

condicionesPermanentes();

function asignarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    let maximasJugadas = Math.floor(Math.log10(numeroMaximo)*3);
    //console.log(numerosJugados.length == maximasJugadas);
    if (numerosJugados.length == maximasJugadas) {
        console.log("funciona");
        alert(`¡No dejes que el vicio te controle! \nYa hiciste ${maximasJugadas} rondas`);
        return asignarElementoTexto('p', "Se completo el maximo de jugadas.");
    } else {
        if (numerosJugados.includes(numeroGenerado)) {
            return asignarNumeroSecreto();
        } else {
            numerosJugados.push(numeroGenerado);
            return numeroGenerado;
        };
    };
}

condicionesIniciales();

function limpiaCaja() {
    document.querySelector('#valorUsuario').value = '';
};

function condicionesPermanentes() {
    numeroMaximo = asignarNumeroMaximo();
    /*numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
    asignarElementoTexto(`h1`, 'juego del Número Secreto');
    asignarElementoTexto(`p`, `Indica un número (1-${numeroMaximo}):`);
    console.log(numerosJugados);
    console.log(numeroSecreto);*/
};

function condicionesIniciales() {
    //numeroMaximo = asignarNumeroMaximo();
    numeroSecreto = asignarNumeroSecreto();
    intentos = 1;
    asignarElementoTexto(`h1`, ' \n Adivina \nel número ♡');
    asignarElementoTexto(`p`, `Escoge un número \nentre 1 al ${numeroMaximo}:`);
    //console.log(numerosJugados);
    //console.log(numeroSecreto);
};

function reiniciarJuego() {
    //Limpiar la caja
    limpiaCaja();
    //Generar número aleatorio
    //Mensajes iniciales
    //Reiniciar conteo
    condicionesIniciales();
    //Deshabilitar NuevoJuego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
};

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroSecreto === numeroUsuario) {
        asignarElementoTexto('p', `¡Acertaste el número! en ${intentos} ${(intentos == 1) ? 'intento' : `intentos \npensé que lo lograrias en menos :/`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        //El susario no acerto
        if (numeroSecreto > numeroUsuario) {
            asignarElementoTexto('p', `El número que estoy pensando es mayor`)
        } else {
            asignarElementoTexto('p', `El número que estoy pensando es menor`)
        }
        intentos++
        limpiaCaja();
    };
    return;
};
