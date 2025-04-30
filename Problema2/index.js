const entrada = document.querySelectorAll(".entrada")

const boton = document.querySelector(".boton")

const resultado = document.querySelector(".cantidad")


boton.addEventListener("click", function () {

    var input1 = document.querySelector("#input1").value
    var input2 = document.querySelector("#input2").value
    var input3 = document.querySelector("#input3").value

    const Total = Number(input1) + Number(input2) + Number(input3)

    if (Total > 10) {
        resultado.innerHTML = "Llevas demasiados stickers"
    }
    else if (Total <= 10) {
        resultado.innerHTML = `Llevas ${Total} stickers`
    }
    else {
        resultado.innerHTML = " "
    }

})