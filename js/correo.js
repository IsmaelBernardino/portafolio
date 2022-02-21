const formulario = document.querySelector('.formulario');
const in_name = document.getElementById('input_name')
const in_email = document.getElementById('input_email')
const text = document.getElementById('textarea')
const btn = document.querySelector('.btn-contacto')
const inputs = document.querySelectorAll('.form__input')

if (in_name.value == '' && in_email.value == '' && text.value == '') {
    btn.disabled = true
    btn.classList.add('btndeshabilitado')
}

inputs.forEach((input) => {
    input.addEventListener('keyup', camposValidados)
})

function camposValidados() {
    in_name.addEventListener('blur', ()=>{
        if (in_name.value == ""){
            if (in_name.classList.contains('good')) {
                in_name.classList.remove('good')
                in_name.classList.add('bad')
                errores.push('El nombre esta vacio!')
            }else{
                in_name.classList.add('bad')
                errores.push('El nombre esta vacio!')
            }
        }else{
            if (in_name.classList.contains('bad')) {
                in_name.classList.remove('bad');
                in_name.classList.add('good')
            }else{
                in_name.classList.add('good')
            }
        }
    })

    in_email.addEventListener('blur', ()=>{
        if (in_email.value == ""){
            if (in_email.classList.contains('good')) {
                in_email.classList.remove('good')
                in_email.classList.add('bad')
            }else{
                in_email.classList.add('bad')
            }
        }else{
            if (in_email.classList.contains('bad')) {
                in_email.classList.remove('bad');
                in_email.classList.add('good')
            }else{
                in_email.classList.add('good')
            }
        }
    })

    text.addEventListener('blur', ()=>{
        if (text.value == ""){
            if (text.classList.contains('good')) {
                text.classList.remove('good')
                text.classList.add('bad')
            }else{
                text.classList.add('bad')
            }
        }else{
            if (text.classList.contains('bad')) {
                text.classList.remove('bad');
                text.classList.add('good')
            }else{
                text.classList.add('good')
            }
        }
    })

    if (in_name.value != '' && in_email.value != '' && text.value != '') {
        btn.disabled = false
        btn.classList.remove('btndeshabilitado')
        btn.classList.add('btnhabilitado')
    }else{
        btn.classList.remove('btnhabilitado')
        btn.classList.add('btndeshabilitado')
    }
}

formulario.addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();

    let nombre = document.querySelector(".nombre").value;
    let email = document.querySelector(".email").value;
    let asunto = document.querySelector(".asunto").value;

    formulario.reset();

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
    }).then(function (asunto) {
        const model = document.querySelector('.model');
        const model_close = document.querySelector('.model__caja-close');
        model.style.display = "flex";
        model_close.addEventListener("click",cerrarModel);
        function cerrarModel(){
            model.style.display = "none"
        }
    }/*=> alert("Correo enviado")*/);
}