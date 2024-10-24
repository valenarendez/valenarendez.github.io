document.getElementById("contact").addEventListener("submit", function (enviar) {
    enviar.preventDefault();
    let errores = false;

    const nombre = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("message").value.trim();

    document.getElementById("nombreError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("numeroError").textContent = "";
    document.getElementById("asuntoError").textContent = "";
    document.getElementById("mensajeError").textContent = "";

    if (nombre === "") {
        document.getElementById("nombreError").textContent = "El nombre completo es obligatorio.";
        errores = true;
    } else if (nombre.length > 50) {
        document.getElementById("nombreError").textContent = "El nombre no puede exceder 50 caracteres.";
        errores = true;
    }

    if (email !== "") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("emailError").textContent = "El formato de correo es inválido.";
            errores = true;
        }
    } else {
        document.getElementById("emailError").textContent = "El correo electrónico es obligatorio.";
        errores = true;
    }

    const numeroRegex = /^[0-9]{10}$/;
    if (numero === "") {
        document.getElementById("numeroError").textContent = "El número de teléfono es obligatorio.";
        errores = true;
    } else if (!numeroRegex.test(numero)) {
        document.getElementById("numeroError").textContent = "El número de teléfono debe tener 10 dígitos.";
        errores = true;
    }

    if (asunto === "") {
        document.getElementById("asuntoError").textContent = "El asunto es obligatorio.";
        errores = true;
    }

    if (mensaje === "") {
        document.getElementById("mensajeError").textContent = "El mensaje es obligatorio.";
        errores = true;
    } else if (mensaje.length > 200) {
        document.getElementById("mensajeError").textContent = "El mensaje no puede exceder 200 caracteres.";
        errores = true;
    }

    if (!errores) {
        const mensajeDiv = document.createElement("div");
        mensajeDiv.innerHTML = `
            <h2>Datos Ingresados:</h2>
            <strong>Nombre Completo:</strong> ${nombre}<br>
            <strong>Correo Electrónico:</strong> ${email}<br>
            <strong>Teléfono:</strong> ${numero}<br>
            <strong>Asunto:</strong> ${asunto}<br>
            <strong>Mensaje:</strong> ${mensaje}
        `;
        mensajeDiv.style.border = "2px solid green";
        mensajeDiv.style.padding = "10px";
        mensajeDiv.style.marginTop = "20px";
        form.appendChild(mensajeDiv);

        setTimeout(() => {
            mensajeDiv.remove();
        }, 15000);

        document.getElementById("contact").reset();
    }
});
