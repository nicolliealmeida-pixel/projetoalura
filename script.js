 <script>
        const botoes = document.querySelectorAll(".botao");

        botoes.forEach(function (botao) {

            let curtiu = false;

            botao.addEventListener("click", botaoclicado);

            function botaoclicado() {

                let texto = botao.querySelector("span");

                if (curtiu === false) {
                    texto.textContent++;
                    curtiu = true;
                } else {
                    texto.textContent--;
                    curtiu = false;
                }
            }
        });
    </script>