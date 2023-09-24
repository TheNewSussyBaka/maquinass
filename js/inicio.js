document.addEventListener("DOMContentLoaded", function () {
    const gutoProfile = document.getElementById("guto");
    const abelProfile = document.getElementById("abel");
    const henriqueProfile = document.getElementById("henrique");
    const pedroProfile = document.getElementById("pedro");
    const giovanniProfile = document.getElementById("giovanni");

    gutoProfile.addEventListener("click", function () {
        window.location.href = "os.html";
    });

    abelProfile.addEventListener("click", function () {
        showMessage("Acesso Negado", "red");
    });

    henriqueProfile.addEventListener("click", function () {
        showMessage("Acesso Negado", "red");
    });

    pedroProfile.addEventListener("click", function () {
        showMessage("Acesso Negado", "red");
    });

    giovanniProfile.addEventListener("click", function () {
        const giovanniImage = giovanniProfile.querySelector("img");
        giovanniImage.src = "img/urro.gif"; 

        showMessage("Hey now, you're an all star", "green");
    });

    function showMessage(message, color) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.style.position = "fixed";
        messageDiv.style.top = "0";
        messageDiv.style.left = "0";
        messageDiv.style.width = "100%";
        messageDiv.style.backgroundColor = color;
        messageDiv.style.color = "white";
        messageDiv.style.textAlign = "center";
        messageDiv.style.padding = "10px";
        messageDiv.style.zIndex = "9999";
        document.body.appendChild(messageDiv);

        setTimeout(function () {
            document.body.removeChild(messageDiv);
        }, 3000);
    }
});

function updateClock() {
    const clockElement = document.getElementById("clock");
    const currentTime = new Date();
    
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
    
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();