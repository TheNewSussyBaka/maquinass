document.addEventListener("DOMContentLoaded", function() {
    const onImage = document.getElementById("on");
    const r1Image = document.getElementById("r1");
    const biosImage = document.getElementById("bios");
    const r2Image = document.getElementById("r2");
    const bootImage = document.getElementById("boot");
    const r3Image = document.getElementById("r3");
    const windowsImage = document.getElementById("windows");

    function mostrarBios() {
        onImage.classList.remove("animate");
        r1Image.classList.remove("hidden")
        biosImage.classList.remove("hidden");
    }

    function mostrarBoot() {
        r2Image.classList.remove("hidden")
        bootImage.classList.remove("hidden");
    }

    function mostrarWindows() {
        windowsImage.classList.remove("hidden");
        r3Image.classList.remove("hidden")
        onImage.removeEventListener("click", mostrarBios);
        biosImage.removeEventListener("click", mostrarBoot);
        bootImage.removeEventListener("click", mostrarWindows);
    }


    onImage.addEventListener("click", mostrarBios);
    biosImage.addEventListener("click", mostrarBoot);
    bootImage.addEventListener("click", mostrarWindows);
});

function voltarParaOS() {
    window.location.href = "os.html";
}