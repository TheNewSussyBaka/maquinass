document.addEventListener("DOMContentLoaded", function () {
    const bios = document.getElementById("bios");
    const os = document.getElementById("os");
    const login = document.getElementById("login");

    setTimeout(function () {
        bios.style.display = "none";
        os.style.display = "block";
        os.innerHTML = "Carregando sistema operacional...";
        setTimeout(function () {
            os.style.display = "none";
            login.style.display = "block";
            login.innerHTML = "Tela de login";
            setTimeout(function () {
                window.location.href = "inicio.html";
            }, 2000);
        }, 2000); 
    }, 2000); 
});