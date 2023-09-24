document.getElementById("etapa1").addEventListener("click", function () {
    abrirExplorer("Etapa 1", "etapa1.html");
});

document.getElementById("etapa2").addEventListener("click", function () {
    abrirExplorer("Etapa 2", "etapa2.html");
});


function abrirExplorer(titulo, pagina) {
    const explorer = document.getElementById("explorer");
    explorer.style.display = "block";

    const explorerContent = document.querySelector(".explorer-content");
    explorerContent.innerHTML = `
        <div class="notepad" onclick="abrirPagina('${pagina}')">
            <img src="img/notepad.png" alt="Notepad">
            <span>${titulo}</span>
        </div>
    `;

    const notepad = explorerContent.querySelector(".notepad");
    notepad.addEventListener("mouseover", function () {
        notepad.classList.add("grow");
    });
    notepad.addEventListener("mouseout", function () {
        notepad.classList.remove("grow");
    });
}

function abrirPagina(pagina) {
    window.open(pagina, "_blank");
}

function fecharExplorer() {
    const explorer = document.getElementById("explorer");
    explorer.style.display = "none";
}
function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();
