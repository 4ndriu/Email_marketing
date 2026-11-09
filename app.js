
// Inicializar EmailJS
emailjs.init({
    publicKey: "imgrqXcpU3XyWFyIs"
});

// Obtener el formulario
const formulario = document.getElementById("formulario");

// Detectar cuando el usuario se suscribe
formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent = "Enviando correo...";

    // Enviar los datos a EmailJS
    emailjs.sendForm(
        "service_qtfb30q",
        "template_vqzslv8",
        formulario
    )
    .then(function() {

        mensaje.textContent = "¡Suscripción realizada correctamente! Revisa tu correo.";

        formulario.reset();

    })
    .catch(function(error) {

        mensaje.textContent = "No se pudo enviar el correo. Intenta nuevamente.";

        console.error("Error:", error);

    });

});
