const form = document.getElementById("contact");
const err = document.querySelector(".err");

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const numero = document.getElementById('numero').value.trim();
        const asunto = document.getElementById('asunto').value.trim();
        const message = document.getElementById('message').value.trim();
    
        form.addEventListener("submit",(e)=>{
            e.preventDefault();
            const correo = document.getElementById("email").value;
            const correo_comprobar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
            const errMsg = document.querySelector(".error")
                if(errMsg){
                    errMsg.remove();
                }
        
        
                if(!correo_comprobar.test(correo)) {
                    const textE = document.createElement("p");
                    textE.classList.add("error");
                    textE.textContent = "Correo ingresado incorrectamente."
                    form.appendChild(textE);
                }
        
                mostrarDatosIngresados();
        
                const mst = document.querySelector(".mensajeTemporal");
        
                setTimeout(()=>{
                    mst.style.display = "none"
                },4000)
        
        })
        
        const mostrarDatosIngresados = ()=>{
            const mostarDatos = document.createElement("p");
            mostarDatos.classList.add("mensajeTemporal");
            mostarDatos.innerHTML = `Correo : ${email.value} <br>
            Nombre : ${nombre.value} <br>
            Telefono : ${telefono.value} <br>
            Mensaje : ${mensaje.value}`;
            form.appendChild(mostarDatos);
        };
        