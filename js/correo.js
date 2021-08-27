document.querySelector(".formulario").addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();

    let nombre = document.querySelector(".nombre").value;
    let email = document.querySelector(".email").value;
    let asunto = document.querySelector(".asunto").value;

    // saveContactInfo(nombre,email,asunto);

    document.querySelector(".formulario").reset();

    sendEmail(nombre,email,asunto);
}

// enviar correo
function sendEmail(nombre,email,asunto) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "bernardinoabdalan@gmail.com",
        Password: "igefwjjimdqrdfqt",
        To: "bernardinoabdalan@gmail.com",
        From: "bernardinoabdalan@gmail.com",
        Subject: `${nombre} te envio un mensaje de trabajo`,
        Body: `Nombre: ${nombre} <br> Email: ${email} <br> Mensaje: ${asunto}`,
    }).then((asunto) => alert("Correo enviado"));
}