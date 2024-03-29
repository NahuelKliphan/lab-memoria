var contClick = 0;
var contAcierto = 0;
var carta1 = null;
var carta2 = null;
var cartaA=null;
var imagen1 = null;
var imagen2 = null;
var listo = true;
var cartaOcupada = null;
let cartasNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19];
var imagenes = ['chrome.svg', 'facebook.svg', 'firefox.svg', 'google-icon.svg', 'html-5.svg', 'instagram-icon.svg', 'internetexplorer.svg', 'javascript.svg', 'opera.svg', 'chrome.svg', 'facebook.svg', 'firefox.svg', 'google-icon.svg', 'html-5.svg', 'instagram-icon.svg', 'internetexplorer.svg', 'javascript.svg', 'opera.svg'];

function Click(id) {

    if (cartaOcupada == null && listo) {

        imagen1 = document.getElementById(id + 20);
        imagen1.className = "mostrar";
        carta1 = document.getElementById(id);
        carta1.className="carta-delante";
        cartaOcupada = carta1;
    }
    else {

        carta2 = document.getElementById(id);

        if (carta2 !== cartaOcupada && listo) {

            imagen2 = document.getElementById(id + 20);
            imagen2.className = "mostrar";
            cartaA = carta2;
            cartaA.className="carta-delante";
            listo = false;
            cartaOcupada = null;
            let valor = carta1.id - carta2.id;
            valor = Math.abs(valor);
            if (valor == 10) {
                contAcierto++;
                if (contAcierto > 8) {
                    alert("Ganaste despues de " + contClick + " intentos");
                    Reiniciar();
                }
                listo = true;
            }
            else {
                setTimeout(function () { Ocultar(imagen1, imagen2,carta1,cartaA); }, 800);
                contClick++;
            }
            document.getElementById('intentos').innerHTML = contClick;
        }
    }

}

function mezclar() {

    let tamaño = cartasNumeros.length - 1;

    for (let x = 0; x < 18; x++) {

        let i = Math.floor(Math.random() * tamaño);

        let carta = `<div class="carta-atras" id="${cartasNumeros[i]}" onclick="Click(${cartasNumeros[i]})"><img id="${cartasNumeros[i] + 20}" class="ocultar" src="img/${imagenes[i]}"></div>`;

        document.getElementById('tabla').innerHTML += carta;

        cartasNumeros[i] = cartasNumeros[tamaño];
        imagenes[i] = imagenes[tamaño];

        if (tamaño > 0) {
            tamaño--;
        }
    }
}

function Ocultar(img1, img2,carta1,carta2) {
    img1.className = "ocultar";
    img2.className = "ocultar";
    carta1.className="carta-atras";
    carta2.className="carta-atras";
    listo = true;
}

function Reiniciar() {

    document.location.reload();
    contClick = 0;
    contAcierto = 0;
    carta1 = null;
    carta2 = null;
    imagen1 = null;
    imagen2 = null;
    listo = true;
    cartaOcupada = null;
    mezclar();
}

mezclar();
