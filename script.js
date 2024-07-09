const message = "Hola Tizii !"; // Mensaje a mostrar
let index = 0;
let isDeleting = false;
let delay = 150; // Velocidad de escritura o borrado

function typeText() {
    const currentMessage = message;
    if (!isDeleting && index < currentMessage.length) {
        document.getElementById('typed-text').innerHTML += currentMessage.charAt(index);
        index++;
        setTimeout(typeText, delay);
    } else if (isDeleting && index > 0) {
        document.getElementById('typed-text').innerHTML = currentMessage.substring(0, index - 1);
        index--;
        setTimeout(typeText, delay / 2);
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeText, 1000); // Espera antes de reiniciar
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(typeText, 1000); // Iniciar después de 1 segundo
});

