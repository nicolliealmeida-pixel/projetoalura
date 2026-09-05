const botoes = document.querySelectorAll(".botao");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        console.log("fui clicado");

        let texto = botao.querySelector("span");

        if (curtiu === false) {

            texto.textContent++;

            curtiu = true;

        } else {

            texto.textContent--;

            curtiu = false;

        }

    });

});
// BOTÕES DE CURTIDA

const botoes = document.querySelectorAll(".botao");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", function () {

        console.log("fui clicado");

        let texto = botao.querySelector("span");

        if (curtiu === false) {

            texto.textContent++;

            curtiu = true;

        } else {

            texto.textContent--;

            curtiu = false;

        }

    });

});


// BOTÃO DE ALTERAR O TEMA

const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

btnTemaEscuro.addEventListener("click", mudaTema);


function mudaTema() {

    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {

        corpoPagina.classList.remove("tema-escuro");

    } else {

        corpoPagina.classList.add("tema-escuro");

    }

}