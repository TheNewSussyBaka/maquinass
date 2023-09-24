document.addEventListener("DOMContentLoaded", function() {
    const geracaoTitulo = document.getElementById("geracao-titulo");
    const geracaoPeriodo = document.getElementById("geracao-periodo");
    const geracaoImagem = document.getElementById("geracao-imagem");

    document.querySelectorAll(".dot").forEach(function(dot) {
        dot.addEventListener("click", function() {
            geracaoTitulo.textContent = dot.getAttribute("data-titulo");
            geracaoPeriodo.textContent = dot.getAttribute("data-periodo");
            geracaoImagem.src = dot.getAttribute("data-image");
        });
    });
});

    function voltarParaOS() {
        window.location.href = "os.html";
    }
