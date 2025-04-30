function verificarPassword() {

    const val1 = document.querySelector('#select1').value;
    const val2 = document.querySelector('#select2').value;
    const val3 = document.querySelector('#select3').value;

    const password = val1 + val2 + val3;
    const resultado = document.querySelector('#resultado');


    if (password === '911') {

        resultado.innerHTML = "password 1 correcto";
    }
    else if (password === '714') {

        resultado.innerHTML = "password 2 es correcto";
    }
    else {
        resultado.innerHTML = "password incorrecto";
    }
}