document.getElementById("contact").addEventListener("submit", function(enviar) {
    enviar.preventDefault();
    let errores = false;

    function limpiarErrores() {
        document.querySelectorAll(".error").forEach(error => error.textContent = "");
        document.querySelectorAll("input, textarea").forEach(campo => campo.classList.remove("error-border"));
    }

    function mostrarError(campoId, mensaje) {
        const campo = document.getElementById(campoId);
        const errorSpan = document.getElementById(campoId + "Error");
        if (errorSpan) {
            errorSpan.textContent = mensaje;
            campo.classList.add("error-border");
        }
    }


    function mostrarMensajeExito() {
        const mensajeExistente = document.querySelector(".mensajeExito");
        if (mensajeExistente) {
            mensajeExistente.remove();
        }

        const mensajeDiv = document.createElement("div");
        mensajeDiv.textContent = "¡Formulario enviado con éxito!";
        mensajeDiv.classList.add("mensajeExito");
        document.getElementById("contact").appendChild(mensajeDiv);

        setTimeout(() => {
            mensajeDiv.remove();
        }, 5000);
    }


    limpiarErrores();

    const campos = {
        name: {
            valor: document.getElementById("name").value.trim(),
            regex: /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]{3,15}$/,
            mensaje: "El nombre debe tener entre 3 y 15 letras sin números.",
            nombre: "nombre" // Agregamos esta propiedad para el mensaje personalizado
        },
        email: {
            valor: document.getElementById("email").value.trim(),
            regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            mensaje: "El formato de correo es inválido.",
            nombre: "correo electrónico"
        },
        numero: {
            valor: document.getElementById("numero").value.trim(),
            regex: /^[0-9]{10}$/,
            mensaje: "El número de teléfono debe tener 10 dígitos.",
            nombre: "número de teléfono"
        },
        asunto: {
            valor: document.getElementById("asunto").value.trim(),
            regex: /[A-Za-z]/,
            mensaje: "El asunto debe contener al menos una letra.",
            nombre: "asunto"
        },
        message: {
            valor: document.getElementById("message").value.trim(),
            maxLength: 200,
            mensaje: "El mensaje no puede exceder 200 caracteres.",
            nombre: "mensaje"
        }
    };
    

    for (const [id, campo] of Object.entries(campos)) {
        if (campo.valor === "") {
            mostrarError(id, `El ${campo.nombre} es obligatorio.`);
            errores = true;
        } else if (campo.regex && !campo.regex.test(campo.valor)) {
            mostrarError(id, campo.mensaje);
            errores = true;
        } else if (id === 'message' && campo.valor.length > campo.maxLength) {
            mostrarError(id, campo.mensaje);
            errores = true;
        }
    }


    if (!errores) {
        mostrarMensajeExito();
        document.getElementById("contact").reset();
    }
});