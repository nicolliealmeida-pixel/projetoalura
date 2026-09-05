const botoes = document.querySelectorAll(".botao");

botoes.forEach(function (botao) {
    let curtiu = false;

    botao.addEventListener("click", function () {

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